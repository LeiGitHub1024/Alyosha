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
  useEffect(()=>{
    const hMenu = document.querySelector('#horizon-menu')
    const title = document.querySelector('.menu-title')
    window.addEventListener("scroll", function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop == 0) {
        // console.log(scrollTop,hMenu,title)
        hMenu?.classList.remove('hidden')
        title?.classList.add('hidden')
        //展示目录
      } else if(scrollTop>20&&scrollTop<40){
        // console.log(scrollTop,hMenu,title)
      
        hMenu?.classList.add('hidden')
        title?.classList.remove('hidden')
        //展示标题
      }
    });
  },[])

  function renderMenu () {
    return (
      <Menu
      style={{ width:'148px',borderRadius:'10px',boxShadow:'0 0 2px var(--color-text-4)',fontSize:'18px' }}
      mode='vertical'
      tooltipProps={{ position: 'left' }}
      onClickMenuItem = { ()=>{setPopupVisibleOne(false)} }
      >
      <Link to='/' ><Menu.Item key='1'>🏡主页</Menu.Item></Link>
      <Link to='/project' > <Menu.Item key='2'>🔨项目</Menu.Item></Link>
      <Link to='/thought' ><Menu.Item key='3'>💡想法</Menu.Item></Link>
      <Link to='/superman'><Menu.Item key='4'>⛰他山之石</Menu.Item></Link>
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
      <div id='horizon-menu'>
        <Link to='/' >主页</Link>
        <Link to='/project' >项目</Link>
        <Link to='/thought' >想法</Link>
        <Link to='/superman'>他山之石</Link>
      </div>
      <div className='menu-title hidden'>{MenuTitle}</div>

      <div onClick={changeTheme}>
        {theme=='dark'? <IconMoon className="menu-theme" />:<IconSun className="menu-theme"/>}
      </div>

    </div>
    <div style={{height:'70px'}}></div>
  </div>)
}