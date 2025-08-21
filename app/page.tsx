"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Heart,
  Shield,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  MessageCircle,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Leaf,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function DraBrunaLavallePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

// SUBSTITUA a função existente
const getWhatsAppLink = () => {
  const phone = "5561996626541";
  const preset =
    "Olá! Tenho interesse nas consultas da Dra. Bruna e gostaria de saber mais detalhes.";
  const msg = encodeURIComponent(preset);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );

  // Mobile: mantém API (funcionando perfeitamente)
  if (isMobile) {
    return `https://api.whatsapp.com/send?phone=${phone}&text=${msg}&type=phone_number&app_absent=0`;
  }

  // Desktop (fallback padrão do <a>): WhatsApp Web
  return `https://web.whatsapp.com/send?phone=${phone}&text=${msg}`;
};

// ADICIONE abaixo da função acima
const handleWhatsAppClick = (origin: string) => (e: React.MouseEvent) => {
  const phone = "5561996626541";
  const preset =
    "Olá! Tenho interesse nas consultas da Dra. Bruna e gostaria de saber mais detalhes.";
  const msg = encodeURIComponent(preset);

  const isMobile = /Android|webOS|iPhone|iPad|iPod|Windows Phone/i.test(
    navigator.userAgent
  );
  if (isMobile) {
    // no mobile não fazemos nada: href já é a API e abre normal
    return;
  }

  // DESKTOP: tenta app, se não tiver cai para web.whatsapp
  e.preventDefault();

  // envia evento para o GTM/GA4
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    event: "whatsapp_click",
    button_location: origin,
  });

  const appUrl = `whatsapp://send?phone=${phone}&text=${msg}`;
  const webUrl = `https://web.whatsapp.com/send?phone=${phone}&text=${msg}`;

  // Tenta abrir o app
  const start = Date.now();
  // usar location para tentar abrir o protocolo do app
  window.location.href = appUrl;

  // Se continuar na página (sem app), após ~1.2s, abre o Web WhatsApp
  setTimeout(() => {
    // se a aba ainda estiver visível e não houve navegação para o app
    const elapsed = Date.now() - start;
    if (document.visibilityState === "visible" || elapsed < 300) {
      window.open(webUrl, "_self");
    }
  }, 1200);
};

  const testimonials = [
    {
      name: "Isabella Martins",
      text: "A Bruna é incrível! Gratidão por ter te encontrado. Uma psicóloga super preparada. Está me ajudando muito na minha caminhada, a cada terapia me sinto melhor. Obrigada por tudo! Indico de olhos fechados ❤️",
    },
    {
      name: "Yasmin Banguis",
      text: "Excelente profissional! Me ajudou a entender melhor meus sentimentos, me fez ver o quanto meus problemas pessoais atrapalhavam meu trabalho e como ter atitudes diferentes. Super indico!",
    },
    {
      name: "Darlene Raquel",
      text: "Estou imensamente satisfeita, é a primeira vez que não desisto das sessões. Uma profissional que sabe exatamente o ponto que precisa ser tratado. Recomendo de olhos fechados!",
    },
    {
      name: "Amanda Bartolo",
      text: "Excelente profissional, com um ótimo atendimento. Tenho apenas a agradecer!!!",
    },
    {
      name: "Adauto Bonifácio",
      text: "Sabe quando você consegue se conectar de verdade com seu terapeuta, perceber as mudanças que acontecem e ter a certeza de que está na direção certa? É exatamente essa a minha experiência.",
    },
    {
      name: "Douglas Alves Quintanilha",
      text: "Excelente profissional, ambiente de atendimento maravilhoso e atendimento humanizado.",
    },
    {
      name: "Bethânia Viana",
      text: "Uma profissional maravilhosa, muito empática e focada no processo de seus pacientes. Indico sem medo.",
    },
    {
      name: "Bianca Souza",
      text: "Excelente profissional! Está sempre em busca de alternativas para ajudar a entender e solucionar nossas demandas.",
    },
    {
      name: "Thais Anes",
      text: "Uma excelente profissional, muito satisfeita com os atendimentos.",
    },
    {
      name: "Luíza Machaim",
      text: "Bruna é uma psicóloga maravilhosa, acolhedora e prática na solução de dificuldades.",
    },
  ]

  const faqs = [
    {
      question: "Como agendar minha sessão?",
      answer: "Clique no botão 'Agendar agora' e fale diretamente comigo pelo WhatsApp.",
    },
    {
      question: "As sessões são presenciais ou online?",
      answer: "Exclusivamente online, mantendo acolhimento e qualidade.",
    },
    {
      question: "O atendimento é coberto por convênios?",
      answer: "Não. É particular para garantir personalização e liberdade no processo terapêutico.",
    },
    {
      question: "Nunca fiz terapia antes. É para mim?",
      answer:
        "Sim. Para qualquer pessoa que queira se conhecer melhor, lidar com desafios e viver com mais equilíbrio.",
    },
    {
      question: "Quanto tempo leva para eu perceber mudanças?",
      answer: "Depende de cada caso, mas muitos pacientes relatam avanços já nas primeiras semanas.",
    },
    {
      question: "E se eu não souber por onde começar?",
      answer: "Não se preocupe, vou te ajudar a organizar o que sente e encontrar o melhor caminho.",
    },
  ]

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const timelineCards = [
    {
      id: "depressao",
      title: "Depressão",
      description:
        "Quando a vida perde as cores e o peso parece maior que a força para seguir. Não é fraqueza sentir-se sem ânimo ou preso em um vazio — é um sinal de que você merece cuidado e apoio para reencontrar sentido.",
      svgImage: "/images/depressao-novo.png", // Updated to use new PNG
    },
    {
      id: "ansiedade",
      title: "Ansiedade",
      description:
        "Quando a mente não desacelera e o corpo vive em alerta. Preocupações constantes, palpitações e medo do futuro tiram a paz e impedem de viver o presente com leveza.",
      svgImage: "/images/ansiedade-novo.png", // Updated to use new PNG
    },
    {
      id: "burnout",
      title: "Burnout",
      description:
        "Quando trabalho e responsabilidades drenam toda sua energia. Exaustão, desânimo e a sensação de que nada basta — seu corpo e mente pedem uma pausa para respirar e se restaurar.",
      svgImage: "/images/burnout-novo.png", // Updated to use new PNG
    },
    {
      id: "generos",
      title: "Sexualidade e identidade de gênero",
      description:
        "Quando você busca compreender e acolher quem realmente é. Um espaço seguro, livre de julgamentos, para explorar e se reconectar com a sua verdade.",
      svgImage: "/images/generos-novo.png", // Updated to use new PNG
    },
    {
      id: "insonia",
      title: "Insônia",
      description:
        "Quando a noite parece interminável e o descanso não chega. Dificuldade para dormir ou manter o sono desgasta corpo e mente, afetando seu bem-estar.",
      svgImage: "/images/insonia-novo.png", // Updated to use new PNG
    },
    {
      id: "relacionamentos",
      title: "Relações difíceis",
      description:
        "Quando laços que deveriam acolher acabam ferindo. Família, amor ou trabalho — aprender a lidar com vínculos tóxicos é essencial para preservar sua saúde emocional.",
      svgImage: "/images/relacionamentos-novo.png", // Updated to use new PNG
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed bottom-6 right-6 z-50">
        <a
  href={getWhatsAppLink()}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleWhatsAppClick("floating_button")}
  className="group relative bg-[#2a5951] hover:bg-[#152d28] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 block animate-pulse-scale"
>
          <svg className="w-6 h-6 text-white" viewBox="0 0 30.667 30.667" fill="currentColor">
            <path
              d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
              c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
              c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
              c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
              c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
              c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
              c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
              c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
              c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
              c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
              C23.307,19.268,23.307,18.533,23.214,18.38z"
            />
          </svg>
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-[#152d28] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none min-w-max">
            Fale comigo no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#152d28]"></div>
          </div>
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image with Overlay - Desktop/Tablet */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: "url('/images/novo-hero-bg.png')",
          }}
        ></div>

        {/* Background Image - Mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url('/images/bruna-mobile-bg.png')",
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg lg:max-w-xl xl:max-w-2xl ml-0 lg:ml-8 md:mt-0 mt-4">
            <div className="mb-8 md:mb-6 flex justify-center md:justify-start -mt-12 md:mt-0">
              <img
                src="/images/logo-verde-site.png"
                alt="Bruna Lavalle - Psicologia Clínica | Neuropsicologia"
                className="w-auto max-w-full h-24 md:h-16 sm:h-20 lg:h-24"
              />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#566b5a] mb-8 md:mb-4 leading-tight drop-shadow-sm mt-6 md:mt-0">
              Depressão e ansiedade estão roubando sua energia?
            </h1>

            <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#494949] mb-32 md:mb-6 leading-relaxed drop-shadow-sm max-w-lg">
              <p className="md:hidden tracking-wide leading-loose">
                Com a terapia online da Dra. Bruna Lavalle,
<br />
psicóloga especializada em saúde emocional, 
<br />
você terá acompanhamento próximo e ferramentas
<br />
eficazes para recuperar propósito e bem-estar.
              </p>
              <p className="hidden md:block">
                Você não precisa carregar esse peso sozinha. Aqui, você encontra apoio, clareza e estratégias para
                retomar o controle da sua vida e se sentir em paz novamente.
              </p>
            </div>

            <div className="mt-32 md:mt-0">
              <a
  href={getWhatsAppLink()}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleWhatsAppClick("hero_cta")}
>
                <Button
                  size="lg"
                  className="bg-[#78907d] hover:bg-[#152d28] text-white text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Leaf className="mr-2 w-5 md:w-6 h-5 md:h-6 scale-x-[-1]" />
                  Agendar agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/textura-bruna.png')",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Texto à esquerda */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#152d28] leading-tight">
                Cuidar das suas emoções
                <br />
                com leveza e segurança
              </h2>

              <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  Ofereço um espaço seguro e acolhedor para você compreender suas emoções e aprender formas eficazes de
                  lidar com elas.
                </p>

                <p>
                  Com a Terapia Cognitivo-Comportamental (TCC), tratamos ansiedade, depressão, fobias e fortalecemos sua
                  capacidade de enfrentar conflitos e relacionamentos.
                </p>

                <p>
                  Juntas, vamos transformar padrões que te machucam em pensamentos e atitudes que trazem leveza,
                  equilíbrio e bem-estar.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 group">
              <div className="bg-[#78907d] backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 border border-white">
                  <MessageCircle className="w-7 h-7 text-[#78907d]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">Um espaço para você ser ouvido</h3>
              </div>

              <div className="bg-[#78907d] backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 border border-white">
                  <Users className="w-7 h-7 text-[#78907d]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">Um plano pensado só para você</h3>
              </div>

              <div className="bg-[#78907d] backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 border border-white">
                  <Star className="w-7 h-7 text-[#78907d]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                  Um processo de descoberta e mudança
                </h3>
              </div>

              <div className="bg-[#78907d] backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 border border-white">
                  <Heart className="w-7 h-7 text-[#78907d]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 leading-tight">Uma nova versão de si mesmo</h3>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <img
              src="/images/logo-bruna.png"
              alt="Bruna Lavalle - Psicologia Clínica | Neuropsicologia"
              className="h-16 opacity-60"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#516b5c] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Em quais momentos posso caminhar com você?
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Todos nós enfrentamos fases difíceis, e muitas vezes é difícil dar nome ao que sentimos. Aqui você
              encontra um espaço seguro para falar, sem julgamentos, e começar sua transformação.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#d2c6b6] h-full"></div>

              <div className="space-y-16 group">
                {timelineCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} animate-slide-in-${index % 2 === 0 ? "left" : "right"} group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm transition-all duration-500 hover:scale-105 relative`}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-5/12 pr-8 relative">
                          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                            <CardHeader className="text-center pb-2">
                              <CardTitle className="text-xl text-[#152d28] mb-2">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 text-center leading-relaxed">{card.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                        {/* Centralizing icon on the vertical line */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#516b5c] z-10 flex items-center justify-center">
                          <div className="text-[#516b5c] text-lg font-bold">{"<"}</div>
                          {hoveredCard === card.id && (
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-fade-in z-30 border-2 border-gray-200 p-1">
                              <img
                                src={card.svgImage || "/placeholder.svg"}
                                alt={card.title}
                                className="w-24 h-24 object-contain"
                              />
                            </div>
                          )}
                        </div>
                        <div className="w-5/12"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-5/12"></div>
                        {/* Centralizing icon on the vertical line */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#516b5c] z-10 flex items-center justify-center">
                          <div className="text-[#516b5c] text-lg font-bold">{">"}</div>
                          {hoveredCard === card.id && (
                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 animate-fade-in z-30 border-2 border-gray-200 p-1">
                              <img
                                src={card.svgImage || "/placeholder.svg"}
                                alt={card.title}
                                className="w-24 h-24 object-contain"
                              />
                            </div>
                          )}
                        </div>
                        <div className="w-5/12 pl-8 relative">
                          <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
                            <CardHeader className="text-center pb-2">
                              <CardTitle className="text-xl text-[#152d28] mb-2">{card.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-700 text-center leading-relaxed">{card.description}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden">
              <div className="absolute right-4 w-1 bg-[#d2c6b6] h-full"></div>

              <div className="space-y-8 group">
                {timelineCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="flex items-center animate-slide-in-left group-hover:[&:not(:hover)]:opacity-50 group-hover:[&:not(:hover)]:blur-sm transition-all duration-500 hover:scale-105 relative"
                  >
                    <div className="flex-1 pr-16">
                      <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader className="text-left pb-4">
                          <CardTitle className="text-lg text-[#152d28] mb-2">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-700 text-left leading-relaxed text-sm">{card.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute right-0 w-16 h-16 bg-white rounded-full border-2 border-[#516b5c] z-10 flex items-center justify-center shadow-lg p-1">
                      <img
                        src={card.svgImage || "/placeholder.svg"}
                        alt={card.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes slide-in-left {
            from {
              opacity: 0;
              transform: translateX(-100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes slide-in-right {
            from {
              opacity: 0;
              transform: translateX(100px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: scale(0.8);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          .animate-slide-in-left {
            animation: slide-in-left 0.8s ease-out forwards;
          }
          
          .animate-slide-in-right {
            animation: slide-in-right 0.8s ease-out forwards;
          }
          
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
          
          .animate-pulse-scale {
            animation: pulse-scale 2s ease-in-out infinite;
          }
        `}</style>
      </section>

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-stretch">
      {/* Coluna ESQUERDA */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#152d28] mb-6 leading-tight">
            Mais que terapia, um cuidado que respeita sua essência
          </h2>
        </div>

        {/* Card-CTA alinhado ao final da coluna */}
        <div className="mt-6">
          <div className="bg-gradient-to-r from-[#152d28] to-[#152d28]/80 rounded-2xl p-6 sm:p-7 md:p-8 shadow-lg">
            <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
              Pronta para dar o primeiro passo da sua nova vida? Comece sua transformação
              com apoio profissional, leveza e segurança.
            </p>

            <div className="mt-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick("care_section_cta")}
              >
                <Button
                  size="lg"
                  className="bg-white text-[#152d28] hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Leaf className="mr-2 w-5 h-5 md:w-6 md:h-6 scale-x-[-1]" />
                  Agendar agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Coluna DIREITA (cards) */}
      <div className="space-y-4">
        {/* Atendimento online */}
        <div className="group relative">
          <div className="bg-gradient-to-r from-[#152d28] to-[#152d28]/80 p-6 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-[#152d28]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Atendimento online</h3>
          </div>

          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <p className="text-gray-700 leading-relaxed">
              Com a comodidade do atendimento 100% online, você pode cuidar da sua saúde emocional de onde estiver
              — seja em casa, no trabalho ou viajando. As sessões são realizadas em ambiente virtual seguro,
              garantindo sigilo e privacidade, para que você possa falar sobre qualquer assunto com tranquilidade.
            </p>
          </div>
        </div>

        {/* Abordagem personalizada */}
        <div className="group relative">
          <div className="bg-gradient-to-r from-[#152d28] to-[#152d28]/80 p-6 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-[#152d28]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Abordagem personalizada</h3>
          </div>

          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <p className="text-gray-700 leading-relaxed">
              Cada pessoa é única, e por isso cada processo terapêutico é planejado de forma individual.
              Utilizando a Terapia Cognitivo-Comportamental (TCC) aliada a técnicas como mindfulness, PNL e
              hipnose clínica, Dra. Bruna adapta cada sessão para atender às suas necessidades e objetivos
              específicos, respeitando seu ritmo e sua história.
            </p>
          </div>
        </div>

        {/* 10 anos de experiência */}
        <div className="group relative">
          <div className="bg-gradient-to-r from-[#152d28] to-[#152d28]/80 p-6 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-[#152d28]" />
            </div>
            <h3 className="text-lg font-semibold text-white">10 anos de experiência profissional</h3>
          </div>

          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <p className="text-gray-700 leading-relaxed">
              Com mais de uma década de atuação e centenas de pacientes atendidos, Dra. Bruna construiu um
              histórico sólido ajudando adultos e idosos a superarem desafios como ansiedade, depressão, fobias,
              crises existenciais e conflitos nos relacionamentos. Sua prática é baseada em evidências
              científicas, sempre com foco na transformação real da vida de cada paciente.
            </p>
          </div>
        </div>

        {/* Ambiente seguro */}
        <div className="group relative">
          <div className="bg-gradient-to-r from-[#152d28] to-[#152d28]/80 p-6 rounded-xl flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#152d28]" />
            </div>
            <h3 className="text-lg font-semibold text-white">Ambiente seguro e sem julgamentos</h3>
          </div>

          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl p-6 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <p className="text-gray-700 leading-relaxed">
              Este é um espaço onde você pode ser você mesma, sem máscaras ou medo de julgamento. A escuta ativa,
              o respeito e a empatia guiam todo o processo, garantindo que você se sinta acolhida e confiante para
              compartilhar suas dores, reflexões e conquistas. Aqui, cada passo é dado ao seu lado.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Sobre a Bruna */}
      <section className="py-20 lg:py-32 relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
        <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
  style={{ backgroundImage: "url('/images/bruna-4-bg.png')", backgroundPosition: "center center", backgroundSize: "cover" }}
