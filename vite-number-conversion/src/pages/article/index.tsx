import React,{useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import style from './style.module.less'
const Article = (props:{})=>{

const {} = props
const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    changeArticle("../articles/thought/test.md")
  }, []);
  function changeArticle(url:string){
    fetch(url) // 同级目录下的 example.md 文件
    .then((response) => response.text())
    .then((text) => {
      setMarkdown(text);
    });
  }

  return (
    <div className={style.container}>
      <div className={style.left} >
        {/*  这样写有一个问题，线上能访问到，本地dev访问不到 */}
          <div onClick={()=>changeArticle("articles/thought/history_cycle.md")}>历史周期律 2023.3.8</div>
          <div onClick={()=>changeArticle("articles/thought/test.md")}>测试 2023.2.30</div>

      </div>
      <div className={style.right}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
  
    </div>
  );
}
export default Article;