import React from 'react';
import Button from './UI/button/Button';

const PostItem = ({post, index, deletePost}) => {
  return (
    <div className="post">
      <div className="post-content">
        <h4 style={{textTransform: 'uppercase', marginBottom: '10px'}}>
          {index}. {post.title}
        </h4>
        <div>
          {post.body}
        </div>
      </div>
      <Button
        onClick={()=>deletePost(post.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default PostItem;