/>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="flex justify-end w-full">
            <div className="max-w-xl lg:max-w-2xl text-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#566b5a] mb-6 leading-tight">
                Cuidar de você é minha missão
              </h2>
              <div className="text-lg sm:text-xl lg:text-2xl text-[#494949] leading-relaxed space-y-4">
                <p>
                  Sou psicóloga clínica e neuropsicóloga (CRP 01/26335), especializada em Terapia
                  Cognitivo-Comportamental e abordagens integrativas para ajudar você a transformar pensamentos, emoções
                  e comportamentos e viver com mais propósito.
                </p>
                <p>
                  Com 10 anos de experiência, ofereço um atendimento acolhedor, personalizado e seguro — um espaço para
                  você ser quem é, descobrir quem quer ser e viver em harmonia com a sua própria história.
                </p>
                <p>Atendimento exclusivamente online, para você que busca equilíbrio emocional e bem-estar.</p>
              </div>
            </div>
          </div>
        </div>
        {/* CTA – Minha missão (alinhado à direita da seção) */}
<div className="relative z-20 mt-8">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="w-full flex justify-end">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick("mission_cta")}
      >
        <Button
          size="lg"
          className="!bg-[#78907d] hover:!bg-[#152d28] !text-white text-lg md:text-xl px-8 md:px-10 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105"
        >
          <Leaf className="mr-2 w-5 md:w-6 h-5 md:h-6 scale-x-[-1]" />
          Agendar agora
        </Button>
      </a>
    </div>
  </div>
