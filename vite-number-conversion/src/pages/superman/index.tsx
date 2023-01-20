import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";
import apng from '../../assets/avaters/1.png'

const SuperMan = ()=>{
  // 个人技术播客
  const personBlogs = [
    <StyledLink icon={apng} shape='circle' title="阮一峰" desc="阮一峰的网络日志" link="https://www.ruanyifeng.com/blog/"></StyledLink>,
    <StyledLink icon={apng} shape='circle' title="张洪Heo" desc="张洪Heo,设计师、产品经理、独立开发者、博主" link="https://blog.zhheo.com/about/"></StyledLink>,
    <StyledLink icon={apng} shape='circle' title="山月" desc="前端工程师" link=" https://q.shanyue.tech/"></StyledLink>,
  ]

  const magicSites = [    
    <StyledLink  title="ChatGPT" desc="最好用的自然语言生成模型" link="https://chat.openai.com/chat"></StyledLink>,
    <StyledLink  title="Animated Drawings" desc="让2D简笔画动起来" link="https://sketch.metademolab.com/canvas"></StyledLink>,
    <StyledLink  title="TOONME" desc="图像卡通化" link="https://toonme.com/result"></StyledLink>,
    <StyledLink  title="MatrixDigitalRain" desc="黑客帝国代码雨" link="https://codepen.io/yuanchuan/pen/YoqWeR"></StyledLink>,
    <StyledLink  title="AI绘画资源合集" desc="包含国内外可使用平台、使用教程、参数教程、部署教程、业界新闻等等" link="  https://github.com/hua1995116/awesome-ai-painting"></StyledLink>,
    <StyledLink  title="Paper2GUI" desc="让每个人都简单方便的使用前沿人工智能技术" link="https://github.com/Baiyuetribe/paper2gui"></StyledLink>,
    <StyledLink  title="彩云小梦" desc="AI讲故事" link="https://if.caiyunai.com/dashboard/novels"></StyledLink>,
     ]

const utils = [
  <StyledLink   title="Convertio" desc="文件格式转换" link="https://convertio.co/zh/"></StyledLink>,
  <StyledLink  title="视频转换GIF" desc="视频转换成GIF" link="https://airmore.cn/video-to-gif-online"></StyledLink>,
  <StyledLink  title="ColorAvatar" desc="卡通头像生成" link="  https://vue-color-avatar.vercel.app/"></StyledLink>,
  <StyledLink  title="色图网站" desc="字面意思" link="https://colorsite.librian.net/"></StyledLink>,
  <StyledLink  title="ParticleButtons" desc="React粒子效果按钮" link="https://transitive-bullshit.github.io/react-particle-effect-button/"></StyledLink>,
  <StyledLink  title="Favioli" desc="Emoji Favicons for the web" link="https://favioli.com/"></StyledLink>,
  <StyledLink  title="渐变颜色" desc="生成渐变色css代码" link="http://color.oulu.me/"></StyledLink>,
  <StyledLink  title="BoardMix" desc="在线绘制好看的流程图" link="https://boardmix.cn/app/my-space"></StyledLink>,
  <StyledLink  title="PageSpeedInsights" desc="网站性能评测" link="https://pagespeed.web.dev/"></StyledLink>,

]
const study = [
  <StyledLink  title="从零开始的神经网络" desc="深度学习入门" link="https://aegeorge42.github.io/"></StyledLink>,
  <StyledLink  title="GithBranching" desc="Github入门" link="https://learngitbranching.js.org/?locale=zh_CN"></StyledLink>,
  
]

const games = [
  <StyledLink  title="Mikutap" desc="轻音游戏" link="https://aidn.jp/mikutap/"></StyledLink>,
  <StyledLink  title="LOLDodgeGame." desc="英雄联盟走位小游戏" link="https://loldodgegame.com/play/"></StyledLink>,
  <StyledLink  title="VENGE" desc="FPS游戏" link="https://venge.io/?create-account"></StyledLink>,
  <StyledLink  title="ChornoDivide" desc="网页版红警2" link="https://chronodivide.com/"></StyledLink>,

]

  return (<div>
    <CommonCard title='个人技术博客' links={personBlogs} ></CommonCard>
    <CommonCard title='奇妙网站' links={magicSites} ></CommonCard>
    <CommonCard title='我爱学习' links={study} ></CommonCard>
    <CommonCard title='Web游戏' links={games} ></CommonCard>
    <CommonCard title='实用工具' links={utils} ></CommonCard>
  </div>)
}
export default SuperMan