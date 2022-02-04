import React from 'react';
import './rightbar.css'

export default function Rightbar() {
  return(
    <div className='rightbar'>
      <div className="rihtbarWrapper">
        <div className="birthdayContainer">
          <img  className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText' > <b>Maria Luz</b> e <b>outros 2</b> amigos </span>
        </div>
        <img className='rightbarAd' src="/assets/ads.png" alt="" />
        <h4 className='rightbarTitle'>Amigos online</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/3.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Lucas Rodrigues</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/2.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Geraldo Rivier</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/1.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Annie Timb</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src="/assets/person/4.jpeg" alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Maria Luz</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