</div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#152d28] mb-6">Histórias de transformação</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/images/google-logo.png" alt="Google" className="w-8 h-8" />
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-700">5.0</span>
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto overflow-hidden">
            <div className="flex items-center justify-center gap-6">
              {/* Card anterior (desfocado) */}
              <div className="hidden lg:block w-80 opacity-50 blur-sm scale-90 transition-all duration-500">
                <Card className="border-0 shadow-lg h-64 flex items-center">
                  <CardContent className="pt-6 text-center">
                    <p className="text-base text-gray-700 mb-4 italic line-clamp-4">
                      "{testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].text}"
                    </p>
                    <div className="font-semibold text-[#152d28] text-base">
                      {testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].name}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Card central (em evidência) */}
              <div className="w-96 scale-110 transition-all duration-500">
                <Card className="border-0 shadow-2xl h-72 flex items-center bg-gradient-to-br from-white to-gray-50">
                  <CardContent className="pt-6 text-center">
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="font-bold text-[#152d28] text-lg">{testimonials[currentTestimonial].name}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Card posterior (desfocado) */}
              <div className="hidden lg:block w-80 opacity-50 blur-sm scale-90 transition-all duration-500">
                <Card className="border-0 shadow-lg h-64 flex items-center">
                  <CardContent className="pt-6 text-center">
                    <p className="text-base text-gray-700 mb-4 italic line-clamp-4">
                      "{testimonials[(currentTestimonial + 1) % testimonials.length].text}"
                    </p>
                    <div className="font-semibold text-[#152d28] text-base">
                      {testimonials[(currentTestimonial + 1) % testimonials.length].name}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Navigation Arrows - Desktop */}
            <button
              onClick={prevTestimonial}
              className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#2a5951] hover:bg-[#152d28] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="hidden md:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2a5951] hover:bg-[#152d28] text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator with Navigation Arrows for Mobile */}
            <div className="flex justify-center items-center mt-12 gap-4 pb-4">
              <button
                onClick={prevTestimonial}
                className="md:hidden bg-[#2a5951] hover:bg-[#152d28] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? "bg-[#2a5951] scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="md:hidden bg-[#2a5951] hover:bg-[#152d28] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.google.com/search?q=avalia%C3%A7%C3%B5es+google+bruna+lavalle#lrd=0x935a3966995faa45:0x2d318daf3498de17,3,,,"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#2a5951] hover:bg-[#152d28] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Star className="mr-2 w-5 h-5 fill-current" />
                Avaliar no Google
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-20 bg-gradient-to-r from-[#516b5c] to-[#516b5c]/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Pronto para dar o primeiro passo para sua transformação?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Toda mudança começa quando você decide cuidar de si. Estou aqui para caminhar ao seu lado nessa jornada.
          </p>
          <a
  href={getWhatsAppLink()}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleWhatsAppClick("final_cta")}
>
            <Button
              size="lg"
              className="bg-[#dc9650] hover:bg-[#dc9650]/80 text-white text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Leaf className="mr-2 w-5 h-5 scale-x-[-1]" />
              Agendar agora
            </Button>
          </a>
          <div className="text-sm text-gray-300 mt-6 font-semibold">
            ATENDIMENTO EXCLUSIVAMENTE PARTICULAR — NÃO ACEITAMOS CONVÊNIOS.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#152d28] mb-6">Perguntas Frequentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-[#152d28]">{faq.question}</CardTitle>
                    {openFaq === index ? (
                      <ChevronDown className="w-5 h-5 text-[#2a5951]" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-[#2a5951]" />
                    )}
                  </div>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contatos */}
      <section className="py-20 bg-[#516b5c]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Fale comigo</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#516b5c] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <CardTitle className="text-lg text-[#152d28]">Endereço</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">SGAS I SGAS 915, Edifício Office Center — Asa Sul, Brasília - DF</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#516b5c] rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 30.667 30.667" fill="currentColor">
                        <path
                          d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017
                          c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382
                          c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076
                          c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427
                          c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437
                          c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536
                          c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609
                          c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611
                          c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787
                          c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739
                          C23.307,19.268,23.307,18.533,23.214,18.38z"
                        />
                      </svg>
                    </div>
                    <CardTitle className="text-lg text-[#152d28]">WhatsApp</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">+55 61 99662-6541</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
  href={getWhatsAppLink()}
  target="_blank"
  rel="noopener noreferrer"
  onClick={handleWhatsAppClick("contacts_card")}
>
                      <Button className="bg-[#516b5c] hover:bg-[#152d28] text-white transition-all duration-300 hover:scale-105">
                        Falar no WhatsApp
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="text-lg text-[#152d28]">Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/brunalavallee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#516b5c] rounded-lg flex items-center justify-center hover:bg-[#152d28] transition-all duration-300 hover:scale-105"
                    >
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://www.facebook.com/brunalavallepsi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#516b5c] rounded-lg flex items-center justify-center hover:bg-[#152d28] transition-all duration-300 hover:scale-105"
                    >
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/brunalavalle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#516b5c] rounded-lg flex items-center justify-center hover:bg-[#152d28] transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="h-96 lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.644299574352!2d-47.93097992401724!3d-15.822698823654356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3966995faa45%3A0x2d318daf3498de17!2sBruna%20Lavalle%20-%20Psic%C3%B4loga%20Cl%C3%ADnica%20%7C%20Neuropsic%C3%B4loga!5e0!3m2!1spt-BR!2sbr!4v1755011296748!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "24px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#516b5c] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <img src="/images/logo-bruna-laranja.png" alt="Logo Bruna Lavalle" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-xl font-bold">Dra. Bruna Lavalle</span>
            </div>

            <div className="text-sm text-gray-300 mb-4 font-semibold">
              ATENDIMENTO EXCLUSIVAMENTE PARTICULAR — NÃO ACEITAMOS CONVÊNIOS.
            </div>

            <div className="text-sm text-gray-400">© 2025 Dra. Bruna Lavalle | Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
