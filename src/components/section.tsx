import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

/** Título que puede llevar su última parte resaltada en azul: ['Texto normal', 'texto en azul.'] */
export type Title = string | readonly string[]

export function TitleText({ title }: { title: Title }) {
  if (typeof title === 'string') return <>{title}</>
  const [main, highlight] = title
  return (
    <>
      {main} {highlight && <span className="text-brand">{highlight}</span>}
    </>
  )
}

/** Etiqueta pequeña sobre los títulos: una línea corta y el texto. */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-3 text-xs font-semibold tracking-[0.16em] text-brand uppercase', className)}>
      <span aria-hidden className="h-px w-7 bg-brand" />
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, className }: { eyebrow: string; title: Title; className?: string }) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.08] font-extrabold tracking-tight text-balance">
        <TitleText title={title} />
      </h2>
    </div>
  )
}

type SectionProps = {
  /** Fondo alterno sutil para separar secciones sin líneas fuertes */
  alt?: boolean
  id: string
  eyebrow: string
  title: Title
  intro?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}

/** Sección con etiqueta pequeña, título grande e introducción opcional. */
export function Section({ id, eyebrow, title, intro, action, children, className, alt }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', alt && 'border-y border-border/60 bg-card/40', className)}>
      <div className="wrap">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading eyebrow={eyebrow} title={title} />
            {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  )
}
