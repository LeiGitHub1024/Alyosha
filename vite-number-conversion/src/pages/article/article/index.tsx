import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import style from './style.module.less'
import MarkDownShower from './markDownShower'

const Article = (props:{})=>{
  const {} = props
  const { id } = useParams();
  const filePath = id?.replace(/—/g,'/') || ''
    return (
      <>
        <div className={style.container}>
          <div className={style.title}>{filePath.split('_')[1]}</div>
          <MarkDownShower filePath={filePath}/> 
        </div>
      </>

    );
}
export default Article;