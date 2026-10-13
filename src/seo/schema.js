import { products } from "../data/products.js";
import { faqs } from "../data/faq.js";
import { siteUrl, siteName, business, defaultImage, productMeta } from "../data/seo.js";

export const abs = (p) => (/^https?:\/\//.test(p) ? p : siteUrl + (p.startsWith("/") ? p : "/" + p));
// Paths served only by Vite dev (/src/...) are not public in production.
const publicImg = (p) => (p && !p.startsWith("/src/") ? abs(p) : abs(defaultImage));

export const businessId = siteUrl + "#business";
export const websiteId = siteUrl + "#website";

export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "Store", "LocalBusiness"],
    "@id": businessId,
    name: business.name,
    legalName: business.legalName,
    alternateName: siteName,
    url: siteUrl + "/",
    description: business.description,
    logo: abs(business.logo),
    image: [abs(defaultImage), abs(business.logo)],
    email: business.email,
    telephone: business.telephone,
    priceRange: business.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: business.city,
      addressRegion: business.region,
      addressCountry: business.country,
    },
    areaServed: business.areaServed.map((name) => ({
      "@type": name === "Colombia" ? "Country" : name === "Cali" ? "City" : "AdministrativeArea",
      name,
    })),
    sameAs: [business.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: business.telephone,
        email: business.email,
        availableLanguage: ["es"],
        areaServed: business.country,
        url: `https://wa.me/${business.telephone.replace("+", "")}`,
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: siteUrl + "/",
    name: business.name,
    inLanguage: "es-CO",
    publisher: { "@id": businessId },
  };
}

export function productSchema(product) {
  const meta = productMeta(product);
  const url = `${siteUrl}/producto/${product.slug}`;
  const images = [product.image, product.image2].filter(Boolean).map(publicImg);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": url + "#product",
    name: product.name,
    description: meta.description,
    image: images,
    sku: product.slug,
    brand: { "@type": "Brand", name: siteName },
    offers: {
      "@type": "Offer",
      url,
      price: String(product.price),
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": businessId },
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export function itemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catálogo de jabones artesanales MEI",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/producto/${p.slug}`,
      name: p.name,
    })),
  };
}

export function faqSchema(list) {
  if (!list || !list.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: list.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const generalFaqSchema = () => faqSchema(faqs && faqs.general);
export const matDefenceFaqSchema = () => faqSchema(faqs && faqs.matDefence);
