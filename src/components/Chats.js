import React, {useRef, useEffect, useState} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicIcon from "@material-ui/icons/Mic";
import {useParams} from "react-router-dom";
import db from "../shared/firebase";

export default function Chats() {
  const myMessageRef = useRef();
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    roomId && db.collection("rooms").doc(roomId).onSnapshot((snapshot) => {
      setRoomName(snapshot.data().name);
    });

    roomId && db.collection("rooms").doc(roomId).collection("messages").onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
    });
  }, [roomId]);



  const onSendMessage = (e) => {
    e.preventDefault();
    console.log('inside send message', myMessageRef.current.value);
    myMessageRef.current.value  = "";
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <IconButton>
          <Avatar />
        </IconButton>

        <div className="chat__header__info">
          <h2>{roomName}</h2>
          <p>Last seen at...</p>
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
            <p className="chat__body__message" key={message.timestamp}>
              <span className="chat__body__username">{message.name}</span>
              {message.message}
              <span className="chat__body__timestamp">{new Date(message.timestamp?.toDate()).toLocaleTimeString()}</span>
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
