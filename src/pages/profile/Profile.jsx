import React from 'react';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

import './profile.css';

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src={`${PF}/post/0.jpg`} alt="" />
              <img className='profileUserImg' src={`${PF}/person/0.jpeg`} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>Rayron Rodffer</h4>
              <span className='profileInfoDesc'>Desenvolvedor backend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
