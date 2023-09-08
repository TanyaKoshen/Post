import '../styles/App.css'
import {useEffect, useState} from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Modal from '../components/UI/Modal/Modal';
import Button from '../components/UI/button/Button';
import {usePosts} from '../hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetch} from '../hooks/useFetch';
import {getPageCount} from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [active, setActive] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(7);
  const [page, setPage] = useState(1)

  const sortedAndFilteredPosts = usePosts(posts, filter.sort, filter.query)


  const [fetchPosts, isLoading, error] = useFetch(async () => {
    const posts = await PostService.getAll(limit, page);
    setPosts(posts.data);
    const totalCount = posts.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page]);

  const toggleModal = () => {
    setActive(!active)
  }


  const createPost = (post) => {
    setPosts([ post,...posts])
    setActive(false)
  }

  const deletePost = (id) => {
    const updPosts = posts.filter(el => el.id !== id)
    setPosts(updPosts)
  }

  const changePage = (number) => {
    setPage(number)
  }
  return (
    <div className="App">
      <Modal active={active} setActive={setActive}>
        <PostForm createPost={createPost}/>
      </Modal>

      <div>
        <Button onClick={toggleModal}>Create New Post</Button>
        <PostFilter filter={filter} setFilter={setFilter}/>
      </div>

      {error && <h3 style={{textAlign: 'center'}}>oops... try again later</h3>}

      {isLoading
        ? <Loader/>
        : (!error && <PostList posts={sortedAndFilteredPosts} title="Posts" deletePost={deletePost}/>)
      }
      <Pagination changePage={changePage} page={page} totalPages={totalPages} />
    </div>
  )
}

export default Posts;
