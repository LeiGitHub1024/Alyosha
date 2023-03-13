import React,{useState, useEffect} from 'react';
import style from './style.module.less'
import articleList from '../article_list.json';
import { Link } from 'react-router-dom';

const Catalog = (props:{})=>{

  // onClick={()=>changeArticle(`articles/${item.year}/${it}.md`)}
const {} = props
  const articleArr = articleList.map(({ year, articles }) => ({
    year: year,
    articles: articles.sort((a,b)=>Number(b.split('_')[0])-Number(a.split('_')[0])),
  })).sort((a,b)=>b.year-a.year);
  return (
    <div className={style.container}>
      
      <div className={style.catalog} >
        {/*  这样写有一个问题，本地dev访问不到 */}
          {...(articleArr.map(item=><div>
            <div className={style.year} >{item.year}</div>
            <div>
            {...item.articles?.map(it=>
            {
              let route = `/article/${item.year}—${it}.md`
              return <Link to={route} >
              <div className={style.wrapper} >
                <span className={style.date}>{it.split("_")[2]}/{it.split("_")[3]}</span>
                <span className={style.name}>{it.split("_")[1]}</span> 
              </div>
            </Link>}
            )}
            </div>
          </div>))}
          {/* <div onClick={()=>changeArticle("articles/thought/history_cycle.md")}>历史周期律 2023.3.8</div>
          <div onClick={()=>changeArticle("articles/thought/test.md")}>测试 2023.2.30</div> */}

      </div>
      {/* <div className={style.right}>
        <ReactMarkdown components={{ code: CodeBlock as any }}>{markdown}</ReactMarkdown>
      </div> */}
      
    </div>
  );
}
export default Catalog;