"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Testimonials() {
  return (
    <section className="bg-zinc-950 py-20 border-y border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-black italic uppercase text-white mb-12">
          Atmosfera <span className="text-red-600">Vibrante</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Mestre Silva", text: "Organização impecável e atmosfera vibrante. O melhor evento da região." },
            { name: "Ana Cavalcanti", text: "Competitividade acirrada e respeito total aos atletas. Estarei em todas as etapas!" },
            { name: "Ricardo Santos", text: "Estrutura de Food Park e Área VIP excelentes para levar a família." }
          ].map((t, i) => (
            <div key={i} className="bg-black p-8 border-b-2 border-red-600 italic">
              <p className="text-zinc-400 mb-4">"{t.text}"</p>
              <p className="text-white font-bold uppercase text-sm">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FaqSection() {
  const faqs = [
    { q: "Quando as inscrições estão abertas?", a: "As inscrições são obrigatórias e devem ser acompanhadas diretamente pelo site Sou Competidor." },
    { q: "Como posso patrocinar o evento?", a: "Clique no banner de patrocinadores ou nos chame no WhatsApp (19) 98153-9373 para agendarmos uma apresentação das cotas Ouro, Prata e Bronze." },
    { q: "Como trazer o Katana Cup para minha cidade?", a: "O Katana Cup segue uma agenda planejada em conformidade com o CBJJ. Para saber como ter um evento na sua cidade, entre em contato no nosso whatsapp oficial." },
    { q: "Quanto é a entrada para o público?", a: "Nossos eventos cobram, geralmente, 1kg de alimento não perecível, que é revertido para famílias carentes da região sede." },
    { q: "O evento possui estrutura para famílias?", a: "Sim! Contamos com Food Park, variedade gastronômica e Área VIP para convidados e patrocinadores." }
  ]

  return (
    <section id="faq" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-black uppercase text-center text-white mb-12 italic">Dúvidas <span className="text-red-600">Frequentes</span></h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-zinc-800">
              <AccordionTrigger className="text-white hover:text-red-500 font-bold text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-zinc-400 leading-relaxed italic">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export function BrandStatement() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-2xl md:text-4xl font-light italic text-zinc-300 leading-tight">
          "O Katana Cup é um torneio de renome, conhecido por sua <span className="text-white font-black uppercase tracking-tighter">organização impecável</span> e competitividade acirrada."
        </p>
      </div>
    </section>
  )
}