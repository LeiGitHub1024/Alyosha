import React from "react"
import "./style.less"
const CommonCard = (props:{title:String, links:any[]}  )=>{
  const {title,links} = props
  return (<div className="commonCard">
      <div className="title">{title}</div>
      <div className="content">  {...links}   </div>

  </div>)
}

export default CommonCard
