import React from 'react';
import './share.css';

import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons';

export default function Share() {
  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <img className='shareProfileImg' src="/assets/person/6.jpeg" alt="" />
          <input className='shareInput' placeholder='O que está pensando, hoje ?'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Foto ou vídeo</span>
            </div>
            <div className="shareOption">
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Enquete</span>
            </div>
            <div className="shareOption">
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Localização</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Sentimento</span>
            </div>
          </div>
          <button className='shareButton'>Compartilhar</button>
        </div>
      </div>
    </div>
  );
}
