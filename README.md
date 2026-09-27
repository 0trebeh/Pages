# OtreDev — Sitio web

Sitio estático de OtreDev, estudio de desarrollo de software ágil con IA.

- `index.html` — página principal (servicios, proceso, proyectos, fundador, FAQ, contacto)
- `portfolio.html` — portafolio completo con filtros y detalle de cada proyecto
- `styles.css` — estilos
- `script.js` — datos editables (contacto y proyectos) y comportamiento
- `i18n.js` — todos los textos en inglés y español (inglés por defecto)
- `img/projects/` — capturas de los proyectos

## Personalizar

Todo lo editable está al inicio de `script.js`:

- `CONFIG` — WhatsApp, LinkedIn, GitHub e idioma predeterminado. Si un campo queda vacío, su enlace se oculta. El formulario de contacto abre WhatsApp con nombre, email, asunto y mensaje.
- `PROJECTS` — lista de proyectos. `featured: true` los muestra en la página de inicio.

Para usar tu foto en la sección del fundador, reemplaza el `<span class="founder__initials">` en `index.html` por una etiqueta `<img>`.
