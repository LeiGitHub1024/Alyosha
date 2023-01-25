import React from 'react';
import './style.less'
const ArticleCard = (props:{title:string,introduction:string,imgPath:string,href:string})=>{
    const {title,introduction,imgPath,href} = props
    return(
      <a className='article-card' href={href} target='_blank'>
        <div className='img' style={{backgroundImage:`url(${imgPath})`}}></div>
        <div className='text'>
          <div className='title'>{title}</div>
          <div className='introtruction'>{introduction}</div>
        </div>
      </a>
    )
}
export default ArticleCard;