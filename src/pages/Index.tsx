import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "О мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Блог", href: "#blog" },
  { label: "Контакты", href: "#contacts" },
];

const SERVICES = [
  {
    icon: "Layers",
    title: "UX-исследования",
    desc: "Анализирую поведение пользователей, провожу интервью и юзабилити-тестирование. Результат — дизайн, который работает на цель.",
    tag: "Research",
  },
  {
    icon: "Figma",
    title: "UI-дизайн",
    desc: "Создаю визуально сильные интерфейсы в Figma: от вайрфреймов до пиксельного финального макета.",
    tag: "Design",
  },
  {
    icon: "Smartphone",
    title: "Мобильные приложения",
    desc: "Проектирую iOS и Android-интерфейсы с учётом платформенных паттернов и человекоориентированного подхода.",
    tag: "Mobile",
  },
  {
    icon: "Globe",
    title: "Веб-интерфейсы",
    desc: "Дизайн сайтов, лендингов, SaaS-продуктов. Фокус на конверсии и эстетике.",
    tag: "Web",
  },
  {
    icon: "BookOpen",
    title: "Дизайн-системы",
    desc: "Выстраиваю атомарные дизайн-системы: компоненты, токены, документация для команды.",
    tag: "System",
  },
  {
    icon: "Zap",
    title: "Прототипирование",
    desc: "Интерактивные прототипы высокой точности для валидации гипотез до начала разработки.",
    tag: "Prototype",
  },
];

const PORTFOLIO = [
  {
    title: "FinTech Dashboard",
    category: "Web App",
    desc: "Дизайн аналитической платформы для управления инвестициями",
    color: "from-violet-900/40 to-purple-900/20",
    accent: "#c084fc",
    year: "2026",
  },
  {
    title: "MedCare Mobile",
    category: "Mobile App",
    desc: "UX для приложения телемедицины — от онбординга до записи к врачу",
    color: "from-indigo-900/40 to-violet-900/20",
    accent: "#818cf8",
    year: "2026",
  },
  {
    title: "EduFlow Platform",
    category: "Design System",
    desc: "Дизайн-система для EdTech платформы с 40+ компонентами",
    color: "from-purple-900/40 to-fuchsia-900/20",
    accent: "#e879f9",
    year: "2025",
  },
  {
    title: "Retail Rebranding",
    category: "Brand + UI",
    desc: "Редизайн e-commerce с увеличением конверсии на 38%",
    color: "from-violet-950/40 to-purple-800/20",
    accent: "#a78bfa",
    year: "2025",
  },
];

const BLOG = [
  {
    tag: "UX-теория",
    title: "Закон Фиттса и почему кнопки должны быть большими",
    desc: "Разбираю один из фундаментальных принципов юзабилити и показываю, как его применять в реальных проектах.",
    readTime: "5 мин",
    date: "18 фев 2026",
  },
  {
    tag: "Процесс",
    title: "Как я провожу UX-аудит за 2 часа",
    desc: "Мой чеклист из 20 пунктов для быстрой оценки интерфейса без глубокого погружения в проект.",
    readTime: "7 мин",
    date: "5 фев 2026",
  },
  {
    tag: "Тренды",
    title: "Дизайн в эпоху AI: что меняется и что остаётся",
    desc: "ИИ-инструменты меняют профессию. Рассуждаю о том, что это значит для дизайнеров в 2026 году.",
    readTime: "9 мин",
    date: "22 янв 2026",
  },
];

