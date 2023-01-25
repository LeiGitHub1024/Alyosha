import React from "react"
import "./style.less"
type imgShape = 'circle'|'roundedRectangle'
const LinkCark = (props:{title:string, desc:string,link:string,icon?:any,shape?:imgShape})=>{
  const {title,desc,link,icon} = props

  return (<a className="styledLink" href={link} target="_blank">
            {icon? <img src={icon} className="icon" alt="ttt" />: <div className={ `textImg icon`} >{title[0]}</div>}
            <div className="texts">
              <div>{title}</div>
              <div>{desc}</div>
            </div>
          </a>)
}

export default LinkCark
