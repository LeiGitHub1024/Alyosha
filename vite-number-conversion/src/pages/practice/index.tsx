import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";


const Practice = ()=>{
  const jss = [
    // <StyledLink icon={truth} title="阮一峰" desc="阮一峰的网络日志" link="/xx/ss/1.html"></StyledLink>,
1
  ]
  return (<div>
    Practice
    基础
    柯里化
    节流防抖
    事件监听，双向绑定
    call bind apply
    
   
    带背景的文字

    应用
    二维码生成
    拖拽

    <CommonCard title='个人技术博客' links={jss} ></CommonCard>

  </div>)
}
export default Practice