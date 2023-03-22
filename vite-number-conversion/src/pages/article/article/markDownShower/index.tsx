import React, { useState, useEffect } from "react";
import "./style.less";

import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'


const MarkDownShower = (props: { filePath: string }) => {
  const { filePath } = props;
  const [markdown, setMarkdown] = useState("123");
  useEffect(() => {
    process.env.NODE_ENV === "development"
      ? changeArticle("/src/pages/article/article/markDownShower/test.md")
      : changeArticle("articles/" + filePath);
  }, []);
  function changeArticle(url: string) {
    fetch(url) // 同级目录下的 example.md 文件
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  }
  return (
    <>
      <ReactMarkdown
        children={markdown}
        components={{
          code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={dark as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
        // renderers={{ code: CodeBlock }}
        // onNode={node => {
        //   if (node.type === 'code') {
        //     hljs.highlightBlock(node);
        //   }
        // }}
      ></ReactMarkdown>
    </>
  );
};
export default MarkDownShower;
