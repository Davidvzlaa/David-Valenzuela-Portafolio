import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Check, ChevronLeft, ChevronRight, Copy, Download, ExternalLink, Menu, X } from 'lucide-react'

import { GithubIcon, LinkedinIcon, WhatsappIcon } from '@/components/icons'
import { Section } from '@/components/section'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  achievement,
  certifications,
  education,
  experience,
  languages,
  profile,
  projects,
  skills,
  softSkills,
  type Project,
} from '@/data/portfolio'
import { cn } from '@/lib/utils'

const base = import.meta.env.BASE_URL
const cvHref = `${base}${profile.cvFile}`
const whatsappHref = `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(profile.whatsappMessage)}`
/** Retraso escalonado para la animación de entrada */
const delay = (i: number) => ({ '--i': i }) as CSSProperties

const nav = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#contacto', label: 'Contacto' },
]

/* ───────────────────────── Encabezado ───────────────────────── */
function Header() {
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

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <a href={cvHref} download>
              <Download /> CV
            </a>
          </Button>
          <Button asChild variant="brand" className="hidden md:inline-flex">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsappIcon className="size-4" /> Contactar
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
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
              <a href={cvHref} download>
                <Download /> CV
              </a>
            </Button>
            <Button asChild variant="brand" size="lg">
              <a href={whatsappHref} target="_blank" rel="noreferrer">
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
  const facts = [
    { label: 'Promedio', value: '9.7 / 10' },
    { label: 'Carrera', value: 'Ingeniería de Software, 7.º semestre' },
    { label: 'Disponible', value: 'Enero de 2027' },
    { label: 'Ubicación', value: 'Los Mochis, Sinaloa' },
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
            {profile.fullName}
          </p>

          <h1
            className="rise mt-5 font-display text-[clamp(2.4rem,11vw,7rem)] leading-[0.88] lg:text-[clamp(4rem,6.4vw,9rem)] font-black tracking-[-0.03em] uppercase"
            style={delay(1)}
          >
            <span className="block text-brand">David</span>
            <span className="block">Valenzuela</span>
          </h1>

          <p className="rise mt-5 text-lg font-medium text-teal sm:text-xl" style={delay(2)}>
            {profile.tagline}
          </p>

          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl" style={delay(2)}>
            {profile.headline}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={delay(3)}>
            <Button asChild size="lg" variant="brand" className="h-12 px-6 text-base">
              <a href="#proyectos">Ver proyectos</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <a href={cvHref} download>
                <Download /> Descargar CV
              </a>
            </Button>
            <SocialLinks />
          </div>

          <p className="rise mt-8 flex items-center gap-2.5 text-[0.95rem] text-muted-foreground" style={delay(4)}>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2.5 rounded-full bg-teal" />
            </span>
            {profile.availability}
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
              src={`${base}${profile.avatar}`}
              alt={`Fotografía de ${profile.fullName}`}
              width={567}
              height={597}
              className="absolute bottom-0 left-1/2 w-[88%] -translate-x-1/2 object-contain"
            />
          </div>
          <figcaption className="glow-box relative mx-auto -mt-12 w-[90%] max-w-sm rounded-2xl p-5 shadow-2xl shadow-black/30 lg:absolute lg:bottom-8 lg:-left-10 lg:mt-0">
            <p className="font-display font-bold">{achievement.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{achievement.detail}</p>
          </figcaption>
        </figure>
      </div>

      <div className="wrap mt-20">
        <dl className="grid grid-cols-2 border-y lg:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={cn(
                'py-6 pr-4',
                i % 2 === 1 && 'border-l pl-5 lg:pl-8',
                i >= 2 && 'border-t lg:border-t-0',
                i === 2 && 'lg:border-l lg:pl-8',
              )}
            >
              <dt className="text-sm text-muted-foreground">{f.label}</dt>
              <dd className="mt-1 font-display text-lg font-bold sm:text-2xl">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function SocialLinks() {
  const links = [
    { href: profile.socials.github, label: 'GitHub', Icon: GithubIcon },
    { href: profile.socials.linkedin, label: 'LinkedIn', Icon: LinkedinIcon },
    { href: whatsappHref, label: 'WhatsApp', Icon: WhatsappIcon },
  ].filter((l) => l.href)

  return (
    <div className="flex items-center">
      {links.map(({ href, label, Icon }) => (
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
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground sm:text-xl lg:col-span-7">
          {profile.about.map((p, i) => (
            <p key={i} className={i === 0 ? 'text-foreground' : undefined}>
              {p}
            </p>
          ))}
        </div>
        <div className="glow-box rounded-3xl p-8 lg:col-span-5">
          <h3 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">Educación</h3>
          {education.map((e) => (
            <div key={e.degree} className="mt-4">
              <p className="font-display text-2xl font-extrabold uppercase">{e.degree}</p>
              <p className="mt-1">{e.school}</p>
              <p className="mt-1 text-muted-foreground">{e.period}</p>
              <p className="mt-3 text-muted-foreground">{e.detail}</p>
            </div>
          ))}
          <div className="mt-8 border-t pt-6">
            <h3 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">Contacto directo</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="hover:text-brand">
                  {profile.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="break-all hover:text-brand">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-brand">
                  github.com/Davidvzlaa
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ───────────────────────── Experiencia ───────────────────────── */
function ExperienceSection() {
  return (
    <Section
      id="experiencia"
      title="Experiencia"
      intro="Proyectos para organizaciones reales en los que participo como desarrollador, del modelo de datos al despliegue."
    >
      <ol className="border-t">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-4 border-b py-10 lg:grid-cols-12 lg:gap-10">
            <p className="text-muted-foreground lg:col-span-2">{job.period}</p>
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl font-extrabold uppercase sm:text-3xl">{job.company}</h3>
              <p className="mt-1 text-teal">{job.role}</p>
              <p className="mt-3 text-muted-foreground">{job.description}</p>
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
function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [active, setActive] = useState(0)
  const imgs = project?.images ?? []

  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    }
  }, [project])

  const close = useCallback(() => ref.current?.close(), [])
  const go = useCallback(
    (dir: number) => setActive((a) => (imgs.length ? (a + dir + imgs.length) % imgs.length : 0)),
    [imgs.length],
  )

  return (
    <dialog
      ref={ref}
      className="project-modal fixed inset-0 m-auto max-h-[92vh] w-[min(96vw,1280px)] overflow-hidden rounded-3xl border bg-background p-0 text-foreground shadow-2xl"
      onClose={() => {
        document.body.style.overflow = ''
        setActive(0)
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
            <div>
              <p className="text-sm text-teal">{project.subtitle}</p>
              <h3 id="modal-title" className="font-display text-2xl font-extrabold uppercase sm:text-3xl">
                {project.title}
              </h3>
            </div>
            <Button variant="outline" size="icon" onClick={close} aria-label="Cerrar">
              <X />
            </Button>
          </div>

          {imgs.length > 0 && (
            <div className="bg-black/40 px-3 py-4 sm:px-8 sm:py-6">
              <div className="relative">
                <img
                  src={`${base}${imgs[active]}`}
                  alt={`${project.title}, imagen ${active + 1} de ${imgs.length}`}
                  className="mx-auto max-h-[62vh] w-full rounded-xl object-contain"
                />
                {imgs.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
                      onClick={() => go(-1)}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur"
                      onClick={() => go(1)}
                      aria-label="Imagen siguiente"
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
                      aria-label={`Mostrar imagen ${i + 1}`}
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
          )}

          <div className="grid gap-8 px-5 py-8 sm:px-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h4 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">Descripción</h4>
              <p className="mt-3 text-lg leading-relaxed">{project.description}</p>
              {project.note && <p className="mt-3 text-sm text-muted-foreground">{project.note}</p>}
            </div>
            <div className="space-y-5 lg:col-span-5">
              <div className="glow-box rounded-2xl p-5">
                <h4 className="font-display text-sm font-bold tracking-[0.15em] text-teal uppercase">Tecnologías</h4>
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
  if (!p.demo && !p.repo && !p.prototype) return null
  return (
    <div className="flex flex-wrap gap-2">
      {p.demo && (
        <Button asChild size={size} variant="brand">
          <a href={p.demo} target="_blank" rel="noreferrer">
            Abrir sitio <ExternalLink />
          </a>
        </Button>
      )}
      {p.prototype && (
        <Button asChild size={size} variant="brand">
          <a href={p.prototype} target="_blank" rel="noreferrer">
            Abrir prototipo en Figma <ExternalLink />
          </a>
        </Button>
      )}
      {p.repo && (
        <Button asChild size={size} variant="outline">
          <a href={p.repo} target="_blank" rel="noreferrer">
            <GithubIcon className="size-4" /> Ver código
          </a>
        </Button>
      )}
    </div>
  )
}

function TechList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('flex flex-wrap gap-2', className)} aria-label="Tecnologías">
      {items.map((t) => (
        <li key={t} className="rounded-full border px-3 py-1 text-sm">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Cover({ project, className }: { project: Project; className?: string }) {
  return project.images.length > 0 ? (
    <img
      src={`${base}${project.images[0]}`}
      alt=""
      loading="lazy"
      className={cn('w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]', className)}
    />
  ) : (
    <div className={cn('grid w-full place-items-center bg-secondary font-display text-5xl font-black text-brand/40 uppercase', className)}>
      {project.title.slice(0, 2)}
    </div>
  )
}

function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <Section
      id="proyectos"
      title="Proyectos técnicos"
      intro="Plataformas web en producción, prototipos de producto y sistemas embebidos. Haz clic en cualquier proyecto para ver sus imágenes y detalles."
    >
      <div className="space-y-20 lg:space-y-28">
        {featured.map((p, i) => (
          <article key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <button
              onClick={() => setSelected(p)}
              aria-label={`Ver detalles de ${p.title}`}
              className={cn(
                'group glow-box relative overflow-hidden rounded-2xl p-1.5 text-left lg:col-span-7',
                i % 2 === 1 && 'lg:order-2',
              )}
            >
              <Cover project={p} className="aspect-[16/9] rounded-xl" />
              <span className="absolute right-5 bottom-5 rounded-full bg-background/85 px-4 py-2 text-sm font-medium backdrop-blur">
                Ver {p.images.length} {p.images.length === 1 ? 'imagen' : 'imágenes'}
              </span>
            </button>
            <div className={cn('lg:col-span-5', i % 2 === 1 && 'lg:order-1')}>
              <p className="font-medium text-teal">{p.subtitle}</p>
              <h3 className="mt-2 font-display text-4xl font-extrabold uppercase sm:text-5xl">{p.title}</h3>
              <p className="mt-5 line-clamp-4 text-lg leading-relaxed text-muted-foreground">{p.description}</p>
              <TechList items={p.tech} className="mt-6" />
              <div className="mt-8 flex flex-wrap gap-2">
                <Button variant="outline" onClick={() => setSelected(p)}>
                  Ver detalles
                </Button>
                <ProjectLinks p={p} />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {others.map((p) => (
          <button
            key={p.title}
            onClick={() => setSelected(p)}
            className="group flex flex-col overflow-hidden rounded-2xl border bg-card text-left transition-colors hover:border-brand/60"
          >
            <div className="overflow-hidden">
              <Cover project={p} className="aspect-[16/10]" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-teal">{p.subtitle}</p>
              <h3 className="mt-1 font-display text-xl font-extrabold uppercase">{p.title}</h3>
              <p className="mt-3 line-clamp-3 text-muted-foreground">{p.description}</p>
              <p className="mt-auto pt-5 text-sm font-medium text-brand">Ver detalles</p>
            </div>
          </button>
        ))}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}

/* ───────────────────────── Habilidades ───────────────────────── */
function SkillsSection() {
  return (
    <Section id="habilidades" title="Habilidades" intro="Las herramientas con las que construyo, de la interfaz a la base de datos.">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((s) => (
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
          <h3 className="font-display text-lg font-extrabold uppercase">Cómo trabajo</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="rounded-full border px-4 py-1.5">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <h3 className="font-display text-lg font-extrabold uppercase">Idiomas</h3>
          <ul className="mt-4 space-y-1.5 text-muted-foreground">
            {languages.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-display text-lg font-extrabold uppercase">Certificaciones</h3>
          <ul className="mt-4 space-y-4">
            {certifications.map((c) => (
              <li key={c.name}>
                <p className="font-medium">{c.name}</p>
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
function ContactSection() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contacto" className="border-t bg-band text-band-foreground">
      <div className="wrap grid gap-12 py-24 sm:py-32 lg:grid-cols-12 lg:items-end">
        <div className="min-w-0 lg:col-span-7">
          <h2 className="font-display text-[clamp(2.1rem,9.5vw,5rem)] leading-[0.92] lg:text-[clamp(3rem,5.4vw,6.5rem)] font-black uppercase">
            <span className="block text-brand">Hablemos</span>
            <span className="block">de tu proyecto</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-band-foreground/70">
            Busco una estancia profesional a partir de enero de 2027. Escríbeme por WhatsApp y te respondo el mismo día.
          </p>
        </div>

        <div className="glow-box min-w-0 rounded-3xl p-6 text-card-foreground sm:p-8 lg:col-span-5">
          <Button asChild variant="brand" size="lg" className="h-14 w-full text-base">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <WhatsappIcon className="size-5" /> Escríbeme por WhatsApp
            </a>
          </Button>
          <p className="mt-3 text-center text-sm text-muted-foreground">{profile.phone}</p>

          <div className="mt-8 space-y-4 border-t pt-6">
            <div className="flex items-center justify-between gap-4">
              <a href={`mailto:${profile.email}`} className="min-w-0 truncate hover:text-brand">
                {profile.email}
              </a>
              <button onClick={copy} className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild variant="outline">
                <a href={cvHref} download>
                  <Download /> Descargar CV
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={profile.socials.github} target="_blank" rel="noreferrer">
                  <GithubIcon className="size-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-band-foreground/10 py-8 text-sm text-band-foreground/50 sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p>{profile.location}</p>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a
        href="#sobre-mi"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        Saltar al contenido
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}
