/* =========================================================
   OtreDev — script principal
   (los textos de la página están en i18n.js)
   ========================================================= */

/* ---------------------------------------------------------
   1. CONFIGURACIÓN — tus datos de contacto.
   Todos los enlaces de la página se actualizan solos.
   Si dejas un campo vacío, ese enlace se oculta.
   --------------------------------------------------------- */
const CONFIG = {
  whatsapp: "16892434927", // solo números, con código de país
  linkedin: "", // ej: "https://www.linkedin.com/in/tu-usuario"
  github: "https://github.com/0trebeh",
  defaultLang: "en", // idioma predeterminado: "en" o "es"
}

/* ---------------------------------------------------------
   2. PROYECTOS — agrega, quita o edita proyectos aquí.
   kind:      "client" (para un cliente) | "personal"
   category:  "client" | "app" | "other"   (filtros del portafolio)
   image:     captura en img/projects/ o URL (opcional)
   layout:    miniatura dibujada con CSS si no hay imagen:
              "chart" | "site" | "sudoku" | "number" | "shortener" | "board" | "game" | "links"
   featured:  true → aparece en la página de inicio
   url / repo: enlace en vivo / código (opcionales)
   Los textos van en { en: "...", es: "..." }
   --------------------------------------------------------- */
const PROJECTS = [
  {
    id: "otrelink",
    title: "Otrelink",
    kind: "personal",
    category: "app",
    image: "img/projects/otrelink.jpg",
    layout: "links",
    colors: ["#9333ea", "#ec4899"],
    featured: true,
    type: { en: "SaaS · Full‑stack", es: "SaaS · Full‑stack" },
    summary: {
      en: "Modular, self‑hosted Linktree alternative: a live‑preview editor, 14 block types, 12 themes and built‑in analytics.",
      es: "Alternativa a Linktree modular y autoalojada: editor con vista previa en vivo, 14 tipos de bloque, 12 temas y analíticas.",
    },
    challenge: {
      en: "Creators and businesses need one page for everything they share, with full control over the design and real insight into what people click — without being locked into a closed platform.",
      es: "Creadores y negocios necesitan una sola página para todo lo que comparten, con control total del diseño y datos reales de lo que la gente toca, sin quedar atados a una plataforma cerrada.",
    },
    solution: {
      en: "A monorepo with a shared rendering core, so the editor preview is exactly what visitors see. Next.js powers the API and an installable PWA dashboard (drag‑and‑drop blocks, scheduling, undo/redo, multiple pages); the public page is lightweight vanilla JS. Includes 7 wallpaper types, 8 button styles, 21 fonts, 39 social networks, SEO, QR codes, JSON import/export and analytics with clicks, CTR, referrers and devices. Every block, theme or font is a plug‑in module.",
      es: "Un monorepo con un núcleo de renderizado compartido, así lo que ves en el editor es exactamente lo que ven los visitantes. Next.js impulsa la API y un dashboard instalable como PWA (bloques que se arrastran, programación, deshacer/rehacer, varias páginas); la página pública es JavaScript vanilla ligero. Incluye 7 tipos de fondo, 8 estilos de botón, 21 fuentes, 39 redes sociales, SEO, códigos QR, importar/exportar en JSON y analíticas con clics, CTR, referrers y dispositivos. Cada bloque, tema o fuente es un módulo que se agrega o quita.",
    },
    technologies: ["Next.js", "React", "Vanilla JS", "Vite", "MongoDB", "Tailwind CSS", "PWA", "Render"],
    url: "https://otrelink.onrender.com",
    repo: "https://github.com/0trebeh/otrelink",
  },
  {
    id: "atomic-url",
    title: "Atomic URL",
    kind: "personal",
    category: "app",
    layout: "shortener",
    colors: ["#8b7bff", "#22d3ee"],
    featured: true,
    type: { en: "Web app · Link shortener", es: "App web · Acortador de enlaces" },
    summary: {
      en: "Serverless link shortener: short URLs with zero backend and zero cost.",
      es: "Acortador de enlaces sin servidor: URLs cortas sin backend y sin costo.",
    },
    challenge: {
      en: "Share short links without paying for a server or depending on a third‑party service.",
      es: "Compartir enlaces cortos sin pagar un servidor ni depender de un servicio de terceros.",
    },
    solution: {
      en: "Short keys are stored in Firebase Realtime Database; a tiny page hosted on GitHub Pages resolves them and redirects instantly.",
      es: "Las claves cortas se guardan en Firebase Realtime Database; una página mínima en GitHub Pages las resuelve y redirige al instante.",
    },
    technologies: ["JavaScript", "Firebase", "GitHub Pages"],
    url: "https://atomic-url.github.io/x/",
    repo: "https://github.com/atomic-url/x",
  },
  {
    id: "blackboard",
    title: "Blackboard",
    kind: "personal",
    category: "other",
    image: "https://images.steamusercontent.com/ugc/17038353526919109330/874125497B4A873FBF799E2BF39AE19CFD6F376F/",
    layout: "board",
    colors: ["#34d399", "#fbbf24"],
    featured: true,
    type: { en: "Wallpaper Engine · Steam", es: "Wallpaper Engine · Steam" },
    summary: {
      en: "Interactive blackboard wallpaper for Wallpaper Engine, published on Steam.",
      es: "Fondo de pantalla interactivo tipo pizarra para Wallpaper Engine, publicado en Steam.",
    },
    challenge: {
      en: "Turn the desktop into a useful, living space instead of a static image.",
      es: "Convertir el escritorio en un espacio útil y vivo en lugar de una imagen estática.",
    },
    solution: {
      en: "A web‑based wallpaper to write, draw in color and add images right on the desktop, with tools to select and delete elements. Published on the Steam Workshop.",
      es: "Un fondo web para escribir, dibujar a color y agregar imágenes directamente en el escritorio, con herramientas para seleccionar y borrar elementos. Publicado en Steam Workshop.",
    },
    technologies: ["HTML5 Canvas", "JavaScript", "Wallpaper Engine"],
    url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3552720352",
  },
  {
    id: "forex-chart",
    title: "Forex Chart",
    kind: "personal",
    category: "app",
    layout: "chart",
    colors: ["#34d399", "#22d3ee"],
    featured: true,
    type: { en: "Web app · Trading", es: "App web · Trading" },
    summary: {
      en: "Real‑time forex charting platform with indicators and automatic pattern detection.",
      es: "Plataforma de gráficos de forex en tiempo real con indicadores y detección automática de patrones.",
    },
    challenge: {
      en: "I wanted a trading chart built around my own analysis: live prices, my favorite indicators, and chart patterns spotted automatically instead of by eye.",
      es: "Quería un gráfico de trading hecho a la medida de mi análisis: precios en vivo, mis indicadores favoritos y patrones detectados automáticamente en lugar de a ojo.",
    },
    solution: {
      en: "A charting app with a live Socket.IO price feed, multiple timeframes, indicators (SMA, EMA, MACD, RSI, VWAP, volume), drawing tools, a news calendar and detection of candlestick and chart patterns such as head & shoulders, double tops and triangles.",
      es: "Una app de gráficos con precios en vivo vía Socket.IO, múltiples temporalidades, indicadores (SMA, EMA, MACD, RSI, VWAP, volumen), herramientas de dibujo, calendario de noticias y detección de patrones de velas y chartistas como hombro‑cabeza‑hombro, dobles techos y triángulos.",
    },
    technologies: ["React 19", "TypeScript", "Vite", "Lightweight Charts", "Socket.IO"],
  },
  {
    id: "dakeisa",
    title: "Dakeisa",
    kind: "client",
    category: "client",
    image: "img/projects/dakeisa.jpg",
    layout: "site",
    colors: ["#d4af37", "#8b7bff"],
    featured: true,
    type: { en: "Landing page · Music", es: "Landing page · Música" },
    summary: {
      en: "Landing page for a professional live‑music singer.",
      es: "Landing page para una cantante profesional de música en vivo.",
    },
    challenge: {
      en: "Dakeisa needed a place to showcase her music and get booked for weddings, corporate events, restaurants and private celebrations.",
      es: "Dakeisa necesitaba un lugar para mostrar su música y recibir contrataciones para bodas, eventos corporativos, restaurantes y celebraciones privadas.",
    },
    solution: {
      en: "An elegant landing page with demos by event type, services, a photo gallery and direct booking through WhatsApp.",
      es: "Una landing elegante con demos por tipo de evento, servicios, galería de fotos y contratación directa por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    url: "https://dakeisa.github.io/",
    repo: "https://github.com/0trebeh/Dakeisa",
  },
  {
    id: "vymg",
    title: "VYMG",
    kind: "client",
    category: "client",
    image: "img/projects/vymg.jpg",
    layout: "site",
    colors: ["#22d3ee", "#f472b6"],
    featured: true,
    type: { en: "Website · Events", es: "Sitio web · Eventos" },
    summary: {
      en: "Website for a kids' party and event rentals business.",
      es: "Sitio web para un negocio de fiestas y alquiler para eventos infantiles.",
    },
    challenge: {
      en: "A family business renting inflatables, trampolines, a 360° photo booth, LED robots and more across Zulia needed to show its catalog and receive bookings online.",
      es: "Un negocio familiar que alquila inflables, trampolines, plataforma de fotos 360°, robots LED y más en todo el Zulia necesitaba mostrar su catálogo y recibir reservas en línea.",
    },
    solution: {
      en: "A vibrant landing page with a video hero, service catalog, gallery, testimonials and one‑tap booking through WhatsApp.",
      es: "Una landing vibrante con video de portada, catálogo de servicios, galería, testimonios y reservas con un toque por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    url: "https://vymg.github.io/",
    repo: "https://github.com/0trebeh/Vymg",
  },
  {
    id: "dozen",
    title: "D Ozen",
    kind: "client",
    category: "client",
    image: "img/projects/dozen.jpg",
    layout: "site",
    colors: ["#22c55e", "#8b7bff"],
    featured: false,
    type: { en: "Website · Finance", es: "Sitio web · Finanzas" },
    summary: {
      en: "Bilingual website for a credit‑repair and financial intelligence firm.",
      es: "Sitio bilingüe para una firma de reparación de crédito e inteligencia financiera.",
    },
    challenge: {
      en: "D Ozen combines AI‑assisted analysis, legal strategy and direct access to capital, and needed a site that builds trust and turns visitors into consultations.",
      es: "D Ozen combina análisis asistido por IA, estrategia jurídica y acceso directo a capital, y necesitaba un sitio que generara confianza y convirtiera visitas en consultas.",
    },
    solution: {
      en: "A premium bilingual (EN/ES) site with animated credit‑score gauges, the founders' story, results, services, process and dedicated consultation pages for each advisor.",
      es: "Un sitio premium bilingüe (ES/EN) con indicadores de puntaje de crédito animados, la historia de los fundadores, resultados, servicios, proceso y páginas de consulta para cada asesor.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Actions"],
    url: "https://0trebeh.github.io/DOZEN/",
    repo: "https://github.com/0trebeh/DOZEN",
  },
  {
    id: "uniquenumber",
    title: "UniqueNumber",
    kind: "personal",
    category: "app",
    layout: "sudoku",
    colors: ["#fbbf24", "#8b7bff"],
    featured: false,
    type: { en: "Web app · Publishing", es: "App web · Publicación" },
    summary: {
      en: "Puzzle Book Studio: a web editor to create, lay out and export sudoku books ready for Amazon KDP.",
      es: "Puzzle Book Studio: editor web para crear, maquetar y exportar libros de sudoku listos para Amazon KDP.",
    },
    challenge: {
      en: "Publishing a puzzle book means generating hundreds of valid puzzles, grading their difficulty, designing every page and meeting Amazon KDP's strict print specs — work usually spread across several tools.",
      es: "Publicar un libro de puzzles implica generar cientos de sudokus válidos, calificar su dificultad, diseñar cada página y cumplir las estrictas especificaciones de impresión de Amazon KDP, un trabajo que suele repartirse entre varias herramientas.",
    },
    solution: {
      en: "An all‑in‑one studio: a visual page editor, bulk generation of 4×4, 9×9 and 16×16 sudokus in a Web Worker with real difficulty grading (X‑Wing, Swordfish…), automatic solution pages, covers with ISBN barcode, a mascot and story system, a KDP preflight with auto‑fixes, and export to print‑ready PDF and EPUB 3.",
      es: "Un estudio todo en uno: editor visual de páginas, generación masiva de sudokus 4×4, 9×9 y 16×16 en un Web Worker con calificación real de dificultad (X‑Wing, Swordfish…), páginas de soluciones automáticas, portadas con código de barras ISBN, sistema de mascotas e historia, preflight de KDP con correcciones automáticas y exportación a PDF listo para imprenta y EPUB 3.",
    },
    technologies: ["React 19", "TypeScript", "Konva", "pdf-lib", "Zustand", "IndexedDB", "Web Workers", "Playwright"],
  },
  {
    id: "aguitaviva",
    title: "Aguita Viva",
    kind: "client",
    category: "client",
    layout: "site",
    colors: ["#38bdf8", "#22d3ee"],
    featured: false,
    type: { en: "Website · Demo", es: "Sitio web · Demo" },
    summary: {
      en: "Demo website for a local water business.",
      es: "Sitio demo para un negocio local de agua.",
    },
    challenge: {
      en: "A local business needed an online presence to show its products and make ordering easy.",
      es: "Un negocio local necesitaba presencia en línea para mostrar sus productos y facilitar los pedidos.",
    },
    solution: {
      en: "A clean, mobile‑first demo site with products, service areas and direct contact through WhatsApp.",
      es: "Un sitio demo limpio y pensado para móvil con productos, zonas de servicio y contacto directo por WhatsApp.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "foodtruck",
    title: "Food Truck",
    kind: "client",
    category: "client",
    image: "img/projects/foodtruck.jpg",
    layout: "site",
    colors: ["#facc15", "#fb923c"],
    featured: false,
    type: { en: "Website · Demo", es: "Sitio web · Demo" },
    summary: {
      en: "Demo site for a Venezuelan food truck: links, landing page and digital menu.",
      es: "Sitio demo para un food truck venezolano: enlaces, landing y menú digital.",
    },
    challenge: {
      en: "Food trucks move around: customers need to know where they are, when they're open and what's on the menu.",
      es: "Los food trucks se mueven: los clientes necesitan saber dónde están, cuándo abren y qué hay en el menú.",
    },
    solution: {
      en: "A link‑in‑bio page (Uber Eats, DoorDash, reviews), a landing page with locations, hours, gallery and FAQ, and a digital menu.",
      es: "Una página de enlaces (Uber Eats, DoorDash, reseñas), una landing con ubicaciones, horarios, galería y FAQ, y un menú digital.",
    },
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repo: "https://github.com/0trebeh/FoodTruck_Demo",
  },
  {
    id: "jump",
    title: "Jump",
    kind: "personal",
    category: "other",
    layout: "game",
    colors: ["#8b7bff", "#34d399"],
    featured: false,
    type: { en: "Video game · Godot", es: "Videojuego · Godot" },
    summary: {
      en: "Infinite vertical platformer made with Godot 4, inspired by Doodle Jump.",
      es: "Juego de plataformas vertical infinito hecho con Godot 4, inspirado en Doodle Jump.",
    },
    challenge: {
      en: "Build a Doodle Jump‑style game from scratch and extend it with combat mechanics.",
      es: "Crear desde cero un juego al estilo Doodle Jump y ampliarlo con mecánicas de combate.",
    },
    solution: {
      en: "Auto‑bounce, screen wrap, infinite procedural platforms (moving, fragile and spring), progressive difficulty and a saved high score — with all graphics drawn in code. Combat is the next phase.",
      es: "Rebote automático, paso de un lado a otro de la pantalla, plataformas infinitas (móviles, frágiles y con muelle), dificultad progresiva y récord guardado, con todos los gráficos dibujados por código. El combate es la siguiente fase.",
    },
    technologies: ["Godot 4", "GDScript"],
    repo: "https://github.com/0trebeh/Jump",
  },
]

/* ---------------------------------------------------------
   3. Idioma
   --------------------------------------------------------- */
const LANG_KEY = "otredev-lang"
let lang = CONFIG.defaultLang

function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY)
    if (saved && I18N[saved]) return saved
  } catch (e) {}
  return CONFIG.defaultLang
}

