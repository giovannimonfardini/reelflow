import Reveal from '@/components/Reveal'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  { q: 'O que é uma série?', a: 'É uma linha editorial recorrente. Você define tema, estilo e formato para transformar ideias relacionadas em vídeos que mantêm uma identidade consistente.' },
  { q: 'É fácil de usar?', a: 'A experiência foi desenhada como um fluxo guiado. Cada etapa apresenta apenas as decisões necessárias naquele momento, reduzindo a complexidade para quem não edita vídeos.' },
  { q: 'Preciso ser especialista em criação de conteúdo?', a: 'Não. O fluxo atende iniciantes e também pode servir como base para criadores mais experientes que desejam organizar melhor a produção.' },
  { q: 'Para quais formatos o Viralizou foi pensado?', a: 'O foco são vídeos verticais curtos, adequados para formatos como Reels, Shorts e TikTok. A disponibilidade de integrações deve acompanhar a evolução do produto.' },
  { q: 'Posso usar minha própria identidade visual?', a: 'A proposta inclui escolhas de direção visual, voz e trilha para que cada série possa manter uma linguagem reconhecível.' },
  { q: 'A IA substitui a revisão humana?', a: 'Não recomendamos publicar sem revisão. A automação acelera a produção, mas a aprovação final continua importante para verificar contexto, precisão e tom de voz.' },
  { q: 'Como aumentar as chances de um vídeo funcionar?', a: 'Não existe garantia de visualizações. Clareza do tema, bons ganchos, consistência, retenção e aprendizado com os resultados continuam sendo os fatores mais importantes.' },
]

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-24 pt-4 sm:px-6 sm:pb-28">
      <Reveal className="text-center">
        <p className="section-kicker">Tire suas dúvidas</p>
        <h2 className="section-title">Perguntas frequentes</h2>
        <p className="section-copy">O essencial para entender a proposta do Viralizou</p>
      </Reveal>
      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-10 sm:mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-[15px] font-semibold hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-zinc-500">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
