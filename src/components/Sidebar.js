import React, { useState, useEffect, useContext } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import CreateRoomDialog from "./CreateRoomDialog";
import db from "../shared/firebase";
import { UserContext } from "../shared/userContext";
import firebase from "firebase/app";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [user] = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setRooms(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const onCreateNewRoom = (roomName) => {
    roomName &&
      db.collection("rooms").add({
        name: roomName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar src={`${user.photoURL}`} />
        </IconButton>

        <div className="sidebar__header__right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="search__container">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search your chats.." />
        </div>
      </div>
      <div className="sidebar__chats">
        {rooms.map((room) => {
          return <SidebarChat room={room} key={room.id} />;
        })}
      </div>

      <div className="sidebar__addNewChat">
        <CreateRoomDialog onCreateNewRoom={(e) => onCreateNewRoom(e)} />
      </div>
    </div>
  );
}
