// 学校和专业数据结构
// type: 'ug' 代表本科 (Undergraduate), 'pg' 代表研究生 (Postgraduate)
const SCHOOLS_DATA = [
    {
        id: 'engineering',
        name: '工程学院',
        emoji: '🏗️',
        description: '计算机、电子、机械等工程专业',
        majors: [
            // === 本科生专业 ===
            {
                name: '计算机科学 (BSc)',
                type: 'ug',
                description: '本科核心课程：CS101, 数据结构, 算法导论',
                githubRepo: 'https://github.com/your-org/cs-bachelor',
                color: '#3498db'
            },
            {
                name: '电子工程 (BEng)',
                type: 'ug',
                description: '电路基础, 信号与系统, 嵌入式开发',
                githubRepo: 'https://github.com/your-org/ee-bachelor',
                color: '#27ae60'
            },
            {
                name: '机械工程 (BEng)',
                type: 'ug',
                description: '工程力学, 机械设计基础',
                githubRepo: 'https://github.com/your-org/mech-bachelor',
                color: '#e74c3c'
            },
            // === 研究生专业 ===
            {
                name: '计算机科学 (MSc)',
                type: 'pg',
                description: '高级算法, 分布式系统, 深度学习',
                githubRepo: 'https://github.com/your-org/cs-master',
                color: '#2980b9'
            },
            {
                name: '电子资讯工程 (MSc)',
                type: 'pg',
                description: '高频电路, 现代通信网络设计',
                githubRepo: 'https://github.com/your-org/eie-master',
                color: '#16a085'
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
                name: '应用数学 (BSc)',
                type: 'ug',
                description: '微积分, 线性代数, 概率统计',
                githubRepo: 'https://github.com/your-org/math-ug',
                color: '#9b59b6'
            },
            {
                name: '应用物理 (BSc)',
                type: 'ug',
                description: '量子力学导论, 光学',
                githubRepo: 'https://github.com/your-org/phy-ug',
                color: '#e67e22'
            },
            {
                name: '数据科学 (MSc)',
                type: 'pg',
                description: '大数据分析, 统计学习方法',
                githubRepo: 'https://github.com/your-org/ds-pg',
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
                name: '工商管理 (BBA)',
                type: 'ug',
                description: '市场营销, 组织行为学',
                githubRepo: 'https://github.com/your-org/bba-ug',
                color: '#f39c12'
            },
            {
                name: '金融学 (BBA)',
                type: 'ug',
                description: '公司金融, 投资学基础',
                githubRepo: 'https://github.com/your-org/fin-ug',
                color: '#27ae60'
            },
            {
                name: 'MBA',
                type: 'pg',
                description: '高级管理实务, 战略决策',
                githubRepo: 'https://github.com/your-org/mba',
                color: '#d35400'
            },
            {
                name: '金融工程 (MSc)',
                type: 'pg',
                description: '衍生品定价, 风险管理模型',
                githubRepo: 'https://github.com/your-org/fe-pg',
                color: '#c0392b'
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
                name: '法学 (LLB)',
                type: 'ug',
                description: '宪法, 刑法, 合同法',
                githubRepo: 'https://github.com/your-org/llb',
                color: '#2c3e50'
            },
            {
                name: '法学硕士 (LLM)',
                type: 'pg',
                description: '国际商法, 仲裁法, 知识产权进阶',
                githubRepo: 'https://github.com/your-org/llm',
                color: '#34495e'
            }
        ]
    }
];

// 导出数据供 script.js 使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SCHOOLS_DATA;
}