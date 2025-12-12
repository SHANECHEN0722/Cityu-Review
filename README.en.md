<div align="center">

# CityU Review Hub

**Study Resource Navigation Platform for City University of Hong Kong**

[![GitHub stars](https://img.shields.io/github/stars/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/network)
[![GitHub issues](https://img.shields.io/github/issues/SHANECHEN0722/Cityu-Review?style=flat-square)](https://github.com/SHANECHEN0722/Cityu-Review/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

*A study resource navigation platform designed for City University of Hong Kong students, helping you quickly find review materials across all academic programs.*

[🌐 Live Demo](https://shanechen0722.github.io/Cityu-Review/) · [📝 Contribution Guide](#-how-to-contribute-your-program-study-materials) · [🐛 Report Issue](https://github.com/SHANECHEN0722/Cityu-Review/issues)

</div>

---

## 📖 About This Project

CityU Review Hub is an open-source learning resource navigation platform dedicated to serving City University of Hong Kong students by providing:

- 🎓 **Full Program Coverage** - Covering all undergraduate and postgraduate programs across all schools
- 🔍 **Smart Search** - Quickly locate resources for your school and program
- 📚 **Resource Integration** - Unified GitHub repository navigation hub
- 🤝 **Community Driven** - Created and maintained by students for students

## ✨ Key Features

- **Degree Classification** - Browse by Undergraduate (UG) and Postgraduate (PG) programs
- **Real-time Search & Filter** - Filter by school name and program name instantly
- **Responsive Design** - Works perfectly on desktop and mobile devices
- **Modern UI** - Apple Design inspired user experience

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

## 📁 Project Structure

```
Cityu-Review/
├── index.html          # Main page
├── styles.css          # Styling
├── script.js           # Interaction logic
├── data.js             # Data source
├── h.html              # Coming soon page
└── README.md           # Project documentation (Chinese)
```

## 🤝 Contributing

We welcome all forms of contribution! Please check the [Contribution Guide](#-how-to-contribute-your-program-study-materials) for details.

## Contributors

<a href="https://github.com/SHANECHEN0722/Cityu-Review/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SHANECHEN0722/Cityu-Review" />
</a>

## Maintainers

[Xian Chen](https://github.com/SHANECHEN0722)

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Thank you City University of Hong Kong for providing educational resources
- Thank you to all students who contribute study materials

## 📞 Contact

- 📧 Email: [dieael_chenxian@163.com](mailto:dieael_chenxian@163.com)
- 💬 Issues: [GitHub Issues](https://github.com/SHANECHEN0722/Cityu-Review/issues)
- 🐛 Bug Report: [Report a Bug](https://github.com/SHANECHEN0722/Cityu-Review/issues/new)

---

<div align="center">

**⭐ If this project helps you, please give it a Star!**

❤️ Xian Chen

</div>