function t(key) {
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key
}

function tx(obj) {
  return typeof obj === "string" ? obj : obj[lang] || obj.en
}

function applyLang(next) {
  lang = I18N[next] ? next : "en"
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch (e) {}
  document.documentElement.lang = lang

  $$("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)))
  $$("[data-i18n-html]").forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)))
  $$("[data-i18n-placeholder]").forEach((el) => (el.placeholder = t(el.dataset.i18nPlaceholder)))
  $$("[data-i18n-content]").forEach((el) => (el.content = t(el.dataset.i18nContent)))
  $$("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)))

  $$(".lang__btn").forEach((b) => {
    const on = b.dataset.lang === lang
    b.classList.toggle("is-active", on)
    b.setAttribute("aria-pressed", on)
  })
  const toggle = $("#navToggle")
  if (toggle) toggle.setAttribute("aria-label", t($("#nav").classList.contains("is-open") ? "nav.close" : "nav.open"))

  renderProjects()
  const modal = $("#projectModal")
  if (modal && !modal.hidden && modal.dataset.id) fillModal(modal.dataset.id)
}

/* ---------------------------------------------------------
   4. Utilidades
   --------------------------------------------------------- */
function $(sel, ctx = document) {
  return ctx.querySelector(sel)
}
function $$(sel, ctx = document) {
  return [...ctx.querySelectorAll(sel)]
}

const ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
const EXT = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>'

/* Miniaturas generadas con CSS (se usan si no hay imagen o si falla) */
function mockup(p) {
  const style = `--c1:${p.colors[0]};--c2:${p.colors[1]}`
  const bar = '<div class="mock__bar"><i></i><i></i><i></i></div>'
  const candles = [
    [30, 55, 1], [40, 60, 0], [35, 50, 1], [45, 70, 1], [55, 72, 0], [50, 65, 1], [60, 80, 1],
    [58, 70, 0], [62, 78, 1], [70, 88, 1], [66, 80, 0], [74, 92, 1],
  ]
    .map(([lo, hi, up]) => `<i class="${up ? "up" : "dn"}" style="--lo:${lo}%;--hi:${hi}%"></i>`)
    .join("")
  const layouts = {
    chart: `${bar}<div class="mock__chart"><div class="m-candles">${candles}</div><div class="m-ma"></div><div class="m-axis"><i></i><i></i><i></i><i></i></div></div>`,
    site: `${bar}<div class="mock__site"><div class="m-nav"><i></i><i></i><i></i></div><div class="m-hero"><div><b></b><em></em><em class="short"></em><span class="m-btn"></span></div><i class="m-img"></i></div></div>`,
    sudoku: `<div class="mock__book"><div class="m-page"><b></b><div class="m-grid">${[..."530070000600195000098000060800060003400803001700020006060000280000419005000080079"].map((d) => `<i>${d === "0" ? "" : d}</i>`).join("")}</div><em></em></div><div class="m-page m-page--r"><span class="m-sudi"></span><div class="m-bubble"></div><div class="m-mini">${"<i></i>".repeat(4)}</div></div></div>`,
    number: `${bar}<div class="mock__number"><strong>#48213</strong><span class="m-btn"></span><div class="m-chips"><i></i><i></i><i></i><i></i></div></div>`,
    shortener: `${bar}<div class="mock__short"><div class="m-input"><em></em><span class="m-btn"></span></div><div class="m-result"><span>atomic-url.github.io/x/?search=</span><b>otre</b></div></div>`,
    board: `<div class="mock__board"><svg viewBox="0 0 200 110" aria-hidden="true"><path d="M20 30c20-14 40 14 60 0s40-14 60 0" /><path d="M24 70h60M24 82h40" /><circle cx="150" cy="72" r="18"/><path d="M120 40l12 12 22-24"/></svg><div class="m-tools"><i></i><i></i><i></i><i></i></div></div>`,
    game: `<div class="mock__game"><i class="p" style="--x:18%;--y:82%"></i><i class="p mv" style="--x:55%;--y:64%"></i><i class="p" style="--x:30%;--y:46%"></i><i class="p br" style="--x:62%;--y:28%"></i><i class="p" style="--x:22%;--y:12%"></i><span class="hero-dot"></span><b>1280</b></div>`,
    links: `<div class="mock__links"><div class="m-phone"><i class="m-avatar"></i><b></b><span></span><span></span><span></span><span></span></div></div>`,
  }
  return `<div class="mock" style="${style}" aria-hidden="true">${layouts[p.layout] || layouts.site}</div>`
}

