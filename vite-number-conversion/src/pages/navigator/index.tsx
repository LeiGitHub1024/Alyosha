import React, { useEffect, useState } from "react"
import "./style.less"
import { Menu, Trigger } from '@arco-design/web-react';
import { IconMenuFold,IconMoon,IconSun} from '@arco-design/web-react/icon';
import { useLocation } from 'react-router-dom';

import { IconMenuUnfold } from '@arco-design/web-react/icon';
import { Link } from "react-router-dom";

const pathTitleMap = {
  '/': '主页',
  '/project':'项目',
  '/thought':"想法",
  '/superman':"他山之石",
}
type TypePathTitleMap = '/'|'/project'|'/thought'|'/superman'


export const Navigator = ()=>{
  const [MenuTitle, setMenuTitle] = useState<string>('Home');
  const [popupVisibleOne, setPopupVisibleOne] = useState(false);
  const [theme, setTheme] = useState<string>('light');
  
  const location = useLocation();
  useEffect(()=>{
    // console.log('sss',localStorage.getItem('theme-dark'))
    if(localStorage.getItem('theme-dark')){
      document.body.setAttribute('arco-theme', 'dark');
      setTheme('dark')
    }
  },[])

  function changeTheme(){
    // console.log(theme)
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

  function renderMenu () {
    return (
      <Menu
      style={{ width:'150px',borderRadius:'10px',boxShadow:'0 0 2px var(--color-text-4)' }}
      mode='vertical'
      tooltipProps={{ position: 'left' }}
      onClickMenuItem = { ()=>{setPopupVisibleOne(false)} }
      >
      <Link to='/' ><Menu.Item key='1'>主页</Menu.Item></Link>
      <Link to='/project' > <Menu.Item key='2'>实践</Menu.Item></Link>
      <Link to='/thought' ><Menu.Item key='3'>想法</Menu.Item></Link>
      <Link to='/superman'><Menu.Item key='4'>他山之石</Menu.Item></Link>
      <a href="https://github.com/LeiGitHub1024/Alyosha" target="_blank"> <Menu.Item key='5'>GitHub</Menu.Item></a> 
    </Menu>
    )
  };

  return(<div >
    <div id="topnavigator" >
      <Trigger
        popup={renderMenu}
        trigger={['click', 'hover']}
        clickToClose
        popupVisible={popupVisibleOne}
        popupStyle={{position: 'fixed', left:'2vw', top:'55px'}}  
        onVisibleChange={(v) => setPopupVisibleOne(v)}
      >
        <div className={`menu-icon button-trigger ${popupVisibleOne ? 'button-trigger-active' : ''}`}>
          {popupVisibleOne ? <IconMenuFold /> : <IconMenuUnfold />}
        </div>
      </Trigger>

      <div className='menu-title'>{MenuTitle}</div>
      <div onClick={changeTheme}>
        {theme=='dark'? <IconMoon className="menu-theme" />:<IconSun className="menu-theme"/>}
      </div>
    </div>
    <div style={{height:'70px'}}></div>
  </div>)
}