# Alyosha
个人主站: https://www.alyosha.top


# 既往不恋，纵情向前
## 开发日志
### todo
  - 整体性能优化。
  - 上传图像流程优化，图像压缩？用不用图床？
  - PWA系列问题：PWA的背景色目前不会跟着黑暗模式变换而变换。PWA缓存问题。 [PWA指南](https://web.dev/i18n/zh/app-like-pwas/)
  - 他山之石页面一些icon大小有问题。
  - 要不要新增一个博客系统？yhj:你要是想自己写的话，Vue 就推荐用 https://content.nuxtjs.org，React 的就用 https://nextra.site/。https://github.com/tangly1024/NotionNext

### 2023.3.13 文章页构建
- 如何智能加载一个文章列表，每次只管写md文件，不用改其它代码? 详见文章：【撰写中】

### 2023.2.2 发现
- 发现一个好玩的现象，图像>8k的会被当成图片，<8k的直接编译成string了。

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
