import React from "react"
import "./style.less"
const StyledLink = (props:{title:string, desc:string,link:string,icon?:any})=>{
  const {title,desc,link,icon} = props
  return (<a className="styledLink" href={link} target="_blank">
            <div className="icon">
              <img src={icon}  alt="ttt" />
            </div>
            <div className="texts">
              <div>{title}</div>
              <div>{desc}</div>
            </div>
          </a>)
}

export default StyledLink
