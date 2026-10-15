# Próximos pasos: Google Search Console y Perfil de Empresa

> Checklist creado el 2026-10-13, después del commit de SEO local (`08068ec`, PR #1).
> Sitio: https://mei.portafoliodev.com · Ciudad foco: **Cali**

---

## 0. Antes de todo (requisito)

- [ ] Integrar el PR #1 a `main`.
- [ ] Correr `npm run build` y subir **todo** el contenido de `dist/` a Hostinger (incluye `catalogo.html`, `producto/`, `sitemap.xml`, `robots.txt`, `.htaccess`).
- [ ] Probar en el navegador:
  - [ ] `https://mei.portafoliodev.com/catalogo` abre el catálogo.
  - [ ] `/producto/hera` abre la ficha de Hera.
  - [ ] `/amenities` abre la página de amenities.
  - [ ] `/catalogo/` (con barra final) redirige a `/catalogo`.
  - [ ] `/robots.txt` y `/sitemap.xml` cargan.
- [ ] Compartir el link de la página en WhatsApp y comprobar que sale la vista previa con imagen, título y descripción.
- [ ] Revisar el texto de las preguntas frecuentes de Mat Defence (`src/data/faq.js`). Dice que el árbol de té y el romero "ayudan a" prevenir hongos; confirmar que estás de acuerdo con esa redacción.

---

## 1. Google Search Console (semana 1 después del despliegue)

### Alta y verificación
- [x] Entrar a https://search.google.com/search-console.
- [x] Crear propiedad tipo **"Prefijo de URL"** con `https://mei.portafoliodev.com`. No usar "Dominio": eso verificaría todo `portafoliodev.com` y requiere tocar el DNS.
- [x] Verificar con **etiqueta HTML** (meta tag). Pásale el código a Claude para agregarlo a `index.html`, hacer build y desplegar. Otra opción es subir el archivo HTML de verificación a `public/`.

### Indexación
- [ ] En **Sitemaps**, enviar `sitemap.xml`.
- [ ] Con **Inspección de URLs**, pedir indexación de las páginas principales:
  - [ ] `/`
  - [ ] `/catalogo`
  - [ ] `/mat-defence`
  - [ ] `/amenities`
  - [ ] 2–3 fichas de producto (por ejemplo `/producto/hera`, `/producto/eos`)
- [ ] En la inspección, revisar **"Ver página rastreada"**. Debe mostrar el contenido completo, no un `<div id="root">` vacío.

### Validación de datos estructurados
- [ ] Pasar la home y una ficha por https://search.google.com/test/rich-results. Deben aparecer:
  - Home: `LocalBusiness` / `Organization`.
  - Fichas: `Product` con precio en COP y `BreadcrumbList`.
- Nota: el `FAQPage` sigue siendo válido, pero Google hoy casi no muestra preguntas frecuentes como resultado enriquecido para sitios comerciales. Sirve para entender la página, no esperes verlo en los resultados.

### Rendimiento
- [ ] Medir https://pagespeed.web.dev/ en **móvil** para `/` y `/producto/hera`. Meta: verde en LCP (< 2,5 s), CLS (< 0,1) e INP.
- [ ] Anotar los resultados aquí para comparar después:
  - Fecha: ____ · Home móvil: ____ · Ficha móvil: ____

### Extra (opcional, 10 minutos)
- [ ] Bing Webmaster Tools (https://www.bing.com/webmasters): importar desde Search Console. Bing también alimenta a otros buscadores y asistentes.

### Seguimiento mensual
- [ ] Revisar **Rendimiento**: las consultas con impresiones, la posición media y el CTR.
- [ ] Vigilar estas palabras clave:
  - "jabones artesanales cali"
  - "jabones naturales cali"
  - "jabón para piel sensible"
  - "amenities hoteles cali"
  - "jabón para bjj" / "jabón antibacterial deportistas"
- [ ] Revisar **Páginas**: que no haya errores de indexación ni páginas "rastreadas sin indexar".
- [ ] Si una página tiene muchas impresiones y pocos clics, pedirle a Claude que mejore su título y descripción en `src/data/seo.js`.

---

## 2. Perfil de Empresa en Google (paso final)

### Creación
- [ ] Entrar a https://business.google.com con la cuenta de Google del negocio. Que no sea una cuenta personal que se pueda perder.
- [ ] **Nombre:** `MEI Jabones Artesanales`, exactamente igual que en la web. No agregar palabras clave como "MEI Jabones Artesanales Cali Naturales": va contra las normas y puede causar suspensión.
- [ ] **Categoría principal:** "Tienda de jabones" (Soap store).
- [ ] **Categorías secundarias:** "Tienda de cosméticos" y, si aplica, "Proveedor de amenities para hoteles" o la categoría más cercana disponible.
- [ ] **Tipo de negocio:**
  - Sin local abierto al público: elegir **negocio de área de servicio** y **ocultar la dirección**.
  - Áreas: Cali, Jamundí, Yumbo, Palmira (ajustar a donde realmente entregan).
- [ ] **Teléfono:** `+57 312 324 3726`, el mismo de la web y el WhatsApp.
- [ ] **Sitio web:** `https://mei.portafoliodev.com`.
- [ ] **Horario** de atención, aunque sea por WhatsApp.
- [ ] **Verificación:** normalmente por video para negocios sin local. Tener a mano el logo, los productos, el lugar de elaboración y algún documento o factura del negocio.

### Contenido del perfil
- [ ] **Descripción** (máximo 750 caracteres). Natural, mencionando:
  - "jabones artesanales de glicerina hechos a mano en Cali"
  - ingredientes naturales
  - línea para deportistas Mat Defence
  - amenities para hoteles y spas
  - envíos
- [ ] **Fotos:** al menos 10.
  - Logo y foto de portada.
  - Cada jabón.
  - El proceso artesanal (como el mortero).
  - Empaques.
  - Mat Defence.
  - Actualizar con fotos nuevas cada mes.
- [ ] **Productos:** cargar cada jabón con foto, precio y el link a su ficha (`/producto/<nombre>`).
- [ ] **Servicios:** "Amenities para hoteles y spas" y "Regalos corporativos", con link a `/amenities`.

### Reseñas (el factor nº 1 para salir en el mapa)
- [ ] Copiar el **link para pedir reseñas** desde el panel del perfil.
- [ ] Enviárselo a cada cliente después de la compra, por WhatsApp. Meta: 10 reseñas en el primer mes y luego un flujo constante.
- [ ] Responder **todas** las reseñas, buenas y malas, en menos de 48 h.
- [ ] No ofrecer descuentos a cambio de reseñas: va contra las normas de Google.

### Actividad
- [ ] Publicar **1 post por semana** en el perfil: producto nuevo, promoción, evento, feria o atleta Mat Defence.

### Cuando el perfil esté verificado, pedirle a Claude
- [ ] Agregar el link del perfil (Maps) al `sameAs` y al `hasMap` del JSON-LD en `src/data/seo.js`.
- [ ] Agregar en la sección de contacto de la web un botón "Déjanos una reseña en Google".

---

## 3. Consistencia de datos del negocio (NAP: nombre, dirección y teléfono)

Usar **exactamente** el mismo nombre, ciudad, teléfono y web en:
- [ ] Instagram (`@mei_magic_111`): bio con "Cali" y el link a la web.
- [ ] WhatsApp Business: perfil con descripción, horario, catálogo y link a la web.
- [ ] Facebook (si existe).
- [ ] Directorios: Páginas Amarillas Colombia, Cylex Colombia, Hotfrog y similares (gratuitos).

---

## 4. Autoridad (continuo, después del perfil)

- [ ] Pedir enlaces a la web desde:
  - Academias de BJJ y MMA de Cali que usen Mat Defence.
  - Atletas patrocinados (bio de Instagram o sitio).
  - Ferias y mercados artesanales donde participen.
  - Hoteles y spas que sean clientes.
- [ ] Blog o guías sobre "cuidado de la piel" (1–2 artículos al mes). Pedirle a Claude que cree la sección `/blog` cuando estés listo.

---

## Orden y tiempos sugeridos

| Cuándo | Qué |
|---|---|
| Semana 0 | Integrar el PR, desplegar y probar (sección 0) |
| Semana 1 | Search Console: alta, sitemap, pedir indexación, PageSpeed |
| Semana 2 | Perfil de Empresa: crear y verificar, fotos y productos |
| Semanas 3–4 | Reseñas, consistencia de datos y primeras publicaciones |
| Mensual | Revisar Search Console, publicar en el perfil, reseñas, enlaces |

Las búsquedas de nicho (Mat Defence) y el mapa local suelen moverse en **4–8 semanas**. Las búsquedas genéricas como "cuidado de la piel" toman **meses** y dependen del blog y de los enlaces desde otros sitios.
