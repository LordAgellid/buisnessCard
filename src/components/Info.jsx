import React from 'react';
import employe from '../assets/employe.png'
import icon_email from '../assets/email.png'

export default function Info(){
    return (
        <div className='Info'>
            <div className="pdp">
            </div>
            <div className="informations">
                <p className='name'>Marco Veratti</p>
                <h3 className='job'>Frontend Developer</h3>
                <a href="#" className='website'>MyWebSite.com</a>
                <a href="#" className='contact'>Email</a>
            </div>
        </div>
    );
};
