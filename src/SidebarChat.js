import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import db from "./firebase";
import { Link } from "react-router-dom";
function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Enter room name");
    if (roomName) {
      db.collection("room").add({ name: roomName });
    }
  };
  return !addNewChat ? (
    <Link to={`/room/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
        ></Avatar>

        <div className="sidebarchat-info">
          <h2>{name}</h2>
          <p>last msg.......</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="new-chat" onClick={createChat}>
      <h2>add new chat</h2>
    </div>
  );
}

export default SidebarChat;
