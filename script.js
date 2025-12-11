// 全局变量
let currentSchoolId = null;
let currentDegree = 'ug'; // 默认本科生 'ug' 或研究生 'pg'
let filteredSchools = []; // 用于存储当前过滤后的数据

document.addEventListener('DOMContentLoaded', function() {
    // 监听切换开关
    setupDegreeToggle();
    
    // 初始化数据
    filteredSchools = [...SCHOOLS_DATA];
    
    // 初始渲染（触发第一次过滤）
    handleSearch({ target: { value: '' } });
    setupEventListeners();
    
    // 头部入场动画
    const header = document.querySelector('.header');
    header.style.transition = 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
    header.style.opacity = '1';
    header.style.transform = 'translateY(0)';
    
    // 注入必要的动画样式（防止 CSS 文件加载延迟）
    const style = document.createElement('style');
    style.innerHTML = `
        .header { transform: translateY(20px); opacity: 0; }
    `;
    document.head.prepend(style);
});

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
}

function setupDegreeToggle() {
    const radios = document.querySelectorAll('input[name="degree"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentDegree = e.target.value;
            // 切换时重新筛选和渲染，保留当前的搜索词
            const currentSearchTerm = document.getElementById('searchInput').value;
            handleSearch({ target: { value: currentSearchTerm } });
        });
    });
}

function renderSchools(schools) {
    const container = document.getElementById('schoolsContainer');
    container.innerHTML = '';
    
    // 容器渐入动画
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease';
        container.style.opacity = '1';
    }, 10);

    if (schools.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">
                <span style="font-size: 3rem; display: block; margin-bottom: 20px;">🔍</span>
                <h3>无相关结果</h3>
                <p>该类别下暂无匹配的学院或专业</p>
            </div>
        `;
        return;
    }

    schools.forEach((school, index) => {
        const card = document.createElement('div');
        card.className = 'school-card';
        // 添加交错动画延迟
        card.style.animation = `fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.05}s`;
        
        card.innerHTML = `
            <span class="emoji">${school.emoji}</span>
            <h3>${school.name}</h3>
            <p>${school.description}</p>
            <div class="major-count">${school.majors.length} 个专业</div>
        `;
        card.addEventListener('click', () => selectSchool(school.id));
        container.appendChild(card);
    });
}

function selectSchool(schoolId) {
    currentSchoolId = schoolId;
    // 注意：这里要从 filteredSchools 找，因为 filteredSchools 已经根据 degree 过滤过了
    const school = filteredSchools.find(s => s.id === schoolId);
    
    if (!school) return;

    // 切换视图动画
    const schoolsContainer = document.getElementById('schoolsContainer');
    const majorsContainer = document.getElementById('majorsContainer');
    
    schoolsContainer.style.display = 'none';
    majorsContainer.style.display = 'block';
    
    // 渲染内容
    document.getElementById('selectedSchoolName').textContent = school.name;
    renderMajors(school.majors);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMajors(majors) {
    const container = document.getElementById('majorsList');
    container.innerHTML = '';

    if (majors.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">
                <p>该学院下暂无此类课程资料</p>
            </div>
        `;
        return;
    }

    majors.forEach((major, index) => {
        const card = document.createElement('a');
        card.href = major.githubRepo;
        card.target = '_blank';
        card.className = 'major-card';
        // 交错动画
        card.style.animation = `fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards ${index * 0.05}s`;
        
        card.innerHTML = `
            <h4>${major.name}</h4>
            <p>${major.description}</p>
            <div class="link-indicator">
                View Repository <span>→</span>
            </div>
        `;
        container.appendChild(card);
    });
}

function backToSchools() {
    currentSchoolId = null;
    document.getElementById('majorsContainer').style.display = 'none';
    document.getElementById('schoolsContainer').style.display = 'grid';
    
    // 重新渲染以触发动画
    renderSchools(filteredSchools);
}

function handleSearch(event) {
    const searchTerm = event.target ? event.target.value.toLowerCase().trim() : '';
    
    // 第一步：基于 Degree (ug/pg) 过滤数据
    // 我们遍历所有学院，只保留符合当前 degree 的专业
    let processedData = SCHOOLS_DATA.map(school => {
        const validMajors = school.majors.filter(major => major.type === currentDegree);
        return {
            ...school,
            majors: validMajors
        };
    }).filter(school => school.majors.length > 0); // 如果某学院在当前学位下没专业，就不显示该学院

    // 第二步：基于搜索词过滤
    if (searchTerm) {
        processedData = processedData.filter(school => {
            const schoolMatch = school.name.toLowerCase().includes(searchTerm) ||
                               school.description.toLowerCase().includes(searchTerm);
            
            const majorsMatch = school.majors.some(major =>
                major.name.toLowerCase().includes(searchTerm) ||
                major.description.toLowerCase().includes(searchTerm)
            );

            return schoolMatch || majorsMatch;
        });
    }

    // 更新全局过滤数据
    filteredSchools = processedData;
    
    // 渲染
    // 如果当前正在查看某个学院详情，需要实时刷新详情页
    if (currentSchoolId && document.getElementById('majorsContainer').style.display !== 'none') {
        const currentSchool = processedData.find(s => s.id === currentSchoolId);
        if (currentSchool) {
            renderMajors(currentSchool.majors);
        } else {
            // 如果切换后该学院没有对应专业的课程（或者被搜索过滤掉了），返回列表
            backToSchools();
        }
    } else {
        renderSchools(filteredSchools);
    }
}