import skills from '../data/skills.js';

function skillsList() {
    const dominatedSkills = skills.filter(skill => skill.state === "dominada");

    const skillsHTML = dominatedSkills.map(skill => `
        <article class="skill-card">
            <img src="${skill.icon}" alt="${skill.name}" />
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-level">${skill.level}</p>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </article>
    `).join('');

    const skillsSection = document.getElementById('skills-list');
    if (skillsSection) {
        skillsSection.innerHTML = skillsHTML;
    }
}

export default skillsList;