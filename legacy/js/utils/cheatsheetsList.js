import cheatsheets from '../data/cheatsheets.js';

function cheatsheetsList() {
    const container = document.getElementById('cheatsheets-list');
    if (!container) return;

    const cheatsheetsHTML = cheatsheets.map(cheatsheet => `
        <a href="${cheatsheet.link}" class="cheatsheet-card">
            <img src="${cheatsheet.icon}" alt="${cheatsheet.name}" />
            <h3 class="cheatsheet-name">${cheatsheet.name}</h3>
        </a>
    `).join('');

    container.innerHTML = cheatsheetsHTML;
}

export default cheatsheetsList;