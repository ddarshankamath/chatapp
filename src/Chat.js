import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import "./Chat.css";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import { useParams } from "react-router-dom";
import db from "./firebase";
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");

  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("room")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [, roomId]);

  const sendMessage = (e) => {
    // TODO:  to ask
    e.preventDefault();
    console.log("you enterd", input);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat-header-info">
          <h3>{roomName}</h3>
          <p>last seen.......</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message ${true && "chat-reciver"}`}>
          <span className="chat-name">darshan d</span> hey.........
          <span className="chat-time">3:33</span>
        </p>
        <p className="chat-message">hey.........</p>
      </div>
      <div className="chat-footer">
        <IconButton>
          <EmojiEmotionsIcon></EmojiEmotionsIcon>
        </IconButton>
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => {
              // TODO:  to ask
              setInput(e.target.value);
            }}
            className="text"
            placeholder="Type a Message"
          />
          <button type="submit" onClick={sendMessage}>
            send
          </button>
        </form>
        <IconButton>
          <MicIcon></MicIcon>
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
