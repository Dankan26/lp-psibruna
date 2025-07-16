"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle,
  Sprout,
  Menu,
  X,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  ChevronRight,
  Star,
  MessageCircle,
  UserCheck,
  Target,
  Lightbulb,
} from "lucide-react"

export default function DraBrunaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"
    try {
      window.location.href = url
    } catch (error) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  const testimonials = [
    {
      name: "Isabella Martins",
      text: "A Bruna é incrível! Gratidão por ter te encontrando. Uma psicóloga super preparada. Está me ajudando muito na minha caminhada, a cada terapia me sinto melhor. Obrigado por tudo! Indico de olhos fechados ❤️",
      stars: 5,
    },
    {
      name: "Yasmin Banguis",
      text: "Excelente profissional! Me ajudou a entender melhor meus sentimentos, me fez ver o quanto os meus problemas pessoais atrapalhavam meu trabalho, e como ter atitudes diferentes. Super indico a Dra. Bruna!",
      stars: 5,
    },
    {
      name: "Adauto Bonifácio",
      text: "Sabe quando você consegue se conectar de verdade com seu terapeuta, perceber as mudanças que acontecem em sua vida a partir das mudanças no comportamento e ter a certeza de que está na direção certa? É exatamente essa a minha experiência com a Dra. Bruna! Ela tem um 'quê' de entender nas entrelinhas aquilo que não é dito ou explorar elementos do que é expresso e que eu não tinha noção sobre o impacto dessas ações em minha vida.",
      stars: 5,
    },
    {
      name: "Douglas Alves Quintanilha",
      text: "Excelente profissional, ambiente de atendimento maravilhoso e atendimento humanizado.",
      stars: 5,
    },
    {
      name: "Darlene Raquel",
      text: "Estou imensamente satisfeita, é a primeira vez que não desisto das sessões. Uma profissional que sabe exatamente o ponto que precisa ser tratado, a cada sessão saio com alívio e paz para enfrentar meu processo de cura. Recomendo de olhos fechados!",
      stars: 5,
    },
  ]

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const whatsappUrl = "https://api.whatsapp.com/send/?phone=5561996626541&text&type=phone_number&app_absent=0"

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with subtle texture */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: `
      linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(240,253,244,0.4) 25%, rgba(254,252,232,0.3) 50%, rgba(255,255,255,0.95) 100%),
      radial-gradient(circle at 20% 80%, rgba(42,89,81,0.04) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(220,150,80,0.03) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(34,197,94,0.02) 0%, transparent 70%),
      url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0fdf4' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E"),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fef3c7' fillOpacity='0.06'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `,
        }}
      />

      {/* Enhanced Background Pattern with Tree Branches */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Original organic shadows */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/organic-shadows.png')`,
              backgroundSize: "1200px 800px",
              backgroundRepeat: "repeat",
              backgroundPosition: "0 0, 600px 400px, 300px 200px, 900px 600px",
              transform: "rotate(-5deg) scale(1.1)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/organic-shadows.png')`,
              backgroundSize: "800px 600px",
              backgroundRepeat: "repeat",
              backgroundPosition: "400px 100px, 200px 500px, 1000px 300px",
              transform: "rotate(3deg) scale(0.9)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Tree branch elements - 4 positioned strategically */}
        <div className="absolute inset-0 opacity-[0.07]">
          {/* Left side - top tree */}
          <div
            className="absolute top-0 left-0 w-[600px] h-[800px]"
            style={{
              backgroundImage: `url('/images/tree-branches.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              filter: "hue-rotate(120deg) saturate(1.8) brightness(0.6)",
              transform: "translateX(-40%) translateY(-10%) rotate(10deg)",
              clipPath: "polygon(50% 0, 100% 0, 100% 100%, 30% 100%)",
            }}
          />

          {/* Left side - bottom tree */}
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[800px]"
            style={{
              backgroundImage: `url('/images/tree-branches.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              filter: "hue-rotate(120deg) saturate(1.8) brightness(0.6)",
              transform: "translateX(-40%) translateY(10%) rotate(-15deg) scaleY(-1)",
              clipPath: "polygon(60% 0, 100% 0, 100% 100%, 40% 100%)",
            }}
          />

          {/* Right side - top tree */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[800px]"
            style={{
              backgroundImage: `url('/images/tree-branches.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              filter: "hue-rotate(120deg) saturate(1.8) brightness(0.6)",
              transform: "translateX(40%) translateY(-10%) rotate(10deg) scaleX(-1)",
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 50% 100%)",
            }}
          />

          {/* Right side - bottom tree */}
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[800px]"
            style={{
              backgroundImage: `url('/images/tree-branches.png')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              filter: "hue-rotate(120deg) saturate(1.8) brightness(0.6)",
              transform: "translateX(40%) translateY(10%) rotate(-15deg) scale(-1, -1)",
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 60% 100%)",
            }}
          />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="w-16 h-16 rounded-full bg-[#2a5951] hover:bg-[#1e3a33] text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center group relative"
          aria-label="Contato via WhatsApp"
        >
          <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
          </svg>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-[#2a5951] animate-ping opacity-20"></div>
        </button>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
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
                { label: "Como Funciona", id: "como-funciona" },
                { label: "Ajuda", id: "ajuda" },
                { label: "Benefícios", id: "beneficios" },
                { label: "Sobre", id: "sobre" },
                { label: "Depoimentos", id: "depoimentos" },
                { label: "Contato", id: "contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#152d28] hover:text-[#2a5951] transition-colors font-medium text-lg"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="hidden lg:flex items-center space-x-2 bg-[#2a5951] hover:bg-[#2a5951] text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <Sprout className="w-5 h-5" />
                <span>Agendar agora</span>
              </Button>

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
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
              <nav className="flex flex-col space-y-4 mt-4 px-4">
                {[
                  { label: "Como Funciona", id: "como-funciona" },
                  { label: "Ajuda", id: "ajuda" },
                  { label: "Benefícios", id: "beneficios" },
                  { label: "Sobre", id: "sobre" },
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
                <Button
                  onClick={() => window.open(whatsappUrl, "_blank")}
                  className="flex items-center justify-center space-x-2 bg-[#2a5951] hover:bg-[#2a5951] text-white px-6 py-3 rounded-full font-bold text-lg mt-4 shadow-lg"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  <Sprout className="w-5 h-5" />
                  <span>Agendar agora</span>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - TEXTOS ATUALIZADOS */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1 space-y-8 relative z-10">
              <div className="space-y-6">
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#152d28] leading-tight drop-shadow-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Ansiedade, medos e relacionamentos difíceis? Você não precisa enfrentar isso sozinha.
                </h1>
                <p
                  className="text-xl lg:text-2xl text-gray-700 leading-relaxed drop-shadow-sm"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  Atendimento psicológico humanizado, com técnicas comprovadas para transformar sua saúde emocional.
                </p>
              </div>

              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="flex items-center space-x-3 bg-[#2a5951] hover:bg-[#2a5951] text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl transform hover:scale-105 transition-transform"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <Sprout className="w-6 h-6" />
                <span>Agendar agora</span>
              </Button>
            </div>

            <div className="relative order-2 lg:order-2">
              <div className="relative w-full max-w-lg mx-auto">
                <Image
                  src="/images/bruna-hero-new.jpeg"
                  alt="Dra. Bruna Lavalle - Psicóloga Clínica"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/60 via-gray-600/40 to-gray-400/20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-8"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Um caminho seguro para reencontrar seu equilíbrio e viver com leveza
            </h2>
            <p
              className="text-lg lg:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Cada pessoa carrega uma história única, cheia de sonhos, desafios e sentimentos que muitas vezes são
              difíceis de organizar sozinho. Por isso, desenvolvi um método que combina técnicas modernas da psicologia
              com um olhar humano, respeitando o seu ritmo e a sua história. Aqui você encontra um espaço seguro para se
              expressar, refletir e transformar suas dores em força. Juntos, vamos trabalhar para que você consiga se
              entender melhor, mudar padrões que já não te servem mais e construir novas formas de se relacionar com
              você e com o mundo.
            </p>
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
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
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
      <section id="ajuda" className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-green-50/10 to-white">
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
                className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-green-100/30 text-center"
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
                      alt={`Ícone ${item.title}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
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
              Por que escolher a terapia com a Dra. Bruna?
            </h2>
            <p
              className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Além de um espaço seguro para se expressar, você conta com um atendimento pensado para sua realidade,
              respeitando suas necessidades e o seu tempo.
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
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/90 backdrop-blur-sm"
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
      <section id="sobre" className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-yellow-50/10 to-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] leading-tight"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Cuidar de pessoas é minha vocação. Cuidar de você é minha missão.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "Georgia, serif" }}>
                <p>
                  Sou psicóloga clínica e neuropsicóloga (CRP 01/26335), especializada em Terapia
                  Cognitivo-Comportamental e outras abordagens integrativas que ajudam você a transformar pensamentos,
                  emoções e comportamentos para viver de forma mais leve e com propósito.
                </p>
                <p>
                  Com mais de 7 anos de experiência, ofereço um atendimento acolhedor e personalizado, respeitando a sua
                  história e o seu ritmo.
                </p>
                <p>
                  Aqui você encontra um espaço seguro para ser quem você é, para descobrir quem quer ser e para
                  finalmente viver em harmonia com sua própria história.
                </p>
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

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#152d28] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Histórias de Transformação
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="mb-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-[#dc9650] fill-current" />
                      ))}
                    </div>
                    <div className="text-6xl text-[#dc9650] mb-6 opacity-50">"</div>
                    <p
                      className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 italic"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {testimonials[currentTestimonial].text}
                    </p>
                    <p className="text-lg font-bold text-[#152d28]" style={{ fontFamily: "Georgia, serif" }}>
                      — {testimonials[currentTestimonial].name}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-[#2a5951] scale-125" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#2a5951] to-[#152d28] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a5951]/90 to-[#152d28]/90"></div>
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
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="flex items-center space-x-3 bg-[#dc9650] hover:bg-[#dc9650] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl mx-auto transform hover:scale-105 transition-all duration-300"
                style={{ fontFamily: "Georgia, serif" }}
              >
                <Sprout className="w-6 h-6" />
                <span>Agendar agora</span>
              </Button>

              <p className="text-sm opacity-80" style={{ fontFamily: "Georgia, serif" }}>
                Atendimento exclusivamente particular — não aceitamos convênios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 relative bg-gradient-to-br from-white via-green-50/5 to-white">
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
                className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg"
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
                        <CheckCircle className="w-5 h-5 text-[#2a5951] flex-shrink-0 mt-1" />
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
              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
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

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
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

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
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

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
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
              Atendimento exclusivamente particular — não aceitamos convênios
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
