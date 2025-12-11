// 学校和专业数据结构
// 修改这个对象来添加你的学院和专业信息
const SCHOOLS_DATA = [
    {
        id: 'engineering',
        name: '工程学院',
        emoji: '🏗️',
        description: '计算机、电子、机械等工程专业',
        majors: [
            {
                name: '计算机科学与技术',
                description: '学习编程、算法、数据结构等核心课程',
                githubRepo: 'https://github.com/your-org/cse-review',
                color: '#3498db'
            },
            {
                name: '软件工程',
                description: '掌握软件开发流程和最佳实践',
                githubRepo: 'https://github.com/your-org/software-engineering-review',
                color: '#2980b9'
            },
            {
                name: '电子信息工程',
                description: '电路、信号处理、通信技术',
                githubRepo: 'https://github.com/your-org/electronics-review',
                color: '#27ae60'
            },
            {
                name: '机械工程',
                description: '机械设计、制造、自动化',
                githubRepo: 'https://github.com/your-org/mechanical-engineering-review',
                color: '#e74c3c'
            }
        ]
    },
    {
        id: 'science',
        name: '理学院',
        emoji: '🔬',
        description: '数学、物理、化学等基础科学',
        majors: [
            {
                name: '数学与应用数学',
                description: '高等数学、线性代数、概率统计',
                githubRepo: 'https://github.com/your-org/mathematics-review',
                color: '#9b59b6'
            },
            {
                name: '物理学',
                description: '理论物理、实验物理',
                githubRepo: 'https://github.com/your-org/physics-review',
                color: '#e67e22'
            },
            {
                name: '化学',
                description: '有机化学、无机化学、分析化学',
                githubRepo: 'https://github.com/your-org/chemistry-review',
                color: '#1abc9c'
            }
        ]
    },
    {
        id: 'liberal-arts',
        name: '文学院',
        emoji: '📚',
        description: '中文、英文、历史等人文学科',
        majors: [
            {
                name: '中文学',
                description: '中国古典文学、现代文学',
                githubRepo: 'https://github.com/your-org/chinese-literature-review',
                color: '#c0392b'
            },
            {
                name: '英文学',
                description: '英美文学、语言学、翻译',
                githubRepo: 'https://github.com/your-org/english-literature-review',
                color: '#2980b9'
            },
            {
                name: '历史学',
                description: '中国史、世界史、史学理论',
                githubRepo: 'https://github.com/your-org/history-review',
                color: '#8e44ad'
            }
        ]
    },
    {
        id: 'business',
        name: '商学院',
        emoji: '💼',
        description: '会计、金融、管理等商科专业',
        majors: [
            {
                name: '会计学',
                description: '财务会计、管理会计、审计',
                githubRepo: 'https://github.com/your-org/accounting-review',
                color: '#16a085'
            },
            {
                name: '金融学',
                description: '投资学、金融市场、风险管理',
                githubRepo: 'https://github.com/your-org/finance-review',
                color: '#27ae60'
            },
            {
                name: '工商管理',
                description: '企业管理、市场营销、战略管理',
                githubRepo: 'https://github.com/your-org/business-administration-review',
                color: '#f39c12'
            },
            {
                name: '经济学',
                description: '微观经济学、宏观经济学、计量经济学',
                githubRepo: 'https://github.com/your-org/economics-review',
                color: '#e74c3c'
            }
        ]
    },
    {
        id: 'law',
        name: '法学院',
        emoji: '⚖️',
        description: '法律学科，培养法律人才',
        majors: [
            {
                name: '法学',
                description: '民法、刑法、商法、国际法',
                githubRepo: 'https://github.com/your-org/law-review',
                color: '#2c3e50'
            },
            {
                name: '知识产权法',
                description: '专利法、著作权、商标法',
                githubRepo: 'https://github.com/your-org/intellectual-property-review',
                color: '#34495e'
            }
        ]
    },
    {
        id: 'medicine',
        name: '医学院',
        emoji: '⚕️',
        description: '医学、护理等医疗相关专业',
        majors: [
            {
                name: '医学',
                description: '临床医学、基础医学、医学化学',
                githubRepo: 'https://github.com/your-org/medicine-review',
                color: '#c0392b'
            },
            {
                name: '护理学',
                description: '护理学基础、临床护理',
                githubRepo: 'https://github.com/your-org/nursing-review',
                color: '#e74c3c'
            }
        ]
    }
];

// 导出数据供script.js使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SCHOOLS_DATA;
}
