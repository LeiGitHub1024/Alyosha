import React from "react";
import AdaptiveContainer from "../../commonComponents/adaptiveContainer";
import "./style.less"

const Welcome = ()=>{
  const welcome = (
    <div>
      <div className="font16">你好，欢迎光临阿廖沙的小屋</div>
      <div className="font36"> 我是 阿廖沙</div>
      <div className="font16">是一名 前端工程师、辩证唯物主义爱好者</div>
    </div>
  )
  const dream = (
    <div>
      <div className="font12">梦想</div>
      <div className="font36">全世界无产者<br/>联合起来</div>
    </div>
  )

  const skills = (
    <div>
      <div className="font12">技能</div>
      <div className="font36">xxxx</div>

      <div style={{height:'250px',backgroundColor:'green'}}>js/html/css3/ps/react/ts</div>
      
    </div>
  )
  const life = (
    <div>
      <div className="font12">生涯</div>
      <div className="font36">终生学习</div>

      <div style={{height:"250px", backgroundColor:'yellow'}}>
        2016-》2020-》现在
        <br></br>

        DLUT -》 BUPT -》？
        <br></br>
        Bytedance 
      </div>
     

    </div>
  )
  const motto = (
    <div>
      <div className="font12">座右铭</div>
      <div className="font36">You Only <br></br> live Once</div>
    </div>
  )
  const leader = (
    <div>
      <div className="font12">导师</div>
      <div className="font36" style={{height:'80px'}}>切格瓦拉</div>

      <div className="font16">直到最后的胜利！</div>

      
    </div>
  )
  const lol = (
    <div >
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
    <div>
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

      <div className="font16">
      知识积累与分享，如果能帮助到有需要的人，就更好了。
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
        <AdaptiveContainer width="58%" height="200px" child={leader}></AdaptiveContainer>
      </div>


      <div className="oneRow">
        <AdaptiveContainer width="58%" height="300px" child={lol}></AdaptiveContainer>
        <div className="divider" ></div>
        <AdaptiveContainer width="37%" height="300px" child={like}></AdaptiveContainer>
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