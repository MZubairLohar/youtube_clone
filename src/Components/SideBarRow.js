import React from 'react';
import './SideBarRow.css';

function SideBarRow  ({ selected,Icon ,title }) {
    return (
        <div className={`SideBarRow ${selected && 'selected' }`}>
            <Icon className= 'SideBarRow_icon' />
            <h2 className='SideBarRow_title'>{title}</h2>
        </div>
    )
}

export default SideBarRow
