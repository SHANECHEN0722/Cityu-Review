let currentSchoolId = null;
let filteredSchools = [...SCHOOLS_DATA];

document.addEventListener('DOMContentLoaded', function() {
    renderSchools(SCHOOLS_DATA);
    setupEventListeners();
    
    // 添加简单的入场动画
    document.querySelector('.header').style.opacity = '0';
    document.querySelector('.header').style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        document.querySelector('.header').style.transition = 'all 0.8s ease';
        document.querySelector('.header').style.opacity = '1';
        document.querySelector('.header').style.transform = 'translateY(0)';
    }, 100);
});

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
}

function renderSchools(schools) {
    const container = document.getElementById('schoolsContainer');
    container.innerHTML = '';
    
    // 渐入动画重置
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease';
        container.style.opacity = '1';
    }, 50);

    if (schools.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">
                <h3>无搜索结果</h3>
                <p>尝试搜索其他关键词</p>
            </div>
        `;
        return;
    }

    schools.forEach((school, index) => {
        const card = document.createElement('div');
        card.className = 'school-card';
        // 添加交错动画延迟
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.05}s`;
        
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
    const school = SCHOOLS_DATA.find(s => s.id === schoolId);
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

    majors.forEach((major, index) => {
        const card = document.createElement('a');
        card.href = major.githubRepo;
        card.target = '_blank';
        card.className = 'major-card';
        // 交错动画
        card.style.animation = `fadeInUp 0.6s ease forwards ${index * 0.05}s`;
        
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
    document.getElementById('searchInput').value = '';
    
    // 重新渲染以触发动画
    renderSchools(SCHOOLS_DATA);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    if (!searchTerm) {
        filteredSchools = [...SCHOOLS_DATA];
    } else {
        filteredSchools = SCHOOLS_DATA.filter(school => {
            const schoolMatch = school.name.toLowerCase().includes(searchTerm) ||
                               school.description.toLowerCase().includes(searchTerm);
            const majorsMatch = school.majors.some(major =>
                major.name.toLowerCase().includes(searchTerm) ||
                major.description.toLowerCase().includes(searchTerm)
            );
            return schoolMatch || majorsMatch;
        });
    }
    renderSchools(filteredSchools);
}

// 添加 CSS 动画关键帧
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);