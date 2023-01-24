import React, { useEffect, useState } from "react"
import "./style.less"
import { Dropdown, Menu, Button, Space } from '@arco-design/web-react';
import { IconDown, IconList, IconMenuFold,IconMoon,IconSun} from '@arco-design/web-react/icon';
import { useLocation } from 'react-router-dom';

import { IconMenuUnfold } from '@arco-design/web-react/icon';
import { Link } from "react-router-dom";
const dropList = (
  <Menu>
    <Menu.Item key='1'><Link to='/' >首页</Link></Menu.Item>
    <Menu.Item key='2'><Link to='/project' >实践</Link></Menu.Item>
    <Menu.Item key='3'><Link to='/thought' >想法</Link></Menu.Item>
    <Menu.Item key='4'><Link to='/superman'>他山之石</Link></Menu.Item>
    <Menu.Item key='5'><a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank" >GitHub</a> </Menu.Item>
  </Menu>
);
const pathTitleMap = {
  '/': '首页',
  '/project':'项目',
  '/thought':"想法",
  '/superman':"他山之石",
}
type TypePathTitleMap = '/'|'/project'|'/thought'|'/superman'


export const Navigator = ()=>{
  const [MenuTitle, setMenuTitle] = useState<string>('Home');
  const [iconState, setIconState] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>('light');
  
  const location = useLocation();
  useEffect(()=>{
    console.log('sss',localStorage.getItem('theme-dark'))
    if(localStorage.getItem('theme-dark')){
      document.body.setAttribute('arco-theme', 'dark');
      setTheme('dark')
    }
  },[])

  function changeTheme(){
    console.log(theme)
    if(theme=='dark'){
      document.body.removeAttribute('arco-theme');
      localStorage.removeItem('theme-dark')
      setTheme('light')
    }else{
      document.body.setAttribute('arco-theme', 'dark');
      localStorage.setItem('theme-dark','true')
      setTheme('dark')
    }
  }

  useEffect(() => {
      setMenuTitle(pathTitleMap[(location.pathname) as TypePathTitleMap ])
  }, [location]);


  return(<div >
    <div id="topnavigator" >
      <Dropdown droplist={dropList} onVisibleChange={()=>{setIconState(!iconState)}}>
          {iconState?<IconMenuFold  className="menu-icon"/>:<IconMenuUnfold className="menu-icon"/>}
      </Dropdown>
      <div className='menu-title'>{MenuTitle}</div>
      <div onClick={changeTheme}>
        {theme=='dark'? <IconMoon className="menu-theme" />:<IconSun className="menu-theme"/>}
      </div>
    </div>
    <div style={{height:'70px'}}></div>
  </div>)
}