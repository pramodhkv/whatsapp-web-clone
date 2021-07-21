import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import CreateRoomDialog from "./CreateRoomDialog";

export default function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {}, []);
  const onCreateNewRoom = roomName => {
    console.log("final roomName", roomName);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar />
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
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>

      <div className="sidebar__addNewChat">
        <CreateRoomDialog onCreateNewRoom={e => onCreateNewRoom(e)} />
      </div>
    </div>
  );
}
