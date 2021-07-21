import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicIcon from "@material-ui/icons/Mic";

export default function Chats() {
  return (
    <div className="chats">
      <div className="chats__header">
        <IconButton>
          <Avatar />
        </IconButton>

        <div className="chats__header__info">
          <h2>Room Name</h2>
          <p>Last seen at...</p>
        </div>
        <div className="chats__header__right">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chats__body">
        <p className="chats__body__message">
          <span className="chats__body__username">Pramodh</span>
          Heyy guys
          <span className=""></span>
        </p>
      </div>

      <div className="chats__footer">
        <IconButton>
          <EmojiEmotionsOutlinedIcon />
        </IconButton>

        <IconButton>
          <AttachFileOutlinedIcon />
        </IconButton>

        <div className="search__container">
          <input type="text" placeholder="Type a message.." />
        </div>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
