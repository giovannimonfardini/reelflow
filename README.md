# ReelFlow

Landing page do **ReelFlow** — crie vídeos virais sem mostrar o rosto, com IA no piloto automático. Inspirada em ferramentas de geração automática de reels para TikTok, Instagram e YouTube.

## Stack

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** com sistema de tema shadcn/ui
- **shadcn/ui** (Button, Card, Badge, Avatar, Accordion, Separator)
- **Framer Motion** para animações de scroll e entrada
- **Lucide React** para ícones
- **Firebase Authentication** para login com Google e sessão persistente

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

## Configurar login com Google

1. Crie ou selecione um projeto no [Firebase Console](https://console.firebase.google.com/).
2. Em **Authentication → Sign-in method**, habilite os provedores **Google** e **E-mail/senha**.
3. Em **Project settings → Your apps**, registre um aplicativo Web.
4. Copie `.env.example` para `.env.local` e preencha os valores do objeto de configuração do Firebase.
5. Em **Authentication → Settings → Authorized domains**, adicione os domínios usados no desenvolvimento e na produção.
6. Reinicie `npm run dev` depois de alterar as variáveis de ambiente.

As configurações `VITE_FIREBASE_*` identificam o aplicativo Web e não substituem regras de segurança. Dados protegidos devem usar regras do Firebase ou validação do ID token em um backend confiável.

Rotas disponíveis:

- `/login`: entrada com Google.
- `/app`: área protegida; visitantes sem sessão são redirecionados para `/login`.

Ao publicar a aplicação, configure o hosting para redirecionar rotas desconhecidas para `index.html`, permitindo que o React Router trate acessos diretos como `/login` e `/app`.

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
