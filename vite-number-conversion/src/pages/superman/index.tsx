import React from "react";
import LinkCard from "../../commonComponents/cards/LinkCard";
import FlexContainer from "../../commonComponents/containers/flexContainer";
import { getFullPath } from "../../uitls/imagePath";

const SuperMan = ()=>{
  // 个人技术播客
  const personBlogs = [
    <LinkCard shape='circle' title="阮一峰" desc="阮一峰的网络日志" icon={getFullPath("avaters/1.png")} link="https://www.ruanyifeng.com/blog/"></LinkCard>,
    <LinkCard shape='circle' title="张洪Heo" desc="张洪Heo,设计师、产品经理、独立开发者、博主" icon={getFullPath("avaters/1.png")} link="https://blog.zhheo.com/about/"></LinkCard>,
    <LinkCard shape='circle' title="山月" desc="前端工程师" icon={getFullPath("avaters/1.png")} link=" https://q.shanyue.tech/"></LinkCard>,
  ]

  const magicSites = [    
    <LinkCard  title="ChatGPT" desc="最好用的自然语言生成模型" link="https://chat.openai.com/chat"></LinkCard>,
    <LinkCard  title="Animated Drawings" desc="让2D简笔画动起来" link="https://sketch.metademolab.com/canvas"></LinkCard>,
    <LinkCard  title="TOONME" desc="图像卡通化" link="https://toonme.com/result"></LinkCard>,
    <LinkCard  title="MatrixDigitalRain" desc="黑客帝国代码雨" link="https://codepen.io/yuanchuan/pen/YoqWeR"></LinkCard>,
    <LinkCard  title="AI绘画资源合集" desc="包含国内外可使用平台、使用教程、参数教程、部署教程、业界新闻等等" link="  https://github.com/hua1995116/awesome-ai-painting"></LinkCard>,
    <LinkCard  title="Paper2GUI" desc="让每个人都简单方便的使用前沿人工智能技术" link="https://github.com/Baiyuetribe/paper2gui"></LinkCard>,
    <LinkCard  title="彩云小梦" desc="AI讲故事" link="https://if.caiyunai.com/dashboard/novels"></LinkCard>,
  ]

const utils = [
  <LinkCard   title="Convertio" desc="文件格式转换" link="https://convertio.co/zh/"></LinkCard>,
  <LinkCard  title="视频转换GIF" desc="视频转换成GIF" link="https://airmore.cn/video-to-gif-online"></LinkCard>,
  <LinkCard  title="ColorAvatar" desc="卡通头像生成" link="  https://vue-color-avatar.vercel.app/"></LinkCard>,
  <LinkCard  title="色图网站" desc="字面意思" link="https://colorsite.librian.net/"></LinkCard>,
  <LinkCard  title="ParticleButtons" desc="React粒子效果按钮" link="https://transitive-bullshit.github.io/react-particle-effect-button/"></LinkCard>,
  <LinkCard  title="Favioli" desc="Emoji Favicons for the web" link="https://favioli.com/"></LinkCard>,
  <LinkCard  title="渐变颜色" desc="生成渐变色css代码" link="http://color.oulu.me/"></LinkCard>,
  <LinkCard  title="BoardMix" desc="在线绘制好看的流程图" link="https://boardmix.cn/app/my-space"></LinkCard>,
  <LinkCard  title="PageSpeedInsights" desc="网站性能评测" link="https://pagespeed.web.dev/"></LinkCard>,
]
const study = [
  <LinkCard  title="从零开始的神经网络" desc="深度学习入门" link="https://aegeorge42.github.io/"></LinkCard>,
  <LinkCard  title="GithBranching" desc="Github入门" link="https://learngitbranching.js.org/?locale=zh_CN"></LinkCard>,
]

const games = [
  <LinkCard  title="Mikutap" desc="轻音游戏" link="https://aidn.jp/mikutap/"></LinkCard>,
  <LinkCard  title="LOLDodgeGame." desc="英雄联盟走位小游戏" link="https://loldodgegame.com/play/"></LinkCard>,
  <LinkCard  title="VENGE" desc="FPS游戏" link="https://venge.io/?create-account"></LinkCard>,
  <LinkCard  title="ChornoDivide" desc="网页版红警2" link="https://chronodivide.com/"></LinkCard>,
]

  return (<div>
    <FlexContainer title='个人技术博客' child={personBlogs} width="100%" ></FlexContainer>
    <FlexContainer title='奇妙网站' child={magicSites} width="100%"></FlexContainer>
    <FlexContainer title='我爱学习' child={study} width="100%"></FlexContainer>
    <FlexContainer title='Web游戏' child={games} width="100%"></FlexContainer>
    <FlexContainer title='实用工具' child={utils} width="100%"></FlexContainer>
  </div>)
}
export default SuperMan