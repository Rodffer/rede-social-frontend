import React from 'react';
import './rightbar.css'
import Online from '../online/Online';

import { Users } from '../../mockData';

export default function Rightbar() {
  const onlineFriends = Users.filter((user) => user.online === true);

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
        {onlineFriends.map((user) => (
            <Online  key={user.id} user={user}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
