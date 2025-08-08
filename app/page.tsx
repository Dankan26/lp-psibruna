"use client"

import { useState, useEffect, useRef, useCallback } from "react" // Import useRef
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Sprout, Menu, X, MapPin, Phone, Instagram, Facebook, Linkedin, ChevronRight, MessageCircle, UserCheck, Target, Lightbulb, Star } from 'lucide-react' // Import Star icon

export default function DraBrunaLanding() {
// Adicionar meta tags e otimizações SEO
useEffect(() => {
  // Set page title and meta description
  document.title = "Dra. Bruna Lavalle - Psicóloga Clínica | TCC em Brasília e Online"

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      "Psicóloga especializada em TCC para ansiedade, depressão e relacionamentos. Atendimento presencial em Brasília e online. Agende sua consulta.",
    )
  }

  // Add Open Graph tags
  const ogTags = [
    { property: "og:title", content: "Dra. Bruna Lavalle - Psicóloga Clínica" },
    { property: "og:description", content: "Atendimento psicológico especializado em TCC" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "/images/bg_hero.png" },
  ]

  ogTags.forEach((tag) => {
    let meta = document.querySelector(`meta[property="${tag.property}"]`)
    if (!meta) {
      meta = document.createElement("meta")
      meta.setAttribute("property", tag.property)
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", tag.content)
  })

  // Preload critical resources
  const preloadLink = document.createElement("link")
  preloadLink.rel = "preload"
  preloadLink.href = "/images/bg_hero.png"
  preloadLink.as = "image"
  document.head.appendChild(preloadLink)

  const preloadMobileLink = document.createElement("link")
  preloadMobileLink.rel = "preload"
  preloadMobileLink.href = "/images/bg_hero_mobile.png"
  preloadMobileLink.as = "image"
  preloadMobileLink.media = "(max-width: 768px)"
  document.head.appendChild(preloadMobileLink)

  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Dra. Bruna Lavalle - Psicologia Clínica",
    description: "Atendimento psicológico especializado em TCC para ansiedade, depressão e relacionamentos",
    url: window.location.href,
    telephone: "+5561996626541",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SGAS 915 Edifício Office Center",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$",
  }

  const script = document.createElement("script")
  script.type = "application/ld+json"
  script.text = JSON.stringify(structuredData)
  document.head.appendChild(script)

  // Remove Elfsight script as it's no longer needed for reviews
  const elfsightScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')
  if (elfsightScript) {
    document.head.removeChild(elfsightScript)
  }

  return () => {
    document.head.removeChild(preloadLink)
    document.head.removeChild(preloadMobileLink)
    document.head.removeChild(script)
    if (elfsightScript) {
      document.head.removeChild(elfsightScript)
    }
  }
}, [])

const [isMenuOpen, setIsMenuOpen] = useState(false)
const [openFaq, setOpenFaq] = useState<number | null>(null)

const faqItems = [
  {
    question: "Como agendar minha sessão?",
    answer: 'Clique no botão "Agendar agora" e fale comigo pelo WhatsApp.',
  },
  {
    question: "As sessões são presenciais ou online?",
    answer: "Atendo presencialmente em Brasília ou online.",
  },
  {
    question: "O atendimento é coberto por convênios?",
    answer: "Não, é particular para garantir qualidade e personalização.",
  },
  {
    question: "Nunca fiz terapia antes. É para mim?",
    answer: "Sim, para qualquer pessoa que deseja se conhecer melhor e viver com mais equilíbrio.",
  },
  {
    question: "Quanto tempo leva para eu perceber mudanças?",
    answer: "Cada pessoa tem seu ritmo; muitos notam nas primeiras semanas.",
  },
  {
    question: "E se eu não souber por onde começar?",
    answer: "Estou aqui para te ajudar a organizar o que sente.",
  },
]

