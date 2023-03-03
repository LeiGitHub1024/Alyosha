import React, { ReactNode } from 'react';

import style from './style.module.less';
const RollingRegion = (props:{
  title:string,
  outStyle?:Object,
  partOneContainerStyle?:Object,
  partOne:ReactNode,
  partTwoContainerStyle?:Object,
  partTwo:ReactNode,
  })=>{

  
const {title,outStyle,partOneContainerStyle,partOne,partTwoContainerStyle,partTwo} = props

    return(<>
      <div className={style.out_container} style={outStyle} >
        <div className={style.title}>{title}</div>
        <div className={style.inner_container1} style={partOneContainerStyle}  >
          {partOne}
        </div>
        <div className={style.inner_container2} style={partTwoContainerStyle}>
          {partTwo}
        </div>
          
      </div>
    </>)
}
export default RollingRegion;