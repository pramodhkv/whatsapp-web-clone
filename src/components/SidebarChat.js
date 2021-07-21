import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import db from "../shared/firebase";

export default function SidebarChat({ room }) {
  const [seed, setSeed] = useState("");
  const [lastMessage, setLastMessage] = useState("");
  const [lastSeenAt, setLastSeenAt] = useState("");

  //Random avatars..
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));

    if (room.id) {
      db.collection("rooms")
        .doc(room.id)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot => {
          const messages = snapshot.docs.map(doc => doc.data());

          setLastMessage(messages[messages.length - 1]?.message);
        });
    }
  }, [room.id]);

  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="sidebar__chats__chat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__chats__chat__info">
          <h2>{room.data.name}</h2>
          <p>{lastMessage}</p>
        </div>
        <div>{}</div>
      </div>
    </Link>
  );
}
