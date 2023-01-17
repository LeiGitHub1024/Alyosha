import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";
import che from "../../assets/icons/che.png"
const Thought = ()=>{
  const FE = [
    <StyledLink title="前端性能指标" desc="介绍WebVitals的六个核心指标" link="https://leixiaojun.feishu.cn/docx/Lnehd7bA8oUONAxL9Bgcn5n4n6f"></StyledLink>,
    <StyledLink title="优雅获取dom坐标" desc="使用IntersectionObserver" link="https://bytedance.feishu.cn/docx/doxcniravL9G0VoNcjBoXnc6bZf"></StyledLink>,

    <StyledLink title="HTML渲染原理" desc="浏览器解析HTML的原理" link="https://leixiaojun.feishu.cn/docx/Lnehd7bA8oUONAxL9Bgcn5n4n6f"></StyledLink>,
    <StyledLink title="原型与原型链" desc="形象地解释原型与原型链" link="https://leixiaojun.feishu.cn/docx/K29QdwLN7oMICGxCCMTcnGENnLc"></StyledLink>,

  ]

  const ideas = [
    <StyledLink icon ={che} title="共产主义，与我何干？" desc="话剧《切格瓦拉》观后感" link="https://mp.weixin.qq.com/s/hIgHFbANkmMtHXtbQvs47w"></StyledLink>,

  ]
  return (<div>
    {/* Practice
    基础
    柯里化
    节流防抖
    事件监听，双向绑定
    call bind apply
    
   
    带背景的文字

    应用
    二维码生成
    拖拽 */}

    <CommonCard title='前端基础' links={FE} ></CommonCard>
    <CommonCard title='奇思妙想' links={ideas} ></CommonCard>

    
  </div>)
}
export default Thought