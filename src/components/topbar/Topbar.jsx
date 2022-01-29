import React from 'react';
import './topbar.css';
import { Search, Person, Chat, Notifications } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='topbarLogo'>Rede Social</span>
      </div>
      <div className="topbarCenter">
        <div className='searchBar'>
          <Search className='searchIcon'/>
          <input
            placeholder='Pesquise por amigos, posts ou vídeos'
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Página Inicial</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/6.jpeg" alt="" className="topbarImage" />
      </div>
    </div>
    )
}