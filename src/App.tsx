import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FormEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Code,
  Copy,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  GraduationCap,
  ImageOff,
  Languages,
  Link2,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Trophy,
  User,
  Users,
  X,
} from 'lucide-react'

import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { TechLogo, techLogos } from '@/components/tech-logos'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { shared, type Project, type ProjectCategory } from '@/data/portfolio'
import { useI18n } from '@/lib/i18n'
import { cn } from '@/lib/utils'

const base = import.meta.env.BASE_URL
/** Retraso escalonado para la animación de entrada */
const delay = (i: number) => ({ '--i': i }) as CSSProperties
const HASH_PREFIX = '#proyecto-'

function useLinks() {
  const { lang, t } = useI18n()
  return {
    cv: `${base}${shared.cv[lang]}`,
    whatsapp: (text: string = t.ui.whatsappMessage) =>
      `https://wa.me/${shared.whatsapp}?text=${encodeURIComponent(text)}`,
  }
}

function useNav() {
  const { t } = useI18n()
  return [
    { href: '#sobre-mi', label: t.ui.nav.about },
    { href: '#experiencia', label: t.ui.nav.experience },
    { href: '#proyectos', label: t.ui.nav.projects },
    { href: '#habilidades', label: t.ui.nav.skills },
    { href: '#contacto', label: t.ui.nav.contact },
  ]
}

/** Cuadro con ícono, usado en servicios, datos y cifras. */
function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-xl border border-brand/30 bg-brand/10 text-brand [&_svg]:size-5',
        className,
      )}
    >
      {children}
    </span>
  )
}

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5 font-display text-lg font-extrabold tracking-tight uppercase">
      <span className="grid size-9 place-items-center rounded-lg bg-brand text-sm text-brand-foreground">DV</span>
      <span>
        <span className="text-brand">David</span> Valenzuela
      </span>
    </a>
  )
}

/* ───────────────────────── Encabezado ───────────────────────── */
function LangToggle() {
  const { lang, setLang, t } = useI18n()
  return (
    <Button
      variant="ghost"
      size="sm"
      className="font-display font-bold tracking-wide"
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      aria-label={t.ui.langSwitchLabel}
      title={t.ui.langSwitchLabel}
    >
      {t.ui.langSwitch}
    </Button>
  )
}

function Header() {
  const { t } = useI18n()
  const links = useLinks()
  const nav = useNav()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors',
        scrolled || open ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LangToggle />
          <ThemeToggle />
          <Button asChild variant="brand" className="ml-1 hidden md:inline-flex">
            <a href={links.whatsapp()} target="_blank" rel="noreferrer">
              {t.ui.contactCta} <ArrowUpRight />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="wrap border-t pb-5 lg:hidden" aria-label="Móvil">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block border-b py-3.5 text-lg">
              {item.label}
            </a>
          ))}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Button asChild variant="outline" size="lg">
              <a href={links.cv} download>
                <Download /> CV
              </a>
            </Button>
            <Button asChild variant="brand" size="lg">
              <a href={links.whatsapp()} target="_blank" rel="noreferrer">
                <WhatsappIcon className="size-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}

/* ───────────────────────── Inicio ───────────────────────── */
function CodeCard() {
  const { lang } = useI18n()
  const k = lang === 'es'
    ? { role: 'rol', stack: 'stack', location: 'ubicacion', available: 'disponible', loc: 'Los Mochis, MX', from: 'Enero 2027' }
    : { role: 'role', stack: 'stack', location: 'location', available: 'available', loc: 'Los Mochis, MX', from: 'January 2027' }
  return (
    <div className="glow-box w-[min(100%,20rem)] rounded-2xl text-left font-mono text-[0.8rem] leading-relaxed shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b px-4 py-2.5 text-xs text-muted-foreground">
        <span>&lt;/&gt; david.ts</span>
        <span className="size-2 rounded-full bg-teal" aria-hidden />
      </div>
      <pre className="overflow-hidden px-4 py-3 whitespace-pre-wrap">
        <span className="text-brand">const</span> david = {'{'}
        {'\n  '}
        {k.role}: <span className="text-teal">'Full Stack Developer'</span>,{'\n  '}
        {k.stack}: [<span className="text-teal">'React'</span>, <span className="text-teal">'TypeScript'</span>,
        {'\n    '}
        <span className="text-teal">'Node.js'</span>, <span className="text-teal">'FastAPI'</span>],{'\n  '}
        {k.location}: <span className="text-teal">'{k.loc}'</span>,{'\n  '}
        {k.available}: <span className="text-teal">'{k.from}'</span>,{'\n'}
        {'}'}
      </pre>
    </div>
  )
}

