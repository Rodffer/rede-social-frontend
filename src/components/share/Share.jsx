import React from 'react';
import './share.css';

import { PermMedia } from '@material-ui/icons';

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img className='shareProfileImg' src="/assets/person/6.jpeg" alt="" /> */}
          <input className='shareInput' placeholder='O que está pensando, hoje ?'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className='shareIcon' />
              <span className='shareOptionText'>Foto ou vídeo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
