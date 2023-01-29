import React, { useEffect } from "react";
import AdaptiveContainer from "../../commonComponents/containers/adaptiveContainer";
import IconContainer from "../../commonComponents/containers/iconContainer";
import { getFullPath } from "../../uitls/imagePath";
import "./style.less"

import iCss from './icon/css.png'
import iGit from './icon/git.png'
import iH5 from './icon/h5.png'
import iJs from './icon/js.png'
import iPostman from './icon/postman.png'
import iPr from './icon/pr.png'
import iPs from './icon/ps.png'
import iPython from './icon/python.png'
import iPytorch from './icon/pytorch.png'
import iReact from './icon/react.png'
import iSwift from './icon/swift.png'
import iTs from './icon/ts.png'
import iVscode from './icon/vscode.png'
import iVue from './icon/vue.png'
import iXcode from './icon/xcode.png'

import iGrough from './growth.png'

let idx = 0
function changeItem(dom:any){
  let nodeList = dom?.children ||[]
  nodeList[idx].setAttribute('class','up')
  nodeList[(idx+1)%3].setAttribute('class','show')
  nodeList[(idx+2)%3].setAttribute('class','hidden')
}
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
        <div className="outerContainer"> 
          <span>不</span> &nbsp; 
          <div className="midContainer" >
              <span className="up">寻找爱情</span>
              <span className="show">渴望成功</span>
              <span>追求成长</span>
          </div>
        </div>
        <div className="outerContainer"> 
          <span>只是去</span> &nbsp; 
          <div className='midContainer' style={{width:'60px'}}>
              <span className="up">爱</span>
              <span className="show" >做</span>
              <span >修</span>
          </div>
        </div>
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
            <IconContainer iconPath={iCss} bgcolor="#2c51db"/>
            <IconContainer iconPath={iH5} bgcolor="#e9572b"/>
            <IconContainer iconPath={iJs} bgcolor="#f7cb4f"/>
            <IconContainer iconPath={iSwift} bgcolor="#eb6840"/>
            <IconContainer iconPath={iPython} bgcolor="#eee"/>
            <IconContainer iconPath={iPs} bgcolor="#4082c3"/>
            <IconContainer iconPath={iReact} bgcolor="rgb(88,204,243)"/>
          </div>
          <div id='child2'>
            <IconContainer iconPath={iGit} bgcolor="#df5b40"/>
            <IconContainer iconPath={iPr} bgcolor="rgb(133,132,255)"/>
            <IconContainer iconPath={iPytorch} bgcolor="rgb(219,49,30)"/>
            <IconContainer iconPath={iXcode} bgcolor="rgb(20,85,216)"/>
            <IconContainer iconPath={iPostman} bgcolor="rgb(247,83,39)"/>
            <IconContainer iconPath={iVscode} bgcolor="rgb(30,113,195)"/>
            <IconContainer iconPath={iTs} bgcolor="rgb(40,97,182)"/>
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
      <div className="growth" style={{backgroundImage:`url(${iGrough})`}}></div>
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
      <br/><br/>
      <div className="font16" style={{height:'280px'}}>
      分享是最好的学习。
      <br/><br/>
      22年末遇到了周岭先生的《认知驱动》，书中关于“
      <span style={{color:"#f2b94b"}}>为什么我们很努力却总是看不到希望</span>
      ”的讨论吸引了我。
      我们总是努力享受奋斗的状态，却少有产出作品的意识。
      我们一直在读书，却少有去实践或把心得写出来；我们一直在练琴，却很少能用完整熟练的曲子向别人表演；我们一直在学画，却很少用作品去出给创造、展示，更别说收获粉丝的欣赏和点赞。
      <br/><br/>

      为什么会这样呢？答案很简单：培养习惯容易，打造技能难！培养习惯容易，因为它不需要严格的标准——可高可低，可紧可松，就像一门不用考试的课程，好坏不要紧，只要自己开心就好。说打造技能难，是因为它的好坏全由外界评定——行就是行，不行就是不行。
      <br/><br/>
      因此建立了本站，将其作为
      
      <span style={{color:"#f2b94b"}}>知识梳理与分享</span>
      的大本营，如果能帮助到有需要的人，那便更好了。

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


  useEffect(()=>{
    (function x(){
      setTimeout(()=>{
        changeItem(document.querySelectorAll('.midContainer')[0])
        changeItem(document.querySelectorAll('.midContainer')[1])
        idx = (idx+1)%3

        x()
      },2000)
    })()
  },[])

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
        <AdaptiveContainer width="58%" height="200px" child={leader} bgi="https://pic.imgdb.cn/item/63d5c4f5face21e9ef9806b4.jpg"></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="58%" height="300px" child={lol} bgi="https://pic.imgdb.cn/item/63d5c4f9face21e9ef980cc0.jpg"></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="37%" height="300px" child={like} bgi="https://pic.imgdb.cn/item/63d5c4f5face21e9ef980677.png"></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="97%" height="400px" child={why}></AdaptiveContainer>
      </div>
    </div>



  </>)
}
export default Welcome