function Hero() {
  const { t } = useI18n()
  const links = useLinks()

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[720px] w-[75%] opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--brand) 45%, transparent), transparent)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_70%_40%,#000,transparent)]"
        style={{
          backgroundImage: 'radial-gradient(color-mix(in oklab, var(--foreground) 35%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      <div className="wrap grid items-center gap-14 pb-16 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <p className="rise inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 text-sm font-medium text-brand" style={delay(0)}>
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-teal" />
            </span>
            {t.profile.availability}
          </p>

          <p className="rise mt-7 font-display text-2xl font-bold sm:text-3xl" style={delay(1)}>
            {t.ui.hello}
          </p>
          <h1
            className="rise mt-1 font-display text-[clamp(2.4rem,11vw,7rem)] leading-[0.9] font-black tracking-[-0.03em] uppercase lg:text-[clamp(4rem,6.2vw,8.5rem)]"
            style={delay(1)}
          >
            <span className="block">David</span>
            <span className="block text-brand">Valenzuela</span>
          </h1>

          <p
            className="rise mt-6 font-display text-sm font-bold tracking-[0.2em] text-teal uppercase sm:text-base sm:tracking-[0.35em]"
            style={delay(2)}
          >
            Full Stack Developer &nbsp;|&nbsp; UX/UI
          </p>

          <p className="rise mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" style={delay(2)}>
            {t.profile.headline}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(3)}>
            <Button asChild size="lg" variant="brand" className="h-12 px-6 text-base">
              <a href="#proyectos">
                {t.ui.viewProjects} <ArrowRight />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href={links.cv} download>
                {t.ui.downloadCv} <Download />
              </a>
            </Button>
          </div>

          <div className="rise mt-10" style={delay(4)}>
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">{t.ui.techIWorkWith}</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {shared.heroStack.map((k) => (
                <li
                  key={k}
                  title={techLogos[k].name}
                  className="grid size-12 place-items-center rounded-xl border bg-card/70 transition-colors hover:border-brand/50"
                >
                  <TechLogo tech={k} className="size-6" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="rise relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none" style={delay(2)}>
          <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full"
              style={{
                background: 'radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--brand) 85%, white 0%), color-mix(in oklab, var(--brand) 35%, transparent) 70%)',
              }}
            />
            <div aria-hidden className="absolute inset-[2%] rounded-full border border-teal/40" />
            <img
              src={`${base}${shared.avatar}`}
              alt={shared.fullName}
              width={567}
              height={597}
              fetchPriority="high"
              className="absolute bottom-0 left-1/2 w-[86%] -translate-x-1/2 object-contain [mask-image:linear-gradient(to_bottom,#000_85%,transparent)]"
            />
          </div>
          <div className="absolute -bottom-4 left-0 hidden sm:block lg:-left-10">
            <CodeCard />
          </div>
          <div className="glow-box absolute top-[8%] right-0 rounded-2xl px-4 py-3 shadow-xl shadow-black/30 lg:-right-2">
            <p className="font-display text-2xl font-black text-brand">9.7</p>
            <p className="text-xs text-muted-foreground">{t.stats.gpa}</p>
          </div>
        </figure>
      </div>
    </section>
  )
}

