import React from 'react';

import './style.less'
const FlexContainer = (props:{title:string,child:any[], width:string})=>{

const {title, child, width} = props

    return(
      <div  style={{width:width,}}>
        <div className='ContainerTitle'>{title}</div>
        <div className='flexContainer'>{...child}</div>

      </div>
    )
}
export default FlexContainer;