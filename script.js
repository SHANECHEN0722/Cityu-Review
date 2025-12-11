// 全局变量
let currentSchoolId = null;
let filteredSchools = [...SCHOOLS_DATA];

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    renderSchools(SCHOOLS_DATA);
    setupEventListeners();
});

// 设置事件监听
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
}

// 渲染学院卡片
function renderSchools(schools) {
    const container = document.getElementById('schoolsContainer');
    container.innerHTML = '';

    if (schools.length === 0) {
        container.innerHTML = `
            <div class="no-results" style="grid-column: 1/-1;">
                <h3>😔 未找到结果</h3>
                <p>请调整你的搜索条件</p>
            </div>
        `;
        return;
    }

    schools.forEach(school => {
        const card = document.createElement('div');
        card.className = 'school-card';
        card.innerHTML = `
            <div class="emoji">${school.emoji}</div>
            <h3>${school.name}</h3>
            <p>${school.description}</p>
            <span class="major-count">${school.majors.length} 个专业</span>
        `;
        card.addEventListener('click', () => selectSchool(school.id));
        container.appendChild(card);
    });
}

// 选择学院
function selectSchool(schoolId) {
    currentSchoolId = schoolId;
    const school = SCHOOLS_DATA.find(s => s.id === schoolId);
    
    if (!school) return;

    // 隐藏学院列表，显示专业列表
    document.getElementById('schoolsContainer').style.display = 'none';
    document.getElementById('majorsContainer').style.display = 'block';
    
    // 更新标题
    document.getElementById('selectedSchoolName').textContent = school.name;
    
    // 渲染专业列表
    renderMajors(school.majors);
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 渲染专业卡片
function renderMajors(majors) {
    const container = document.getElementById('majorsList');
    container.innerHTML = '';

    majors.forEach(major => {
        const card = document.createElement('a');
        card.href = major.githubRepo;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'major-card';
        card.innerHTML = `
            <h4>${major.name}</h4>
            <p>${major.description}</p>
            <span class="github-link">
                <span>📖</span>
                <span>查看复习资料</span>
            </span>
        `;
        container.appendChild(card);
    });
}

// 返回学院列表
function backToSchools() {
    currentSchoolId = null;
    document.getElementById('schoolsContainer').style.display = 'grid';
    document.getElementById('majorsContainer').style.display = 'none';
    document.getElementById('searchInput').value = '';
    renderSchools(SCHOOLS_DATA);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 搜索功能
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    
    if (!searchTerm) {
        filteredSchools = [...SCHOOLS_DATA];
        renderSchools(filteredSchools);
        return;
    }

    // 搜索学院和专业
    filteredSchools = SCHOOLS_DATA.filter(school => {
        const schoolMatch = school.name.toLowerCase().includes(searchTerm) ||
                           school.description.toLowerCase().includes(searchTerm);
        
        const majorsMatch = school.majors.some(major =>
            major.name.toLowerCase().includes(searchTerm) ||
            major.description.toLowerCase().includes(searchTerm)
        );

        return schoolMatch || majorsMatch;
    });

    renderSchools(filteredSchools);
}

// 键盘导航支持
document.addEventListener('keydown', function(event) {
    // ESC键返回
    if (event.key === 'Escape' && currentSchoolId) {
        backToSchools();
    }
});
