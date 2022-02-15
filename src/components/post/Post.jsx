import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as timeago from 'timeago.js'
import TimeAgo from 'timeago-react'
import pt_BR from 'timeago.js/lib/lang/pt_BR'

import { MoreVert } from '@material-ui/icons';

import './post.css'


export default function Post({post}) {
  timeago.register('pt_BR', pt_BR);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);

      setUser(res.data);
    }

    fetchUser();
  });

  const HandlerAddLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
  <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postLeft">
          <img className='postProfileImg' src={user.profilePicture || PF+"person/noAvatar.png"} alt="" />
          <span className='postUsername'>{user.userName}</span>
          <span className='postDate'>
            <TimeAgo datetime={post.createdAt} locale='pt_BR' />
          </span>
        </div>
        <div className="postRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className='postText'>{post?.description}</span>
        <img className='postImg' src={PF+post.img} alt="" />
      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
          <img className='likeIcon' src={`${PF}like.png`} onClick={HandlerAddLike} alt="" />
          <img className='likeIcon' src={`${PF}heart.png`} onClick={HandlerAddLike} alt="" />
          <span className='postLikeCounter'>{like} pessoas</span>
        </div>
        <div className="postBottomRight">
          <div className="postCommentText">{post.comment} Comentários</div>
        </div>
      </div>
    </div>
  </div>
  );
}
