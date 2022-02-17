import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share'
import './feed.css';

export default function Feed({username}) {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get('posts/profile/' + username)
        : await axios.get('posts/timeline/61f33429b6756a4da40ae9e5')
      console.log(res);
      setPosts(res.data);
    }

    fetchPosts();
  }, [username]);

  return(
    <>
      <div className='feed'>
        <div className="feedWrapper">
          <Share />
          {posts.map((post) => (
            <Post key={post._id} post={post}/>
          ))}
        </div>
      </div>
    </>
  );
}