const testimonials = [
  {
    name: "Bethânia Viana",
    rating: 5,
    text: "Uma profissional maravilhosa, muito empática e focada no processo de seus pacientes, comprometida e muito atenciosa, indico sem medo.",
    timeAgo: "um ano atrás",
  },
  {
    name: "Bianca Souza",
    rating: 5,
    text: "Excelente profissional! Me ajudou a entender melhor meus sentimentos, me fez ver o quanto os meus problemas pessoais atrapalhavam meu trabalho, e como ter atitudes diferentes. Super indico a Dra. Bruna!🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Luíza Machaim",
    rating: 5,
    text: "Bruna é uma psicóloga maravilhosa, muito acolhedora e ao qual simples e prática na solução de dificuldades.",
    timeAgo: "um ano atrás",
  },
  {
    name: "Eularigd",
    rating: 5,
    text: "Bruna é maravilhosa. Sensata e didática, recomendo para quem está em busca da Terapia TCC.",
    timeAgo: "um ano atrás",
  },
  {
    name: "Grazielle Pettene",
    rating: 5,
    text: "Psicóloga excelente, te deixa super confortável para falar, indico com toda certeza",
    timeAgo: "um ano atrás",
  },
  {
    name: "Isabella Martins",
    rating: 5,
    text: "A Bruna é incrível! Gratidão por ter te encontrando. Uma psicóloga super preparada. Está me ajudando muito na minha caminhada, a cada terapia me sinto melhor. Obrigado por tudo! Indico de olhos fechados ❤️🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Yasmin Banguis",
    rating: 5,
    text: "Excelente profissional! Me ajudou a entender melhor meus sentimentos, me fez ver o quanto os meus problemas pessoais atrapalhavam meu trabalho, e como ter atitudes diferentes. Super indico a Dra. Bruna!🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Darlene Raquel",
    rating: 5,
    text: "Estou imensamente satisfeita, é a primeira vez que não desisto das sessões. Uma profissional que sabe exatamente o ponto que precisa ser tratado, a cada sessão saio com alívio e paz para enfrentar meu processo de cura. Recomendo de olhos fechados!🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Amanda Bartolo",
    rating: 5,
    text: "Excelente profissional, com um ótimo atendimento. Tenho apenas a agradecer!!!🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Adauto Bonifácio (adauto.bonifacio)",
    rating: 5,
    text: "Sabe quando você consegue se conectar de verdade com seu terapeuta, perceber as mudanças que acontecem em sua vida a partir das mudanças no comportamento e ter a certeza de que está na direção certa? É exatamente essa a minha experiência …Mais🙏",
    timeAgo: "um ano atrás",
  },
  {
    name: "Douglas Alves Quintanilha",
    rating: 5,
    text: "Excelente profissional, ambiente de atendimento maravilhoso e atendimento humanizado.🙏",
    timeAgo: "um ano atrás",
  },
]

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    // Add will-change for better performance
    element.style.willChange = "scroll-position"
    element.scrollIntoView({ behavior: "smooth", block: "start" })
    // Remove will-change after animation
    setTimeout(() => {
      element.style.willChange = "auto"
    }, 1000)
  }
  setIsMenuOpen(false)
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const whatsappUrl = "https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"

// Carousel drag logic
const carouselRef = useRef<HTMLDivElement>(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(0);
const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
const [activeCardIndex, setActiveCardIndex] = useState(0); // Novo estado para o card ativo

const startAutoplay = useCallback(() => {
  if (autoplayIntervalRef.current) {
    clearInterval(autoplayIntervalRef.current);
  }
  autoplayIntervalRef.current = setInterval(() => {
    if (carouselRef.current && !isDragging) { // Só auto-scroll se não estiver arrastando
      const { scrollWidth, clientWidth, scrollLeft } = carouselRef.current;
      const cardElement = carouselRef.current.children[0] as HTMLElement;
      const cardWidth = cardElement ? cardElement.offsetWidth + 16 : 0; // Largura do card + mx-2 (16px total)

      if (cardWidth === 0) return;

      if (scrollLeft + clientWidth >= scrollWidth - 1) { // -1 para evitar problemas de arredondamento
        // Se chegou ao final, volta para o início
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }
  }, 5000); // A cada 5 segundos
}, [isDragging]); // isDragging é uma dependência porque é verificada dentro do intervalo

// Handler para atualizar o card ativo no scroll e aplicar desfoque
const handleScroll = useCallback(() => {
  if (carouselRef.current) {
    const carousel = carouselRef.current;
    const cardElement = carousel.children[0] as HTMLElement;
    if (!cardElement) return;

    // Calcula a largura total de um card (incluindo margem)
    const cardWidth = cardElement.offsetWidth + 16; // offsetWidth + 2*8px (mx-2)

    // Determina o índice do card mais centralizado com base na posição de rolagem
    // Como temos snap-center, o scrollLeft se alinha ao centro do card
    const newActiveCardIndex = Math.round(carousel.scrollLeft / cardWidth);
    setActiveCardIndex(newActiveCardIndex);
  }
}, []);


useEffect(() => {
  startAutoplay(); // Inicia o autoplay ao montar

  const carousel = carouselRef.current;
  if (carousel) {
    carousel.addEventListener('scroll', handleScroll);
    // Define o card ativo inicial ao carregar a página
    handleScroll();
  }

  return () => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current); // Limpa o intervalo ao desmontar
    }
    if (carousel) {
      carousel.removeEventListener('scroll', handleScroll);
    }
  };
}, [startAutoplay, handleScroll]); // startAutoplay e handleScroll são dependências


