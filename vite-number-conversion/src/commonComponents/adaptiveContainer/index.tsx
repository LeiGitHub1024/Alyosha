import React from "react";
import "./style.less"

const AdaptiveContainer = (props:{ child:any, width: string, height: string})=>{
  const {child,width,height } = props
  return (
    <div className="ada-container" style={{width:width, height:height}}  >
      <div className="innnerBox">
        
        {child}

      </div>
    </div>
  )
}

export default AdaptiveContainer
