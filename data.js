/**
 * CityU Review Hub Data Source
 * Comprehensive Database 2025-2026
 * * Data Structure:
 * - type: 'ug' = Undergraduate (Bachelor's)
 * - type: 'pg' = Postgraduate (Master's/Doctoral)
 */

const SCHOOLS_DATA = [
    {
        id: 'computing',
        name: '计算学院',
        emoji: '💻',
        description: 'Computer Science, Data Science, Biostatistics',
        majors: [
            // === Undergraduate ===
            {
                name: 'BSc Computer Science',
                type: 'ug',
                description: '计算机科学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-cs',
                color: '#0A84FF'
            },
            {
                name: 'BSc Creative Media',
                type: 'ug',
                description: '创意媒体理学士 (CS Dept)',
                githubRepo: 'https://github.com/CityU-Review/bsc-cm-cs',
                color: '#0A84FF'
            },
            {
                name: 'BSc Cybersecurity',
                type: 'ug',
                description: '网络安全理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-cyber',
                color: '#0A84FF'
            },
            {
                name: 'BSc Data Science',
                type: 'ug',
                description: '数据科学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-ds',
                color: '#5E5CE6'
            },
            {
                name: 'BSc Data and Systems Engineering',
                type: 'ug',
                description: '数据与系统工程理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-dse',
                color: '#5E5CE6'
            },
            // === Postgraduate ===
            {
                name: 'MSc Biostatistics',
                type: 'pg',
                description: '理學碩士(生物統計學)',
                githubRepo: 'https://github.com/CityU-Review/msc-biostat',
                color: '#30B0C7'
            },
            {
                name: 'MSc Artificial Intelligence',
                type: 'pg',
                description: '理學碩士(人工智能)',
                githubRepo: 'https://github.com/CityU-Review/msc-ai',
                color: '#0A84FF'
            },
            {
                name: 'MSc Computer Science',
                type: 'pg',
                description: '理學碩士(計算機科學)',
                githubRepo: 'https://github.com/CityU-Review/msc-cs',
                color: '#0A84FF'
            },
            {
                name: 'MSc Electronic Commerce',
                type: 'pg',
                description: '理學碩士(電子商貿)',
                githubRepo: 'https://github.com/CityU-Review/msc-ec',
                color: '#BF5AF2'
            },
            {
                name: 'MSc Data Science',
                type: 'pg',
                description: '理學碩士(數據科學)',
                githubRepo: 'https://github.com/CityU-Review/msc-ds',
                color: '#5E5CE6'
            }
        ]
    },
    {
        id: 'business',
        name: '商学院',
        emoji: '💼',
        description: 'Business, Finance, Management',
        majors: [
            // === Undergraduate ===
            {
                name: 'BBA Global Business',
                type: 'ug',
                description: '环球商业工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-gbus',
                color: '#FF9F0A'
            },
            {
                name: 'BSc Computational Finance & FinTech',
                type: 'ug',
                description: '计算金融及金融科技理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-fintech',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Accountancy',
                type: 'ug',
                description: '会计学工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-acct',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Business Decision Analytics',
                type: 'ug',
                description: '商业决策分析工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-bda',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Global Operations Management',
                type: 'ug',
                description: '环球营运管理工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-gom',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Business Economics',
                type: 'ug',
                description: '商业经济工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-be',
                color: '#FF453A'
            },
            {
                name: 'BBA Finance',
                type: 'ug',
                description: '金融学工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-fin',
                color: '#FF453A'
            },
            {
                name: 'BBA Global Business Systems Mgmt',
                type: 'ug',
                description: '环球商业系统管理工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-gbsm',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Information Management',
                type: 'ug',
                description: '资讯管理工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-im',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Management',
                type: 'ug',
                description: '管理学工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-mgmt',
                color: '#FF9F0A'
            },
            {
                name: 'BBA Marketing',
                type: 'ug',
                description: '市场营销工商管理学士',
                githubRepo: 'https://github.com/CityU-Review/bba-mkt',
                color: '#FF9F0A'
            },
            // === Postgraduate ===
            {
                name: 'EMBA / MBA',
                type: 'pg',
                description: '行政人员工商管理硕士 / 工商管理硕士',
                githubRepo: 'https://github.com/CityU-Review/mba',
                color: '#FF9F0A'
            },
            {
                name: 'MA International Accounting',
                type: 'pg',
                description: '文學碩士(國際會計學)',
                githubRepo: 'https://github.com/CityU-Review/ma-ia',
                color: '#FFD60A'
            },
            {
                name: 'MSc Accounting & Finance with AI/Fintech',
                type: 'pg',
                description: '理學碩士(智能會計與金融科技應用)',
                githubRepo: 'https://github.com/CityU-Review/msc-af-ai',
                color: '#FFD60A'
            },
            {
                name: 'MSc Prof. Accounting & Corp. Gov.',
                type: 'pg',
                description: '理學碩士(專業會計與企業管治)',
                githubRepo: 'https://github.com/CityU-Review/msc-pacg',
                color: '#FFD60A'
            },
            {
                name: 'MSc Business and Data Analytics',
                type: 'pg',
                description: '理學碩士(商業及數據分析)',
                githubRepo: 'https://github.com/CityU-Review/msc-bda',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Operations & Supply Chain Mgmt',
                type: 'pg',
                description: '理學碩士(營運與供應鏈管理)',
                githubRepo: 'https://github.com/CityU-Review/msc-oscm',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Applied Economics',
                type: 'pg',
                description: '理學碩士(應用經濟學)',
                githubRepo: 'https://github.com/CityU-Review/msc-ae',
                color: '#FF453A'
            },
            {
                name: 'MSc Finance',
                type: 'pg',
                description: '理學碩士(金融學)',
                githubRepo: 'https://github.com/CityU-Review/msc-fin',
                color: '#FF453A'
            },
            {
                name: 'MSc Financial Engineering',
                type: 'pg',
                description: '理學碩士(金融工程學)',
                githubRepo: 'https://github.com/CityU-Review/msc-fe',
                color: '#FF453A'
            },
            {
                name: 'MSc AI in Business',
                type: 'pg',
                description: '理學碩士(商業人工智能)',
                githubRepo: 'https://github.com/CityU-Review/msc-aib',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Business Information Systems',
                type: 'pg',
                description: '理學碩士(商務資訊系統)',
                githubRepo: 'https://github.com/CityU-Review/msc-bis',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Digital Trans. & Tech. Innovation',
                type: 'pg',
                description: '理學碩士(數碼化轉型及科技創新)',
                githubRepo: 'https://github.com/CityU-Review/msc-dtti',
                color: '#FF9F0A'
            },
            {
                name: 'MA Global Business Management',
                type: 'pg',
                description: '文學碩士(環球企業管理)',
                githubRepo: 'https://github.com/CityU-Review/ma-gbm',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Management and Innovation',
                type: 'pg',
                description: '理學碩士(管理及創新)',
                githubRepo: 'https://github.com/CityU-Review/msc-mi',
                color: '#FF9F0A'
            },
            {
                name: 'MSc Marketing',
                type: 'pg',
                description: '理學碩士(市場營銷學)',
                githubRepo: 'https://github.com/CityU-Review/msc-mkt',
                color: '#FF9F0A'
            }
        ]
    },
    {
        id: 'engineering',
        name: '工程学院',
        emoji: '🏗️',
        description: 'Architecture, Civil, Electrical, Mechanical',
        majors: [
            // === Undergraduate ===
            {
                name: 'BEng Architectural Engineering',
                type: 'ug',
                description: '建筑工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-ae',
                color: '#30D158'
            },
            {
                name: 'BEng Civil Engineering',
                type: 'ug',
                description: '土木工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-ce',
                color: '#30D158'
            },
            {
                name: 'BSc Architecture and Surveying',
                type: 'ug',
                description: '建筑学及测量学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-as',
                color: '#30D158'
            },
            {
                name: 'BEng Computer & Data Engineering',
                type: 'ug',
                description: '电子计算机及数据工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-cde',
                color: '#30D158'
            },
            {
                name: 'BEng Electronic & Electrical Eng',
                type: 'ug',
                description: '电子及电机工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-eee',
                color: '#30D158'
            },
            {
                name: 'BEng Information Engineering',
                type: 'ug',
                description: '资讯工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-ie',
                color: '#30D158'
            },
            {
                name: 'BEng Microelectronics Engineering',
                type: 'ug',
                description: '微电子工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-me',
                color: '#30D158'
            },
            {
                name: 'BEng Materials Science & Engineering',
                type: 'ug',
                description: '材料科学及工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-mse',
                color: '#30D158'
            },
            {
                name: 'BEng Aerospace Engineering',
                type: 'ug',
                description: '航空航天工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-aero',
                color: '#30D158'
            },
            {
                name: 'BEng Mechanical Engineering',
                type: 'ug',
                description: '机械工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-mech',
                color: '#30D158'
            },
            {
                name: 'BEng Nuclear and Risk Engineering',
                type: 'ug',
                description: '核子及风险工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-nre',
                color: '#30D158'
            },
            {
                name: 'BEng Innovation & Enterprise Eng',
                type: 'ug',
                description: '创新及企业工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-iee',
                color: '#30D158'
            },
            {
                name: 'BEng Intelligent Manufacturing Eng',
                type: 'ug',
                description: '智能制造工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-ime',
                color: '#30D158'
            },
            // === Postgraduate ===
            {
                name: 'Master of Architecture',
                type: 'pg',
                description: '建築學碩士',
                githubRepo: 'https://github.com/CityU-Review/march',
                color: '#30D158'
            },
            {
                name: 'MSc Civil & Architectural Engineering',
                type: 'pg',
                description: '理學碩士(土木及建築工程)',
                githubRepo: 'https://github.com/CityU-Review/msc-cae',
                color: '#30D158'
            },
            {
                name: 'MSc Construction Management',
                type: 'pg',
                description: '理學碩士(建造管理)',
                githubRepo: 'https://github.com/CityU-Review/msc-cm',
                color: '#30D158'
            },
            {
                name: 'Master of Urban Design & Planning',
                type: 'pg',
                description: '城市設計與規劃學碩士',
                githubRepo: 'https://github.com/CityU-Review/mudp',
                color: '#30D158'
            },
            {
                name: 'MSc Electronic Information Engineering',
                type: 'pg',
                description: '理學碩士(電子資訊工程學)',
                githubRepo: 'https://github.com/CityU-Review/msc-eie',
                color: '#30D158'
            },
            {
                name: 'MSc Multimedia Information Tech',
                type: 'pg',
                description: '理學碩士(多媒體資訊科技)',
                githubRepo: 'https://github.com/CityU-Review/msc-mit',
                color: '#30D158'
            },
            {
                name: 'MSc Materials Eng & Nanotech',
                type: 'pg',
                description: '理學碩士(材料工程及納米科技)',
                githubRepo: 'https://github.com/CityU-Review/msc-men',
                color: '#30D158'
            },
            {
                name: 'MSc Mechanical Engineering',
                type: 'pg',
                description: '理學碩士(機械工程學)',
                githubRepo: 'https://github.com/CityU-Review/msc-mech',
                color: '#30D158'
            },
            {
                name: 'MSc Engineering Management',
                type: 'pg',
                description: '理學碩士(工程管理學)',
                githubRepo: 'https://github.com/CityU-Review/msc-em',
                color: '#30D158'
            },
            {
                name: 'MSc Intelligent Semiconductor Mfg',
                type: 'pg',
                description: '理學碩士(智能半導體製造)',
                githubRepo: 'https://github.com/CityU-Review/msc-ism',
                color: '#30D158'
            }
        ]
    },
    {
        id: 'biomedicine',
        name: '生物医学学院',
        emoji: '🧬',
        description: 'Biomedical Engineering, Sciences',
        majors: [
            // === Undergraduate ===
            {
                name: 'BEng Biomedical Engineering',
                type: 'ug',
                description: '生物医学工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-bme',
                color: '#FF2D55'
            },
            {
                name: 'BSc Biological Sciences',
                type: 'ug',
                description: '生物科学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-bs',
                color: '#FF2D55'
            },
            {
                name: 'BSc Biomedical Sciences',
                type: 'ug',
                description: '生物医学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-bms',
                color: '#FF2D55'
            },
            // === Postgraduate ===
            {
                name: 'MSc Biomedical Engineering',
                type: 'pg',
                description: '理學碩士(生物醫學工程)',
                githubRepo: 'https://github.com/CityU-Review/msc-bme',
                color: '#FF2D55'
            },
            {
                name: 'MSc Health Sciences and Management',
                type: 'pg',
                description: '理學碩士(健康科學與管理)',
                githubRepo: 'https://github.com/CityU-Review/msc-hsm',
                color: '#FF2D55'
            },
            {
                name: 'MSc Neuroscience',
                type: 'pg',
                description: '理學碩士(神經科學)',
                githubRepo: 'https://github.com/CityU-Review/msc-neuro',
                color: '#FF2D55'
            }
        ]
    },
    {
        id: 'liberal-arts',
        name: '人文社会科学院',
        emoji: '📚',
        description: 'Language, Media, Public Policy, Social Sciences',
        majors: [
            // === Undergraduate ===
            {
                name: 'BA Chinese and History',
                type: 'ug',
                description: '中国语言文学及历史文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-cah',
                color: '#AC8E68'
            },
            {
                name: 'BA English',
                type: 'ug',
                description: '英语语言文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-eng',
                color: '#AC8E68'
            },
            {
                name: 'BA Linguistics and Language App',
                type: 'ug',
                description: '语言学及语言应用文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-lla',
                color: '#AC8E68'
            },
            {
                name: 'BA Digital Television and Broadcasting',
                type: 'ug',
                description: '数码电视与广播文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-dtb',
                color: '#AC8E68'
            },
            {
                name: 'BA Media and Communication',
                type: 'ug',
                description: '媒体与传播文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-mc',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Int Relations & Global Affairs',
                type: 'ug',
                description: '国际关系及全球事务社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-irga',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Public Affairs and Management',
                type: 'ug',
                description: '公共事务及管理社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-pam',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Crime Science',
                type: 'ug',
                description: '犯罪科学社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-cs',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Criminology and Sociology',
                type: 'ug',
                description: '犯罪学及社会学社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-crimsoc',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Psychology',
                type: 'ug',
                description: '心理学社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-psy',
                color: '#AC8E68'
            },
            {
                name: 'BSocSc Social Work',
                type: 'ug',
                description: '社会工作社会科学学士',
                githubRepo: 'https://github.com/CityU-Review/bsocsc-sw',
                color: '#AC8E68'
            },
            // === Postgraduate ===
            {
                name: 'MA Chinese and History',
                type: 'pg',
                description: '文學碩士(中國語言文學與歷史)',
                githubRepo: 'https://github.com/CityU-Review/ma-cah',
                color: '#AC8E68'
            },
            {
                name: 'MA English Studies',
                type: 'pg',
                description: '文學碩士(英語語言)',
                githubRepo: 'https://github.com/CityU-Review/ma-es',
                color: '#AC8E68'
            },
            {
                name: 'MA Language Studies',
                type: 'pg',
                description: '文學碩士(語言研究)',
                githubRepo: 'https://github.com/CityU-Review/ma-ls',
                color: '#AC8E68'
            },
            {
                name: 'MA Communication and New Media',
                type: 'pg',
                description: '文學碩士(傳播與新媒體)',
                githubRepo: 'https://github.com/CityU-Review/ma-cnm',
                color: '#AC8E68'
            },
            {
                name: 'MA Integrated Marketing Comm',
                type: 'pg',
                description: '文學碩士(整合營銷傳播)',
                githubRepo: 'https://github.com/CityU-Review/ma-imc',
                color: '#AC8E68'
            },
            {
                name: 'MA Housing and Urban Management',
                type: 'pg',
                description: '文學碩士(房屋及都市管理)',
                githubRepo: 'https://github.com/CityU-Review/ma-hum',
                color: '#AC8E68'
            },
            {
                name: 'MA International Studies',
                type: 'pg',
                description: '文學碩士(國際研究)',
                githubRepo: 'https://github.com/CityU-Review/ma-is',
                color: '#AC8E68'
            },
            {
                name: 'MA Public Policy and Management',
                type: 'pg',
                description: '文學碩士(公共政策及管理)',
                githubRepo: 'https://github.com/CityU-Review/ma-ppm',
                color: '#AC8E68'
            },
            {
                name: 'MSocSc Sustainability & Dev Studies',
                type: 'pg',
                description: '社會科學碩士(可持續及發展研究)',
                githubRepo: 'https://github.com/CityU-Review/msocsc-sds',
                color: '#AC8E68'
            },
            {
                name: 'MA Applied Social Sciences',
                type: 'pg',
                description: '文學碩士(應用社會科學)',
                githubRepo: 'https://github.com/CityU-Review/ma-ass',
                color: '#AC8E68'
            },
            {
                name: 'MSocSc Counselling',
                type: 'pg',
                description: '社會科學碩士(輔導學)',
                githubRepo: 'https://github.com/CityU-Review/msocsc-counselling',
                color: '#AC8E68'
            },
            {
                name: 'MSocSc Psychology',
                type: 'pg',
                description: '社會科學碩士(心理學)',
                githubRepo: 'https://github.com/CityU-Review/msocsc-psy',
                color: '#AC8E68'
            },
            {
                name: 'Master of Social Work',
                type: 'pg',
                description: '社會工作碩士',
                githubRepo: 'https://github.com/CityU-Review/msw',
                color: '#AC8E68'
            }
        ]
    },
    {
        id: 'science',
        name: '理学院',
        emoji: '🔬',
        description: 'Chemistry, Mathematics, Physics',
        majors: [
            // === Undergraduate ===
            {
                name: 'BSc Chemistry',
                type: 'ug',
                description: '化学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-chem',
                color: '#64D2FF'
            },
            {
                name: 'BSc Computing Mathematics',
                type: 'ug',
                description: '计算数学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-math',
                color: '#64D2FF'
            },
            {
                name: 'BSc Physics',
                type: 'ug',
                description: '物理学理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-phy',
                color: '#64D2FF'
            },
            // === Postgraduate ===
            {
                name: 'MSc Chemistry',
                type: 'pg',
                description: '理學碩士(化學)',
                githubRepo: 'https://github.com/CityU-Review/msc-chem',
                color: '#64D2FF'
            },
            {
                name: 'MSc Financial Math & Statistics',
                type: 'pg',
                description: '理學碩士(金融數學與統計)',
                githubRepo: 'https://github.com/CityU-Review/msc-fms',
                color: '#64D2FF'
            },
            {
                name: 'MSc Physics (Data/Quantum)',
                type: 'pg',
                description: '理學碩士(物理學數據建模與量子技術)',
                githubRepo: 'https://github.com/CityU-Review/msc-phy',
                color: '#64D2FF'
            }
        ]
    },
    {
        id: 'creative-media',
        name: '创意媒体学院',
        emoji: '🎨',
        description: 'Creative Media, New Media',
        majors: [
            // === Undergraduate ===
            {
                name: 'BAS New Media',
                type: 'ug',
                description: '新媒体文理学士',
                githubRepo: 'https://github.com/CityU-Review/bas-nm',
                color: '#FF375F'
            },
            {
                name: 'BA Creative Media',
                type: 'ug',
                description: '创意媒体文学士',
                githubRepo: 'https://github.com/CityU-Review/ba-cm',
                color: '#FF375F'
            },
            {
                name: 'BSc Creative Media',
                type: 'ug',
                description: '创意媒体理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-cm',
                color: '#FF375F'
            },
            // === Postgraduate ===
            {
                name: 'MA Creative Media',
                type: 'pg',
                description: '文學碩士(創意媒體)',
                githubRepo: 'https://github.com/CityU-Review/ma-cm',
                color: '#FF375F'
            },
            {
                name: 'MFA Creative Media',
                type: 'pg',
                description: '藝術碩士(創意媒體)',
                githubRepo: 'https://github.com/CityU-Review/mfa-cm',
                color: '#FF375F'
            }
        ]
    },
    {
        id: 'energy',
        name: '能源及环境学院',
        emoji: '🌱',
        description: 'Energy, Environment, Sustainability',
        majors: [
            // === Undergraduate ===
            {
                name: 'BEng Energy Science and Engineering',
                type: 'ug',
                description: '能源科学及工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-ese',
                color: '#32D74B'
            },
            {
                name: 'BEng Environmental Sci and Eng',
                type: 'ug',
                description: '环境科学及工程工学士',
                githubRepo: 'https://github.com/CityU-Review/beng-env',
                color: '#32D74B'
            },
            {
                name: 'BSc Env and Sustainable Business',
                type: 'ug',
                description: '环境及可持续发展商业理学士',
                githubRepo: 'https://github.com/CityU-Review/bsc-esb',
                color: '#32D74B'
            },
            // === Postgraduate ===
            {
                name: 'MSc Energy and Environment',
                type: 'pg',
                description: '理學碩士(能源及環境)',
                githubRepo: 'https://github.com/CityU-Review/msc-ee',
                color: '#32D74B'
            }
        ]
    },
    {
        id: 'law',
        name: '法学院',
        emoji: '⚖️',
        description: 'Laws, Arbitration',
        majors: [
            // === Undergraduate ===
            {
                name: 'Bachelor of Laws (LLB)',
                type: 'ug',
                description: '法律学学士',
                githubRepo: 'https://github.com/CityU-Review/llb',
                color: '#8E8E93'
            },
            // === Postgraduate ===
            {
                name: 'Juris Doctor (JD)',
                type: 'pg',
                description: '法律博士',
                githubRepo: 'https://github.com/CityU-Review/jd',
                color: '#8E8E93'
            },
            {
                name: 'LLM Arbitration & Dispute Resolution',
                type: 'pg',
                description: '法學碩士(仲裁及爭議解決學)',
                githubRepo: 'https://github.com/CityU-Review/llm-arb',
                color: '#8E8E93'
            },
            {
                name: 'Master of Laws (LLM)',
                type: 'pg',
                description: '法學碩士',
                githubRepo: 'https://github.com/CityU-Review/llm',
                color: '#8E8E93'
            },
            {
                name: 'Postgraduate Certificate in Laws',
                type: 'pg',
                description: '法學專業證書 (PCLL)',
                githubRepo: 'https://github.com/CityU-Review/pcll',
                color: '#8E8E93'
            }
        ]
    },
    {
        id: 'vet',
        name: '赛马会动物医学及生命科学院',
        emoji: '🐾',
        description: 'Veterinary Medicine, Public Health',
        majors: [
            // === Undergraduate ===
            {
                name: 'Bachelor of Veterinary Medicine',
                type: 'ug',
                description: '兽医学学士',
                githubRepo: 'https://github.com/CityU-Review/bvm',
                color: '#A2845E'
            },
            // === Postgraduate ===
            {
                name: 'Master of Public Health',
                type: 'pg',
                description: '公共衞生碩士',
                githubRepo: 'https://github.com/CityU-Review/mph',
                color: '#A2845E'
            }
        ]
    },
    {
        id: 'innovation',
        name: '创新学院',
        emoji: '🚀',
        description: 'Venture Creation',
        majors: [
            // === Postgraduate Only ===
            {
                name: 'MSc Venture Creation',
                type: 'pg',
                description: '理學碩士(創新創業)',
                githubRepo: 'https://github.com/CityU-Review/msc-vc',
                color: '#FF2D55'
            }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SCHOOLS_DATA;
}