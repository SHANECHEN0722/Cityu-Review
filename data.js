/**
 * CityU Review Hub Data Source
 * 独立数据文件 - 挂载到全局 window 对象以确保被 script.js 读取
 */

window.SCHOOLS_DATA = [
    {
        id: 'computing',
        name: '计算学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>',
        description: 'Computer Science, Data Science, AI & Systems.',
        majors: [
            { name: 'BSc Computer Science', type: 'ug', description: '计算机科学理学士', githubRepo: 'contribution.html', color: '#0A84FF' },
            { name: 'BSc Creative Media', type: 'ug', description: '创意媒体理学士 (CS Dept)', githubRepo: 'contribution.html', color: '#0A84FF' },
            { name: 'BSc Cybersecurity', type: 'ug', description: '网络安全理学士', githubRepo: 'contribution.html', color: '#0A84FF' },
            { name: 'BSc Data Science', type: 'ug', description: '数据科学理学士', githubRepo: 'contribution.html', color: '#5E5CE6' },
            { name: 'BSc Data and Systems Engineering', type: 'ug', description: '数据与系统工程理学士', githubRepo: 'contribution.html', color: '#5E5CE6' },
            { name: 'MSc Biostatistics', type: 'pg', description: '理學碩士(生物統計學)', githubRepo: 'contribution.html', color: '#30B0C7' },
            { name: 'MSc Artificial Intelligence', type: 'pg', description: '理學碩士(人工智能)', githubRepo: 'contribution.html', color: '#0A84FF' },
            { name: 'MSc Computer Science', type: 'pg', description: '理學碩士(計算機科學)', githubRepo: 'contribution.html', color: '#0A84FF' },
            { name: 'MSc Electronic Commerce', type: 'pg', description: '理學碩士(電子商貿)', githubRepo: 'contribution.html', color: '#BF5AF2' },
            { name: 'MSc Data Science', type: 'pg', description: '理學碩士(數據科學)', githubRepo: 'contribution.html', color: '#5E5CE6' }
        ]
    },
    {
        id: 'business',
        name: '商学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        description: 'Business, Finance, Management & Analytics.',
        majors: [
            { name: 'BBA Global Business', type: 'ug', description: '环球商业工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BSc Computational Finance & FinTech', type: 'ug', description: '计算金融及金融科技理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Accountancy', type: 'ug', description: '会计学工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Business Decision Analytics', type: 'ug', description: '商业决策分析工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Global Operations Management', type: 'ug', description: '环球营运管理工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Business Economics', type: 'ug', description: '商业经济工商管理学士', githubRepo: 'contribution.html', color: '#FF453A' },
            { name: 'BBA Finance', type: 'ug', description: '金融学工商管理学士', githubRepo: 'contribution.html', color: '#FF453A' },
            { name: 'BBA Global Business Systems Mgmt', type: 'ug', description: '环球商业系统管理工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Information Management', type: 'ug', description: '资讯管理工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Management', type: 'ug', description: '管理学工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'BBA Marketing', type: 'ug', description: '市场营销工商管理学士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'EMBA / MBA', type: 'pg', description: '行政人员工商管理硕士 / 工商管理硕士', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MA International Accounting', type: 'pg', description: '文學碩士(國際會計學)', githubRepo: 'contribution.html', color: '#FFD60A' },
            { name: 'MSc Accounting & Finance with AI/Fintech', type: 'pg', description: '理學碩士(智能會計與金融科技應用)', githubRepo: 'contribution.html', color: '#FFD60A' },
            { name: 'MSc Prof. Accounting & Corp. Gov.', type: 'pg', description: '理學碩士(專業會計與企業管治)', githubRepo: 'contribution.html', color: '#FFD60A' },
            { name: 'MSc Business and Data Analytics', type: 'pg', description: '理學碩士(商業及數據分析)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Operations & Supply Chain Mgmt', type: 'pg', description: '理學碩士(營運與供應鏈管理)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Applied Economics', type: 'pg', description: '理學碩士(應用經濟學)', githubRepo: 'contribution.html', color: '#FF453A' },
            { name: 'MSc Finance', type: 'pg', description: '理學碩士(金融學)', githubRepo: 'contribution.html', color: '#FF453A' },
            { name: 'MSc Financial Engineering', type: 'pg', description: '理學碩士(金融工程學)', githubRepo: 'contribution.html', color: '#FF453A' },
            { name: 'MSc AI in Business', type: 'pg', description: '理學碩士(商業人工智能)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Business Information Systems', type: 'pg', description: '理學碩士(商務資訊系統)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Digital Trans. & Tech. Innovation', type: 'pg', description: '理學碩士(數碼化轉型及科技創新)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MA Global Business Management', type: 'pg', description: '文學碩士(環球企業管理)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Management and Innovation', type: 'pg', description: '理學碩士(管理及創新)', githubRepo: 'contribution.html', color: '#FF9F0A' },
            { name: 'MSc Marketing', type: 'pg', description: '理學碩士(市場營銷學)', githubRepo: 'contribution.html', color: '#FF9F0A' }
        ]
    },
    {
        id: 'engineering',
        name: '工程学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
        description: 'Architecture, Civil, Electrical, Mechanical.',
        majors: [
            { name: 'BEng Architectural Engineering', type: 'ug', description: '建筑工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Civil Engineering', type: 'ug', description: '土木工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BSc Architecture and Surveying', type: 'ug', description: '建筑学及测量学理学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Computer & Data Engineering', type: 'ug', description: '电子计算机及数据工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Electronic & Electrical Eng', type: 'ug', description: '电子及电机工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Information Engineering', type: 'ug', description: '资讯工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Microelectronics Engineering', type: 'ug', description: '微电子工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Materials Science & Engineering', type: 'ug', description: '材料科学及工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Aerospace Engineering', type: 'ug', description: '航空航天工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Mechanical Engineering', type: 'ug', description: '机械工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Nuclear and Risk Engineering', type: 'ug', description: '核子及风险工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Innovation & Enterprise Eng', type: 'ug', description: '创新及企业工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'BEng Intelligent Manufacturing Eng', type: 'ug', description: '智能制造工程工学士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'Master of Architecture', type: 'pg', description: '建築學碩士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Civil & Architectural Engineering', type: 'pg', description: '理學碩士(土木及建築工程)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Construction Management', type: 'pg', description: '理學碩士(建造管理)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'Master of Urban Design & Planning', type: 'pg', description: '城市設計與規劃學碩士', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Electronic Information Engineering', type: 'pg', description: '理學碩士(電子資訊工程學)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Multimedia Information Tech', type: 'pg', description: '理學碩士(多媒體資訊科技)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Materials Eng & Nanotech', type: 'pg', description: '理學碩士(材料工程及納米科技)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Mechanical Engineering', type: 'pg', description: '理學碩士(機械工程學)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Engineering Management', type: 'pg', description: '理學碩士(工程管理學)', githubRepo: 'contribution.html', color: '#30D158' },
            { name: 'MSc Intelligent Semiconductor Mfg', type: 'pg', description: '理學碩士(智能半導體製造)', githubRepo: 'contribution.html', color: '#30D158' }
        ]
    },
    {
        id: 'biomedicine',
        name: '生物医学学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>',
        description: 'Biomedical Engineering, Sciences & Health.',
        majors: [
            { name: 'BEng Biomedical Engineering', type: 'ug', description: '生物医学工程工学士', githubRepo: 'contribution.html', color: '#FF2D55' },
            { name: 'BSc Biological Sciences', type: 'ug', description: '生物科学理学士', githubRepo: 'contribution.html', color: '#FF2D55' },
            { name: 'BSc Biomedical Sciences', type: 'ug', description: '生物医学理学士', githubRepo: 'contribution.html', color: '#FF2D55' },
            { name: 'MSc Biomedical Engineering', type: 'pg', description: '理學碩士(生物醫學工程)', githubRepo: 'contribution.html', color: '#FF2D55' },
            { name: 'MSc Health Sciences and Management', type: 'pg', description: '理學碩士(健康科學與管理)', githubRepo: 'contribution.html', color: '#FF2D55' },
            { name: 'MSc Neuroscience', type: 'pg', description: '理學碩士(神經科學)', githubRepo: 'contribution.html', color: '#FF2D55' }
        ]
    },
    {
        id: 'liberal-arts',
        name: '人文社会科学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
        description: 'Language, Media, Public Policy, Social Sciences.',
        majors: [
            { name: 'BA Chinese and History', type: 'ug', description: '中国语言文学及历史文学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BA English', type: 'ug', description: '英语语言文学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BA Linguistics and Language App', type: 'ug', description: '语言学及语言应用文学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BA Digital Television and Broadcasting', type: 'ug', description: '数码电视与广播文学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BA Media and Communication', type: 'ug', description: '媒体与传播文学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Int Relations & Global Affairs', type: 'ug', description: '国际关系及全球事务社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Public Affairs and Management', type: 'ug', description: '公共事务及管理社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Crime Science', type: 'ug', description: '犯罪科学社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Criminology and Sociology', type: 'ug', description: '犯罪学及社会学社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Psychology', type: 'ug', description: '心理学社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'BSocSc Social Work', type: 'ug', description: '社会工作社会科学学士', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Chinese and History', type: 'pg', description: '文學碩士(中國語言文學與歷史)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA English Studies', type: 'pg', description: '文學碩士(英語語言)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Language Studies', type: 'pg', description: '文學碩士(語言研究)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Communication and New Media', type: 'pg', description: '文學碩士(傳播與新媒體)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Integrated Marketing Comm', type: 'pg', description: '文學碩士(整合營銷傳播)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Housing and Urban Management', type: 'pg', description: '文學碩士(房屋及都市管理)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA International Studies', type: 'pg', description: '文學碩士(國際研究)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Public Policy and Management', type: 'pg', description: '文學碩士(公共政策及管理)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MSocSc Sustainability & Dev Studies', type: 'pg', description: '社會科學碩士(可持續及發展研究)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MA Applied Social Sciences', type: 'pg', description: '文學碩士(應用社會科學)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MSocSc Counselling', type: 'pg', description: '社會科學碩士(輔導學)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'MSocSc Psychology', type: 'pg', description: '社會科學碩士(心理學)', githubRepo: 'contribution.html', color: '#AC8E68' },
            { name: 'Master of Social Work', type: 'pg', description: '社會工作碩士', githubRepo: 'contribution.html', color: '#AC8E68' }
        ]
    },
    {
        id: 'science',
        name: '理学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
        description: 'Chemistry, Mathematics, Physics.',
        majors: [
            { name: 'BSc Chemistry', type: 'ug', description: '化学理学士', githubRepo: 'contribution.html', color: '#64D2FF' },
            { name: 'BSc Computing Mathematics', type: 'ug', description: '计算数学理学士', githubRepo: 'contribution.html', color: '#64D2FF' },
            { name: 'BSc Physics', type: 'ug', description: '物理学理学士', githubRepo: 'contribution.html', color: '#64D2FF' },
            { name: 'MSc Chemistry', type: 'pg', description: '理學碩士(化學)', githubRepo: 'contribution.html', color: '#64D2FF' },
            { name: 'MSc Financial Math & Statistics', type: 'pg', description: '理學碩士(金融數學與統計)', githubRepo: 'contribution.html', color: '#64D2FF' },
            { name: 'MSc Physics (Data/Quantum)', type: 'pg', description: '理學碩士(物理學數據建模與量子技術)', githubRepo: 'contribution.html', color: '#64D2FF' }
        ]
    },
    {
        id: 'creative-media',
        name: '创意媒体学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
        description: 'Creative Media, New Media & Arts.',
        majors: [
            { name: 'BAS New Media', type: 'ug', description: '新媒体文理学士', githubRepo: 'contribution.html', color: '#FF375F' },
            { name: 'BA Creative Media', type: 'ug', description: '创意媒体文学士', githubRepo: 'contribution.html', color: '#FF375F' },
            { name: 'BSc Creative Media', type: 'ug', description: '创意媒体理学士', githubRepo: 'contribution.html', color: '#FF375F' },
            { name: 'MA Creative Media', type: 'pg', description: '文學碩士(創意媒體)', githubRepo: 'contribution.html', color: '#FF375F' },
            { name: 'MFA Creative Media', type: 'pg', description: '藝術碩士(創意媒體)', githubRepo: 'contribution.html', color: '#FF375F' }
        ]
    },
    {
        id: 'energy',
        name: '能源及环境学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
        description: 'Energy, Environment, Sustainability.',
        majors: [
            { name: 'BEng Energy Science and Engineering', type: 'ug', description: '能源科学及工程工学士', githubRepo: 'contribution.html', color: '#32D74B' },
            { name: 'BEng Environmental Sci and Eng', type: 'ug', description: '环境科学及工程工学士', githubRepo: 'contribution.html', color: '#32D74B' },
            { name: 'BSc Env and Sustainable Business', type: 'ug', description: '环境及可持续发展商业理学士', githubRepo: 'contribution.html', color: '#32D74B' },
            { name: 'MSc Energy and Environment', type: 'pg', description: '理學碩士(能源及環境)', githubRepo: 'contribution.html', color: '#32D74B' }
        ]
    },
    {
        id: 'law',
        name: '法学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-9.629 5.234a2 2 0 0 0-.966 2.316l1.665 6.658a2 2 0 0 0 1.94 1.515h13.98a2 2 0 0 0 1.94-1.515l1.665-6.658a2 2 0 0 0-.966-2.316L12 3z"></path><path d="M12 3v18"></path><path d="M12 21H7"></path><path d="M12 21h5"></path><path d="M5 10.5V17"></path><path d="M19 10.5V17"></path></svg>',
        description: 'Laws, Arbitration & Dispute Resolution.',
        majors: [
            { name: 'Bachelor of Laws (LLB)', type: 'ug', description: '法律学学士', githubRepo: 'contribution.html', color: '#8E8E93' },
            { name: 'Juris Doctor (JD)', type: 'pg', description: '法律博士', githubRepo: 'contribution.html', color: '#8E8E93' },
            { name: 'LLM Arbitration & Dispute Resolution', type: 'pg', description: '法學碩士(仲裁及爭議解決學)', githubRepo: 'contribution.html', color: '#8E8E93' },
            { name: 'Master of Laws (LLM)', type: 'pg', description: '法學碩士', githubRepo: 'contribution.html', color: '#8E8E93' },
            { name: 'Postgraduate Certificate in Laws', type: 'pg', description: '法學專業證書 (PCLL)', githubRepo: 'contribution.html', color: '#8E8E93' }
        ]
    },
    {
        id: 'vet',
        name: '赛马会动物医学及生命科学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 8a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3Z"></path><path d="M5 8a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3Z"></path><path d="M15 19v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2"></path></svg>',
        description: 'Veterinary Medicine, Public Health.',
        majors: [
            { name: 'Bachelor of Veterinary Medicine', type: 'ug', description: '兽医学学士', githubRepo: 'contribution.html', color: '#A2845E' },
            { name: 'Master of Public Health', type: 'pg', description: '公共衞生碩士', githubRepo: 'contribution.html', color: '#A2845E' }
        ]
    },
    {
        id: 'innovation',
        name: '创新学院',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
        description: 'Venture Creation & Innovation.',
        majors: [
            { name: 'MSc Venture Creation', type: 'pg', description: '理學碩士(創新創業)', githubRepo: 'contribution.html', color: '#FF2D55' }
        ]
    }
];