function thumb(p) {
  const img = p.image
    ? `<img src="${p.image}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`
    : ""
  return `${mockup(p)}${img}`
}

function projectCard(p) {
  return `
    <article class="project reveal" data-category="${p.category}">
      <button class="project__open" data-project="${p.id}" aria-label="${p.title}">
        <div class="project__thumb">
          ${thumb(p)}
          <span class="project__badge project__badge--${p.kind}">${t("proj." + p.kind)}</span>
        </div>
        <div class="project__body">
          <span class="project__type">${tx(p.type)}</span>
          <h3>${p.title}</h3>
          <p>${tx(p.summary)}</p>
          <span class="project__more">${t("proj.more")} ${ARROW}</span>
        </div>
      </button>
    </article>`
}

/* ---------------------------------------------------------
   5. Render de proyectos y filtros
   --------------------------------------------------------- */
let currentFilter = "all"

function renderProjects() {
  const featured = $("#featuredProjects")
  if (featured) {
    featured.innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("")
    observeReveal(featured)
  }
  const grid = $("#projectsGrid")
  if (grid) {
    grid.innerHTML = PROJECTS.map(projectCard).join("")
    applyFilter()
    observeReveal(grid)
  }
  $$("[data-count]").forEach((el) => {
    const c = el.dataset.count
    el.textContent = c === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.category === c).length
  })
}

