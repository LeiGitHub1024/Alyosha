import React from "react"
import "./style.less"
import menu from '../../assets/icons/menu.png'
import { IconMenuUnfold } from '@arco-design/web-react/icon';

export const Navigator = (props:{MenuItems:any[]})=>{
  const {MenuItems} = props
  const changeTabStatus = (target:any)=>{ //实现点击后改变样式
    var menuItems = document.querySelectorAll('a');
    for(var item of menuItems){
      item.classList.remove('active');
    }
    target.classList.add('active');
    
  }
 
  function onclickFun(){
    const navigatorCycle = document.querySelector('.navigatorCycle')
    // console.log(navigatorCycle?.classList.length)
    navigatorCycle?.classList.length==2 ?     navigatorCycle?.classList.remove('navigatorCycle-hover') :     navigatorCycle?.classList.add('navigatorCycle-hover')
  }

  
  

  return(<div>
    <div className="navigatorCycle" onTouchEnd={onclickFun}>
      <div id="icon"><IconMenuUnfold /></div>
      <div onClick={(e)=>changeTabStatus(e)} id='horizenMenu' className="menu">{...MenuItems}</div>
    </div>
    <div onClick={(e)=>changeTabStatus(e)} id='verticleMenu' className="menu">{...MenuItems}</div>
  </div>)
}