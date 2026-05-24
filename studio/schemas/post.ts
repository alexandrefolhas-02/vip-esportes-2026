import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post do Blog",
  type: "document",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "subtitulo",
      title: "Subtítulo / Resumo",
      type: "string",
      description: "Aparece na listagem do blog e nas buscas do Google (máx 160 caracteres)",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL do post)",
      type: "slug",
      options: { source: "titulo", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categoria",
      title: "Categoria",
      type: "string",
      options: {
        list: [
          { title: "Beach Tennis", value: "Beach Tennis" },
          { title: "Vôlei", value: "Vôlei" },
          { title: "Vôlei de Praia", value: "Vôlei de Praia" },
          { title: "Dicas de Treino", value: "Dicas de Treino" },
          { title: "Notícias", value: "Notícias" },
          { title: "VIP Esportes", value: "VIP Esportes" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imagemPrincipal",
      title: "Imagem Principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Descrição da imagem (para SEO e acessibilidade)",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "URL do Vídeo (opcional)",
      type: "url",
      description: "Cole o link do YouTube. Ex: https://www.youtube.com/watch?v=...",
    }),
    defineField({
      name: "corpo",
      title: "Conteúdo do Post",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Parágrafo", value: "normal" },
            { title: "Título H2", value: "h2" },
            { title: "Título H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Negrito", value: "strong" },
              { title: "Itálico", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [{ name: "href", type: "url", title: "URL" }],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Descrição da imagem", type: "string" }),
            defineField({ name: "caption", title: "Legenda", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "publicadoEm",
      title: "Data de publicação",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "destaque",
      title: "Post em destaque na página do Blog?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "titulo", subtitle: "categoria", media: "imagemPrincipal" },
  },
  orderings: [
    {
      title: "Mais recente primeiro",
      name: "publishedAtDesc",
      by: [{ field: "publicadoEm", direction: "desc" }],
    },
  ],
});