const handleMouseDown = (e: React.MouseEvent) => {
  if (!carouselRef.current) return;
  setIsDragging(true);
  if (autoplayIntervalRef.current) {
    clearInterval(autoplayIntervalRef.current); // Pausa o autoplay
  }
  setStartX(e.pageX - carouselRef.current.offsetLeft);
  setScrollLeft(carouselRef.current.scrollLeft);
  carouselRef.current.style.cursor = 'grabbing';
};

const handleMouseLeave = () => {
  setIsDragging(false); // Para de arrastar se o mouse sair
  startAutoplay(); // Retoma o autoplay se o mouse sair enquanto arrastava
  if (carouselRef.current) {
    carouselRef.current.style.cursor = 'grab';
  }
};

const handleMouseUp = () => {
  setIsDragging(false);
  startAutoplay(); // Retoma o autoplay após a interação
  if (carouselRef.current) {
    carouselRef.current.style.cursor = 'grab';
  }
};

const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDragging || !carouselRef.current) return;
  e.preventDefault();
  const x = e.pageX - carouselRef.current.offsetLeft;
  const walk = (x - startX) * 2; // Multiplicador para rolagem mais rápida
  carouselRef.current.scrollLeft = scrollLeft - walk;
};

// Para eventos de toque (mobile)
const handleTouchStart = (e: React.TouchEvent) => {
  if (!carouselRef.current) return;
  setIsDragging(true);
  if (autoplayIntervalRef.current) {
    clearInterval(autoplayIntervalRef.current); // Pausa o autoplay
  }
  setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
  setScrollLeft(carouselRef.current.scrollLeft);
};

const handleTouchMove = (e: React.TouchEvent) => {
  if (!isDragging || !carouselRef.current) return;
  e.preventDefault();
  const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  carouselRef.current.scrollLeft = scrollLeft - walk;
};

const handleTouchEnd = () => {
  setIsDragging(false);
  startAutoplay(); // Retoma o autoplay após a interação
};


