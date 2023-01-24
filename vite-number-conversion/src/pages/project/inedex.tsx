import React from "react";
import CommonCard from "../../commonComponents/commonCard";
import StyledLink from "../../commonComponents/styledLink";
import { getFullPath } from "../../uitls/imagePath";


const Project = ()=>{
  const usefulProject = [
    <StyledLink  title="真心话与大冒险" desc="清新健康的真心话大冒险" icon={getFullPath("icons/truth.png")} link="https://leigithub1024.github.io/CrazyAdventure/"></StyledLink>,
    <StyledLink  title="放松眼睛" desc="锻炼眼部肌肉，放松眼睛" icon={getFullPath("icons/greenball.png")} link="https://leigithub1024.github.io/GreenBall/"></StyledLink>,
    <StyledLink  title="捕鱼达人" desc="统计Chrome浏览器访问时间" icon={getFullPath("icons/fish.png")} link="https://chrome.google.com/webstore/detail/%E6%8D%95%E9%B1%BC%E8%BE%BE%E4%BA%BA/ofhlacmjhfeiecmgemiodedmpfckoomd"></StyledLink>,
  ]
  const interestingProject = [
    <StyledLink title="奇妙相机" desc="(手机)无需权限访问用户相机" icon={getFullPath("icons/camera.png")} link="https://leigithub1024.github.io/openMyCamera/"></StyledLink>,

  ]
  return (<div>
    <CommonCard title='实用项目' links={usefulProject} ></CommonCard>
    <CommonCard title='有趣的项目' links={interestingProject} ></CommonCard>

  </div>)
}
export default Project