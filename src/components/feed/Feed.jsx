import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share'
import './feed.css';

export default function Feed() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/61f33429b6756a4da40ae9e5');
      console.log(res);
      setPosts(res.data);
    }

    fetchPosts();
  }, []);

  return(
    <>
      <div className='feed'>
        <div className="feedWrapper">
          <Share />
          {posts.map((post) => (
            <Post key={post.id} post={post}/>
          ))}
        </div>
      </div>
    </>
  );
}
