// Edite apenas as URLs abaixo para publicar a página com os links definitivos.
const LINK_SECTIONS = [
  {
    title: "Produtos da Aquadexa",
    highlight: true,
    links: [
      {
        title: "Vitrinefolio",
        caption: "Portfólios profissionais para vender mais",
        platform: "product",
        color: "#a7ff5e",
        url: "https://vitrinefolio.vercel.app/",
        featured: true,
        badge: "produto",
      },
      {
        title: "MinutaAI",
        caption: "Inteligência artificial para documentos jurídicos",
        platform: "product",
        color: "#66e6ff",
        url: "https://minutaai.com/",
        featured: true,
        badge: "produto",
      },
      {
        title: "Gestão Paroquial",
        caption: "Sistema para organizar rotinas paroquiais",
        platform: "product",
        color: "#ffcf5a",
        url: "https://gestaoparoquial.com/",
        featured: true,
        badge: "produto",
      },
    ],
  },
  {
    title: "Parcerias no TikTok",
    links: [
      // TikTok do Cambão pausado temporariamente. Reativar futuramente mantendo este bloco.
      // {
      //   title: "Apoie o parceiro no TikTok",
      //   caption: "Faltam só 50 seguidores para liberar live",
      //   platform: "tiktok",
      //   color: "#9dff00",
      //   url: "https://www.tiktok.com/@ismael.sotero6?_r=1&_t=ZS-97voVjLwFsO",
      //   featured: true,
      //   image: "./assets/partner-live.webp",
      //   badge: "apoya",
      // },
      {
        title: "Sorteio GTA VI",
        caption: "Participe pela árvore de links oficial",
        platform: "gta",
        color: "#ff4fd8",
        url: "https://sorteio-gta-vi-tree.vercel.app/?perfil=codexa",
        image: "./assets/icons/icon-gta-vi.svg",
      },
      {
        title: "TikTok de Fallen",
        caption: "Parceiro Codex",
        platform: "tiktok",
        color: "#f02cff",
        url: "https://www.tiktok.com/@hey_fallen_dallas22",
        image: "./assets/fallen.webp",
      },
      {
        title: "TikTok de Sarcástica",
        caption: "Parceira Codex",
        platform: "tiktok",
        color: "#00f08a",
        url: "https://www.tiktok.com/@sarcastica",
        image: "./assets/sarcastica.webp",
      },
    ],
  },
  {
    title: "Redes sociais",
    links: [
      {
        title: "WhatsApp da Codex",
        caption: "Solicite um orçamento",
        platform: "whatsapp",
        color: "#31d158",
        url: "https://wa.me/52SEUNUMERO",
        image: "./assets/icons/icon-whatsapp.svg",
      },
      {
        title: "Codex Live Projects",
        caption: "Envie seu projeto para análise ao vivo",
        platform: "live",
        color: "#9dff00",
        url: "https://codexa-live-projects.vercel.app/",
        image: "./assets/icons/icon-live-projects.svg",
      },
      {
        title: "Instagram da Codex",
        caption: "Projetos, conteúdo e novidades",
        platform: "instagram",
        color: "#e84e9b",
        url: "https://www.instagram.com/co.dexaweb/",
      },
      {
        title: "LinkedIn da Codex",
        caption: "Siga a página da empresa",
        platform: "linkedin",
        color: "#35a8ff",
        url: "https://www.linkedin.com/company/codexa-web",
      },
      {
        title: "Meu LinkedIn",
        caption: "Carrera y desarrollo",
        platform: "linkedin",
        color: "#35a8ff",
        url: "https://www.linkedin.com/in/mateus-camargo-rodrigues/",
      },
    ],
  },
];

