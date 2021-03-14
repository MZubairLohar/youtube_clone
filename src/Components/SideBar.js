import HomeSharp from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp'; 
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import React from "react";
import "./SideBar.css";
import SideBarRow from './SideBarRow';

function SideBar () {
  return (
    <div className="sideBar">
      <SideBarRow selected Icon={HomeSharp } title="Home" />
      <SideBarRow Icon={WhatshotSharpIcon } title="Trending" />
      <SideBarRow Icon={SubscriptionsSharpIcon } title="Subscription" />
      <hr />
      <SideBarRow Icon={VideoLibrarySharpIcon } title="Video Library" />
      <SideBarRow Icon={HistorySharpIcon } title="Historyoury" />
      <SideBarRow Icon={OndemandVideoSharpIcon } title=" Video" />
      <SideBarRow Icon={WatchLaterSharpIcon } title="Watch Later" />
      <SideBarRow Icon={ThumbUpSharpIcon } title="Linked Videos" />
      <SideBarRow Icon={ExpandMoreSharpIcon } title="show more" />
      <hr />
    </div>
  );
};

export default SideBar;
