import React from "react";
import "./style.less"

const AdaptiveContainer = (props:{ child:any, width: string, height: string, bgi?: string})=>{
  const {child,width,height,bgi } = props
  return (
    <div className="ada-container" style={{width:width, height:height, backgroundImage:`url(${bgi})`}}  >
      <div className="innnerBox">
        
        {child}
      </div>
    </div>
  )
}

export default AdaptiveContainer
