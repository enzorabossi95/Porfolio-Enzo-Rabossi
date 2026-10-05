// Copied verbatim from the legacy cheatsheet-*.html files. Content stays in Spanish —
// written during the (Spanish-language) bootcamp as personal code reference, unlike the
// rest of the site's copy.
export const cheatsheets = [
  {
    slug: 'html',
    title: 'Cheatsheet HTML5',
    lang: 'es',
    sections: [
      {
        id: 'estructura',
        heading: 'Estructura básica',
        code: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Título</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- contenido -->
  </body>
</html>`,
      },
      {
        id: 'textos',
        heading: 'Textos y Tipografía',
        code: `<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Tercer nivel</h3>
<p>Párrafo de texto</p>
<strong>Negrita</strong>
<em>Cursiva</em>
<span>Texto inline</span>
<br /> <!-- salto de línea -->
<hr /> <!-- línea horizontal -->`,
      },
      {
        id: 'listas',
        heading: 'Listas',
        code: `<!-- Lista desordenada -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- Lista ordenada -->
<ol>
  <li>Primero</li>
  <li>Segundo</li>
</ol>

<!-- Lista de definición -->
<dl>
  <dt>Término</dt>
  <dd>Definición</dd>
</dl>`,
      },
      {
        id: 'enlaces',
        heading: 'Enlaces e Imágenes',
        code: `<!-- Enlace -->
<a href="https://ejemplo.com">Texto</a>
<a href="https://ejemplo.com" target="_blank">Nueva pestaña</a>
<a href="#seccion">Ancla interna</a>

<!-- Imagen -->
<img src="imagen.jpg" alt="Descripción" />
<img src="imagen.jpg" alt="Descripción" width="300" />`,
      },
      {
        id: 'formularios',
        heading: 'Formularios',
        code: `<form action="" method="POST">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" required />

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required />

  <label for="mensaje">Mensaje</label>
  <textarea id="mensaje" name="mensaje" required></textarea>

  <button type="submit">Enviar</button>
</form>`,
      },
      {
        id: 'semantica',
        heading: 'Semántica HTML5',
        code: `<header>Cabecera</header>
<nav>Navegación</nav>
<main>Contenido principal</main>
<section>Sección</section>
<article>Artículo independiente</article>
<aside>Contenido lateral</aside>
<footer>Pie de página</footer>`,
      },
    ],
  },
  {
    slug: 'css',
    title: 'Cheatsheet CSS3',
    lang: 'es',
    sections: [
      {
        id: 'variables',
        heading: 'Variables CSS',
        code: `:root {
  --color-primary: #ff5c00;
  --font-size-base: 16px;
  --spacing-md: 1.5rem;
}

.elemento {
  color: var(--color-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
}`,
      },
      {
        id: 'selectores',
        heading: 'Selectores',
        code: `/* Elemento */
p { color: red; }

/* Clase */
.clase { color: blue; }

/* ID */
#id { color: green; }

/* Descendiente */
nav a { color: orange; }

/* Hijo directo */
ul > li { color: purple; }

/* Pseudo-clase */
a:hover { color: pink; }

/* Pseudo-elemento */
p::first-line { font-weight: bold; }
p::after { content: ''; }`,
      },
      {
        id: 'flexbox',
        heading: 'Flexbox',
        code: `.contenedor {
  display: flex;
  flex-direction: row; /* row | column */
  justify-content: space-between; /* flex-start | center | space-around */
  align-items: center; /* flex-start | flex-end | stretch */
  flex-wrap: wrap;
  gap: 16px;
}

.hijo {
  flex: 1; /* crece para llenar espacio */
  flex: 0 0 200px; /* no crece, no encoge, 200px */
}`,
      },
      {
        id: 'grid',
        heading: 'Grid',
        code: `.contenedor {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 24px;
}

/* Columnas específicas */
grid-template-columns: 200px 1fr 2fr;

/* Hijo que ocupa varias columnas */
.hijo {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`,
      },
      {
        id: 'responsive',
        heading: 'Responsive / Media Queries',
        code: `/* Mobile first */
.elemento {
  font-size: 14px;
}

@media screen and (min-width: 768px) {
  .elemento {
    font-size: 16px;
  }
}

/* Desktop first */
.elemento {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  .elemento {
    font-size: 14px;
  }
}`,
      },
      {
        id: 'animaciones',
        heading: 'Transiciones y Animaciones',
        code: `/* Transición */
.btn {
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: red;
}

/* Animación */
@keyframes heartbeat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.1); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.elemento {
  animation: heartbeat 1.5s infinite;
}`,
      },
    ],
  },
  {
    slug: 'js',
    title: 'Cheatsheet JavaScript',
    lang: 'es',
    sections: [
      {
        id: 'variables',
        heading: 'Variables',
        code: `// const — no reasignable
const nombre = 'Enzo';

// let — reasignable
let edad = 30;
edad = 31;

// Tipos de datos
const texto = 'string';
const numero = 42;
const decimal = 3.14;
const booleano = true;
const nulo = null;
const indefinido = undefined;`,
      },
      {
        id: 'arrays',
        heading: 'Arrays',
        code: `const frutas = ['manzana', 'pera', 'uva'];

// Acceder
frutas[0]; // 'manzana'

// Métodos principales
frutas.push('kiwi');        // agrega al final
frutas.pop();               // elimina el último
frutas.length;              // longitud

// Iteración
frutas.forEach(f => console.log(f));

// Transformación
const mayus = frutas.map(f => f.toUpperCase());

// Filtrado
const largas = frutas.filter(f => f.length > 4);

// Búsqueda
const encontrada = frutas.find(f => f === 'pera');`,
      },
      {
        id: 'objetos',
        heading: 'Objetos',
        code: `const persona = {
  nombre: 'Enzo',
  edad: 30,
  ciudad: 'Copenhague'
};

// Acceder
persona.nombre;
persona['edad'];

// Modificar
persona.edad = 31;

// Agregar propiedad
persona.profesion = 'developer';

// Desestructuración
const { nombre, ciudad } = persona;

// Spread
const copia = { ...persona, pais: 'Dinamarca' };`,
      },
      {
        id: 'funciones',
        heading: 'Funciones',
        code: `// Función declarada
function saludar(nombre) {
  return \`Hola, \${nombre}\`;
}

// Función expresada
const saludar = function(nombre) {
  return \`Hola, \${nombre}\`;
};

// Arrow function
const saludar = (nombre) => \`Hola, \${nombre}\`;

// Con varios parámetros
const sumar = (a, b) => a + b;

// Con lógica
const esMayor = (edad) => {
  if (edad >= 18) return true;
  return false;
};`,
      },
      {
        id: 'dom',
        heading: 'Manipulación del DOM',
        code: `// Seleccionar elementos
const btn = document.getElementById('mi-btn');
const items = document.querySelectorAll('.item');

// Modificar contenido
btn.textContent = 'Nuevo texto';
btn.innerHTML = '<span>HTML</span>';

// Modificar clases
btn.classList.add('activo');
btn.classList.remove('activo');
btn.classList.toggle('activo');
btn.classList.contains('activo');

// Eventos
btn.addEventListener('click', () => {
  console.log('click!');
});`,
      },
      {
        id: 'modulos',
        heading: 'Módulos ES6',
        code: `// Exportar
export const nombre = 'Enzo';
export default function saludar() {}

// Importar
import saludar from './saludar.js';
import { nombre } from './datos.js';

// Exportar múltiples
export { nombre, edad };

// Importar todo
import * as datos from './datos.js';`,
      },
    ],
  },
]
