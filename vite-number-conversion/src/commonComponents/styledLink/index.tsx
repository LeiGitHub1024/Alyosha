import React from "react"
import "./style.less"
type imgShape = 'circle'|'roundedRectangle'
const StyledLink = (props:{title:string, desc:string,link:string,icon?:any,shape?:imgShape})=>{
  const {title,desc,link,icon,shape='roundedRectangle'} = props

  return (<a className="styledLink" href={link} target="_blank">
            <div className="icon">
              {icon? <img src={icon} className={shape}  alt="ttt" />: <div className={ `textImg  ${shape}`} >{title[0]}</div>}
            </div>
            <div className="texts">
              <div>{title}</div>
              <div>{desc}</div>
            </div>
          </a>)
}

export default StyledLink
