function darkMode() {
    const darkModeBtn = document.getElementById('dark-mode-btn');

    function applyTheme(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            darkModeBtn.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            darkModeBtn.textContent = '🌙';
        }
    }

    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'light');

    darkModeBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isLight ? 'dark' : 'light');
        applyTheme(!isLight);
    });
}

export default darkMode;