const STATS = [
  { value: "20+", label: "проектов" },
  { value: "2025", label: "год основания" },
  { value: "38%", label: "рост конверсии" },
  { value: "25+", label: "клиентов" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="noise-bg min-h-screen" style={{ background: "#080610" }}>
      {/* Ambient bg blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-pulse-glow"
          style={{
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 70%)",
            top: -100,
            right: -100,
          }}
        />
        <div
          className="absolute animate-pulse-glow delay-300"
          style={{
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)",
            bottom: 200,
            left: -100,
          }}
        />
        <div
          className="absolute animate-pulse-glow delay-500"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(192,132,252,0.06) 0%, transparent 70%)",
            top: "50%",
            left: "40%",
          }}
        />
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 glass"
        style={{ borderBottom: "1px solid rgba(147,51,234,0.12)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div
              style={{
                background: "linear-gradient(135deg, #9333ea, #7c3aed)",
                borderRadius: 8,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(147,51,234,0.5)",
              }}
            >
              <span style={{ color: "white", fontSize: 14, fontWeight: 700, fontFamily: "Golos Text, sans-serif" }}>
                IS
              </span>
            </div>
            <span
              className="font-cormorant"
              style={{ color: "white", fontSize: "1.25rem", letterSpacing: "0.05em", fontWeight: 600 }}
            >
              InSync<span style={{ color: "#c084fc" }}>.UI</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contacts" className="hidden md:block btn-primary text-sm">
            Связаться
          </a>

          <button
            className="md:hidden text-purple-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass-strong border-t border-purple-900/20 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(147,51,234,0.1)",
                  border: "1px solid rgba(147,51,234,0.3)",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#c084fc",
                    boxShadow: "0 0 8px #c084fc",
                  }}
                />
                <span className="font-golos text-xs text-purple-300 uppercase tracking-widest">
                  Открыта к проектам
                </span>
              </div>

              <h1
                className="font-cormorant mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1, color: "white" }}
              >
                Дизайн,{" "}
                <em className="gradient-text" style={{ fontStyle: "italic" }}>
                  который
                </em>
                <br />
                говорит за{" "}
                <span className="gradient-text">себя</span>
              </h1>

              <p
                className="font-golos mb-8"
                style={{ color: "rgba(200,180,230,0.6)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 480 }}
              >
                Создаю интерфейсы, которые влюбляют с первого взгляда и работают на ваш бизнес.
                UI/UX дизайн на стыке эстетики и функциональности.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#portfolio" className="btn-primary relative z-10">
                  Посмотреть работы
                </a>
                <a href="#contacts" className="btn-outline">
                  Обсудить проект
                </a>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative flex justify-center items-center animate-fade-left delay-300">
              <div
                className="animate-float"
                style={{
                  width: 320,
                  height: 400,
                  borderRadius: 24,
                  background: "linear-gradient(135deg, rgba(147,51,234,0.15), rgba(109,40,217,0.08))",
                  border: "1px solid rgba(192,132,252,0.2)",
                  backdropFilter: "blur(20px)",
                  padding: 24,
                  position: "relative",
                  boxShadow: "0 0 60px rgba(147,51,234,0.15), inset 0 0 40px rgba(147,51,234,0.05)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -1,
                    left: "20%",
                    right: "20%",
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.6), transparent)",
                  }}
                />
                <div style={{ marginBottom: 16 }}>
                  <div style={{ height: 8, borderRadius: 4, background: "linear-gradient(90deg, #9333ea, #7c3aed)", marginBottom: 8, width: "70%" }} />
                  <div style={{ height: 6, borderRadius: 4, background: "rgba(192,132,252,0.2)", marginBottom: 6 }} />
                  <div style={{ height: 6, borderRadius: 4, background: "rgba(192,132,252,0.15)", width: "85%" }} />
                </div>
                <div
                  style={{
                    height: 120,
                    borderRadius: 12,
                    background: "linear-gradient(135deg, rgba(147,51,234,0.2), rgba(109,40,217,0.1))",
                    border: "1px solid rgba(192,132,252,0.15)",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div className="font-cormorant" style={{ color: "#c084fc", fontSize: "2rem", fontWeight: 600 }}>
                      UI
                    </div>
                    <div style={{ color: "rgba(192,132,252,0.5)", fontSize: "0.7rem", fontFamily: "Golos Text, sans-serif" }}>
                      DESIGN
                    </div>
                  </div>
                </div>
                {[0.9, 0.7, 0.5].map((op, i) => (
                  <div
                    key={i}
                    style={{
                      height: 8,
                      borderRadius: 4,
                      background: `rgba(192,132,252,${op * 0.3})`,
                      marginBottom: 8,
                      width: i === 0 ? "100%" : i === 1 ? "75%" : "55%",
                    }}
                  />
                ))}
                <div
                  style={{
                    marginTop: 20,
                    height: 36,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, #9333ea, #7c3aed)",
                    boxShadow: "0 4px 20px rgba(147,51,234,0.4)",
                  }}
                />
              </div>

              <div
                className="glass absolute"
                style={{
                  top: 20,
                  right: -10,
                  padding: "8px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(192,132,252,0.3)",
                  animation: "float 5s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="font-golos text-xs text-purple-300">✨ Figma Expert</div>
              </div>
              <div
                className="glass absolute"
                style={{
                  bottom: 40,
                  left: -20,
                  padding: "8px 14px",
                  borderRadius: 12,
                  border: "1px solid rgba(192,132,252,0.3)",
                  animation: "float 7s ease-in-out infinite",
                  animationDelay: "2s",
                }}
              >
                <div className="font-golos text-xs text-purple-300">🎨 80+ проектов</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up delay-500">
            {STATS.map((s, i) => (
              <div key={i} className="glass gradient-border text-center py-6 rounded-xl">
                <div
                  className="font-cormorant gradient-text"
                  style={{ fontSize: "2.5rem", fontWeight: 600, lineHeight: 1 }}
                >
                  {s.value}
                </div>
                <div className="font-golos text-sm mt-1" style={{ color: "rgba(200,180,230,0.5)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="relative"
              style={{
                height: 480,
                borderRadius: 24,
                background: "linear-gradient(135deg, rgba(147,51,234,0.12), rgba(79,26,180,0.08))",
                border: "1px solid rgba(192,132,252,0.15)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse at 30% 50%, rgba(147,51,234,0.15) 0%, transparent 70%)",
                }}
              />
              <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div className="font-cormorant gradient-text" style={{ fontSize: "8rem", lineHeight: 1, fontWeight: 300 }}>
                  IS
                </div>
                <div className="font-golos text-purple-400/60 text-sm tracking-[0.3em] uppercase mt-2">
                  InSync.UI
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  right: 24,
                  padding: "16px 20px",
                  borderRadius: 12,
                  background: "rgba(20,10,35,0.7)",
                  border: "1px solid rgba(192,132,252,0.2)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#4ade80",
                      boxShadow: "0 0 8px #4ade80",
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div className="font-golos text-sm text-white/80">Открыта для новых проектов</div>
                    <div className="font-golos text-xs text-purple-400/60">Ответ в течение 24 часов</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <span className="section-number">02</span>
                <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "#c084fc" }}>
                  О мне
                </p>
                <h2
                  className="font-cormorant mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", lineHeight: 1.2 }}
                >
                  Проектирую <span className="gradient-text italic">опыт</span>,<br />
                  а не просто экраны
                </h2>
              </div>
              <p className="font-golos mb-4" style={{ color: "rgba(200,180,230,0.6)", lineHeight: 1.8 }}>
                Привет! Я — UI/UX дизайнер с 5-летним опытом создания цифровых продуктов.
                Работаю на стыке исследований пользователей и визуальной эстетики.
              </p>
              <p className="font-golos mb-8" style={{ color: "rgba(200,180,230,0.6)", lineHeight: 1.8 }}>
                Мой подход: сначала понять — потом рисовать. Каждый пиксель обоснован
                данными и логикой пользователя. Результат — интерфейсы, которые хочется использовать.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Figma", "Protopie", "UX Research", "Design Systems", "User Testing", "Framer"].map((skill) => (
                  <span
                    key={skill}
                    className="font-golos text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(147,51,234,0.1)",
                      border: "1px solid rgba(192,132,252,0.2)",
                      color: "#c084fc",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent, rgba(147,51,234,0.04) 50%, transparent)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <span className="section-number" style={{ left: "50%", transform: "translateX(-50%)" }}>
              03
            </span>
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "#c084fc" }}>
              Услуги
            </p>
            <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>
              Что я <span className="gradient-text italic">делаю</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="glass gradient-border rounded-2xl p-6 card-hover cursor-default"
                style={{ border: "1px solid rgba(147,51,234,0.12)" }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl" style={{ background: "rgba(147,51,234,0.12)" }}>
                  <Icon name={s.icon} size={22} className="text-purple-400" />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-cormorant text-xl text-white">{s.title}</h3>
                  <span
                    className="font-golos text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(147,51,234,0.15)",
                      color: "#a855f7",
                      border: "1px solid rgba(147,51,234,0.25)",
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="font-golos text-sm" style={{ color: "rgba(200,180,230,0.55)", lineHeight: 1.7 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div className="relative">
              <span className="section-number">04</span>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "#c084fc" }}>
                Портфолио
              </p>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>
                Избранные <span className="gradient-text italic">работы</span>
              </h2>
            </div>
            <button className="btn-outline text-sm">Все проекты →</button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PORTFOLIO.map((p, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden card-hover cursor-pointer"
                style={{ border: "1px solid rgba(147,51,234,0.12)" }}
              >
                <div
                  className={`h-52 bg-gradient-to-br ${p.color} flex items-center justify-center relative`}
                  style={{ borderBottom: "1px solid rgba(147,51,234,0.12)" }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 16,
                      background: "rgba(147,51,234,0.15)",
                      border: `1px solid ${p.accent}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span className="font-cormorant" style={{ color: p.accent, fontSize: "2rem", fontWeight: 600 }}>
                      {p.title.substring(0, 2)}
                    </span>
                  </div>
                  <span
                    className="font-golos text-xs absolute top-4 right-4 px-2 py-1 rounded"
                    style={{
                      background: "rgba(8,6,16,0.6)",
                      color: "rgba(200,180,230,0.5)",
                      border: "1px solid rgba(147,51,234,0.15)",
                    }}
                  >
                    {p.year}
                  </span>
                </div>
                <div className="glass p-6">
                  <span
                    className="font-golos text-xs px-2 py-0.5 rounded"
                    style={{
                      background: "rgba(147,51,234,0.12)",
                      color: "#a855f7",
                      border: "1px solid rgba(147,51,234,0.2)",
                    }}
                  >
                    {p.category}
                  </span>
                  <h3 className="font-cormorant text-xl text-white mt-2 mb-1">{p.title}</h3>
                  <p className="font-golos text-sm" style={{ color: "rgba(200,180,230,0.55)" }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-32 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent, rgba(147,51,234,0.03) 50%, transparent)" }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div className="relative">
              <span className="section-number">05</span>
              <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "#c084fc" }}>
                Блог
              </p>
              <h2 className="font-cormorant" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}>
                Советы по <span className="gradient-text italic">дизайну</span>
              </h2>
            </div>
            <button className="btn-outline text-sm">Все статьи →</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {BLOG.map((b, i) => (
              <div
                key={i}
                className="glass gradient-border rounded-2xl p-6 card-hover cursor-pointer flex flex-col"
                style={{ border: "1px solid rgba(147,51,234,0.12)" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-golos text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(147,51,234,0.12)",
                      color: "#c084fc",
                      border: "1px solid rgba(192,132,252,0.2)",
                    }}
                  >
                    {b.tag}
                  </span>
                  <span className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.35)" }}>
                    {b.readTime}
                  </span>
                </div>
                <h3 className="font-cormorant text-xl text-white mb-3 leading-tight flex-1">
                  {b.title}
                </h3>
                <p className="font-golos text-sm mb-4" style={{ color: "rgba(200,180,230,0.5)", lineHeight: 1.6 }}>
                  {b.desc}
                </p>
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(147,51,234,0.1)" }}
                >
                  <span className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.35)" }}>
                    {b.date}
                  </span>
                  <span className="font-golos text-xs" style={{ color: "#c084fc" }}>
                    Читать →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 relative">
            <span className="section-number" style={{ left: "50%", transform: "translateX(-50%)" }}>
              06
            </span>
            <p className="font-golos text-xs tracking-widest uppercase mb-4" style={{ color: "#c084fc" }}>
              Контакты
            </p>
            <h2
              className="font-cormorant mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "white" }}
            >
              Начнём <span className="gradient-text italic">проект</span>?
            </h2>
            <p className="font-golos" style={{ color: "rgba(200,180,230,0.5)", maxWidth: 500, margin: "0 auto" }}>
              Расскажите о задаче — обсудим детали и найдём лучшее решение
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="glass-strong rounded-2xl p-8" style={{ border: "1px solid rgba(147,51,234,0.2)" }}>
              {!sent ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(200,180,230,0.5)" }}>
                      Имя
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full font-golos text-sm px-4 py-3 rounded-xl outline-none transition-all"
                      style={{
                        background: "rgba(147,51,234,0.06)",
                        border: "1px solid rgba(147,51,234,0.2)",
                        color: "white",
                      }}
                      placeholder="Ваше имя"
                      onFocus={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(147,51,234,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(200,180,230,0.5)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full font-golos text-sm px-4 py-3 rounded-xl outline-none transition-all"
                      style={{
                        background: "rgba(147,51,234,0.06)",
                        border: "1px solid rgba(147,51,234,0.2)",
                        color: "white",
                      }}
                      placeholder="your@email.com"
                      onFocus={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(147,51,234,0.2)")}
                    />
                  </div>
                  <div>
                    <label className="font-golos text-xs uppercase tracking-widest mb-2 block" style={{ color: "rgba(200,180,230,0.5)" }}>
                      Сообщение
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full font-golos text-sm px-4 py-3 rounded-xl outline-none transition-all resize-none"
                      style={{
                        background: "rgba(147,51,234,0.06)",
                        border: "1px solid rgba(147,51,234,0.2)",
                        color: "white",
                      }}
                      placeholder="Расскажите о проекте..."
                      onFocus={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(147,51,234,0.2)")}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full relative z-10 mt-2">
                    Отправить сообщение
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div
                    className="mb-4 w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(147,51,234,0.2)", border: "1px solid rgba(192,132,252,0.3)" }}
                  >
                    <Icon name="Check" size={28} className="text-purple-400" />
                  </div>
                  <h3 className="font-cormorant text-2xl text-white mb-2">Отправлено!</h3>
                  <p className="font-golos text-sm" style={{ color: "rgba(200,180,230,0.5)" }}>
                    Отвечу в течение 24 часов
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6 justify-center">
              <div>
                <p className="font-cormorant text-2xl text-white mb-2">
                  Предпочитаете мессенджер?
                </p>
                <p className="font-golos text-sm" style={{ color: "rgba(200,180,230,0.5)" }}>
                  Напишите напрямую — отвечу быстро
                </p>
              </div>

              <a
                href="https://t.me/InSync_UI"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 card-hover"
                style={{ border: "1px solid rgba(147,51,234,0.15)", textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(34,144,221,0.15)", border: "1px solid rgba(34,144,221,0.3)" }}
                >
                  <Icon name="Send" size={20} style={{ color: "#60b8f5" }} />
                </div>
                <div>
                  <div className="font-golos font-semibold text-white text-sm">Telegram</div>
                  <div className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.45)" }}>@InSync_UI</div>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto" style={{ color: "rgba(192,132,252,0.4)" }} />
              </a>

              <a
                href="https://wa.me/79013906401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 card-hover"
                style={{ border: "1px solid rgba(147,51,234,0.15)", textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.3)" }}
                >
                  <Icon name="MessageCircle" size={20} style={{ color: "#4ade80" }} />
                </div>
                <div>
                  <div className="font-golos font-semibold text-white text-sm">WhatsApp</div>
                  <div className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.45)" }}>+7 (901) 390-64-01</div>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto" style={{ color: "rgba(192,132,252,0.4)" }} />
              </a>

              <a
                href="mailto:linsyncui@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-5 card-hover"
                style={{ border: "1px solid rgba(147,51,234,0.15)", textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(147,51,234,0.12)", border: "1px solid rgba(192,132,252,0.25)" }}
                >
                  <Icon name="Mail" size={20} className="text-purple-400" />
                </div>
                <div>
                  <div className="font-golos font-semibold text-white text-sm">Email</div>
                  <div className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.45)" }}>linsyncui@gmail.com</div>
                </div>
                <Icon name="ArrowRight" size={16} className="ml-auto" style={{ color: "rgba(192,132,252,0.4)" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ borderTop: "1px solid rgba(147,51,234,0.1)" }}>
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-lg" style={{ color: "rgba(200,180,230,0.5)" }}>
            InSync<span style={{ color: "#9333ea" }}>.UI</span>
          </span>
          <p className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.3)" }}>
            © 2026 InSync.UI — UI/UX Design Studio
          </p>
          <div className="flex gap-6">
            {NAV_LINKS.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href} className="font-golos text-xs" style={{ color: "rgba(200,180,230,0.35)" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}