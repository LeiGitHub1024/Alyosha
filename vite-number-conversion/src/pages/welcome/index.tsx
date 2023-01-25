import React, { useEffect } from "react";
import AdaptiveContainer from "../../commonComponents/containers/adaptiveContainer";
import IconContainer from "../../commonComponents/containers/iconContainer";
import { getFullPath } from "../../uitls/imagePath";
import "./style.less"

const Welcome = ()=>{
  const welcome = (
    <div>
      <div className="font16">你好，欢迎光临阿廖沙的小屋</div>
      <div className="font36"> 我是 阿廖沙</div>
      <div className="font16">是一名 前端工程师、辩证唯物主义者</div>
    </div>
  )
  const dream = (
    <div>
      <div className="font36">
        <div> <span>You </span> &nbsp; <span>Only</span></div>
        <div> <span>Live</span> &nbsp; <span id='once'>Once</span></div>
    </div>
    </div>
  )

  const skills = (
    <div>
      <div className="font12">技能</div>
      <div className="font36">好好学习</div>
      <div id="skill"> 
        <div id="scoll-bar">
          <div id='child1'> 
            <IconContainer iconPath={getFullPath('icons/util/css.png')} bgcolor="#2c51db"/>
            <IconContainer iconPath={getFullPath('icons/util/h5.png')} bgcolor="#e9572b"/>
            <IconContainer iconPath={getFullPath('icons/util/js.png')} bgcolor="#f7cb4f"/>
            <IconContainer iconPath={getFullPath('icons/util/swift.png')} bgcolor="#eb6840"/>
            <IconContainer iconPath={getFullPath('icons/util/Python.png')} bgcolor="#eee"/>
            <IconContainer iconPath={getFullPath('icons/util/ps.png')} bgcolor="#4082c3"/>
            <IconContainer iconPath={getFullPath('icons/util/react.png')} bgcolor="rgb(88,204,243)"/>
          </div>
          <div id='child2'>
            <IconContainer iconPath={getFullPath('icons/util/git.png')} bgcolor="#df5b40"/>
            <IconContainer iconPath={getFullPath('icons/util/pr.png')} bgcolor="rgb(133,132,255)"/>
            <IconContainer iconPath={getFullPath('icons/util/pytorch.png')} bgcolor="rgb(219,49,30)"/>
            <IconContainer iconPath={getFullPath('icons/util/xcode.png')} bgcolor="rgb(20,85,216)"/>
            <IconContainer iconPath={getFullPath('icons/util/postman.png')} bgcolor="rgb(247,83,39)"/>
            <IconContainer iconPath={getFullPath('icons/util/vscode.png')} bgcolor="rgb(30,113,195)"/>
            <IconContainer iconPath={getFullPath('icons/util/ts.png')} bgcolor="rgb(40,97,182)"/>
          </div>
        </div>
      </div> 
      <div style={{height:250}}>
      </div>
    </div>
    
  )
  const life = (
    <div>
      <div className="font12">生涯</div>
      <div className="font36">天天向上</div>
      <div id="example">
          <div><span className="cycle" style={{backgroundColor:'rgb(256,96,31)'}}> &nbsp;</span> DLUT，大连理工大学，数字媒体技术</div>
          <div><span className="cycle" style={{backgroundColor:'rgb(53,227,226)'}}>&nbsp;</span> BUPT，北京邮电大学，计算机 </div>
          <div><span className="cycle" style={{backgroundImage:'linear-gradient(120deg, rgb(53,136,252) 0%, rgb(42,175,184) 100%)'}}>&nbsp;</span> B.D.(Bytedance)，字节跳动，测试开发/前端实习 </div>
      </div>
      <div className="growth" style={{backgroundImage:`url(${getFullPath('backgrounds/growth.png')})`}}></div>
    </div>
  )
  const motto = (
    <div>
      <div className="font36">命运的礼物 <br></br> 都有价格</div>
    </div>
  )
  const leader = (
    <div id="che">
      <div className="font12">导师</div>
      <div className="font36" style={{height:'80px'}}>切·格瓦拉</div>
      <div className="font16">直到最后的胜利！</div>
      
    </div>
  )
  const lol = (
    <div id="lol">
      <div className="font12">爱好游戏</div>
      <div className="font36" style={{height:'180px'}}>英雄联盟</div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <div>
          <div className="icon-pos-jungle"></div>
          <div className="icon-pos-mid"></div>
        </div>
        <div style={{}}>艾欧尼亚</div>
      </div>
      
    </div>
  )
  const like = (
    <div id="bingbing">
      <div className="font12">喜欢</div>
      <div className="font36" style={{height:'180px'}}>王冰冰</div>
      <div className="font16">我的心是冰冰的</div>
    </div>
  )
  const why = (
    <div>
      <div className="font12">初心</div>
      <br></br>
      <div className="font16" style={{height:'110px'}}>
      建站的初心是记录和分享遇到过的有趣项目，如果能恰好帮助到你，那就更好了。
      </div>
    </div>
  )
  function copyLastFour(x:string){
    let parent = document.querySelector(x)
    let lastFour =[...Array.prototype.slice.call(parent?.children, 0,4)];
    lastFour.forEach(e=>{
      parent?.appendChild(e.cloneNode(true))
    })
    let y = document.querySelector(x)
  }
  useEffect(()=>{copyLastFour('#child1');copyLastFour('#child2');}, [])

  return (<>
    <div id="alyosha">
      阿廖沙的小屋
    </div>
    <div className="bigContainer">
      <div className="oneRow">
        <AdaptiveContainer width="58%" height="180px" child={welcome}></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="36%" height="180px" child={dream}></AdaptiveContainer>
      </div>
      <div className="oneRow" >
        <AdaptiveContainer width="47%" height="400px" child={skills} ></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="47%" height="400px" child={life}></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="36%" height="200px" child={motto}></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="58%" height="200px" child={leader} bgi={getFullPath('backgrounds/che.jpg')}></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="58%" height="300px" child={lol} bgi={getFullPath('backgrounds/moon.jpeg')}></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="37%" height="300px" child={like} bgi={getFullPath('backgrounds/bingbing.png')}></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="97%" height="200px" child={why}></AdaptiveContainer>
      </div>
    </div>



  </>)
}
export default Welcome