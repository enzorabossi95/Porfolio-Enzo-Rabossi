import resources from '../data/resources.js';

function resourcesGenerator() {
    const tabsContainer = document.getElementById('resources-tabs');
    const panelsContainer = document.getElementById('resources-panels');
    if (!tabsContainer || !panelsContainer) return;

    const tabsHTML = resources.map((resource, index) => `
        <button class="tab-btn ${index === 0 ? 'active' : ''}" id="tab-${index}" data-index="${index}">
            ${resource.category}
        </button>
    `).join('');

    const panelsHTML = resources.map((resource, index) => `
        <div class="tab-panel ${index === 0 ? 'active' : ''}" id="panel-${index}">
            <ul class="resources-list">
                ${resource.items.map(item => `
                    <li class="resource-item">
                        <a href="${item.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                            ${item.title}
                        </a>
                        <p class="resource-note">${item.note}</p>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');

    tabsContainer.innerHTML = tabsHTML;
    panelsContainer.innerHTML = panelsHTML;

    const tabBtns = tabsContainer.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;

            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`panel-${index}`).classList.add('active');
        });
    });
}

export default resourcesGenerator;