function applyFilter() {
  $$("#projectsGrid .project").forEach((card) => {
    card.hidden = !(currentFilter === "all" || card.dataset.category === currentFilter)
  })
}

function setupFilters() {
  const buttons = $$(".filter")
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter
      buttons.forEach((b) => {
        b.classList.toggle("is-active", b === btn)
        b.setAttribute("aria-pressed", b === btn)
      })
      applyFilter()
    })
  })
}

/* ---------------------------------------------------------
   6. Modal de proyecto (en inicio lleva al portafolio)
   --------------------------------------------------------- */
let lastFocus = null

function fillModal(id) {
  const p = PROJECTS.find((x) => x.id === id)
  if (!p) return
  $("#modalBody").innerHTML = `
    <div class="modal__thumb">${thumb(p)}</div>
    <div class="modal__content">
      <span class="project__type">${tx(p.type)} · ${t("proj." + p.kind)}</span>
      <h2 id="modalTitle">${p.title}</h2>
      <div class="modal__cols">
        <div><h4>${t("modal.challenge")}</h4><p>${tx(p.challenge)}</p></div>
        <div><h4>${t("modal.solution")}</h4><p>${tx(p.solution)}</p></div>
      </div>
      <h4>${t("modal.tech")}</h4>
      <div class="tags">${p.technologies.map((x) => `<span>${x}</span>`).join("")}</div>
      <div class="modal__actions">
        ${p.url ? `<a href="${p.url}" class="btn btn--ghost" target="_blank" rel="noopener">${t("modal.live")} ${EXT}</a>` : ""}
        ${p.repo ? `<a href="${p.repo}" class="btn btn--ghost" target="_blank" rel="noopener">${t("modal.code")} ${EXT}</a>` : ""}
        <a href="index.html#contacto" class="btn btn--primary">${t("modal.want")} ${ARROW}</a>
      </div>
    </div>`
}

