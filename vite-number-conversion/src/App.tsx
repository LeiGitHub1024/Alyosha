import { useState } from 'react'
import './App.less'
import { Route,Routes,Link } from 'react-router-dom'
import { Navigator } from './commonComponents/navigator';
import Welcome from './pages/welcome';
import Project from './pages/project/inedex';
// import Practice from './pages/practice';
import SuperMan from './pages/superman';
import Thought from './pages/thought';
function App() {
  
  const  menuItems = [  <Link to='/' >首页</Link>,<Link to='/project' >实践</Link>
                      ,<Link to='/thought' >想法</Link>
                      ,<Link to='/superman'>他山之石</Link>
                      ,<a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank" >GitHub</a>    ]
  return (
    <div>
      <Navigator MenuItems={menuItems} ></Navigator>
      
      {/* <header >
        <Link to='/' >首页</Link>
        <Link to='/project' >实践</Link>
        <Link to='/thought' >想法</Link>
        <Link to='/superman'>他山之石</Link>

        <a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank" >GitHub</a>
      </header> */}
      <div id='main'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/project" element={<Project />} />
            <Route path="/thought" element={<Thought />} />
            {/* <Route path="/practice" element={<Practice />} /> */}
            <Route path="/superman" element={<SuperMan />} />/canvas
          </Routes>
      </div>
    </div>
  )
}

export default App
