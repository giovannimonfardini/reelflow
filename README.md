# ReelFlow

Landing page do **ReelFlow** — crie vídeos virais sem mostrar o rosto, com IA no piloto automático. Inspirada em ferramentas de geração automática de reels para TikTok, Instagram e YouTube.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** com sistema de tema shadcn/ui
- **shadcn/ui** (Button, Card, Badge, Avatar, Accordion, Separator)
- **Framer Motion** para animações de scroll e entrada
- **Lucide React** para ícones

## Seções

- Navbar com blur ao rolar
- Hero com prova social e CTA
- Marquee infinito de nichos de vídeo
- Prova social com contadores animados
- Comparativo com métodos tradicionais
- Depoimentos em marquee duplo
- Como funciona (3 passos com mockups de interface)
- Banner de CTA em gradiente
- FAQ em acordeão
- Footer completo

## Como rodar

```bash
npm install
npm run dev      # ambiente de desenvolvimento (http://localhost:3000)
npm run build    # build de produção em dist/
npm run preview  # pré-visualiza o build
```

## Estrutura

```
src/
├── components/     # Reveal, CountUp e componentes ui (shadcn)
├── pages/          # Home
├── sections/       # Seções da landing page
├── lib/            # Utilitários (cn)
├── App.tsx
└── main.tsx
```
