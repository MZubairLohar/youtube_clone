import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChennalRow.css';
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';
const ChennalRow = ( {image,
    channel ,
verified ,
subs ,
noOfVideos ,
description}) => {
    return (
        <div className='channel_row'>
            <Avatar className='channel_row_logo' alt={channel} src={image}/>
            <div className='channel_row_text' >
                <h4>{channel} {verified && <CheckCircleOutlineSharpIcon />} </h4>
                <p> {subs} Subscribers · {noOfVideos} Videos
                <br />
                {description} </p>
            </div>
        </div>
    )
}

export default ChennalRow
