import React, { useState } from 'react';
import { MoreVert } from '@material-ui/icons';

import './post.css'

import { Users } from '../../mockData';

export default function Post({post}) {
  const user = Users.filter((user) => user._id === post.userId)[0];

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  console.log('->', PF)

  const HandlerAddLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  }

  return (
  <div className="post">
    <div className="postWrapper">
      <div className="postTop">
        <div className="postLeft">
          <img className='postProfileImg' src={user.profilePicture} alt="" />
          <span className='postUsername'>{user.userName}</span>
          <span className='postDate'>{post.date}</span>
        </div>
        <div className="postRight">
          <MoreVert />
        </div>
      </div>
      <div className="postCenter">
        <span className='postText'>{post.description}</span>
        <img className='postImg' src={PF + post.photo} alt="" />
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
