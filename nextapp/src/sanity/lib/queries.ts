import { groq } from "next-sanity";

export const allPostsQuery = groq`
  *[_type == "post"] | order(publicadoEm desc) {
    _id,
    titulo,
    subtitulo,
    slug,
    categoria,
    publicadoEm,
    destaque,
    imagemPrincipal { asset->{ url }, alt }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    titulo,
    subtitulo,
    slug,
    categoria,
    publicadoEm,
    imagemPrincipal { asset->{ url }, alt },
    videoUrl,
    corpo
  }
`;

export const allSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`;
