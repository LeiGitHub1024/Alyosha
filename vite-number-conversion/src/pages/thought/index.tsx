import React from "react";
import StaticContainer from "../../commonComponents/containers/staticContainer";
import LinkCard from "../../commonComponents/cards/LinkCard";
import { getFullPath } from "../../uitls/imagePath";
import FlexContainer from "../../commonComponents/containers/flexContainer";
import ArticleCard from "../../commonComponents/cards/articleCard";
// import che from "../../assets/icons/che.png"
const Thought = ()=>{
  const FE = [
    <ArticleCard title="前端性能指标" introduction="介绍WebVitals的六个核心指标"  imgPath="https://pic.imgdb.cn/item/63d5c504face21e9ef981edf.png" href="https://bytedance.feishu.cn/docx/doxcnVatIi1QFvKbIhHBFtbWnug" ></ArticleCard>,
    <ArticleCard title="优雅获取dom坐标" introduction="使用IntersectionObserver" imgPath="https://pic.imgdb.cn/item/63d5c504face21e9ef981eab.png" href="https://bytedance.feishu.cn/docx/doxcniravL9G0VoNcjBoXnc6bZf" ></ArticleCard>,
    <ArticleCard title="HTML渲染原理" introduction="浏览器解析HTML的原理"  imgPath="https://pic.imgdb.cn/item/63d5c504face21e9ef981e81.png" href="https://leixiaojun.feishu.cn/docx/Lnehd7bA8oUONAxL9Bgcn5n4n6f" ></ArticleCard>,
    <ArticleCard title="原型与原型链" introduction="形象地解释原型与原型链"  imgPath="https://pic.imgdb.cn/item/63d5c504face21e9ef981e6c.png" href="https://leixiaojun.feishu.cn/docx/K29QdwLN7oMICGxCCMTcnGENnLc"></ArticleCard>,
  ]

  const ideas = [
    <ArticleCard  title="共产主义，与我何干？" introduction="话剧《切格瓦拉》观后感"  imgPath="https://pic.imgdb.cn/item/63d5c4f5face21e9ef9806de.png" href="https://mp.weixin.qq.com/s/hIgHFbANkmMtHXtbQvs47w"></ArticleCard>,
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
    <FlexContainer title="实用项目" width='100%' child={FE}></FlexContainer>
    <FlexContainer title='奇思妙想' width='100%' child={ideas} ></FlexContainer>

    
  </div>)
}
export default Thought