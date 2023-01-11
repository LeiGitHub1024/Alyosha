import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";
import apng from '../../assets/avaters/1.png'

const SuperMan = ()=>{
  // 个人技术播客
  const personBlogs = [
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  ]

  const magicSites = [    
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,

]

const utils = [
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,

]
const ai = [
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
  <StyledLink icon={apng} title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,

]

  return (<div>
    <CommonCard title='个人技术博客' links={personBlogs} ></CommonCard>
    <CommonCard title='人工智能' links={ai} ></CommonCard>

    <CommonCard title='神奇网站' links={magicSites} ></CommonCard>
    <CommonCard title='实用工具' links={utils} ></CommonCard>


  </div>)
}
export default SuperMan