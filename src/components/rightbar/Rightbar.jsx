import React from 'react';
import './rightbar.css'
import Online from '../online/Online';

import { Users } from '../../mockData';

export default function Rightbar({ user }) {
  // const onlineFriends = Users.filter((user) => user.online === true);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/gift.png" alt="" />
          <span className='birthdayText' > <b>Maria Luz</b> e <b>outros 2</b> amigos </span>
        </div>
        <img className='rightbarAd' src="/assets/ads.png" alt="" />
        <h4 className='rightbarTitle'>Amigos online</h4>
        <ul className="rightbarFriendList">
          {/* {onlineFriends.map((user) => (
            <Online key={user.id} user={user} />
          ))} */}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>Informações</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <div className="span rightbarInfoKey">Cidade: </div>
            <div className="span rightbarInfoValue">{ user.city }</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="span rightbarInfoKey">País: </div>
            <div className="span rightbarInfoValue">{ user.from }</div>
          </div>
          <div className="rightbarInfoItem">
            <div className="span rightbarInfoKey">Relacionamento: </div>
            <div className="span rightbarInfoValue">
              { user.relationship === 1 
                  ? "Solteiro"
                  : user.relationship === 2
                  ? "Casado"
                  : "-"}</div>
          </div>
        </div>
        <h4 className='rightbarTitle'>Seguindo</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className='rightbarFollowingImg' src={`${PF}/person/1.jpeg`} alt="" />
            <div className="span rightbarFollowingName">Joyner</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rihtbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
