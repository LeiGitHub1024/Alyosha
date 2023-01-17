import { useState } from 'react'
import './App.less'
import { Route,Routes,Link } from 'react-router-dom'
import Welcome from './pages/welcome';
import Project from './pages/project/inedex';
// import Practice from './pages/practice';
import SuperMan from './pages/superman';
import Thought from './pages/thought';
function App() {
  const changeTabStatus = (target:any)=>{ //这个其实可以抽成一个单独的菜单组件，懒得弄，先放这
    var menuItems = document.querySelectorAll('a');
    for(var item of menuItems){
      item.classList.remove('active');
    }
    target.classList.add('active');
    
  }
  return (
    <div>
      <header onClick={(e)=>{changeTabStatus(e?.target)}}>
        <Link to='/' >首页</Link>
        <Link to='/project' >好玩的项目</Link>
        {/* <Link to='/practice' >训练场</Link> */}
        <Link to='/thought' >想法</Link>
        <Link to='/superman'>超人导航</Link>

        <a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank" >GitHub</a>
      </header>
      <div className='main'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/project" element={<Project />} />
            <Route path="/thought" element={<Thought />} />
            {/* <Route path="/practice" element={<Practice />} /> */}
            <Route path="/superman" element={<SuperMan />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
