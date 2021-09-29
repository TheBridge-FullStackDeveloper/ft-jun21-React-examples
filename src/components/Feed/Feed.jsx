import React, { useEffect, useState,useRef } from 'react';
import axios from 'axios';


const Feed = () => {
  const [inputValue, setValue] = useState("");
  const [previous, setPrevious] = useState("");
  const [posts, setPosts] = useState([]);


  useEffect(
    async () => {
      try{
        if(inputValue !== previous){
          const res = await axios.get(`https://www.reddit.com/r/${inputValue}.json`);
          setPosts(res.data.data.children.map(c => c.data));
        }
      }catch(e){
        setPosts([]);
      } 
    },
    [inputValue]
  );


  const handleSubmit = e => {
    e.preventDefault();
    setPrevious(inputValue);
    setValue(e.target.elements.name.value); //actualizo inputValue
  };

  return <section>
    <h1>Feed de noticias</h1>
 
      <form onSubmit={handleSubmit}>
        <input name="name"/>
      </form>

      <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </section>;
};

export default Feed;
