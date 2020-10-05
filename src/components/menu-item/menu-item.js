import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';


const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
    <div onClick={() => history.push(`${match.url}${linkUrl}`)} className={`${size} menu-item`}>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className='background-image' />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)


export default withRouter(MenuItem);