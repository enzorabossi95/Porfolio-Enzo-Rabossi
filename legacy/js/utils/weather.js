const API_KEY = 'd2e4f611e7764a31897170834262004';

function weather() {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;

    if (!navigator.geolocation) {
        weatherWidget.innerHTML = '<p class="weather-error">Geolocalización no disponible</p>';
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            try {
                const response = await fetch(
                    `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&lang=es`
                );
                const data = await response.json();

                weatherWidget.innerHTML = `
                    <div class="weather-content">
                        <div class="weather-top">
                            <img src="${data.current.condition.icon}" alt="${data.current.condition.text}" class="weather-icon" />
                            <span class="weather-temp">${Math.round(data.current.temp_c)}°C</span>
                        </div>
                        <p class="weather-city">${data.location.name}</p>
                    </div>
                `;
            } catch (error) {
                weatherWidget.innerHTML = '<p class="weather-error">Error al cargar el clima</p>';
            }
        },
        () => {
            weatherWidget.innerHTML = '<p class="weather-error">Ubicación no disponible</p>';
        }
    );
}

export default weather;