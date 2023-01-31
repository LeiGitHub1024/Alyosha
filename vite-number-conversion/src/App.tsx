import React from "react";
import "@arco-design/web-react/dist/css/arco.css";
import './App.less'
import { Route,Routes } from 'react-router-dom'
import { Navigator } from './pages/navigator';
import Welcome from './pages/welcome';
import Project from './pages/project/inedex';
import SuperMan from './pages/superman';
import Thought from './pages/thought';
import Footer from './pages/footer'
import AxiosExample from './uitls/Axios'
function App() {
  return (
    <div>
      <Navigator ></Navigator>
      <div id='main'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/project" element={<Project />} />
            <Route path="/thought" element={<Thought />} />
            <Route path="/superman" element={<SuperMan />} />
          </Routes>
      </div>
      {/* <AxiosExample></AxiosExample> */}
      <Footer></Footer>
    </div>
  )
}

export default App
