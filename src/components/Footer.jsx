import React from 'react';
import icon_facebook from '../assets/facebook.png'
import icon_github from '../assets/github.png'
import icon_instagram from '../assets/instagram.png'
import icon_linkedin from '../assets/linkedin.png'
import icon_twitter from '../assets/twitter.png'

export default function Footer(){
    return (
        <div className='Footer'>
            <div className='list-icons'>
                <img src={icon_twitter}/>
                <img src={icon_facebook}/>
                <img src={icon_instagram}/>
                <img src={icon_linkedin}/>
                <img src={icon_github}/>
            </div>
        </div>
    );
};
