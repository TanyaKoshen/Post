import React from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import {config} from './db'


const App = () => {
  return (
     <div>

     <div className='navbar'>
       <div className='navbar__links'>
         <Link to='/about'>about</Link>
         <Link to='/posts'>posts</Link>
       </div>
     </div>
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
     </div>
  );
};

export default App;
