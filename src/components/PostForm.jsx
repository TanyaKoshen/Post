import React, {useState} from 'react';
import Input from './UI/input/Input';
import Button from './UI/button/Button';

const PostForm = ({createPost}) => {
  const [post, setPost] = useState({title: '', body: ''})

  const addNewPost = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    if (post.title && post.body) {
      createPost(newPost)
      setPost({title: '', body: ''})
    }
  }

  return (
    <form>
      <Input
        placeholder="post title reqired..."
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
      />
      <Input
        placeholder="content reqiured..."
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
      />
      <Button
        onClick={addNewPost}
      >
        Create New Post
      </Button>
    </form>
  )
}


export default PostForm;
