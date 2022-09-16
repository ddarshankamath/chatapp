import React, { useState, useEffect } from "react";
import SidebarChat from "./SidebarChat";
//import Avatar from "@material-ui/core";
//import Avatar from "@mui/icons-material/AccountCircle";
//import IconButton from "@material-ui/core/IconButton";

import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

//import AccountCircleIcon from "@mui/icons-material/AccountCircle";
//import { Avatar } from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//import SearchIcon from "@mui/icons-material/Search";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import db from "./firebase";

import "./Sidebar.css";
function Sidebar(props) {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    db.collection("room").onSnapshot((snapshot) => {
      setRoom(
        snapshot.docs.map((doc) => {
          console.log(" - - ---", doc);
          console.log("adsfasdfasdfasf ---------");
          return {
            id: doc.id,
            data: doc.Nd.Xe.proto.mapValue.fields.name.stringValue,
          };
        })
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <IconButton>
          <Avatar></Avatar>
        </IconButton>
        <div className="header-right">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>

      <div className="sidebar-chat">
        <div className="search-container">
          <IconButton>
            <SearchOutlinedIcon></SearchOutlinedIcon>
          </IconButton>
          <TextField id="outlined-basic" label="" variant="outlined" />
          {/* <SearchIcon></SearchIcon> */}
        </div>
      </div>

      <div className="sidebar-chat">
        <SidebarChat addNewChat />

        {room.map((r) => {
          console.log(r);
          return <SidebarChat key={r.id} id={r.id} name={r.data} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
