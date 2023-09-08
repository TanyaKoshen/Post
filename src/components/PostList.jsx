import React from 'react';
import PostItem from './PostItem';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import '../styles/App.css'

const PostList = ({posts, title, deletePost}) => {
  if (!posts.length) {
    return (
      <div style={{textAlign: 'center'}}>
        'no posts found...'
      </div>
    )
  }

  return (
    <div>
      <h3 style={{textAlign: 'center', textTransform: 'uppercase'}}>
        {title}
      </h3>
      <TransitionGroup>
        {posts.map((el, index)=>
          <CSSTransition
            key={el.id}
            timeout={300}
            classNames = "item"
          >
            <PostItem post={el}  index={index+1} deletePost={deletePost}/>
          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  );
};

export default PostList;