function openProject(id) {
  const modal = $("#projectModal")
  if (!PROJECTS.some((p) => p.id === id)) return
  if (!modal) {
    window.location.href = `portfolio.html#${id}`
    return
  }
  lastFocus = document.activeElement
  modal.dataset.id = id
  fillModal(id)
  modal.hidden = false
  requestAnimationFrame(() => modal.classList.add("is-open"))
  document.body.style.overflow = "hidden"
  $(".modal__close", modal).focus()
}

function closeProject() {
  const modal = $("#projectModal")
  if (!modal || modal.hidden) return
  modal.classList.remove("is-open")
  document.body.style.overflow = ""
  setTimeout(() => (modal.hidden = true), 250)
  if (lastFocus) lastFocus.focus()
}

function setupModal() {
  document.addEventListener("click", (e) => {
    const open = e.target.closest("[data-project]")
    if (open) openProject(open.dataset.project)
    if (e.target.closest("[data-close]")) closeProject()
  })
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProject()
  })
  const hash = decodeURIComponent(location.hash.slice(1))
  if (hash && $("#projectModal")) openProject(hash)
}

/* ---------------------------------------------------------
   7. Contacto: enlaces y formulario → WhatsApp
   --------------------------------------------------------- */
function waLink(text) {
  return `https://wa.me/${CONFIG.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`
}

