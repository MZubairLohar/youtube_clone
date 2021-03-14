import React from 'react'
import { Avatar } from '@material-ui/core'
import './Videos.css'
const Videos = ({ image , title , channel, views, timestamp, chennalImage }) => {
    return (
        <div className='video'>
            <img className='video_thumbnail' src={image} alt='' crossOrigin="true"/>
            <div className='video_info'>
                <Avatar className='video_avatar' alt={channel} src={chennalImage} crossOrigin="true"/>
                <div className='video_text'>
                    <h4>{title}</h4>
                    <p>{views} · {timestamp} </p>
                </div>
            </div>
        </div>
    )
}

export default Videos;