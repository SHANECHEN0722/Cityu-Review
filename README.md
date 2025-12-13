<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->

<p align="center">
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/"><img src="https://img.shields.io/github/stars/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Stargazers"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/network/members"><img src="https://img.shields.io/github/forks/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Forks"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors"><img src="https://img.shields.io/github/contributors/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Contributors"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues"><img src="https://img.shields.io/github/issues/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Issues"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="MIT License"></a>
    <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh"><img src="https://img.shields.io/badge/License-CC_BY_4.0-lightblue.svg?style=for-the-badge&label=license" alt="CC BY-SA 4.0"></a>
    <a href="https://shanechen0722.github.io/Cityu-Review/"><img src="https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github" alt="GitHub Pages"></a>
    <a href="mailto:dieael_chenxian@163.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
</p>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">CityU Review Hub</h1>

  <p align="center">
    <strong>香港城市大学学习资源导航平台</strong>
    <br />
    一个专为香港城市大学学生设计的学习资源导航网站，帮助学生快速找到各专业的复习资料。
    <br />
    <br />
    <a href="https://shanechen0722.github.io/Cityu-Review/"><strong>🌐 在线访问 »</strong></a>
    <br />
    <br />
    <a href="#-如何贡献你的专业复习资料">📝 贡献指南</a>
    &middot;
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues/new">🐛 报告问题</a>
    &middot;
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues/new?labels=enhancement">💡 功能建议</a>
  </p>

  <p align="center">
    <a href="README.md">中文</a> · <a href="README.en.md">English</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📋 目录</summary>
  <ol>
    <li><a href="#-项目简介">📖 项目简介</a></li>
    <li><a href="#-功能特性">✨ 功能特性</a></li>
    <li><a href="#-如何贡献你的专业复习资料">🤝 如何贡献你的专业复习资料</a></li>
    <li><a href="#-项目结构">📁 项目结构</a></li>
    <li><a href="#-参与贡献">🤝 参与贡献</a></li>
    <li><a href="#-许可证">📜 许可证</a></li>
    <li><a href="#-致谢">🙏 致谢</a></li>
    <li><a href="#-联系我">📞 联系我</a></li>
  </ol>
</details>

---

## 📖 项目简介

CityU Review Hub 是一个开源的学习资源导航平台，旨在为香港城市大学的学生提供：

- 🎓 **全专业覆盖** - 涵盖所有学院的本科和研究生专业
- 🔍 **智能搜索** - 快速定位学院和专业资源
- 📚 **资源整合** - 统一的GitHub仓库导航入口
- 🤝 **社区驱动** - 由学生为学生创建和维护

<p align="right"><a href="#readme-top">回到顶部</a></p>

## ✨ 功能特性

- **学位分类浏览** - 支持本科生(UG)和研究生(PG)资源分类
- **实时搜索过滤** - 按学院名称、专业名称实时筛选
- **响应式设计** - 完美适配桌面端和移动设备

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 🤝 如何贡献你的专业复习资料

### 📚 第一步：创建你的专业复习仓库

#### 选项 A：使用模板仓库（推荐）⭐

最快最简单的方式：