/* ───────────────────────── Sobre mí ───────────────────────── */
function About() {
  const { t } = useI18n()
  const links = useLinks()
  const info = [
    { icon: <User />, label: t.ui.info.name, value: shared.fullName },
    { icon: <Mail />, label: t.ui.info.email, value: shared.email, href: `mailto:${shared.email}` },
    { icon: <MapPin />, label: t.ui.info.location, value: t.profile.location },
    { icon: <CalendarCheck />, label: t.ui.info.availability, value: t.profile.facts.available },
    { icon: <GraduationCap />, label: t.ui.info.gpa, value: t.profile.facts.gpa },
    { icon: <Languages />, label: t.ui.info.languages, value: t.languages.join(' · ') },
  ]

  return (
    <section id="sobre-mi" className="border-y bg-card/40 py-20 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-display text-sm font-bold tracking-[0.18em] text-brand uppercase">{t.ui.eyebrows.about}</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-extrabold tracking-tight text-balance">
            {t.ui.aboutHeading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {t.profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <a href={links.cv} download>
              {t.ui.downloadCv} <Download />
            </a>
          </Button>
        </div>

        <dl className="grid gap-px self-start overflow-hidden rounded-2xl border bg-border sm:grid-cols-2 lg:col-span-6">
          {info.map((item) => (
            <div key={item.label} className="flex items-start gap-4 bg-background p-5 sm:p-6">
              <IconTile>{item.icon}</IconTile>
              <div className="min-w-0">
                <dt className="text-sm text-muted-foreground">{item.label}</dt>
                <dd className="mt-0.5 font-medium break-words">
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ───────────────────────── Qué hago ───────────────────────── */
const serviceIcons = { code: <Code />, design: <Palette />, database: <Database />, ai: <Cpu /> }

function Services() {
  const { t } = useI18n()
  return (
    <Section id="servicios" eyebrow={t.servicesEyebrow} title={t.servicesTitle}>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {t.services.map((s) => (
          <article
            key={s.title}
            className="group rounded-2xl border bg-card p-7 transition-colors hover:border-brand/50"
          >
            <IconTile className="size-12 [&_svg]:size-6">{serviceIcons[s.icon]}</IconTile>
            <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ───────────────────────── Cifras ───────────────────────── */
const statIcons = { gpa: <GraduationCap />, projects: <FolderGit2 />, users: <Users />, award: <Trophy /> }

function Stats() {
  const { t } = useI18n()
  return (
    <section aria-label="Cifras" className="border-y bg-card/40">
      <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
        {shared.stats.map((s, i) => (
          <div
            key={s.id}
            className={cn(
              'flex items-center gap-4 py-8 sm:py-10',
              i % 2 === 1 && 'border-l pl-5 sm:pl-8',
              i >= 2 && 'border-t lg:border-t-0',
              i === 2 && 'lg:border-l lg:pl-8',
            )}
          >
            <IconTile className="hidden size-12 rounded-full sm:grid [&_svg]:size-6">{statIcons[s.id]}</IconTile>
            <div className="flex flex-col-reverse">
              <dt className="mt-0.5 text-sm text-muted-foreground">{t.stats[s.id]}</dt>
              <dd className="font-display text-3xl font-black sm:text-4xl">{s.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  )
}

/* ───────────────────────── Experiencia ───────────────────────── */
function ExperienceSection({ onOpen }: { onOpen: (id: string) => void }) {
  const { t } = useI18n()
  return (
    <Section id="experiencia" eyebrow={t.ui.eyebrows.experience} title={t.ui.experienceTitle} intro={t.ui.experienceIntro}>
      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[0.6875rem] before:w-px before:bg-border lg:before:left-[calc(16.666%+0.6875rem)]">
        {t.experience.map((job) => (
          <li key={job.company} className="relative grid gap-3 pl-10 lg:grid-cols-6 lg:gap-8 lg:pl-0">
            <p className="pt-5 text-sm font-medium text-muted-foreground lg:col-span-1 lg:text-right">{job.period}</p>
            <span
              aria-hidden
              className="absolute top-6 left-0 grid size-6 place-items-center rounded-full border border-brand/40 bg-background lg:left-[calc(16.666%)]"
            >
              <span className="size-2 rounded-full bg-brand" />
            </span>
            <article className="rounded-2xl border bg-card p-6 sm:p-7 lg:col-span-5 lg:ml-10">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="font-display text-2xl font-bold">{job.company}</h3>
                <p className="font-medium text-teal">{job.role}</p>
              </div>
              <p className="mt-2 text-muted-foreground">{job.description}</p>
              <ul className="mt-5 grid gap-3 lg:grid-cols-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t pt-5">
                <ul className="flex flex-wrap gap-2">
                  {job.tech.map((tech) => (
                    <li key={tech} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${HASH_PREFIX}${job.projectId}`}
                  onClick={(e) => {
                    e.preventDefault()
                    onOpen(job.projectId)
                  }}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
                >
                  {t.ui.viewCase} <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ───────────────────────── Proyectos ───────────────────────── */
function readHashProject() {
  return window.location.hash.startsWith(HASH_PREFIX) ? window.location.hash.slice(HASH_PREFIX.length) : null
}

/** El proyecto abierto vive en la URL (#proyecto-<id>), así cada caso tiene su propio enlace. */
function useProjectRoute() {
  const [selectedId, setSelectedId] = useState<string | null>(readHashProject)

  useEffect(() => {
    const onHash = () => setSelectedId(readHashProject())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const open = useCallback((id: string) => {
    history.replaceState(null, '', `${window.location.pathname}${window.location.search}${HASH_PREFIX}${id}`)
    setSelectedId(id)
  }, [])

  const close = useCallback(() => {
    if (window.location.hash.startsWith(HASH_PREFIX)) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
    setSelectedId(null)
  }, [])

  return { selectedId, open, close }
}

function CaseBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{title}</h4>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useI18n()
  const ref = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const imgs = project?.images ?? []

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!project && d.open) {
      d.close()
    }
  }, [project])

  const close = useCallback(() => ref.current?.close(), [])
  const go = useCallback(
    (dir: number) => setActive((a) => (imgs.length ? (a + dir + imgs.length) % imgs.length : 0)),
    [imgs.length],
  )

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* el navegador no permitió copiar */
    }
  }

  const cs = project?.caseStudy

  return (
    <dialog
      ref={ref}
      className="project-modal fixed inset-0 m-auto max-h-[92vh] w-[min(96vw,1280px)] overflow-hidden rounded-3xl border bg-background p-0 text-foreground shadow-2xl"
      onClose={() => {
        document.body.style.overflow = ''
        setActive(0)
        setCopied(false)
        onClose()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close()
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1)
        if (e.key === 'ArrowLeft') go(-1)
      }}
      aria-labelledby="modal-title"
    >
      {project && (
        <div className="max-h-[92vh] overflow-y-auto overscroll-contain">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b bg-background/95 px-5 py-4 backdrop-blur sm:px-8">
            <div className="min-w-0">
              <p className="text-sm text-teal">
                {t.ui.categories[project.category]} | {project.subtitle}
              </p>
              <h3 id="modal-title" className="font-display text-2xl font-extrabold sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <div className="flex shrink-0 gap-2">
              <Button variant="outline" size="sm" onClick={copyLink} className="hidden sm:inline-flex">
                {copied ? <Check /> : <Link2 />} {copied ? t.ui.linkCopied : t.ui.copyLink}
              </Button>
              <Button variant="outline" size="icon" onClick={close} aria-label={t.ui.close}>
                <X />
              </Button>
            </div>
          </div>

          {imgs.length > 0 ? (
            <div className="bg-black/40 px-3 py-4 sm:px-8 sm:py-6">
              <div className="relative">
                <img
                  src={`${base}${imgs[active]}`}
                  alt={`${project.title} (${active + 1}/${imgs.length})`}
                  className="mx-auto max-h-[62vh] w-full rounded-xl object-contain"
                />
                {imgs.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
                      onClick={() => go(-1)}
                      aria-label={t.ui.prevImage}
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
                      onClick={() => go(1)}
                      aria-label={t.ui.nextImage}
                    >
                      <ChevronRight />
                    </Button>
                  </>
                )}
              </div>
              {imgs.length > 1 && (
                <div className="mt-4 flex justify-center gap-3">
                  {imgs.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setActive(i)}
                      aria-label={t.ui.showImage(i + 1)}
                      aria-pressed={i === active}
                      className={cn(
                        'w-20 overflow-hidden rounded-md border-2 sm:w-28',
                        i === active ? 'border-brand' : 'border-transparent opacity-50 hover:opacity-100',
                      )}
                    >
                      <img src={`${base}${src}`} alt="" className="aspect-[16/10] w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 bg-secondary/60 py-10 text-muted-foreground">
              <ImageOff className="size-5" /> {t.ui.imagesSoon}
            </div>
          )}

          <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-7">
              <CaseBlock title={t.ui.caseSummary}>
                <p className="text-lg leading-relaxed">{project.summary}</p>
                {project.note && <p className="mt-3 text-sm text-muted-foreground">{project.note}</p>}
              </CaseBlock>
              {cs && (
                <>
                  <CaseBlock title={t.ui.caseProblem}>
                    <p className="leading-relaxed text-muted-foreground">{cs.problem}</p>
                  </CaseBlock>
                  <CaseBlock title={t.ui.caseDecisions}>
                    <ul className="space-y-2.5">
                      {cs.decisions.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseBlock>
                </>
              )}
            </div>
            <div className="space-y-5 lg:col-span-5">
              {cs && (
                <div className="glow-box rounded-2xl p-5">
                  <h4 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{t.ui.caseRole}</h4>
                  <p className="mt-2">{cs.role}</p>
                  <h4 className="mt-5 font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">
                    {t.ui.caseResults}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="flex gap-2.5">
                        <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="glow-box rounded-2xl p-5">
                <h4 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{t.ui.techTitle}</h4>
                <TechList items={project.tech} className="mt-3" />
              </div>
              <ProjectLinks p={project} />
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}

function ProjectLinks({ p, size = 'default' }: { p: Project; size?: 'default' | 'sm' }) {
  const { t } = useI18n()
  if (!p.demo && !p.repo && !p.prototype) return null
  return (
    <div className="flex flex-wrap gap-2">
      {p.demo && (
        <Button asChild size={size} variant="brand">
          <a href={p.demo} target="_blank" rel="noreferrer">
            {t.ui.openSite} <ExternalLink />
          </a>
        </Button>
      )}
      {p.prototype && (
        <Button asChild size={size} variant="brand">
          <a href={p.prototype} target="_blank" rel="noreferrer">
            {t.ui.openPrototype} <ExternalLink />
          </a>
        </Button>
      )}
      {p.repo && (
        <Button asChild size={size} variant="outline">
          <a href={p.repo} target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" /> {t.ui.viewCode}
          </a>
        </Button>
      )}
    </div>
  )
}

function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {items.map((tech) => (
        <li key={tech} className="rounded-full border px-3 py-1 text-sm">
          {tech}
        </li>
      ))}
    </ul>
  )
}

function Cover({ project, className }: { project: Project; className?: string }) {
  const { t } = useI18n()
  return project.images.length > 0 ? (
    <img
      src={`${base}${project.images[0]}`}
      alt=""
      loading="lazy"
      className={cn('w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]', className)}
    />
  ) : (
    <div
      className={cn('relative grid w-full place-items-center overflow-hidden', className)}
      style={{
        background:
          'radial-gradient(80% 90% at 30% 20%, color-mix(in oklab, var(--brand) 22%, transparent), transparent 70%), var(--secondary)',
      }}
    >
      <div className="px-6 text-center">
        <p className="font-display text-[clamp(1.25rem,2.2vw,2rem)] leading-tight font-black text-foreground/80">
          {project.title}
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <ImageOff className="size-4" /> {t.ui.imagesSoon}
        </p>
      </div>
    </div>
  )
}

function ProjectCard({ p, onOpen }: { p: Project; onOpen: (id: string) => void }) {
  const { t } = useI18n()
  const openFromLink = (e: MouseEvent) => {
    e.preventDefault()
    onOpen(p.id)
  }
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-black/20">
      <a href={`${HASH_PREFIX}${p.id}`} onClick={openFromLink} className="block overflow-hidden" tabIndex={-1} aria-hidden>
        <Cover project={p} className="aspect-[16/10]" />
      </a>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-teal">{t.ui.categories[p.category]}</p>
        <h3 className="mt-1 font-display text-xl font-bold">
          <a href={`${HASH_PREFIX}${p.id}`} onClick={openFromLink} className="hover:text-brand">
            {p.title}
          </a>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">{p.summary}</p>
        <p className="mt-4 text-sm text-brand/90">{p.tech.slice(0, 4).join(' / ')}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-6">
          <a
            href={`${HASH_PREFIX}${p.id}`}
            onClick={openFromLink}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-brand"
          >
            {t.ui.viewDetails} <ArrowRight className="size-4" />
          </a>
          {(p.demo || p.prototype) && (
            <Button asChild variant="outline" size="icon" className="size-9">
              <a href={p.demo ?? p.prototype} target="_blank" rel="noreferrer" aria-label={`${t.ui.openSite}: ${p.title}`}>
                <ExternalLink />
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectsSection({ onOpen }: { onOpen: (id: string) => void }) {
  const { t, projects } = useI18n()
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all')
  const categories = Array.from(new Set(projects.map((p) => p.category)))
  const visible = projects.filter((p) => filter === 'all' || p.category === filter)

  return (
    <Section
      id="proyectos"
      eyebrow={t.ui.eyebrows.projects}
      title={t.ui.projectsHeading}
      intro={t.ui.projectsIntro}
      action={
        <div className="flex flex-wrap gap-2" role="group" aria-label={t.ui.projectsTitle}>
          {(['all', ...categories] as const).map((c) => (
            <Button
              key={c}
              size="sm"
              variant={filter === c ? 'brand' : 'outline'}
              className="rounded-full"
              aria-pressed={filter === c}
              onClick={() => setFilter(c)}
            >
              {c === 'all' ? t.ui.all : t.ui.categories[c]}
            </Button>
          ))}
        </div>
      }
    >
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.id} p={p} onOpen={onOpen} />
        ))}
      </div>
    </Section>
  )
}

/* ───────────────────────── Stack y formación ───────────────────────── */
function SkillsSection() {
  const { t } = useI18n()
  return (
    <Section id="habilidades" eyebrow={t.ui.eyebrows.stack} title={t.ui.stackHeading} intro={t.ui.skillsIntro}>
      <div className="grid gap-5 lg:grid-cols-2">
        {shared.skillGroups.map((g) => (
          <div key={g.id} className="rounded-2xl border bg-card p-6 sm:p-7">
            <h3 className="font-display text-lg font-bold">{t.skillGroups[g.id]}</h3>
            <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {g.techs.map((k) => (
                <li
                  key={k}
                  className="flex flex-col items-center gap-2.5 rounded-xl border bg-background px-2 py-4 text-center transition-colors hover:border-brand/50"
                >
                  <TechLogo tech={k} className="size-8" />
                  <span className="text-xs font-medium sm:text-sm">{techLogos[k].name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 border-t pt-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold">
            <GraduationCap className="size-5 text-brand" /> {t.ui.education}
          </h3>
          {t.education.map((e) => (
            <div key={e.degree} className="mt-4">
              <p className="font-semibold">{e.degree}</p>
              <p className="text-muted-foreground">{e.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{e.period}</p>
              <p className="mt-2 text-sm">{e.detail}</p>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold">
            <Trophy className="size-5 text-brand" /> {t.ui.certifications}
          </h3>
          <ul className="mt-4 space-y-4">
            {t.certifications.map((c) => (
              <li key={c.name}>
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-muted-foreground">
                  {c.issuer}, {c.year}
                </p>
              </li>
            ))}
            <li>
              <p className="font-semibold">{t.achievement.title}</p>
              <p className="text-sm text-muted-foreground">{t.achievement.detail}</p>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold">
            <Users className="size-5 text-brand" /> {t.ui.howIWork}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.softSkills.map((s) => (
              <li key={s} className="rounded-full border px-3.5 py-1.5 text-sm">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

/* ───────────────────────── Contacto ───────────────────────── */
function ContactForm() {
  const { t } = useI18n()
  const links = useLinks()
  const f = t.ui.form
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const compose = () => `${f.greeting}\n\n${message.trim()}\n\n${f.signature(name.trim(), company.trim())}`

  const valid = () => {
    const ok = Boolean(name.trim() && message.trim())
    setError(!ok)
    return ok
  }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    if (!valid()) return
    window.location.href = `mailto:${shared.email}?subject=${encodeURIComponent(f.subject(name.trim()))}&body=${encodeURIComponent(compose())}`
  }

  const sendWhatsapp = () => {
    if (!valid()) return
    window.open(links.whatsapp(compose()), '_blank', 'noopener')
  }

  const field =
    'w-full rounded-lg border bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none'

  return (
    <form onSubmit={sendEmail} className="space-y-4" noValidate>
      <h3 className="font-display text-xl font-bold">{f.title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">{f.name}</span>
          <input
            className={field}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={f.name}
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <span className="sr-only">{f.company}</span>
          <input
            className={field}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={f.company}
            autoComplete="organization"
          />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">{f.message}</span>
        <textarea
          className={cn(field, 'min-h-36 resize-y')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePlaceholder}
          required
        />
      </label>
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {f.required}
        </p>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <Button type="button" variant="brand" size="lg" className="h-12" onClick={sendWhatsapp}>
          <WhatsappIcon className="size-4" /> {f.sendWhatsapp}
        </Button>
        <Button type="submit" variant="outline" size="lg" className="h-12">
          <Mail /> {f.sendEmail}
        </Button>
      </div>
    </form>
  )
}

function ContactSection() {
  const { t } = useI18n()
  const links = useLinks()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(shared.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${shared.email}`
    }
  }

  const rows = [
    {
      icon: <Mail />,
      label: t.ui.info.email,
      value: shared.email,
      href: `mailto:${shared.email}`,
      extra: (
        <button onClick={copy} className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />} {copied ? t.ui.copied : t.ui.copy}
        </button>
      ),
    },
    { icon: <Phone />, label: t.ui.phoneLabel, value: shared.phone, href: links.whatsapp() },
    { icon: <MapPin />, label: t.ui.info.location, value: t.profile.location },
  ]

  return (
    <section id="contacto" className="border-t py-20 sm:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <p className="font-display text-sm font-bold tracking-[0.18em] text-brand uppercase">{t.ui.eyebrows.contact}</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-extrabold tracking-tight text-balance">
            {t.ui.contactHeading}
          </h2>
          <p className="mt-4 max-w-md text-lg text-muted-foreground">{t.ui.contactIntro}</p>

          <ul className="mt-8 space-y-5">
            {rows.map((r) => (
              <li key={r.label} className="flex items-center gap-4">
                <IconTile>{r.icon}</IconTile>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{r.label}</p>
                  <p className="font-medium break-all">
                    {r.href ? (
                      <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="hover:text-brand">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                    {r.extra}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Button asChild variant="brand" size="lg" className="mt-9 h-12 px-6 text-base">
            <a href={links.whatsapp()} target="_blank" rel="noreferrer">
              <WhatsappIcon className="size-5" /> {t.ui.whatsappCta}
            </a>
          </Button>
        </div>

        <div className="glow-box min-w-0 self-start rounded-3xl p-6 sm:p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Pie ───────────────────────── */
function Footer() {
  const { t } = useI18n()
  const links = useLinks()
  const nav = useNav()
  const socials = [
    { href: shared.socials.github, label: 'GitHub', Icon: GithubIcon },
    { href: shared.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: links.whatsapp(), label: 'WhatsApp', Icon: WhatsappIcon },
  ].filter((s) => s.href)

  return (
    <footer className="border-t bg-band text-band-foreground">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-band-foreground/65">{t.ui.footerTagline}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-teal">
            <span className="size-2 rounded-full bg-teal" aria-hidden /> {t.profile.availability}
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] uppercase">{t.ui.quickLinks}</h3>
          <ul className="mt-4 space-y-2.5 text-band-foreground/65">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-brand">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] uppercase">{t.ui.followMe}</h3>
          <ul className="mt-4 flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg border border-band-foreground/15 transition-colors hover:border-brand hover:text-brand"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] uppercase">{t.ui.resume}</h3>
          <Button asChild variant="brand" className="mt-4">
            <a href={links.cv} download>
              {t.ui.downloadCv} <Download />
            </a>
          </Button>
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-band-foreground/10 py-6 text-sm text-band-foreground/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {shared.fullName}
        </p>
        <p>{t.ui.madeWith}</p>
      </div>
    </footer>
  )
}

export default function App() {
  const { t, projects } = useI18n()
  const { selectedId, open, close } = useProjectRoute()
  const selected = projects.find((p) => p.id === selectedId) ?? null

  return (
    <>
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        {t.ui.skipToContent}
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Stats />
        <ExperienceSection onOpen={open} />
        <ProjectsSection onOpen={open} />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selected} onClose={close} />
    </>
  )
}
