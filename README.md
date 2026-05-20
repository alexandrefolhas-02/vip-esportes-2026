# VIP Esportes - Site Institucional

Site institucional e comercial da VIP Esportes, escola de esportes no Rio de Janeiro especializada em Beach Tennis, Vôlei, Vôlei de Praia e formação esportiva.

## Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4
- Wouter (roteamento)

## Comandos

```bash
# Instalar dependências
pnpm install

# Servidor de desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview do build
pnpm run preview
```

## Estrutura

```
client/src/
  components/    → Componentes reutilizáveis
  data/          → Dados centralizados (editáveis)
  lib/           → Utilitários
  pages/         → Páginas do site
```

## Dados editáveis

Os dados do site estão centralizados em `client/src/data/`:

- `modalidades.ts` — Modalidades esportivas
- `unidades.ts` — Unidades e locais
- `whatsapp.ts` — Mensagens de WhatsApp
- `depoimentos.ts` — Depoimentos
- `seo.ts` — Dados de SEO

## Deploy na Vercel

- Framework Preset: Vite
- Build Command: `pnpm run build`
- Output Directory: `dist`

## Antigravity

O projeto está preparado para edição no Antigravity. Consulte `.antigravity/rules` para as convenções.
