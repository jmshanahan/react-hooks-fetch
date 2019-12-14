import React, { useEffect, useState } from "react";

const Getposts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);
  return posts;
};

export default Getposts;
