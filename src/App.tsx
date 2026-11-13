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
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  ImageOff,
  Link2,
  Mail,
  Menu,
  X,
} from 'lucide-react'

import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { shared, type Project } from '@/data/portfolio'
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
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const nav = [
    { href: '#sobre-mi', label: t.ui.nav.about },
    { href: '#experiencia', label: t.ui.nav.experience },
    { href: '#proyectos', label: t.ui.nav.projects },
    { href: '#habilidades', label: t.ui.nav.skills },
    { href: '#contacto', label: t.ui.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b transition-colors',
        scrolled || open ? 'border-border bg-background/85 backdrop-blur-md' : 'border-transparent',
      )}
    >
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <a href="#inicio" className="font-display text-lg font-extrabold tracking-tight uppercase">
          <span className="text-brand">David</span> Valenzuela
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LangToggle />
          <ThemeToggle />
          <Button asChild variant="outline" className="ml-1 hidden sm:inline-flex">
            <a href={links.cv} download>
              <Download /> CV
            </a>
          </Button>
          <Button asChild variant="brand" className="hidden md:inline-flex">
            <a href={links.whatsapp()} target="_blank" rel="noreferrer">
              <WhatsappIcon className="size-4" /> {t.ui.contactCta}
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
function Hero() {
  const { t } = useI18n()
  const links = useLinks()
  const f = t.profile.facts
  const facts = [
    { label: t.ui.facts.gpa, value: f.gpa },
    { label: t.ui.facts.degree, value: f.degree },
    { label: t.ui.facts.available, value: f.available },
    { label: t.ui.facts.location, value: f.location },
  ]

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[680px] w-[70%] opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, color-mix(in oklab, var(--brand) 45%, transparent), transparent)' }}
      />
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="rise text-sm tracking-[0.2em] text-muted-foreground uppercase" style={delay(0)}>
            {shared.fullName}
          </p>

          <h1
            className="rise mt-5 font-display text-[clamp(2.4rem,11vw,7rem)] leading-[0.88] font-black tracking-[-0.03em] uppercase lg:text-[clamp(4rem,6.4vw,9rem)]"
            style={delay(1)}
          >
            <span className="block text-brand">David</span>
            <span className="block">Valenzuela</span>
          </h1>

          <p className="rise mt-5 text-lg font-medium text-teal sm:text-xl" style={delay(2)}>
            {t.profile.tagline}
          </p>

          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" style={delay(2)}>
            {t.profile.headline}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(3)}>
            <Button asChild size="lg" variant="brand" className="h-12 px-6 text-base">
              <a href="#proyectos">{t.ui.viewProjects}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href={links.cv} download>
                <Download /> {t.ui.downloadCv}
              </a>
            </Button>
            <SocialLinks />
          </div>

          <p className="rise mt-8 flex items-center gap-2.5 text-[0.95rem] text-muted-foreground" style={delay(4)}>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-teal" />
            </span>
            {t.profile.availability}
          </p>
        </div>

        <figure className="rise relative lg:col-span-5" style={delay(2)}>
          <div className="glow-box relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-[1.75rem] lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(90% 70% at 50% 30%, color-mix(in oklab, var(--brand) 40%, transparent), transparent 70%)',
              }}
            />
            <img
              src={`${base}${shared.avatar}`}
              alt={shared.fullName}
              width={567}
              height={597}
              fetchPriority="high"
              className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 object-contain"
            />
          </div>
          <figcaption className="glow-box relative mx-auto -mt-12 w-[90%] max-w-sm rounded-2xl p-5 shadow-2xl shadow-black/30 lg:absolute lg:bottom-8 lg:-left-10 lg:mt-0">
            <p className="font-display font-bold">{t.achievement.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.achievement.detail}</p>
          </figcaption>
        </figure>
      </div>

      <div className="wrap mt-20">
        <dl className="grid grid-cols-2 border-y lg:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={cn(
                'py-6 pr-4',
                i % 2 === 1 && 'border-l pl-5 lg:pl-8',
                i >= 2 && 'border-t lg:border-t-0',
                i === 2 && 'lg:border-l lg:pl-8',
              )}
            >
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="mt-1 font-display text-lg font-bold sm:text-2xl">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function SocialLinks() {
  const links = useLinks()
  const items = [
    { href: shared.socials.github, label: 'GitHub', Icon: GithubIcon },
    { href: shared.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: links.whatsapp(), label: 'WhatsApp', Icon: WhatsappIcon },
  ].filter((l) => l.href)

  return (
    <div className="flex items-center">
      {items.map(({ href, label, Icon }) => (
        <Button key={label} asChild variant="ghost" size="icon" className="size-11">
          <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon className="size-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}

/* ───────────────────────── Sobre mí ───────────────────────── */
function About() {
  const { t } = useI18n()
  const links = useLinks()
  return (
    <Section id="sobre-mi" title={t.ui.aboutTitle}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:col-span-7">
          {t.profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-foreground' : undefined}>
              {p}
            </p>
          ))}
        </div>
        <div className="glow-box rounded-3xl p-8 lg:col-span-5">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{t.ui.education}</h3>
          {t.education.map((e) => (
            <div key={e.degree} className="mt-4">
              <p className="font-display text-2xl font-extrabold uppercase">{e.degree}</p>
              <p className="mt-1">{e.school}</p>
              <p className="mt-1 text-muted-foreground">{e.period}</p>
              <p className="mt-3 text-muted-foreground">{e.detail}</p>
            </div>
          ))}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{t.ui.directContact}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={links.whatsapp()} target="_blank" rel="noreferrer" className="hover:text-brand">
                  {shared.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${shared.email}`} className="break-all hover:text-brand">
                  {shared.email}
                </a>
              </li>
              <li>
                <a href={shared.socials.github} target="_blank" rel="noreferrer" className="hover:text-brand">
                  github.com/Davidvzlaa
                </a>
              </li>
              {shared.socials.linkedin && (
                <li>
                  <a href={shared.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-brand">
                    LinkedIn
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ───────────────────────── Experiencia ───────────────────────── */
function ExperienceSection({ onOpen }: { onOpen: (id: string) => void }) {
  const { t } = useI18n()
  return (
    <Section id="experiencia" title={t.ui.experienceTitle} intro={t.ui.experienceIntro}>
      <ol className="border-t">
        {t.experience.map((job) => (
          <li key={job.company} className="grid gap-4 border-b py-10 lg:grid-cols-12 lg:gap-10">
            <p className="text-muted-foreground lg:col-span-2">{job.period}</p>
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">{job.company}</h3>
              <p className="mt-1 text-teal">{job.role}</p>
              <p className="mt-3 text-muted-foreground">{job.description}</p>
              <a
                href={`${HASH_PREFIX}${job.projectId}`}
                onClick={(e) => {
                  e.preventDefault()
                  onOpen(job.projectId)
                }}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
              >
                {t.ui.viewCase} <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="lg:col-span-6">
              <ul className="space-y-3">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-brand" aria-hidden />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-muted-foreground">{job.tech.join(', ')}</p>
            </div>
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
              <h3 id="modal-title" className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
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
      className={cn('w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]', className)}
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
        <p className="font-display text-[clamp(1.4rem,2.6vw,2.4rem)] leading-none font-black text-foreground/80 uppercase">
          {project.title}
        </p>
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <ImageOff className="size-4" /> {t.ui.imagesSoon}
        </p>
      </div>
    </div>
  )
}

function ProjectsSection({ onOpen }: { onOpen: (id: string) => void }) {
  const { t, projects } = useI18n()
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  const openFromLink = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    onOpen(id)
  }

  return (
    <Section id="proyectos" title={t.ui.projectsTitle} intro={t.ui.projectsIntro}>
      <div className="space-y-20 lg:space-y-28">
        {featured.map((p, i) => (
          <article key={p.id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <a
              href={`${HASH_PREFIX}${p.id}`}
              onClick={openFromLink(p.id)}
              aria-label={`${t.ui.viewDetails}: ${p.title}`}
              className={cn(
                'group glow-box relative block overflow-hidden rounded-2xl p-1.5 lg:col-span-7',
                i % 2 === 1 && 'lg:order-2',
              )}
            >
              <Cover project={p} className="aspect-[16/9] rounded-xl" />
              {p.images.length > 0 && (
                <span className="absolute right-5 bottom-5 rounded-full bg-background/85 px-4 py-2 text-sm font-medium backdrop-blur">
                  {t.ui.images(p.images.length)}
                </span>
              )}
            </a>
            <div className={cn('lg:col-span-5', i % 2 === 1 && 'lg:order-1')}>
              <p className="font-medium text-teal">{p.subtitle}</p>
              <h3 className="mt-2 font-display text-4xl font-extrabold uppercase sm:text-5xl">{p.title}</h3>
              <p className="mt-5 line-clamp-4 text-lg leading-relaxed text-muted-foreground">{p.summary}</p>
              <TechList items={p.tech.slice(0, 7)} className="mt-6" />
              <div className="mt-8 flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => onOpen(p.id)}>
                  {t.ui.viewDetails}
                </Button>
                <ProjectLinks p={p} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="mt-28 mb-8 font-display text-2xl font-extrabold uppercase sm:text-3xl">{t.ui.moreProjects}</h3>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {others.map((p) => (
          <a
            key={p.id}
            href={`${HASH_PREFIX}${p.id}`}
            onClick={openFromLink(p.id)}
            className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-colors hover:border-brand/60"
          >
            <div className="overflow-hidden">
              <Cover project={p} className="aspect-[16/10]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-teal">
                {t.ui.categories[p.category]} | {p.subtitle}
              </p>
              <h4 className="mt-1 font-display text-xl font-extrabold uppercase">{p.title}</h4>
              <p className="mt-3 line-clamp-3 text-muted-foreground">{p.summary}</p>
              <p className="mt-auto pt-5 text-sm font-medium text-brand">{t.ui.viewDetails}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  )
}

/* ───────────────────────── Habilidades ───────────────────────── */
function SkillsSection() {
  const { t } = useI18n()
  return (
    <Section id="habilidades" title={t.ui.skillsTitle} intro={t.ui.skillsIntro}>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {t.skills.map((s) => (
          <div key={s.group} className="glow-box rounded-2xl p-6">
            <h3 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">{s.group}</h3>
            <ul className="mt-4 space-y-2">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 grid gap-10 border-t pt-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h3 className="font-display text-lg font-extrabold uppercase">{t.ui.howIWork}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {t.softSkills.map((s) => (
              <li key={s} className="rounded-full border px-4 py-1.5">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-display text-lg font-extrabold uppercase">{t.ui.languages}</h3>
          <ul className="mt-4 space-y-1.5 text-muted-foreground">
            {t.languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-display text-lg font-extrabold uppercase">{t.ui.certifications}</h3>
          <ul className="mt-4 space-y-4">
            {t.certifications.map((c) => (
              <li key={c.name}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noreferrer" className="font-medium hover:text-brand">
                    {c.name}
                  </a>
                ) : (
                  <p className="font-medium">{c.name}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  {c.issuer}, {c.year}
                </p>
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
    'w-full rounded-lg border bg-background px-3.5 py-2.5 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none'

  return (
    <form onSubmit={sendEmail} className="space-y-4" noValidate>
      <h3 className="font-display text-lg font-extrabold uppercase">{f.title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted-foreground">{f.name}</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted-foreground">{f.company}</span>
          <input className={field} value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted-foreground">{f.message}</span>
        <textarea
          className={cn(field, 'min-h-32 resize-y')}
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
        <Button type="submit" variant="outline" size="lg">
          <Mail /> {f.sendEmail}
        </Button>
        <Button type="button" variant="brand" size="lg" onClick={sendWhatsapp}>
          <WhatsappIcon className="size-4" /> {f.sendWhatsapp}
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

  return (
    <section id="contacto" className="border-t bg-band text-band-foreground">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="font-display text-[clamp(2.1rem,9.5vw,5rem)] leading-[0.92] font-black uppercase lg:text-[clamp(3rem,4.4vw,5.75rem)]">
            <span className="block text-brand">{t.ui.contactTitle[0]}</span>
            <span className="block">{t.ui.contactTitle[1]}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-band-foreground/70">{t.ui.contactIntro}</p>

          <div className="mt-10 space-y-4">
            <Button asChild variant="brand" size="lg" className="h-14 w-full text-base sm:w-auto sm:px-8">
              <a href={links.whatsapp()} target="_blank" rel="noreferrer">
                <WhatsappIcon className="size-5" /> {t.ui.whatsappCta}
              </a>
            </Button>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-band-foreground/80">
              <a href={`mailto:${shared.email}`} className="break-all hover:text-brand">
                {shared.email}
              </a>
              <button
                onClick={copy}
                className="inline-flex items-center gap-1.5 text-sm text-band-foreground/60 hover:text-band-foreground"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? t.ui.copied : t.ui.copy}
              </button>
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild variant="outline">
                <a href={links.cv} download>
                  <Download /> {t.ui.downloadCv}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={shared.socials.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" /> GitHub
                </a>
              </Button>
              {shared.socials.linkedin && (
                <Button asChild variant="outline">
                  <a href={shared.socials.linkedin} target="_blank" rel="noreferrer">
                    <LinkedinIcon className="size-4" /> LinkedIn
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="glow-box min-w-0 self-start rounded-3xl p-6 text-card-foreground sm:p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-band-foreground/10 py-8 text-sm text-band-foreground/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {shared.fullName}
        </p>
        <p>{t.profile.location}</p>
      </div>
    </section>
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
        <ExperienceSection onOpen={open} />
        <ProjectsSection onOpen={open} />
        <SkillsSection />
        <ContactSection />
      </main>
      <ProjectModal project={selected} onClose={close} />
    </>
  )
}