1. **前往模板仓库**
   - 访问：[cityu-review-template](https://github.com/SHANECHEN0722/cityu-review-template)

2. **点击 "Use this template"**
   - 选择 "Create a new repository"
   - 命名格式：`cityu-[专业简称]-review`
   - 例如：`cityu-cs-review`, `cityu-bba-review`

#### 选项 B：手动创建仓库

如果你想自己从零开始或自定义结构：

1. **在GitHub上创建新仓库**
   ```
   仓库名建议格式：cityu-[专业简称]-review
   例如：cityu-cs-review, cityu-bba-review
   ```

2. **推荐的仓库结构**
   ```
   cityu-[专业简称]-review/
   ├── README.md                          # 专业总览和使用指南
   ├── 📋 专业信息/
   │   ├── course-selection-guide.md      # 选课指南和建议
   │   └── professor-reviews.md           # 教授评价和推荐
   │
   ├── 📚 核心课程/
   │   └── [课程代码]-[课程名称]/
   │       ├── 📖 course_files/
   │       │   ├── lecture/               # lecture课件
   │       │   ├── tutorial/              # tutorial资料
   │       │   └── others/                # 其他资源
   │       ├── 📋 homework/
   │       │   ├── assignments/           # 作业题目和解答
   │       │   ├── paper_report/          # 论文报告
   │       │   └── project/               # 课终项目
   │       └── 🎯 review/
   │           ├── past-papers/           # 历年试题
   │           ├── review/                # 课程复习
   │           └── cheat_sheet/           # 速查表
   │
   ├── 🏢 实习求职/ (可选)
   │   ├── internship-guide.md
   │   ├── resume-templates/
   │   ├── interview-prep/
   │   └── career-paths.md
   │
   └── 🛠️ 工具资源/ (可选)
       ├── software-tools.md
       ├── online-platforms.md
       └── study-apps.md
   ```

### 🔗 第二步：将你的仓库添加到导航

1. **Fork这个项目**
2. **找到你的专业位置** - 打开 `data.js` 文件，找到你的专业
3. **修改GitHub链接**
   ```javascript
   {
       name: 'BSc Computer Science',
       type: 'ug',
       description: '计算机科学理学士',
       githubRepo: 'https://github.com/你的用户名/你的仓库名', // 修改这里
       color: '#0A84FF'
   }
   ```
4. **提交Pull Request**

### 💡 贡献建议

- ✅ 课程笔记和总结
- ✅ 作业题目和参考答案  
- ✅ 学习心得和经验分享
- ✅ 选课建议和教授评价
- ✅ 实习和求职经验

**让我们一起建设CityU最全面的学习资源库！** 🚀

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 📁 项目结构

```
Cityu-Review/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 交互逻辑
├── data.js             # 数据源
├── package.json        # 项目配置
└── README.md           # 项目文档
```

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 🤝 参与贡献

贡献是开源社区的核心！我们欢迎一切形式的贡献！

请参考 [详细贡献指南](#-如何贡献你的专业复习资料) 开始您的贡献。

**快速开始：**
1. Fork 项目
2. 新建分支：`git checkout -b feature/YourFeature`
3. 提交更改：`git commit -m 'Add YourFeature'`
4. 推送分支：`git push origin feature/YourFeature`
5. 发起 Pull Request

<details open>
  <summary>🖋 可以为 CityU Review Hub 贡献的内容</summary>

#### 📚 **学习资源**
- 提交课程复习资料、作业解答和学习心得。
- 增加或修正专业信息、选课建议和教授评价。
- 分享实习经验、求职心得和职业规划建议。

#### 🎨 **界面优化**
- 改进页面布局与用户界面，提升用户体验。
- 添加新的功能模块或优化现有功能。

#### 🖥 **技术改进**
- 修复 Bug，提升网站性能和稳定性。
- 开发新功能，如高级搜索、数据可视化等。

#### 💬 **建议与反馈**
- 提出新功能或改进建议。
- 分享使用体验，帮助改进平台功能。

</details>

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 👨‍💻 贡献者

感谢所有为 **CityU Review Hub** 作出贡献的人！[【参与贡献】](#-参与贡献)

<a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SHANECHEN0722/Cityu-Review" alt="贡献者列表" />
</a>

**项目维护者：** [Xian Chen](https://github.com/SHANECHEN0722)

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 📜 许可证

本项目的代码基于 [MIT License](LICENSE) 许可协议，内容部分遵循 [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。

### 📝 代码许可 - MIT License

本项目所有**代码**部分（包括 HTML、CSS、JavaScript 等）遵循 [MIT License](LICENSE)。

根据 MIT License，您可以：
- ✅ 自由使用、修改和分发代码
- ✅ 在商业项目中使用
- ✅ 在专有软件中使用

**条件**：保留原始版权声明和许可证文本

### 📚 内容许可 - CC-BY-SA 4.0

本项目所有**正文内容**（包括课程资料、学习指南等）遵循 [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.zh) 许可协议。

根据 CC-BY-SA 4.0，您可以：
- ✅ 自由复制、修改和分发内容
- ✅ 用于任何目的（包括商业用途）

**条件**：
- 📌 必须提供署名（标注本项目："CityU Review Hub"）
- 🔗 保留原作品链接和原出处作者版权信息
- 🔄 衍生作品必须使用相同的许可证 (CC-BY-SA 4.0)

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 🙏 致谢

- 感谢香港城市大学提供的教育资源
- 感谢所有贡献学习资料的同学们

<p align="right"><a href="#readme-top">回到顶部</a></p>

## 📞 联系我

如果您在使用中遇到问题，或者有任何反馈，欢迎通过以下方式与我们取得联系：

[![GitHub Issues](https://img.shields.io/badge/GitHub-Submit%20Issue-green?logo=github&style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/issues)
[![Email](https://img.shields.io/badge/Email-dieael__chenxian%40163.com-orange?logo=gmail&style=flat-square)](mailto:dieael_chenxian@163.com)

<p align="right"><a href="#readme-top">回到顶部</a></p>

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我一个Star！**

Made with ❤️ by [Xian Chen](https://github.com/SHANECHEN0722)

</div>
