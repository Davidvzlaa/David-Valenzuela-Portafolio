import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  title: string
  intro?: ReactNode
  children: ReactNode
  className?: string
}

/** Sección con título grande en mayúsculas (estilo del portafolio en PDF). */
export function Section({ id, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 sm:py-28', className)}>
      <div className="wrap">
        <div className="mb-12 grid gap-5 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-extrabold text-brand uppercase lg:col-span-7">
            {title}
          </h2>
          {intro && (
            <p className="max-w-xl text-lg text-muted-foreground lg:col-span-5 lg:justify-self-end">{intro}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