const ICONS = {
  tiktok: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path fill="#25F4EE" d="M17.3 4.3h4.1c.4 2.4 1.8 4.4 4.2 5.3v4.2a10.4 10.4 0 0 1-4.2-1.1v8.5c0 4.7-3.8 8.5-8.5 8.5a8.5 8.5 0 0 1-3.4-16.3c1.1-.5 2.4-.8 3.8-.8.4 0 .8 0 1.2.1v4.3a4.3 4.3 0 1 0 2.8 4V4.3Z"/>
      <path fill="#FE2C55" d="M19.1 3h4.1c.4 2.4 1.8 4.4 4.2 5.3v4.2a10.4 10.4 0 0 1-4.2-1.1v8.5c0 4.7-3.8 8.5-8.5 8.5A8.5 8.5 0 0 1 7 16.2a8.5 8.5 0 0 0 9.6 12.5 8.5 8.5 0 0 0 6.6-8.3V12a10.4 10.4 0 0 0 4.2 1.1V9a8.1 8.1 0 0 1-4.2-2.4A8.7 8.7 0 0 1 21 3h-1.9Z" opacity=".84"/>
      <path fill="#fff" d="M17.3 4.3h4.1c.2 1.2.7 2.3 1.4 3.2v2.3a9.8 9.8 0 0 1-1.4-.5v11.9c0 4.7-3.8 8.5-8.5 8.5-2 0-3.8-.7-5.2-1.8a8.5 8.5 0 0 0 11.4-8V8.2a8.1 8.1 0 0 0 3.7 3.1v2.3a10.4 10.4 0 0 1-4.2-1.1V21a5.6 5.6 0 1 1-4.1-5.4v1.5a4.3 4.3 0 1 0 2.8 4V4.3Z" opacity=".95"/>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path fill="#25D366" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3Z"/>
      <path fill="#fff" d="M23.4 19.4c-.4-.2-2.3-1.1-2.7-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.6-4.9-.4-.7.4-.7 1.2-2.1.1-.3 0-.6-.1-.8l-1.2-2.9c-.3-.7-.7-.6-.9-.6h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 4s1.7 4.6 1.9 4.9c.2.3 3.4 5.2 8.2 7.3 3 1.3 4.2 1.4 5.7 1.2.9-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5Z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <defs>
        <radialGradient id="igA" cx="30%" cy="105%" r="125%">
          <stop offset="0%" stop-color="#ffd600"/>
          <stop offset="38%" stop-color="#ff7a00"/>
          <stop offset="62%" stop-color="#ff0169"/>
          <stop offset="100%" stop-color="#d300c5"/>
        </radialGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="8" fill="url(#igA)"/>
      <rect x="8" y="8" width="16" height="16" rx="5.2" fill="none" stroke="#fff" stroke-width="2.2"/>
      <circle cx="16" cy="16" r="4.1" fill="none" stroke="#fff" stroke-width="2.2"/>
      <circle cx="22.1" cy="9.9" r="1.4" fill="#fff"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="5" fill="#0A66C2"/>
      <path fill="#fff" d="M9.2 13.2h3.2V24H9.2V13.2Zm1.6-5.3a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.8 5.3h3.1v1.5h.1c.4-.8 1.5-1.9 3.2-1.9 3.4 0 4 2.2 4 5.2v6h-3.2v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V24h-3.2V13.2Z"/>
    </svg>
  `,
  gta: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="gtaA" x1="4" y1="28" x2="28" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#33d6ff"/>
          <stop offset="45%" stop-color="#ff4fd8"/>
          <stop offset="100%" stop-color="#ff9a3d"/>
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="26" height="26" rx="7" fill="url(#gtaA)"/>
      <text x="16" y="15" text-anchor="middle" fill="#101014" font-family="Inter, Arial, sans-serif" font-size="8" font-weight="900">GTA</text>
      <text x="16" y="24" text-anchor="middle" fill="#fff" font-family="Inter, Arial, sans-serif" font-size="10" font-weight="900">VI</text>
    </svg>
  `,
  live: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <rect x="3" y="3" width="26" height="26" rx="7" fill="#9DFF00"/>
      <path fill="#071007" d="M8.2 9.2h3.6v10.2h5.4v3.4h-9V9.2Zm10 0h3.6v13.6h-3.6V9.2Z"/>
      <circle cx="24.4" cy="11.4" r="2.2" fill="#ff2f6d"/>
    </svg>
  `,
  product: `
    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
      <path fill="currentColor" d="M16 3.4 5.8 8.5v10.9L16 28.6l10.2-9.2V8.5L16 3.4Zm0 3.4 5.8 2.9-5.8 2.9-5.8-2.9L16 6.8ZM8.8 12.4l5.7 2.9v8l-5.7-5.1v-5.8Zm8.7 10.9v-8l5.7-2.9v5.8l-5.7 5.1Z"/>
    </svg>
  `,
};

const ARROW_ICON = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

function isPlaceholder(url) {
  return /SEU_PARCEIRO|SEUNUMERO|SEU_USUARIO/.test(url);
}

function createLinkCard(link, index) {
  const anchor = document.createElement("a");
  anchor.className = `link-card${link.featured ? " link-card--featured" : ""}`;
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.setProperty("--platform-color", link.color);
  if (link.badge) anchor.dataset.badge = link.badge;
  anchor.setAttribute("aria-label", `Abrir ${link.title}`);
  anchor.dataset.index = String(index);

  if (isPlaceholder(link.url)) {
    anchor.dataset.placeholder = "true";
    anchor.title = "Substitua esta URL no arquivo script.js antes de publicar.";
  }

  anchor.innerHTML = `
    <span class="link-icon">
      ${
        link.image
          ? `<img class="custom-link-icon" src="${link.image}" alt="" loading="lazy" decoding="async" />`
          : ICONS[link.platform] || ICONS.product
      }
    </span>
    <span class="link-copy">
      <span class="link-title">${link.title}</span>
      <span class="link-caption">${link.caption}</span>
    </span>
    <span class="link-arrow">${ARROW_ICON}</span>
  `;

  anchor.addEventListener("click", (event) => {
    createRipple(event, anchor);

    if (isPlaceholder(link.url)) {
      event.preventDefault();
      console.warn(`Configure a URL de "${link.title}" no arquivo script.js.`);
    }
  });

  return anchor;
}

function createSection(section, sectionIndex) {
  const wrapper = document.createElement("section");
  wrapper.className = `link-section${section.highlight ? " link-section--highlight" : ""}`;
  wrapper.setAttribute("aria-label", section.title);

  const title = document.createElement("h2");
  title.className = "link-section-title";
  title.textContent = section.title;
  wrapper.appendChild(title);

  section.links.forEach((link, linkIndex) => {
    const cardIndex = sectionIndex * 10 + linkIndex;
    const card = createLinkCard(link, cardIndex);
    wrapper.appendChild(card);

    window.setTimeout(() => {
      card.classList.add("is-visible");
    }, 100 + cardIndex * 85);
  });

  return wrapper;
}

function createRipple(event, element) {
  const previousRipple = element.querySelector(".ripple");
  if (previousRipple) previousRipple.remove();

  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");

  ripple.className = "ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

  element.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove(), { once: true });
}

function renderLinks() {
  const list = document.querySelector("#links-list");

  LINK_SECTIONS.forEach((section, index) => {
    list.appendChild(createSection(section, index));
  });
}

document.addEventListener("DOMContentLoaded", renderLinks);
