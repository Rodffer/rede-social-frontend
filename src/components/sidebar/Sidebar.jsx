import React from 'react';
import { RssFeed, School, Event, WorkOutline, HelpOutline, PlayCircleFilledOutlined, Group, Bookmark, Chat } from '@material-ui/icons';

import './sidebar.css';

import CloseFriend from '../closeFriend/CloseFriend';
import { Users } from '../../mockData';

export default function Sidebar() {

  const friends = Users;

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
            {friends.map((user) => (
              <CloseFriend key={user.id} user={user}/>
          ))}
          </ul>
      </div>
    </div>
  );
}
