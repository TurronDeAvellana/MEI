# MEI MAGIC — Prompt de proyecto para nueva conversación

> Leé este archivo completo antes de escribir una sola línea de código.  
> Es la fuente de verdad del proyecto: stack, estructura, identidad visual y reglas de trabajo.

---

## 1. Contexto del proyecto

**Nombre del emprendimiento:** MEI MAGIC (también conocido como MEI Jabones Artesanales)  
**Tipo de sitio:** Portafolio/catálogo de producto artesanal  
**Propósito del sitio:** Mostrar la marca, los productos (especialmente Mat Defence), los ingredientes y la filosofía artesanal. Sin carrito ni e-commerce por ahora.  
**Dueño:** Andrés Felipe Aristizábal Buriticá — desarrollador web y consultor digital en Cali, Colombia.

---

## 2. Stack tecnológico

- **Framework:** React con Vite (NO Next.js, NO SSR)
- **Lenguaje:** JSX (`.jsx`) — sin TypeScript por ahora
- **Estilos:** CSS puro por componente o un `index.css` global — sin Tailwind, sin CSS Modules
- **Sin backend ni CMS:** todo el contenido vive en archivos de datos dentro de `src/data/` (arrays y objetos JS planos)
- **Sin librerías de iconos externas:** los iconos SVG se escriben inline como componentes JSX

---

## 3. Estructura de carpetas

```
src/
├─ components/
│  ├─ Navbar.jsx        # navegación sticky, logo MEI
│  ├─ Hero.jsx          # apertura de impacto con identidad de marca
│  ├─ Essence.jsx       # sección "qué es MEI" / filosofía artesanal
│  ├─ ProductGrid.jsx   # cuadrícula de productos del catálogo
│  ├─ Ingredients.jsx   # ingredientes destacados / proceso de fabricación
│  ├─ Amenities.jsx     # usos / beneficios / amenities para hoteles u otros
│  ├─ MatDefence.jsx    # sección especial para el producto estrella Mat Defence
│  └─ Footer.jsx        # contacto, redes sociales, créditos
│
├─ pages/
│  └─ Home.jsx          # ensambla todas las secciones en orden
│
├─ assets/
│  ├─ mei/              # logos, imágenes de marca general MEI MAGIC
│  └─ mat-defence/      # fotos e imágenes específicas de Mat Defence
│
├─ data/
│  ├─ products.js       # array de productos con slug, nombre, descripción, ingredientes, imagen
│  └─ site.js           # config del sitio: nombre, tagline, redes, contacto, copys globales
│
├─ App.jsx              # raíz de la app, importa Home
└─ main.jsx             # punto de entrada Vite, monta <App />
```

**Regla clave:** ningún componente tiene contenido hardcodeado. Todo texto, imagen o dato sale de `src/data/`.

---

## 4. Identidad visual

### Concepto
**"Premium artesanal orgánico"** — jabones de glicerina hechos a mano. La estética debe comunicar pureza, cuidado y naturalidad sin caer en lo rústico genérico. Piensa en una farmacia botánica de lujo, no en un mercado de pulgas.

### Paleta de color

| Nombre | Hex | Uso |
|---|---|---|
| Crema marfil | `#F7F3EE` | Fondo principal |
| Verde salvia oscuro | `#4A5E4A` | Color primario, textos de acento |
| Verde salvia suave | `#8FA989` | Bordes, elementos secundarios |
| Terracota cálida | `#C4714A` | CTA, destacados, Mat Defence |
| Carbón | `#2C2C2C` | Texto principal |
| Blanco puro | `#FFFFFF` | Tarjetas, fondos de sección alternados |

### Tipografía

| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Display / marca | `Cormorant Garamond` (serif) | 300–600 | Títulos de sección, nombre de marca |
| Cuerpo / UI | `DM Sans` (sans-serif) | 400–500 | Párrafos, labels, navegación |

Cargar desde Google Fonts. No usar librerías de iconos — solo SVG inline.

### Signature visual
**Un degradado horizontal en el Hero** que va del verde salvia oscuro al verde salvia suave, con el nombre MEI MAGIC en `Cormorant Garamond` muy grande (display), peso 300, color crema. La sensación debe ser de spa botánico de lujo, no de landing genérica.

---

## 5. Secciones y su propósito

