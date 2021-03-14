import React from "react";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import "./SearchPage.css";
import ChennalRow from "./ChennalRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="search_page">
      <div className="search_page_filter">
        <TuneSharpIcon />
        <h1>Filter</h1>
      </div>
      <hr />
      <ChennalRow
        image="https://www.newsbox.pk/wp-content/uploads/2020/12/osman-231.png"
        channel="Otoman Empires"
        verified
        subs="2000k"
        noOfVideos={320}
        description="Rise of Otomans based on true story, with strong but genius leader "
      />
      <hr />
      <VideoRow 
      image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9nwLEV2YPYIUxngvO0kuCCch-wPsrDM7ow&usqp=CAU'
      title='Kurlus Osman Ringtone | 2012/2018'
      channel='Zubair'
      subs='200k'
      views='2.2M Views'
      timestamp='2 Days'
      description = 'All video are copyright some one else own this content'
      />
    </div>
  );
};

export default SearchPage;
