import { useState } from 'react'
import './App.less'
import { Route,Routes,Link } from 'react-router-dom'
import Welcome from './pages/welcome';
import Project from './pages/project/inedex';
import Practice from './pages/practice';
import SuperMan from './pages/superman';
function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      
      <header>
        <Link to='/' >首页</Link>
        <Link to='/project' >好玩的项目</Link>
        <Link to='/practice' >训练场</Link>
        <Link to='/superman'>超人导航</Link>
        <a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank" >GitHub</a>
      </header>
      <div className='main'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/project" element={<Project />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/superman" element={<SuperMan />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
