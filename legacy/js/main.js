import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import menu from './utils/menu.js';
import skillsList from './utils/skillsList.js';
import cheatsheetsList from './utils/cheatsheetsList.js';
import resourcesGenerator from './utils/resourcesGenerator.js';
import weather from './utils/weather.js';

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;

darkMode();
menu();
skillsList();
cheatsheetsList();
resourcesGenerator();
weather();
