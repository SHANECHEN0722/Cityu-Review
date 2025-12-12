<a id="readme-top"></a>
<!-- PROJECT SHIELDS -->

<p align="center">
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/"><img src="https://img.shields.io/github/stars/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Stargazers"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/network/members"><img src="https://img.shields.io/github/forks/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Forks"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors"><img src="https://img.shields.io/github/contributors/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Contributors"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues"><img src="https://img.shields.io/github/issues/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="Issues"></a>
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/blob/main/LICENSE"><img src="https://img.shields.io/github/license/SHANECHEN0722/Cityu-Review.svg?style=for-the-badge" alt="MIT License"></a>
    <a href="https://shanechen0722.github.io/Cityu-Review/"><img src="https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github" alt="GitHub Pages"></a>
    <a href="mailto:dieael_chenxian@163.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"></a>
</p>

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center">CityU Review Hub</h1>

  <p align="center">
    <strong>Study Resource Navigation Platform for City University of Hong Kong</strong>
    <br />
    A study resource navigation platform designed for City University of Hong Kong students, helping you quickly find review materials across all academic programs.
    <br />
    <br />
    <a href="https://shanechen0722.github.io/Cityu-Review/"><strong>🌐 Live Demo »</strong></a>
    <br />
    <br />
    <a href="#-how-to-contribute-your-program-study-materials">📝 Contribution Guide</a>
    &middot;
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues/new">🐛 Report Issue</a>
    &middot;
    <a href="https://github.com/SHANECHEN0722/Cityu-Review/issues/new?labels=enhancement">💡 Feature Request</a>
  </p>

  <p align="center">
    <a href="README.md">中文</a> · <a href="README.en.md">English</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>📋 Table of Contents</summary>
  <ol>
    <li><a href="#-about-this-project">📖 About This Project</a></li>
    <li><a href="#-key-features">✨ Key Features</a></li>
    <li><a href="#-how-to-contribute-your-program-study-materials">🤝 How to Contribute Your Program Study Materials</a></li>
    <li><a href="#-project-structure">📁 Project Structure</a></li>
    <li><a href="#-contributing">🤝 Contributing</a></li>
    <li><a href="#-license">📜 License</a></li>
    <li><a href="#-acknowledgments">🙏 Acknowledgments</a></li>
    <li><a href="#-contact">📞 Contact</a></li>
  </ol>
</details>

---

## 📖 About This Project

CityU Review Hub is an open-source learning resource navigation platform dedicated to serving City University of Hong Kong students by providing:

- 🎓 **Full Program Coverage** - Covering all undergraduate and postgraduate programs across all schools
- 🔍 **Smart Search** - Quickly locate resources for your school and program
- 📚 **Resource Integration** - Unified GitHub repository navigation hub
- 🤝 **Community Driven** - Created and maintained by students for students

<p align="right"><a href="#readme-top">Back to top</a></p>

## ✨ Key Features

- **Degree Classification** - Browse by Undergraduate (UG) and Postgraduate (PG) programs
- **Real-time Search & Filter** - Filter by school name and program name instantly
- **Responsive Design** - Works perfectly on desktop and mobile devices

<p align="right"><a href="#readme-top">Back to top</a></p>

## 🤝 How to Contribute Your Program Study Materials

### 📚 Step 1: Create Your Program Repository

#### Option A: Use Template Repository (Recommended) ⭐

The fastest and easiest way:

