import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";
import apng from '../../assets/avaters/1.png'

const SuperMan = ()=>{
  // 个人技术播客
  const personBlogs = [
    <StyledLink icon={apng} shape='circle' title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  ]

  const magicSites = [    
  <StyledLink  shape='circle' title="Animated Drawings" desc="让2D简笔画动起来" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
]

const utils = [
  <StyledLink  shape='circle' title="Convertio" desc="文件格式转换" link="https://convertio.co/zh/"></StyledLink>,
]
const ai = [
  <StyledLink  shape='circle' title="ChatGPT" desc="最好用的自然语言生成模型" link="https://chat.openai.com/chat"></StyledLink>,
  <StyledLink  shape='circle' title="从零开始的神经网络" desc="深度学习入门" link="https://aegeorge42.github.io/"></StyledLink>,
  <StyledLink  shape='circle' title="GithBranching" desc="Github入门" link="https://learngitbranching.js.org/?locale=zh_CN"></StyledLink>,

]

  return (<div>
    <CommonCard title='个人技术博客' links={personBlogs} ></CommonCard>
    <CommonCard title='人工智能' links={ai} ></CommonCard>
    <CommonCard title='神奇网站' links={magicSites} ></CommonCard>
    <CommonCard title='实用工具' links={utils} ></CommonCard>


  </div>)
}
export default SuperMan