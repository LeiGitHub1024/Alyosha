import React from "react";
import LinkCard from "../../commonComponents/cards/LinkCard";
import FlexContainer from "../../commonComponents/containers/flexContainer";
import { getFullPath } from "../../uitls/imagePath";
import iAd from './icon/ad.ico'
import iAimo from './icon/aimo.png'
import iBoardMix from './icon/boardMix.png'
import iCaiyun from './icon/caiyun.png'
import iChatgpt from './icon/chatgpt.ico'
import icodeRain from './icon/codeRain.ico'
import icolorAvatar from './icon/colorAvatar.png'
import iconvert from './icon/convert.png'
import iFavioli from './icon/favioli.png'
import iGitBranching from './icon/gitBranching.png'
import iMlu from './icon/mlu.png'
import iHeo from './icon/heo.png'
import iJian from './icon/jian.ico'
import iLolDog from './icon/lolDog.png'
import iMiku from './icon/miku.png'
import iNeural from './icon/neural.png'
import iPageSpedd from './icon/pageSpeed.png'
import iRed2 from './icon/red2.jpg'
import iRuan from './icon/ruan.ico'
import iToonme from './icon/toonme.png'
import iVenge from './icon/venge.png'
import iShipian from './icon/shipian.png'
import iGiza from './icon/giza.ico'


const SuperMan = ()=>{
  // 个人技术播客
  const personBlogs = [
    <LinkCard shape='circle' title="阮一峰" desc="阮一峰的网络日志" icon={iRuan} link="https://www.ruanyifeng.com/blog/"></LinkCard>,
    <LinkCard shape='circle' title="张洪Heo" desc="设计师、产品经理、独立开发者、博主" icon={iHeo} link="https://blog.zhheo.com/"></LinkCard>,
    <LinkCard shape='circle' title="山月" desc="前端工程师"  link=" https://q.shanyue.tech/"></LinkCard>,
  ]

  const magicSites = [    
    <LinkCard  title="ChatGPT" desc="最好用的自然语言生成模型" icon={iChatgpt} link="https://chat.openai.com/chat"></LinkCard>,
    <LinkCard  title="诗篇" desc="给图片配诗" icon={iShipian} link="https://shipian.zsio.net"></LinkCard>,
    <LinkCard  title="Animated Drawings" desc="让2D简笔画动起来" icon={iAd} link="https://sketch.metademolab.com/canvas"></LinkCard>,
    <LinkCard  title="TOONME" desc="图像卡通化" icon={iToonme} link="https://toonme.com/result"></LinkCard>,
    <LinkCard  title="MatrixDigitalRain" icon={icodeRain} desc="黑客帝国代码雨" link="https://codepen.io/yuanchuan/pen/YoqWeR"></LinkCard>,
    <LinkCard  title="AI绘画资源合集" desc="包含国内外可使用平台、使用教程、参数教程、部署教程、业界新闻等等" link="  https://github.com/hua1995116/awesome-ai-painting"></LinkCard>,
    <LinkCard  title="Paper2GUI" desc="让每个人都简单方便的使用前沿人工智能技术" link="https://github.com/Baiyuetribe/paper2gui"></LinkCard>,
    <LinkCard  title="彩云小梦" icon={iCaiyun} desc="AI讲故事" link="https://if.caiyunai.com/dashboard/novels"></LinkCard>,
    
    
    <LinkCard  title="Poke-hole" icon={iGiza} desc="CSS炫技！" link="https://poke-holo.simey.me/"></LinkCard>,

    <LinkCard  title="数字吉萨" icon={iGiza} desc="漫游金字塔" link="https://giza.mused.org/zh-hans/guided/335/da-jin-zi-ta-nei-bu"></LinkCard>,

    
  ]

const utils = [
  <LinkCard   title="Convertio" desc="文件格式转换"  icon={iconvert} link="https://convertio.co/zh/"></LinkCard>,
  <LinkCard  title="视频转换GIF" desc="视频转换成GIF" icon={iAimo} link="https://airmore.cn/video-to-gif-online"></LinkCard>,
  <LinkCard  title="ColorAvatar" desc="卡通头像生成" icon={icolorAvatar} link="  https://vue-color-avatar.vercel.app/"></LinkCard>,
  <LinkCard  title="色图网站" desc="字面意思" link="https://colorsite.librian.net/"></LinkCard>,
  <LinkCard  title="ParticleButtons" desc="React粒子效果按钮" link="https://transitive-bullshit.github.io/react-particle-effect-button/"></LinkCard>,
  <LinkCard  title="Favioli" desc="Emoji Favicons for the web" icon={iFavioli} link="https://favioli.com/"></LinkCard>,
  <LinkCard  title="渐变颜色" desc="生成渐变色css代码" icon={iJian} link="http://color.oulu.me/"></LinkCard>,
  <LinkCard  title="BoardMix" desc="在线绘制好看的流程图"  icon={iBoardMix} link="https://boardmix.cn/app/my-space"></LinkCard>,
  <LinkCard  title="PageSpeedInsights" desc="网站性能评测" icon={iPageSpedd} link="https://pagespeed.web.dev/"></LinkCard>,
  <LinkCard  title="Hhappyhues" desc="配色网站"  link="https://www.happyhues.co/palettes/13"></LinkCard>,


]
const study = [
  <LinkCard  title="从零开始的神经网络" desc="深度学习入门" icon={iNeural} link="https://aegeorge42.github.io/"></LinkCard>,
  <LinkCard  title="MLU-EXPLAIN" desc="深度学习概念可视化理解" icon={iMlu} link="https://mlu-explain.github.io/"></LinkCard>,
  <LinkCard  title="GithBranching" desc="Github入门" icon={iGitBranching} link="https://learngitbranching.js.org/?locale=zh_CN"></LinkCard>,
  <LinkCard  title="Three.js" desc="前端3D"  link="https://threejs.org/"></LinkCard>,


]

const games = [
  <LinkCard  title="Mikutap" desc="轻音游戏" icon={iMiku} link="https://aidn.jp/mikutap/"></LinkCard>,
  <LinkCard  title="LOLDodgeGame." desc="英雄联盟走位小游戏" icon={iLolDog} link="https://loldodgegame.com/play/"></LinkCard>,
  <LinkCard  title="VENGE" desc="FPS游戏" icon={iVenge} link="https://venge.io/?create-account"></LinkCard>,
  <LinkCard  title="ChornoDivide" desc="网页版红警2" icon={iRed2} link="https://chronodivide.com/"></LinkCard>,
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