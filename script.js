// Edite apenas as URLs abaixo para publicar a página com os links definitivos.
const LINKS = [
  {
    title: "TikTok do parceiro",
    caption: "Conteúdo e bastidores",
    platform: "tiktok",
    color: "#28f4e5",
    url: "https://www.tiktok.com/@ismael.sotero6?_r=1&_t=ZS-97voVjLwFsO",
  },
  {
    title: "WhatsApp da Codex",
    caption: "Solicite um orçamento",
    platform: "whatsapp",
    color: "#31d158",
    url: "https://wa.me/55SEUNUMERO",
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
    caption: "Carreira e desenvolvimento",
    platform: "linkedin",
    color: "#35a8ff",
    url: "https://www.linkedin.com/in/mateus-camargo-rodrigues/",
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
  anchor.className = "link-card";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.setProperty("--platform-color", link.color);
  anchor.setAttribute("aria-label", `Abrir ${link.title}`);
  anchor.dataset.index = String(index);

  if (isPlaceholder(link.url)) {
    anchor.dataset.placeholder = "true";
    anchor.title = "Substitua esta URL no arquivo script.js antes de publicar.";
  }

  anchor.innerHTML = `
    <span class="link-icon">${ICONS[link.platform]}</span>
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

  LINKS.forEach((link, index) => {
    const card = createLinkCard(link, index);
    list.appendChild(card);

    window.setTimeout(() => {
      card.classList.add("is-visible");
    }, 100 + index * 85);
  });
}

document.addEventListener("DOMContentLoaded", renderLinks);
