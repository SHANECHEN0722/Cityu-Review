// 全局变量
let currentSchoolId = null;
let currentDegree = 'ug'; 
let filteredSchools = [];

document.addEventListener('DOMContentLoaded', function() {
    // 1. 初始化数据
    if (typeof window.SCHOOLS_DATA !== 'undefined') {
        filteredSchools = [...window.SCHOOLS_DATA];
    } else {
        // 如果数据还没加载，等待一下
        console.warn("Data loading...");
        if(window.SCHOOLS_DATA) filteredSchools = [...window.SCHOOLS_DATA];
    }

    // 2. 初始渲染
    handleSearch({ target: { value: '' } });

    // 3. 监听器
    setupDegreeToggle();
    setupEventListeners();
    setupSpotlightEffect();
});

// Spotlight 核心逻辑
function setupSpotlightEffect() {
    const container = document.querySelector('main');
    container.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card-base');
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        }
    });
}

function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', backToSchools);
    }
}

function setupDegreeToggle() {
    const radios = document.querySelectorAll('input[name="degree"]');
    radios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            currentDegree = e.target.value;
            const currentSearchTerm = document.getElementById('searchInput').value;
            handleSearch({ target: { value: currentSearchTerm } });
        });
    });
}

function renderSchools(schools) {
    const container = document.getElementById('schoolsContainer');
    if (!container) return;
    container.innerHTML = '';

    if (schools.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 40px;">
                <div style="font-size: 3rem; margin-bottom: 20px; opacity: 0.6;">🔍</div>
                <p style="font-size: 1.6rem; font-weight: 600; color: var(--text-primary); margin-bottom: 12px;">No results found.</p>
                <p style="font-size: 1rem; color: var(--text-secondary); margin: 0;">Try adjusting your search keywords or check the program name spelling</p>
            </div>
        `;
        return;
    }

    schools.forEach(school => {
        const card = document.createElement('div');
        card.className = 'card-base school-card';
        card.style.opacity = '1';

        card.innerHTML = `
            <div class="school-icon-wrapper">
                ${school.icon}
            </div>
            <h3>${school.name}</h3>
            <p>${school.description}</p>
            <div class="card-footer">
                <span class="tag">${school.majors.length} Majors</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
        `;
        card.addEventListener('click', () => selectSchool(school.id));
        container.appendChild(card);
    });
}

function selectSchool(schoolId) {
    currentSchoolId = schoolId;
    const school = filteredSchools.find(s => s.id === schoolId);
    if (!school) return;

    document.getElementById('schoolsContainer').style.display = 'none';
    document.getElementById('majorsContainer').style.display = 'block';
    
    document.getElementById('selectedSchoolName').textContent = school.name;
    renderMajors(school.majors);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 核心修改：渲染专业卡片时，去除杂色，统一风格
function renderMajors(majors) {
    const container = document.getElementById('majorsList');
    if (!container) return;
    container.innerHTML = '';

    majors.forEach((major) => {
        const card = document.createElement('a');
        card.href = major.githubRepo;
        card.target = '_blank';
        // 复用 card-base 保持玻璃质感
        card.className = 'card-base major-card';
        card.style.opacity = '1';
        
        // 关键：不再使用 major.color，而是使用统一的 .major-tag 样式
        // 并在右上角添加了一个 Book 图标，让视觉重心更稳
        card.innerHTML = `
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; align-items:start; margin-bottom:12px;">
                    <span class="major-tag">
                        ${currentDegree.toUpperCase()}
                    </span>
                    <div style="color:var(--text-secondary); opacity:0.5;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                </div>
                
                <h4>${major.name}</h4>
                <p>${major.description}</p>
                
                <div class="card-footer">
                    <span style="font-size:14px; color:#0A84FF; font-weight:500;">View Resources →</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function backToSchools() {
    currentSchoolId = null;
    document.getElementById('majorsContainer').style.display = 'none';
    document.getElementById('schoolsContainer').style.display = 'grid';
    renderSchools(filteredSchools);
}

function handleSearch(event) {
    const searchTerm = event.target ? event.target.value.toLowerCase().trim() : '';
    const dataSource = window.SCHOOLS_DATA || [];
    
    let processedData = dataSource.map(school => {
        const validMajors = school.majors.filter(major => major.type === currentDegree);
        return { ...school, majors: validMajors };
    }).filter(school => school.majors.length > 0);

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

    filteredSchools = processedData;
    
    if (currentSchoolId && document.getElementById('majorsContainer').style.display !== 'none') {
        const currentSchool = processedData.find(s => s.id === currentSchoolId);
        if (currentSchool) renderMajors(currentSchool.majors);
        else backToSchools();
    } else {
        renderSchools(filteredSchools);
    }
}