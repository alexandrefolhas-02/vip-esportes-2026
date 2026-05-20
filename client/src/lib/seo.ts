interface MetaTagsOptions {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

/**
 * Atualiza dinamicamente no DOM as metatags de SEO e redes sociais (Open Graph / Twitter).
 */
export function updateMetaTags({ title, description, keywords, image }: MetaTagsOptions) {
  // 1. Atualizar Título da Página
  document.title = title;

  // Função auxiliar para atualizar ou criar metatag
  const setMetaTag = (name: string, content: string, isProperty = false) => {
    const attributeName = isProperty ? "property" : "name";
    let element = document.head.querySelector(`meta[${attributeName}="${name}"]`);
    if (!element) {
      element = document.createElement("meta");
      element.setAttribute(attributeName, name);
      document.head.appendChild(element);
    }
    element.setAttribute("content", content);
  };

  // 2. Metatags Padrão
  setMetaTag("description", description);
  if (keywords) {
    setMetaTag("keywords", keywords);
  }

  // URL padrão da imagem de destaque (hero) caso nenhuma outra seja enviada
  const defaultImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663596061507/UA3RZ5gzAZGiHCDo7dd6JB/hero-vip-esportes-UzqCEuHU9cAi6xaQyYPHkq.webp";
  const ogImage = image || defaultImage;

  // 3. Open Graph (Facebook/WhatsApp/Telegram)
  setMetaTag("og:title", title, true);
  setMetaTag("og:description", description, true);
  setMetaTag("og:image", ogImage, true);
  setMetaTag("og:type", "website", true);
  setMetaTag("og:url", window.location.href, true);

  // 4. Twitter Cards
  setMetaTag("twitter:card", "summary_large_image");
  setMetaTag("twitter:title", title);
  setMetaTag("twitter:description", description);
  setMetaTag("twitter:image", ogImage);
}
