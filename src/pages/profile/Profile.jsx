import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

import './profile.css';

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=rodffer`);

      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className='profileCoverImg' src={user.coverPicture || PF + 'person/noCover.jpeg'} alt="" />
              <img className='profileUserImg' src={user.profilePicture || PF + 'person/noAvatar.png'} alt="" />
            </div>
            <div className="profileInfo">
              <h4 className='profileInfoName'>{user.userName}</h4>
              <span className='profileInfoDesc'>{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="rodffer"/>
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}