| Componente | Qué muestra |
|---|---|
| `Navbar` | Logo + links de navegación suaves (scroll). Sticky. Fondo blanco con sombra sutil al hacer scroll. |
| `Hero` | Headline emocional, tagline, CTA "Ver productos" y "Conocer Mat Defence". Fondo degradado salvia. |
| `Essence` | Filosofía de MEI MAGIC: handmade, glicerina pura, sin parabenos. Texto + íconos SVG inline. |
| `ProductGrid` | Cards de productos desde `data/products.js`. Hover con elevación sutil. |
| `Ingredients` | Ingredientes estrella (aloe, aceite de coco, etc.) con íconos/ilustraciones y descripción breve. |
| `Amenities` | Para quién es MEI: hoteles, spas, regalos corporativos. Formato visual de "propuesta de valor". |
| `MatDefence` | Sección featured del producto Mat Defence. Imagen grande, descripción, ingredientes, CTA de contacto. |
| `Footer` | Redes, email, WhatsApp, copyright MEI MAGIC. |

---

## 6. Datos base (`src/data/`)

### `products.js` — estructura mínima esperada

```js
export const products = [
  {
    slug: "mat-defence",
    name: "Mat Defence",
    tagline: "Protección activa para tu piel",
    description: "Jabón artesanal de glicerina con...",
    ingredients: ["Glicerina vegetal", "Aloe vera", "Aceite de coco"],
    category: "tratamiento",
    image: "/assets/mat-defence/jabón-mat-defence.jpg",
    featured: true,
  },
  // más productos...
];
```

### `site.js` — configuración global

```js
export const site = {
  name: "MEI MAGIC",
  tagline: "Jabones artesanales con alma",
  description: "Glicerina pura, ingredientes naturales, elaborados a mano en Colombia.",
  contact: {
    email: "mei@meimagic.co",
    whatsapp: "+573XXXXXXXXX",
    instagram: "@meimagic.co",
  },
  nav: [
    { label: "Inicio", href: "#hero" },
    { label: "Productos", href: "#productos" },
    { label: "Ingredientes", href: "#ingredientes" },
    { label: "Mat Defence", href: "#mat-defence" },
    { label: "Contacto", href: "#footer" },
  ],
};
```

---

## 7. Principios de desarrollo

1. **Contenido como datos:** ningún string de UI queda hardcodeado en JSX. Siempre desde `src/data/`.
2. **Componentes autocontenidos:** cada sección es independiente, sin acoplamientos implícitos.
3. **Mobile-first:** breakpoints desde 375px. El Hero funciona bien en móvil antes que en desktop.
4. **Sin librerías de UI:** no Bootstrap, no Material UI, no Chakra. CSS propio siempre.
5. **CSS limpio:** evitar specificity wars. Usar clases descriptivas (BEM-like si aplica). No inline styles salvo casos puntuales.
6. **Imágenes:** todas en `/assets/` con nombres descriptivos en kebab-case.
7. **Accesibilidad básica:** `alt` en imágenes, `aria-label` en links de ícono, foco visible.

---

## 8. Tareas al iniciar la conversación

Cuando recibas este prompt en una nueva conversación, el flujo es:

1. **Leer** este archivo completo.
2. **Confirmar** el stack y la estructura con el usuario antes de generar código.
3. **Crear el scaffold** de carpetas y archivos vacíos (o con placeholders mínimos) según la estructura de carpetas de la sección 3.
4. **Configurar** `App.jsx` y `main.jsx` con Vite.
5. **Generar** `src/data/products.js` y `src/data/site.js` con datos de ejemplo alineados a MEI MAGIC.
6. **Construir los componentes** sección por sección, empezando por `Navbar` → `Hero` → `Essence` → `ProductGrid` → y así.
7. **Preguntar** al usuario si tiene imágenes reales antes de usar placeholders.

---

## 9. Notas de contexto adicional

- El cliente objetivo de MEI MAGIC incluye **hoteles y spas en Colombia** (canal B2B), además de consumidor final.
- El producto estrella es **Mat Defence** — un jabón con propiedades específicas que ya tiene su propio nombre y concepto.
- Andrés ya tiene una **base en HTML/CSS** que sirve de referencia visual. Pedirle que comparta el archivo o capturas antes de empezar a construir componentes.
- El sitio puede evolucionar a tener rutas dinámicas por producto en el futuro (React Router), pero por ahora es **single page**.
- Idioma del sitio: **español colombiano**, tono cálido y profesional.

---

*Archivo generado para uso en Claude.ai — MEI MAGIC © 2026*
