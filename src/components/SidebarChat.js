import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

export default function SidebarChat() {
  const [seed, setSeed] = useState("");

  //Random avatars..
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebar__chats__chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar__chats__chat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
      <div>12:00pm</div>
    </div>
  );
}
