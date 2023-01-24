import React from "react";
import './style.less'

const IconContainer = (props:{iconPath:string, size?:number, bgcolor?:string})=>{
    const {iconPath,size=100,bgcolor='white'} = props
    return (<div className='icon-container' style={{width:size+'px', height:size+'px', backgroundColor:bgcolor}}>
      <div id="icon" style={{backgroundImage:`url(${iconPath})`, width:size*.7+'px', height:size*.7+'px'}}></div>
    </div>)
}
export default IconContainer

