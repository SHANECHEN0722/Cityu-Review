# 城市大学题库导览网站

一个为学校题库资料创建的导览网站，帮助学生找到自己专业的GitHub复习资料仓库。

## 📚 功能特性

- **学院导航** - 展示各个学院和专业
- **搜索功能** - 快速搜索学院和专业
- **GitHub链接** - 直接链接到各专业的复习资料仓库
- **响应式设计** - 完美适配移动设备和桌面端
- **现代化UI** - 美观的卡片设计和交互体验

## 🚀 快速开始

### 本地运行

1. 克隆或下载此项目
2. 用浏览器打开 `index.html` 文件即可

### 自定义数据

编辑 `data.js` 文件来修改学院和专业信息：

```javascript
const SCHOOLS_DATA = [
    {
        id: 'engineering',
        name: '工程学院',
        emoji: '🏗️',
        description: '描述文本',
        majors: [
            {
                name: '专业名称',
                description: '专业描述',
                githubRepo: 'https://github.com/your-org/repo-name',
                color: '#3498db'
            }
        ]
    }
    // 添加更多学院...
];
```

## 📂 项目结构

```
.
├── index.html          # 主页面
├── styles.css          # 样式表
├── script.js           # 交互逻辑
├── data.js             # 学院和专业数据
└── README.md           # 本文件
```

## 🎯 使用步骤

1. **修改学院数据** - 在 `data.js` 中添加你的学院和专业
2. **配置GitHub链接** - 确保每个专业都有对应的GitHub仓库链接
3. **部署网站** - 可以使用GitHub Pages、Netlify等免费托管服务
4. **分享链接** - 将导览网站链接分享给学生

## 🔧 部署方案

### GitHub Pages 部署（推荐）

1. 创建一个GitHub仓库，名为 `github-用户名.github.io`
2. 将项目文件上传到仓库
3. 在仓库设置中启用 GitHub Pages
4. 访问 `https://github-用户名.github.io` 即可

### 或创建普通仓库

1. 创建任何名称的GitHub仓库
2. 在仓库设置中启用 GitHub Pages（选择main分支）
3. 访问提供的Pages URL

## 💡 使用建议

### 数据管理

- **学院数量**: 可添加任意数量的学院
- **专业数量**: 建议每个学院 3-8 个专业（保持界面整洁）
- **颜色配置**: 修改 `color` 字段自定义卡片颜色

### GitHub仓库结构建议

每个专业对应的仓库可以包含：

```
repository/
├── README.md              # 专业介绍
├── courses/               # 各课程文件夹
│   ├── 课程1/
│   │   ├── 笔记.md
│   │   ├── 练习题/
│   │   └── 考试重点.md
│   └── 课程2/
├── exams/                 # 历年试题
│   └── 2024-spring.pdf
└── resources/             # 学习资源链接等
```

## 🌐 搜索功能

网站包含实时搜索，可搜索：
- 学院名称
- 学院描述
- 专业名称
- 专业描述

搜索不区分大小写，支持模糊匹配。

## ⌨️ 键盘快捷键

- **ESC** - 从专业列表返回学院列表

## 🎨 自定义样式

修改 `styles.css` 中的 CSS 变量来更改网站风格：

```css
:root {
    --primary-color: #2c3e50;        /* 主要颜色 */
    --secondary-color: #3498db;      /* 次要颜色 */
    --accent-color: #e74c3c;         /* 强调颜色 */
    /* ... 更多变量 */
}
```

## 📱 兼容性

- ✅ 现代浏览器（Chrome, Firefox, Safari, Edge）
- ✅ 移动设备（iOS, Android）
- ✅ 旧版浏览器（有基础支持）

## 🤝 贡献

欢迎提交Issue或Pull Request来改进项目！

## 📝 许可证

MIT License - 自由使用和修改

## 📧 联系方式

如有问题，欢迎提交Issue讨论。

---

**提示**: 记得定期更新 `data.js` 中的专业信息和GitHub链接，确保学生能找到最新的复习资料！