return (
  <div className="min-h-screen relative overflow-hidden">
    {/* Skip Link for Accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#2a5951] text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-white"
      style={{ fontFamily: "Georgia, serif" }}
    >
      Pular para o conteúdo principal
    </a>
    {/* Modern Sophisticated Background */}
    <div
      className="fixed inset-0 z-0"
      style={{
        background: `
          linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 25%, rgba(241,245,249,0.92) 50%, rgba(248,250,252,0.95) 75%, rgba(255,255,255,0.98) 100%),
          radial-gradient(circle at 25% 25%, rgba(42,89,81,0.03) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(220,150,80,0.02) 0%, transparent 50%),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grain' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='25' cy='25' r='0.5' fill='%23f1f5f9' opacity='0.4'/%3E%3Ccircle cx='75' cy='25' r='0.3' fill='%23e2e8f0' opacity='0.3'/%3E%3Ccircle cx='50' cy='50' r='0.4' fill='%23f8fafc' opacity='0.5'/%3E%3Ccircle cx='25' cy='75' r='0.2' fill='%23f1f5f9' opacity='0.3'/%3E%3Ccircle cx='75' cy='75' r='0.6' fill='%23e2e8f0' opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100' height='100' fill='url(%23grain)'/%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f1f5f9' strokeWidth='0.5' opacity='0.1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/svg%3E")
        `,
        backgroundSize: "100% 100%, 800px 800px, 1200px 1200px, 100px 100px, 60px 60px",
        backgroundPosition: "0 0, 0 0, 400px 200px, 0 0, 30px 30px",
      }}
    />

    {/* Subtle Geometric Pattern Overlay */}
    <div
      className="fixed inset-0 z-0 opacity-[0.015]"
      style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 40%, rgba(42,89,81,0.1) 50%, transparent 60%),
          linear-gradient(-45deg, transparent 40%, rgba(220,150,80,0.1) 50%, transparent 60%)
        `,
        backgroundSize: "120px 120px, 80px 80px",
        backgroundPosition: "0 0, 40px 40px",
      }}
    />

    {/* WhatsApp Floating Button */}
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 rounded-full bg-[#2a5951] hover:bg-[#1e3a33] text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
        aria-label="Contato via WhatsApp"
        data-gtm-event="whatsapp_click"
        data-gtm-location="floating_button"
      >
        <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
        </svg>
        <div className="absolute inset-0 rounded-full bg-[#2a5951] animate-ping opacity-20"></div>
      </a>
    </div>

    {/* Header - Sem opacidade variável */}
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={scrollToTop} className="flex-shrink-0 transition-transform hover:scale-105">
            <Image
              src="/images/logo-horizontal-header.png"
              alt="Dra. Bruna Lavalle - Psicologia Clínica e Neuropsicologia"
              width={220}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: "Sobre", id: "como-funciona" },
              { label: "Ajuda", id: "ajuda" },
              { label: "Benefícios", id: "beneficios" },
              { label: "Depoimentos", id: "depoimentos" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#152d28] hover:text-[#2a5951] transition-colors font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#2a5951] focus:ring-opacity-50 rounded-lg px-2 py-1"
                style={{ fontFamily: "Georgia, serif" }}
                aria-label={`Navegar para seção ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center space-x-2 bg-[#2a5951] hover:bg-[#1e3a33] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
              style={{ fontFamily: "Georgia, serif" }}
              data-gtm-event="whatsapp_click"
              data-gtm-location="header"
            >
              <Sprout className="w-5 h-5" />
              <span>Agendar agora</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#152d28] hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 mt-4 px-4">
              {[
                { label: "Sobre", id: "como-funciona" },
                { label: "Ajuda", id: "ajuda" },
                { label: "Benefícios", id: "beneficios" },
                { label: "Depoimentos", id: "depoimentos" },
                { label: "Contato", id: "contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[#152d28] hover:text-[#2a5951] transition-colors font-medium text-lg py-2"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#2a5951] hover:bg-[#1e3a33] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-bold text-base md:text-lg mt-4 shadow-lg transition-all duration-300"
                style={{ fontFamily: "Georgia, serif" }}
                data-gtm-event="whatsapp_click"
                data-gtm-location="header_mobile"
              >
                <Sprout className="w-4 h-4 md:w-5 md:h-5" />
                <span>Agendar agora</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>

    {/* Hero Section - Novo Background */}
    <section id="main-content" className="hero-section relative overflow-hidden pt-20 md:pt-28 lg:pt-32">
      {/* Container principal */}
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="hero-content flex items-center pt-20 md:pt-28">
          {/* Texto posicionado na área verde */}
          <div className="hero-text">
            <div className="hero-text-content">
              <h1 className="hero-title" style={{ fontFamily: "Georgia, serif" }}>
                Ansiedade, medos e relacionamentos difíceis? Você não precisa enfrentar sozinha.
              </h1>
              <p className="hero-description" style={{ fontFamily: "Georgia, serif" }}>
                Atendimento psicológico acolhedor, com técnicas comprovadas da Terapia Cognitivo-Comportamental (TCC)
                para cuidar da sua saúde emocional e transformar sua forma de lidar com a vida.
              </p>

              <a
                href="https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
                style={{ fontFamily: "Georgia, serif" }}
                data-gtm-event="whatsapp_click"
                data-gtm-location="hero"
              >
                <Sprout className="btn-icon" />
                <span>Agendar agora</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Estilos CSS para o novo Hero */}
    <style jsx>{`
.hero-section {
position: relative;
display: flex;
align-items: center;
padding: 140px 0 60px;
overflow: hidden;
background: url('/images/bg_hero.png') no-repeat center center;
background-size: cover;
background-position: right top; /* Mudado para mostrar a cabeça da Bruna */
background-color: #2a5951;
min-height: auto;
height: auto;
aspect-ratio: 16/9;
}

.hero-section::before {
content: '';
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.35) 100%); /* Escurecimento cinza */
z-index: 1;
}

.hero-content {
display: flex;
align-items: center;
justify-content: flex-start;
width: 100%;
max-width: 1400px;
margin: 0 auto;
height: 100%;
padding-top: 3rem; /* Adicionar padding-top */
}

.hero-text {
position: relative;
z-index: 20;
max-width: 500px;
margin-left: 8%;
}

.hero-text-content {
animation: fadeInUp 1s ease-out;
}

.hero-title {
font-size: clamp(2rem, 4vw, 3.5rem);
font-weight: 700;
color: white;
line-height: 1.2;
margin-bottom: 24px;
text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3);
animation: fadeInUp 1s ease-out 0.2s both;
}

.hero-description {
font-size: clamp(1.1rem, 2vw, 1.3rem);
color: rgba(255, 255, 255, 0.95);
line-height: 1.6;
margin-bottom: 32px;
text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2);
animation: fadeInUp 1s ease-out 0.4s both;
}

.btn-hero {
display: inline-flex;
align-items: center;
gap: 12px;
background: white;
color: #2a5951;
padding: 16px 32px;
border-radius: 50px;
font-weight: 700;
font-size: 1.1rem;
text-decoration: none;
box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
animation: fadeInUp 1s ease-out 0.6s both;
position: relative;
overflow: hidden;
}

.btn-hero::before {
content: '';
position: absolute;
top: 0;
left: -100%;
width: 100%;
height: 100%;
background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
transition: left 0.5s;
}

.btn-hero:hover::before {
left: 100%;
}

.btn-hero:hover {
background: #f8f9fa;
transform: translateY(-2px) scale(1.05);
box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.btn-icon {
width: 20px;
height: 20px;
transition: transform 0.3s ease;
}

.btn-hero:hover .btn-icon {
transform: rotate(15deg) scale(1.1);
}

/* Estilos para os cards de depoimento */
.testimonial-card {
transition: filter 0.3s ease-out; /* Transição suave para o desfoque */
}

.testimonial-card.blurred {
filter: blur(3px); /* Aplica o desfoque */
}

/* Animações */
@keyframes fadeInUp {
from {
  opacity: 0;
  transform: translateY(40px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
}

/* Responsividade Mobile */
@media (max-width: 480px) {
.hero-section {
  padding: 80px 0 30px;
  background: url('/images/bg_hero_mobile.png') no-repeat center center;
  background-size: cover;
  background-position: right top;
  aspect-ratio: 9/18;
}

.hero-content {
  justify-content: center;
  text-align: center;
}

.hero-text {
  margin-left: 0;
  max-width: 95%;
}

.hero-title {
  font-size: clamp(1.6rem, 6vw, 2.2rem);
  margin-bottom: 20px;
}

.hero-description {
  font-size: clamp(0.95rem, 4vw, 1.1rem);
  margin-bottom: 28px;
}

.btn-hero {
  padding: 12px 24px;
  font-size: 0.95rem;
}
}

/* Mobile Médio */
@media (min-width: 481px) and (max-width: 768px) {
.hero-section {
  padding: 100px 0 40px;
  background: url('/images/bg_hero_mobile.png') no-repeat center center;
  background-size: cover;
  background-position: right top;
  aspect-ratio: 9/16;
}

.hero-content {
  justify-content: center;
  text-align: center;
}

.hero-text {
  margin-left: 0;
  max-width: 90%;
}

.hero-title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
}

.hero-description {
  font-size: clamp(1rem, 3vw, 1.2rem);
}

.btn-hero {
  padding: 14px 28px;
  font-size: 1rem;
}
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
.hero-section {
  aspect-ratio: 16/10;
  padding: 140px 0 50px;
  background-position: right top;
}

.hero-text {
  margin-left: 5%;
  max-width: 450px;
}

.hero-title {
  font-size: clamp(2.2rem, 3.5vw, 3rem);
}

.hero-description {
  font-size: clamp(1.1rem, 1.8vw, 1.25rem);
}
}

/* Desktop Pequeno */
@media (min-width: 1025px) and (max-width: 1366px) {
.hero-section {
  aspect-ratio: 16/9;
  padding: 140px 0 60px;
  background-position: right top;
}

.hero-text {
  margin-left: 6%;
  max-width: 480px;
}

.hero-title {
  font-size: clamp(2.5rem, 3.2vw, 3.2rem);
}

.hero-description {
  font-size: clamp(1.15rem, 1.5vw, 1.3rem);
}
}

/* Desktop Médio */
@media (min-width: 1367px) and (max-width: 1600px) {
.hero-section {
  aspect-ratio: 16/8.5;
  padding: 150px 0 70px;
  background-position: right top;
}

.hero-text {
  margin-left: 8%;
  max-width: 520px;
}

.hero-title {
  font-size: clamp(2.8rem, 2.8vw, 3.4rem);
  margin-bottom: 28px;
}

.hero-description {
  font-size: clamp(1.2rem, 1.3vw, 1.35rem);
  margin-bottom: 36px;
}

.btn-hero {
  padding: 18px 36px;
  font-size: 1.15rem;
}
}

/* Desktop Grande */
@media (min-width: 1601px) and (max-width: 1920px) {
.hero-section {
  aspect-ratio: 16/8;
  padding: 160px 0 80px;
  background-position: right top;
}

.hero-text {
  margin-left: 10%;
  max-width: 560px;
}

.hero-title {
  font-size: clamp(3rem, 2.5vw, 3.6rem);
  margin-bottom: 32px;
}

.hero-description {
  font-size: clamp(1.25rem, 1.2vw, 1.4rem);
  margin-bottom: 40px;
}

.btn-hero {
  padding: 20px 40px;
  font-size: 1.2rem;
}
}

/* Desktop Ultra Wide */
@media (min-width: 1921px) {
.hero-section {
  aspect-ratio: 16/7.5;
  padding: 170px 0 90px;
  background-position: right top;
}

.hero-text {
  margin-left: 12%;
  max-width: 600px;
}

.hero-title {
  font-size: clamp(3.2rem, 2.2vw, 3.8rem);
  margin-bottom: 36px;
}

.hero-description {
  font-size: clamp(1.3rem, 1.1vw, 1.45rem);
  margin-bottom: 44px;
}

.btn-hero {
  padding: 22px 44px;
  font-size: 1.25rem;
}
}

/* Otimizações de Performance */
.hero-section * {
will-change: transform, opacity;
}

.hero-section *:not(:hover) {
will-change: auto;
}

/* Ajustes para telas muito altas */
@media (min-height: 900px) {
.hero-section {
  min-height: 70vh;
}
}

@media (min-height: 1080px) {
.hero-section {
  min-height: 65vh;
}
}

/* Custom scrollbar hide */
.scrollbar-hide::-webkit-scrollbar {
display: none;
}
.scrollbar-hide {
-ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
}
`}
</style>

    {/* Como Funciona */}
    <section id="como-funciona" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Cuidar das suas emoções com leveza e segurança.
          </h2>
          <div
            className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed space-y-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            <p>
              Aqui você encontra um espaço acolhedor para falar sobre suas dores, entender seus sentimentos e aprender
              novas formas de lidar com eles.
            </p>
            <p>
              Trabalho com a Terapia Cognitivo-Comportamental (TCC), abordagem prática e eficaz no tratamento da
              ansiedade, dos medos e dos conflitos em relacionamentos.
            </p>
            <p>
              Juntas, vamos identificar os padrões que te machucam, reorganizar pensamentos e construir caminhos mais
              saudáveis para que você se sinta bem consigo mesma e com o mundo ao seu redor.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MessageCircle, title: "Um espaço para você ser ouvido" },
            { icon: UserCheck, title: "Um plano pensado só para você" },
            { icon: Target, title: "Um processo de descoberta e mudança" },
            { icon: Lightbulb, title: "Uma nova versão de si mesmo" },
          ].map((step, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg"
                    style={{ backgroundColor: "#dc965015", border: "3px solid #dc965030" }}
                  >
                    <step.icon className="w-10 h-10 text-[#dc9650]" />
                  </div>
                </div>
                <h3
                  className="text-lg font-bold text-[#152d28] leading-tight"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {step.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Ajuda */}
    <section id="ajuda" className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-slate-50/30 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Em quais momentos posso caminhar com você?
          </h2>
          <p
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Todos nós enfrentamos fases difíceis, e muitas vezes é difícil dar nome ao que sentimos. Aqui você
            encontra um espaço seguro para falar, sem julgamentos, e começar sua transformação. Essas são algumas
            situações que podemos trabalhar juntos:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Ansiedade",
              description: "Quando os pensamentos não param e a mente nunca descansa.",
              icon: "/images/ansiedade-new.png",
            },
            {
              title: "Depressão",
              description: "Quando tudo parece pesado demais para continuar.",
              icon: "/images/depressao-new.png",
            },
            {
              title: "Burnout",
              description: "Quando o trabalho e as cobranças drenam suas forças.",
              icon: "/images/burnout-new.png",
            },
            {
              title: "Sexualidade e identidade de gênero",
              description: "Quando você busca compreender e acolher quem realmente é.",
              icon: "/images/sexualidade-new.png",
            },
            {
              title: "Insônia",
              description: "Quando nem a noite oferece paz para sua mente.",
              icon: "/images/insonia-new.png",
            },
            {
              title: "Relações difíceis",
              description: "Quando os vínculos machucam mais do que acolhem.",
              icon: "/images/relacoes-new.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100/50 text-center"
            >
              <h3
                className="text-xl font-bold text-[#152d28] leading-tight mb-6"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {item.title}
              </h3>

              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={`Ícone representando ${item.title.toLowerCase()}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    sizes="80px"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(19%) sepia(89%) saturate(1729%) hue-rotate(134deg) brightness(96%) contrast(94%)",
                    }}
                  />
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Benefícios */}
    <section id="beneficios" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-8"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Mais que terapia, um cuidado que respeita sua essência.
          </h2>
          <p
            className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Atendimento pensado para você, com empatia, sensibilidade e foco nas suas necessidades, no seu tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "/images/atendimento-icon.png",
              title: "Atendimento online ou presencial",
              description:
                "Escolha o formato que melhor se adapta à sua rotina: no conforto da sua casa ou no consultório.",
            },
            {
              icon: "/images/abordagem-icon.png",
              title: "Abordagem personalizada",
              description: "Cada terapia é planejada para atender às suas necessidades específicas.",
            },
            {
              icon: "/images/experiencia-icon.png",
              title: "Mais de 7 anos de experiência",
              description: "Histórico sólido de transformação na vida de adultos e idosos.",
            },
            {
              icon: "/images/ambiente-seguro-icon.png",
              title: "Ambiente seguro e sem julgamentos",
              description: "Respeito, empatia e confidencialidade para você ser quem é.",
            },
          ].map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2a5951]/10 to-[#dc9650]/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <div className="w-10 h-10 relative">
                      <Image
                        src={benefit.icon || "/placeholder.svg"}
                        alt={`Ícone ${benefit.title}`}
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(19%) sepia(89%) saturate(1729%) hue-rotate(134deg) brightness(96%) contrast(94%)",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-[#152d28] leading-tight mb-4"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Sobre */}
    <section id="sobre" className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-amber-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Cuidar de pessoas é minha vocação, cuidar de você é minha missão.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
              <p>
                Sou psicóloga clínica e neuropsicóloga (CRP 01/26335), especializada em Terapia
                Cognitivo-Comportamental e abordagens integrativas para ajudar você a transformar pensamentos, emoções
                e comportamentos e viver com mais propósito.
              </p>
              <p>
                Com mais de 10 anos de experiência, ofereço um atendimento acolhedor, personalizado e seguro — um
                espaço para você ser quem é, descobrir quem quer ser e viver em harmonia com a sua própria história.
              </p>
              <p>Psicologia em Brasília e online, para você que busca equilíbrio emocional e bem-estar.</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative max-w-md mx-auto">
              <Image
                src="/images/bruna-sobre.jpeg"
                alt="Dra. Bruna Lavalle - Sobre a profissional"
                width={400}
                height={500}
                className="rounded-3xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a5951]/10 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Depoimentos - Carrossel Arrastável */}
    <section id="depoimentos" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Histórias de Transformação
          </h2>
          {/* Google Rating and Stars */}
          <div className="flex items-center justify-center mb-4">
            {/* Google Logo SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="32px"
              height="32px"
              className="mr-2"
            >
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.083,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,8,3.021l5.591-5.591C34.021,6.704,29.916,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,8,3.021l5.591-5.591C34.021,6.704,29.916,4,24,4C12.955,4,4,12.955,4,24c0,3.678,1.193,7.079,3.274,9.888l6.571-4.819C12.756,29.892,12,26.067,12,24C12,19.145,15.817,15.108,20.709,14.691z" />
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.571,4.819C7.197,38.892,12.59,44,24,44z" />
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.002,0.003-0.003l5.591,5.591c-1.501,1.349-3.141,2.487-4.953,3.379C39.29,42.486,44,37.613,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <span className="text-2xl font-bold text-[#152d28] mr-2" style={{ fontFamily: "Georgia, serif" }}>5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Draggable Testimonial Carousel */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory py-4 -mx-4 px-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-center mx-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm testimonial-card ${
                index !== activeCardIndex ? 'blurred' : ''
              }`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500" style={{ fontFamily: "Georgia, serif" }}>
                    {testimonial.timeAgo}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed flex-grow" style={{ fontFamily: "Georgia, serif" }}>
                  {testimonial.text}
                </p>
                <p className="font-bold text-[#152d28] mt-4" style={{ fontFamily: "Georgia, serif" }}>
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Avaliar no Google Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=avalia%C3%A7%C3%B5es+google+bruna+lavalle&oq=avalia%C3%A7%C3%B5es+google+bruna+lavalle&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDU1MjdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0x935a3966995faa45:0x2d318daf3498de17,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-[#2a5951] hover:bg-[#1e3a33] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300"
            style={{ fontFamily: "Georgia, serif" }}
            data-gtm-event="google_review_click"
          >
            <Star className="w-5 h-5 fill-current text-white" />
            <span>Avaliar no Google</span>
          </a>
        </div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2a5951] to-[#1a4038] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2a5951]/95 to-[#1a4038]/95"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Pronto para dar o primeiro passo para sua transformação?
          </h2>
          <p className="text-xl lg:text-2xl opacity-95 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
            Toda mudança começa quando você decide cuidar de si. Estou aqui para caminhar ao seu lado nessa jornada.
          </p>

          <div className="space-y-6">
            <a
              href="https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[#dc9650] hover:bg-[#c8854a] text-white px-6 py-3 rounded-full text-lg font-bold shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ fontFamily: "Georgia, serif" }}
              data-gtm-event="whatsapp_click"
              data-gtm-location="cta_final"
            >
              <Sprout className="w-5 h-5" />
              <span>Agendar agora</span>
            </a>

            <p className="text-sm opacity-80 uppercase font-bold" style={{ fontFamily: "Georgia, serif" }}>
              Atendimento exclusivamente particular — não aceitamos convênios.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-slate-50/20 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card
              key={index}
              className="border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow bg-white/95 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors rounded-lg"
                >
                  <span className="text-lg font-bold text-[#152d28] pr-4" style={{ fontFamily: "Georgia, serif" }}>
                    {item.question}
                  </span>
                  <div className={`transform transition-transform ${openFaq === index ? "rotate-90" : ""}`}>
                    <ChevronRight className="w-6 h-6 text-[#2a5951]" />
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="flex items-start space-x-3">
                      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Contatos */}
    <section id="contato" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Contatos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
              <MapPin className="w-7 h-7 text-[#2a5951] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#152d28] mb-2 text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  Endereço
                </h3>
                <p className="text-gray-600" style={{ fontFamily: "Georgia, serif" }}>
                  SGAS I SGAS 915 Edifício Office Center
                  <br />
                  Asa Sul, Brasília - DF
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
              <Phone className="w-7 h-7 text-[#2a5951] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-[#152d28] mb-2 text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  WhatsApp
                </h3>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  className="text-[#2a5951] hover:text-[#152d28] transition-colors font-medium"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  +55 61 99662-6541
                </Link>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="w-7 h-7 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="3"
                  stroke="#2a5951"
                  fill="none"
                >
                  <circle cx="32" cy="18.14" r="11.14" />
                  <path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#152d28] mb-3 text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="http://www.instagram.com/brunalavallee"
                    target="_blank"
                    className="text-[#2a5951] hover:text-[#152d28] transition-colors transform hover:scale-110"
                  >
                    <Instagram className="w-7 h-7" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/brunalavallepsi"
                    target="_blank"
                    className="text-[#2a5951] hover:text-[#152d28] transition-colors transform hover:scale-110"
                  >
                    <Facebook className="w-7 h-7" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/brunalavalle/"
                    target="_blank"
                    className="text-[#2a5951] hover:text-[#152d28] transition-colors transform hover:scale-110"
                  >
                    <Linkedin className="w-7 h-7" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2!2d-47.9!3d-15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiUyA0N8KwNTQnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório da Dra. Bruna Lavalle"
            />
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-[#152d28] text-white py-12 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <Image
            src="/images/logo-central-footer.png"
            alt="Dra. Bruna Lavalle - Logo"
            width={200}
            height={120}
            className="mx-auto h-24 w-auto opacity-90"
          />

          <p className="text-gray-300 text-lg" style={{ fontFamily: "Georgia, serif" }}>
            Atendimento exclusivamente particular — não aceitamos convênios.
          </p>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-sm text-gray-400" style={{ fontFamily: "Georgia, serif" }}>
              © 2025 Dra. Bruna Lavalle | Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
}