function setupContactLinks() {
  const hrefs = {
    whatsapp: CONFIG.whatsapp ? waLink() : "",
    linkedin: CONFIG.linkedin,
    github: CONFIG.github,
  }
  $$("[data-contact]").forEach((a) => {
    const href = hrefs[a.dataset.contact]
    if (href) a.href = href
    else a.hidden = true
  })
}

function setupForm() {
  const form = $("#contactForm")
  if (!form) return
  const status = $("#formStatus")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let valid = true
    $$("input[required], textarea[required]", form).forEach((field) => {
      const ok = field.type === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim()) : field.value.trim() !== ""
      field.closest(".field").classList.toggle("has-error", !ok)
      if (!ok) valid = false
    })
    if (!valid) {
      status.textContent = t("form.err")
      status.className = "form__status is-error"
      return
    }

    const d = Object.fromEntries(new FormData(form))
    const text = [
      t("wa.hello"),
      "",
      `*${t("wa.name")}:* ${d.nombre.trim()}`,
      `*${t("wa.email")}:* ${d.email.trim()}`,
      `*${t("wa.subject")}:* ${d.asunto.trim()}`,
      "",
      `*${t("wa.msg")}:*`,
      d.mensaje.trim(),
    ].join("\n")

    window.open(waLink(text), "_blank", "noopener")
    status.textContent = t("form.ok")
    status.className = "form__status is-ok"
    form.reset()
  })

  $$("input, textarea", form).forEach((f) =>
    f.addEventListener("input", () => f.closest(".field").classList.remove("has-error")),
  )
}

/* ---------------------------------------------------------
   8. Navegación y animaciones
   --------------------------------------------------------- */
function setupNav() {
  const nav = $("#nav")
  const toggle = $("#navToggle")
  const menu = $("#navMenu")

  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open")
    toggle.setAttribute("aria-expanded", open)
    toggle.setAttribute("aria-label", t(open ? "nav.close" : "nav.open"))
  })
  $$("a", menu).forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open")
      toggle.setAttribute("aria-expanded", "false")
    }),
  )

  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)))

  // Resaltar sección activa
  const links = $$('.nav__link[href^="#"]')
  const sections = links.map((l) => $(l.getAttribute("href"))).filter(Boolean)
  if (!sections.length || !("IntersectionObserver" in window)) return
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`))
        }
      })
    },
    { rootMargin: "-45% 0px -50% 0px" },
  )
  sections.forEach((s) => io.observe(s))
}

const revealIO =
  "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.isIntersecting) {
              en.target.classList.add("is-visible")
              revealIO.unobserve(en.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      )
    : null

function observeReveal(root = document) {
  $$(".reveal:not(.is-visible)", root).forEach((el, i) => {
    if (!revealIO) return el.classList.add("is-visible")
    el.style.transitionDelay = `${(i % 4) * 60}ms`
    revealIO.observe(el)
  })
}

/* ---------------------------------------------------------
   9. Inicio
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setupFilters()
  setupContactLinks()
  setupForm()
  setupNav()
  applyLang(loadLang()) // también dibuja los proyectos
  setupModal()
  observeReveal()
  const y = $("#year")
  if (y) y.textContent = new Date().getFullYear()
})
