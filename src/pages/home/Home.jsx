import React from 'react';
import Rightbar from '../../components/rightbar/Rightbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import Feed from '../../components/feed/Feed';

import Profile from '../profile/Profile';

import './home.css';

export default function Home() {
  return (
    <>
    <Profile />
      {/* <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div> */}
    </>
  );
}