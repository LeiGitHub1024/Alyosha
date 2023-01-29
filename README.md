# Alyosha
个人主站: https://www.alyosha.top



## 开发日志

### 2023.1.29 更新图床
  - 小图直接本地编辑成字符串，
  - 大图存储到 https://www.superbed.cn/admin ，绑定了微信登录，进而提升访问速度。
  - 更新网站图标，来自：https://www.logosc.cn/logo/?s=%E7%8C%B4%E5%AD%90
  - 更新footer
### 2023.1.20-25 参考张洪Heo,样式全面升级:
  - 欢迎页基本全部构建完成。感谢张洪Heo，提供了很多思路。
  - 新增google analytics，统计网站访问情况
  - 参考张洪Heo，优化网页外观(完成欢迎页初稿)
  - 更新了他山之石板块，新增许多好东西。
  - 配置markdown
### 2023.1.17-18 工程化实践改进
  - “图片不压缩，前端要背锅”，新增tiny png，在需要的时候命令行 npx tiny ，之后按照提示将目标文件中中所有图像资源进行压缩。
  - 优化移动端样式，导航栏移动端适配。
  - 新增一键发布脚本 p.sh
  - 更新了一些文章，改进了基本样式。
### 2023.1.11-13 构建项目
  - 更改域名：alyosha.top, 删除 vite.config.ts 中的 base:"/Alyosha/"（原本是用来解决js和css404，换了域名不需要了）
  - build: 构建项目，使用npm vite react ts arco-design
