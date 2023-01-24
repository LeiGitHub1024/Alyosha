import React from "react";
import AdaptiveContainer from "../../commonComponents/adaptiveContainer";
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
      {/* <div className="font12">！</div> */}
      <div className="font36">
        <div> <span>You </span> &nbsp; <span>Only</span></div>
        <div> <span>Live</span> &nbsp; <span id='once'>Once</span></div>
    </div>
    </div>
  )

  const skills = (
    <div>
      <div className="font12">技能</div>
      <div className="font36">xxxx</div>

      <div style={{height:'250px',backgroundColor:'green'}}>制作中......js/html/css3/ps/react/ts</div>
      
    </div>
  )
  const life = (
    <div>
      <div className="font12">生涯</div>
      <div className="font36">终生学习</div>
      <div id="example">
          <div><span className="cycle" style={{backgroundColor:'rgb(256,96,31)'}}> &nbsp;</span> DLUT，大连理工大学，数字媒体技术</div>
          <div><span className="cycle" style={{backgroundColor:'rgb(53,227,226)'}}>&nbsp;</span> BUPT，北京邮电大学，计算机 </div>
          <div><span className="cycle" style={{backgroundImage:'linear-gradient(120deg, rgb(53,136,252) 0%, rgb(42,175,184) 100%)'}}>&nbsp;</span> B.D.（Bytedance），字节跳动，测试开发/前端实习 </div>
      </div>


      <div className="growth" style={{backgroundImage:`url(${getFullPath('backgrounds/growth.png')})`}}></div>
    </div>
  )
  const motto = (
    <div>
      {/* <div className="font12">座右铭</div> */}
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

      {/* （稻草人） */}
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <div>
          <div className="icon-pos-jungle"></div>
          <div className="icon-pos-mid"></div>
        </div>
        <div style={{}}>艾欧尼亚</div>
      </div>
      

      {/* 野中 艾欧尼亚/比尔吉沃特 */}
    </div>
  )
  const like = (
    <div id="bingbing">
      <div className="font12">喜欢</div>
      <div className="font36" style={{height:'180px'}}>王冰冰</div>
      <div className="font16">我的心是冰冰的</div>
    </div>
  )
 
  // const location = (
  //   <div>
  //     中国，北京
  //   </div>
  // )

  // const basicMessage = (
  //   <div>
  //     生于1997
  //     大连理工&北京邮电   软件&计算机
  //     现在职业： 前端工程师
  //   </div>
  // )
  
  const why = (
    <div>
      <div className="font12">初心</div>
      <br></br>
      <div className="font16" style={{height:'110px'}}>
      建站的初心是记录和分享遇到过的有趣项目，如果能恰好帮助到你，那就更好了。
      </div>

    </div>
  )



  return (
    
  <>
    <div id="alyosha">
      阿廖沙的小屋
    </div>
    <div className="bigContainer">
      <div className="oneRow">
        <AdaptiveContainer width="58%" height="180px" child={welcome}></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="36%" height="180px" child={dream}></AdaptiveContainer>
      </div>
      <div className="oneRow">
        <AdaptiveContainer width="47%" height="400px" child={skills}></AdaptiveContainer>
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
      {/* <AdaptiveContainer width="200px" height="200px" child={basicMessage}></AdaptiveContainer> */}
    </div>


    
    {/* <div id='introduction'>
      你好，欢迎光临阿廖沙的小屋。我将在这里分享一些好玩的前端项目和对一些问题的思考。
    </div> */}
  </>)
}
export default Welcome