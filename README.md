<div align="center">

# CityU Review Hub

**香港城市大学学习资源导航平台**

[![GitHub stars](https://img.shields.io/github/stars/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/network)
[![GitHub issues](https://img.shields.io/github/issues/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

*一个专为香港城市大学学生设计的学习资源导航网站，帮助学生快速找到各专业的复习资料。*

[🌐 在线访问](https://shanechen0722.github.io/Cityu-Review/) · [📝 贡献指南](#-如何贡献你的专业复习资料) · [🐛 报告问题](https://github.com/SHANECHEN0722/Cityu-Review/issues)

</div>

---

## 📖 项目简介

CityU Review Hub 是一个开源的学习资源导航平台，旨在为香港城市大学的学生提供：

- 🎓 **全专业覆盖** - 涵盖所有学院的本科和研究生专业
- 🔍 **智能搜索** - 快速定位学院和专业资源
- 📚 **资源整合** - 统一的GitHub仓库导航入口
- 🤝 **社区驱动** - 由学生为学生创建和维护

## ✨ 功能特性

- **学位分类浏览** - 支持本科生(UG)和研究生(PG)资源分类
- **实时搜索过滤** - 按学院名称、专业名称实时筛选
- **响应式设计** - 完美适配桌面端和移动设备
- **现代化界面** - Apple Design风格的用户体验

## 🤝 如何贡献你的专业复习资料

### 📚 第一步：创建你的专业复习仓库

1. **在GitHub上创建新仓库**
   ```
   仓库名建议格式：cityu-[专业简称]-review
   例如：cityu-cs-review, cityu-bba-review
   ```

2. **推荐的专业仓库结构**
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
   │       │   ├── toturial/              # tutorial资料
   │       │   └── others/               # 其他资源/资料
   │       ├── 📋 homework/
   │       │   ├── assignments/           # 作业题目和解答
   │       │   ├── paper_report/          # 论文报告
   │       │   └── project/             # 课终项目
   │       └── 🎯 review/
   │           ├── past-papers/           # 历年试题
   │           ├── review/                # 课程复习
   │           └── cheat_paper            # dddd
   │
   ├── 🏢 实习求职/
   │   ├── internship-guide.md             # 实习申请指南(可选)
   │   ├── resume-templates/               # 简历模板(可选)
   │   ├── interview-prep/                 # 面试准备(可选)
   │   └── career-paths.md                 # 职业发展路径(可选)
   │
   └── 🛠️ 工具资源/
       ├── software-tools.md               # 专业软件和工具(可选)
       ├── online-platforms.md             # 在线学习平台(可选)
       └── study-apps.md                   # 学习APP推荐(可选)
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

## 🤝 参与贡献

我们欢迎所有形式的贡献！请查看 [贡献指南](#-如何贡献你的专业复习资料) 了解详情。

## Contributors

<a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SHANECHEN0722/Cityu-Review" />
</a>

## Maintainers

[Shane Chen](https://github.com/SHANECHEN0722)

## 📄 开源协议

本项目基于 [MIT License](LICENSE) 开源协议。

## 🙏 致谢

- 感谢香港城市大学提供的教育资源
- 感谢所有贡献学习资料的同学们

## 📞 联系我

- 📧 Email: [dieael_chenxian@163.com](mailto:dieael_chenxian@163.com)
- 💬 Issues: [GitHub Issues](https://github.com/SHANECHEN0722/Cityu-Review/issues)
- 🐛 Bug Report: [报告问题](https://github.com/SHANECHEN0722/Cityu-Review/issues/new)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我一个Star！**

❤️ Xian Chen

</div>