1. **Visit the Template Repository**
   - Go to: [cityu-review-template](https://github.com/SHANECHEN0722/cityu-review-template)

2. **Click "Use this template"**
   - Select "Create a new repository"
   - Naming format: `cityu-[program-code]-review`
   - Examples: `cityu-cs-review`, `cityu-bba-review`

#### Option B: Create Repository Manually

If you prefer to start from scratch or customize the structure:

1. **Create a New Repository on GitHub**
   ```
   Recommended naming format: cityu-[program-code]-review
   Examples: cityu-cs-review, cityu-bba-review
   ```

2. **Recommended Repository Structure**
   ```
   cityu-[program-code]-review/
   ├── README.md                          # Program overview and guide
   ├── 📋 Program Info/
   │   ├── course-selection-guide.md      # Course selection advice
   │   └── professor-reviews.md           # Professor reviews and recommendations
   │
   ├── 📚 Core Courses/
   │   └── [course-code]-[course-name]/
   │       ├── 📖 course_files/
   │       │   ├── lecture/               # Lecture slides & notes
   │       │   ├── tutorial/              # Tutorial materials
   │       │   └── others/                # Other resources
   │       ├── 📋 homework/
   │       │   ├── assignments/           # Assignment problems & solutions
   │       │   ├── paper_report/          # Papers & reports
   │       │   └── project/               # Course projects
   │       └── 🎯 review/
   │           ├── past-papers/           # Past exam papers
   │           ├── review/                # Course review materials
   │           └── cheat_sheet/           # Quick reference sheets
   │
   ├── 🏢 Internship & Career/ (Optional)
   │   ├── internship-guide.md
   │   ├── resume-templates/
   │   ├── interview-prep/
   │   └── career-paths.md
   │
   └── 🛠️ Tools & Resources/ (Optional)
       ├── software-tools.md
       ├── online-platforms.md
       └── study-apps.md
   ```

### 🔗 Step 2: Add Your Repository to the Navigation

1. **Fork this Project**
2. **Find Your Program** - Open the `data.js` file and locate your program
3. **Update GitHub Link**
   ```javascript
   {
       name: 'BSc Computer Science',
       type: 'ug',
       description: 'Computer Science (Honours)',
       githubRepo: 'https://github.com/your-username/your-repo-name', // Update here
       color: '#0A84FF'
   }
   ```
4. **Submit a Pull Request**

### 💡 Contribution Ideas

- ✅ Course notes and summaries
- ✅ Assignment problems and solutions
- ✅ Learning experiences and insights
- ✅ Course selection advice and professor reviews
- ✅ Internship and career experience

**Let's build the most comprehensive CityU study resource library together!** 🚀

<p align="right"><a href="#readme-top">Back to top</a></p>

## 📁 Project Structure

```
Cityu-Review/
├── index.html          # Main page
├── styles.css          # Styling
├── script.js           # Interaction logic
├── data.js             # Data source
├── package.json        # Project configuration
└── README.md           # Project documentation
```

<p align="right"><a href="#readme-top">Back to top</a></p>

## 🤝 Contributing

Contributions are what make the open source community such an amazing place! We welcome all forms of contribution!

Please refer to our [detailed contribution guide](#-how-to-contribute-your-program-study-materials) to get started.

**Quick Start:**
1. Fork the Project
2. Create your Feature Branch: `git checkout -b feature/YourFeature`
3. Commit your Changes: `git commit -m 'Add YourFeature'`
4. Push to the Branch: `git push origin feature/YourFeature`
5. Open a Pull Request

<details open>
  <summary>🖋 Ways to Contribute to CityU Review Hub</summary>

#### 📚 **Academic Resources**
- Submit course review materials, assignment solutions, and study insights.
- Add or correct program information, course selection advice, and professor reviews.
- Share internship experiences, job hunting tips, and career planning advice.

#### 🎨 **Interface Improvements**
- Improve page layout and user interface for better user experience.
- Add new feature modules or optimize existing functionality.

#### 🖥 **Technical Enhancements**
- Fix bugs and improve website performance and stability.
- Develop new features like advanced search, data visualization, etc.

#### 💬 **Suggestions & Feedback**
- Propose new features or improvement suggestions.
- Share user experience to help improve platform functionality.

</details>

<p align="right"><a href="#readme-top">Back to top</a></p>

## 👨‍💻 Contributors

Thanks to all the people who have contributed to **CityU Review Hub**! [【Join Us】](#-contributing)

<a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SHANECHEN0722/Cityu-Review" alt="Contributors" />
</a>

**Project Maintainer:** [Xian Chen](https://github.com/SHANECHEN0722)

<p align="right"><a href="#readme-top">Back to top</a></p>

## 📜 License

This project uses code licensed under [MIT License](LICENSE) and content licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

### 📝 Code License - MIT License

All **code** components in this project (including HTML, CSS, JavaScript, etc.) are licensed under the [MIT License](LICENSE).

The **MIT License** allows you to freely use, modify, and distribute the code, provided you retain the original copyright notice.

Under the MIT License, you may:
- ✅ Freely use, modify, and distribute the code
- ✅ Use in commercial projects
- ✅ Use in proprietary software

**Requirement**: Retain the original copyright notice and license text

### 📚 Content License - CC-BY-SA 4.0

All **textual content** in this project (including course materials, study guides, etc.) is licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

The **CC-BY-SA 4.0** license allows you to freely copy, modify, and distribute this content, provided you give credit to **CityU Review Hub**, preserve links to the original work and author copyright information, and use the same license for derivative works.

Under the CC-BY-SA 4.0 License, you may:
- ✅ Freely copy, modify, and distribute the content
- ✅ Use for any purpose (including commercial)

**Requirements**:
- 📌 Must provide attribution (credit "CityU Review Hub")
- 🔗 Preserve original work links and author copyright information
- 🔄 Derivative works must use the same license (CC-BY-SA 4.0)

<p align="right"><a href="#readme-top">Back to top</a></p>

## 🙏 Acknowledgments

- This project references content from [CityU 手册](https://github.com/penjc/CityU). Thank you for the open-source contribution.
- Thank you City University of Hong Kong for providing educational resources
- Thank you to all students who contribute study materials

<p align="right"><a href="#readme-top">Back to top</a></p>

## 📞 Contact

If you encounter any issues or have feedback, feel free to reach out through the following channels:

[![GitHub Issues](https://img.shields.io/badge/GitHub-Submit%20Issue-green?logo=github&style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/issues)
[![Email](https://img.shields.io/badge/Email-dieael__chenxian%40163.com-orange?logo=gmail&style=flat-square)](mailto:dieael_chenxian@163.com)

<p align="right"><a href="#readme-top">Back to top</a></p>

---

<div align="center">

**⭐ If this project helps you, please give it a Star!**

Made with ❤️ by [Xian Chen](https://github.com/SHANECHEN0722)

</div>
