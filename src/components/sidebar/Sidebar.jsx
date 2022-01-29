import React from 'react';
import { RssFeed, School, Event, WorkOutline, HelpOutline, PlayCircleFilledOutlined, Group, Bookmark, Chat } from '@material-ui/icons';

import './sidebar.css';

export default function Sidebar() {
  return(
    <div className='sidebar'>
      <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeed className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
                <Chat className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleFilledOutlined className='sidebarIcon'/>
                <span className="sidebarListItemText">Vídeos</span>
            </li>
            <li className="sidebarListItem">
                <Group className='sidebarIcon'/>
                <span className="sidebarListItemText">Grupos</span>
            </li>
            <li className="sidebarListItem">
                <Bookmark className='sidebarIcon'/>
                <span className="sidebarListItemText">Favoritos</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutline className='sidebarIcon'/>
                <span className="sidebarListItemText">Perguntas</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutline className='sidebarIcon'/>
                <span className="sidebarListItemText">Vagas</span>
            </li>
            <li className="sidebarListItem">
                <Event className='sidebarIcon'/>
                <span className="sidebarListItemText">Eventos</span>
            </li>
            <li className="sidebarListItem">
                <School className='sidebarIcon'/>
                <span className="sidebarListItemText">Cursos</span>
            </li>
          </ul>

          <button className="sidebarButton">Mostrar mais</button>
          <hr className='sidebarHr'/>

          <ul className="sidebarFiendList">
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/4.jpeg" alt="" />
              <span className="sidebarFriendName">Maria Luz</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/8.jpeg" alt="" />
              <span className="sidebarFriendName">Yenn Veng</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/7.jpeg" alt="" />
              <span className="sidebarFriendName">João Silva</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/1.jpeg" alt="" />
              <span className="sidebarFriendName">Annie Timb</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/2.jpeg" alt="" />
              <span className="sidebarFriendName">Geraldo Rivier</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/3.jpeg" alt="" />
              <span className="sidebarFriendName">Lucas Rodrigues</span>
            </li>
            <li className="sidebarFriend">
              <img className='sidebarFriendImg' src="/assets/person/5.jpeg" alt="" />
              <span className="sidebarFriendName">Emy Emanu</span>
            </li>
          </ul>
      </div>
    </div>
  );
}
