import React, {useRef, useEffect, useState, useContext} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicIcon from "@material-ui/icons/Mic";
import {useParams} from "react-router-dom";
import db from "../shared/firebase";
import { UserContext } from "../shared/userContext";
import firebase from "firebase";


export default function Chats() {
  const myMessageRef = useRef();
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [user] = useContext(UserContext);
  const lastSeenDetails = "";

  useEffect(() => {
    roomId && db.collection("rooms").doc(roomId).onSnapshot((snapshot) => {
      setRoomName(snapshot.data().name);
    });

    roomId && 
    db.collection("rooms").doc(roomId).collection("messages")
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
  }, [roomId]);

  const onSendMessage = (e) => {
    e.preventDefault();

    db.collection("rooms").doc(roomId).collection("messages").add({
      message: myMessageRef.current.value,
      name: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });

    myMessageRef.current.value  = "";
  };

  const getLastSeenDetails = () => {
    return !!messages.length ? new Date(
      messages[messages.length - 1]?.timestamp?.toDate()
    ).toUTCString() : "...";
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <IconButton>
          <Avatar />
        </IconButton>

        <div className="chat__header__info">
          <h2>{roomName}</h2>
          <p>Last seen at {getLastSeenDetails()}</p>
        </div>
        <div className="chat__header__right">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map(message => {
          return (
            <p
              className={`chat__body__message ${message.name ===
                user.displayName && "receiver"}`}
              key={message.timestamp}
            >
              <span className="chat__body__username">{message.name}</span>
              {message.message}
              <span className="chat__body__timestamp">
                {new Date(
                  message.timestamp && message.timestamp.toDate()
                ).toUTCString()}
              </span>
            </p>
          );
        })}
      </div>

      <div className="chat__footer">
        <IconButton>
          <EmojiEmotionsOutlinedIcon />
        </IconButton>

        <IconButton>
          <AttachFileOutlinedIcon />
        </IconButton>

        <form onSubmit={onSendMessage}>
          <input
            type="text"
            placeholder="Type a message.."
            ref={myMessageRef}
          />
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
