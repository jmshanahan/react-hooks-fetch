import React from "react";
import cuid from "cuid";

import Getposts from "./Getposts";
import Postitem from "./Postitem";
const Postdata = () => {
  const posts = Getposts();
  const havePosts = posts && posts.length > 0;

  return (
    <div>
      <h1>Post Data</h1>
      {havePosts ? (
        <ul>
          {posts.map(item => (
            <Postitem key={cuid()} {...item} />
          ))}
        </ul>
      ) : (
        <h2>Loading Data...</h2>
      )}
    </div>
  );
};
export default Postdata;
