import React, {useState,useEffect } from 'react';
import style from'./style.module.less'

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 导入编辑器的样式
import 'react-markdown-editor-lite/lib/index.css';

const MarkDownShower = (props:{filePath:string})=>{
    const {filePath} = props
    const [markdown, setMarkdown] = useState("123");
    useEffect(()=>{
        process.env.NODE_ENV === 'development' ? changeArticle('/src/pages/article/article/markDownShower/test.md')
        :
        changeArticle('articles/'+filePath)
    }, [])
    function changeArticle(url:string){
        fetch(url) // 同级目录下的 example.md 文件
        .then((response) => response.text())
        .then((text) => {
        setMarkdown(text);
        });
    }
    return(<>
        <ReactMarkdown>{markdown}</ReactMarkdown>

    </>)
}
export default MarkDownShower;