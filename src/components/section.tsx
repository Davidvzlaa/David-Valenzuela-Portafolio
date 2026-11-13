import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  intro?: ReactNode
  action?: ReactNode
  children: ReactNode
  className?: string
}

/** Sección con etiqueta pequeña, título grande e introducción opcional. */
export function Section({ id, eyebrow, title, intro, action, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-24', className)}>
      <div className="wrap">
        <div className="mb-12 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-display text-sm font-bold tracking-[0.18em] text-brand uppercase">{eyebrow}</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4.2vw,3.5rem)] leading-[1.05] font-extrabold tracking-tight text-balance">
              {title}
            </h2>
            {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
          </div>
          {action}
        </div>
        {children}
      </div>
    </section>
  )
}
