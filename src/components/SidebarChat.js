import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function SidebarChat({ room }) {
  const [seed, setSeed] = useState("");

  //Random avatars..
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="sidebar__chats__chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__chats__chat__info">
          <h2>{room.data.name}</h2>
          <p>Last message...</p>
        </div>
        <div>12:00pm</div>
      </div>
    </Link>
  );
}
