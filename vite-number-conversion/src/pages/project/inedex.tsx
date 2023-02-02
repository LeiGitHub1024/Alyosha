import React from "react";
import { getFullPath } from "../../uitls/imagePath";
import ArticleCard from "../../commonComponents/cards/articleCard";
import FlexContainer from "../../commonComponents/containers/flexContainer";
import { UCamera, UFish, UGreen, UTruth } from "../../ImagePaths";


const Project = ()=>{

  return (<div >
    <FlexContainer title="实用项目" width='100%' child={[
          <ArticleCard title="捕鱼达人" introduction="统计Chrome浏览器访问时间" href="https://chrome.google.com/webstore/detail/%E6%8D%95%E9%B1%BC%E8%BE%BE%E4%BA%BA/ofhlacmjhfeiecmgemiodedmpfckoomd" imgPath={UFish} ></ArticleCard>,
          <ArticleCard title="放松眼睛" introduction="锻炼眼部肌肉，放松眼睛" href="https://leigithub1024.github.io/GreenBall/" imgPath={UGreen} ></ArticleCard>,
          <ArticleCard title="真心话与大冒险" introduction="清新健康真心话与大冒险" href="https://leigithub1024.github.io/CrazyAdventure/" imgPath={UTruth}></ArticleCard>,
    ]}></FlexContainer>
    <FlexContainer title="有趣的项目" width='100%' child={[
          <ArticleCard title="奇妙相机" introduction="无需权限访问用户相机（仅移动端生效）" href="https://leigithub1024.github.io/openMyCamera/" imgPath={UCamera} ></ArticleCard>,
    ]}></FlexContainer>
  

  </div>)
}
export default Project