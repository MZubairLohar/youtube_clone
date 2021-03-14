import React, { useState } from "react";
// Material Ui
import MenuSharp from "@material-ui/icons/MenuSharp";
import VideoCallSharp from "@material-ui/icons/VideoCallSharp";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import AppsSharp from "@material-ui/icons/AppsSharp";
import NotificationsSharp from "@material-ui/icons/NotificationsSharp";
import Avatar from "@material-ui/core/Avatar";
// components
import "./Header.css";
//routes
import { Link } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState("");

  return (
    <div className="header">
      <div className="header_1">
        <MenuSharp />
        
        <img src="Logo.svg" alt="logo" className="header_logo" />
      </div>

      <div className="input_search">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="  Search"
        />
        <Link to={`/search/${input}`}>
          <SearchSharpIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallSharp className="header_icon" />
        <AppsSharp className="header_icon" />
        <NotificationsSharp className="header_icon" />
        <Avatar
          src="https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.0-9/117175735_3489097934455251_8156080239516990783_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=H8DB7UGZrFUAX8idrtn&_nc_ht=scontent.fkhi1-1.fna&oh=071ef48550b41a4677744a26438a4a74&oe=60734D62"
          alt="Muhammad Zubair"
          className="header_icon"
        />
      </div>
    </div>
  );
};

export default Header;
