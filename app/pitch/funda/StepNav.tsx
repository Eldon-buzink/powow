'use client'

import { useEffect, useRef, useState } from 'react'
import s from './funda.module.css'

type Step = { id: string; label: string }

export default function StepNav({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState<string | null>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio)
          else visible.delete(e.target.id)
        })
        // The first step (in page order) that is in the reading band wins
        const current = steps.find((step) => visible.has(step.id))
        setActive(current ? current.id : null)
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.01] },
    )
    steps.forEach((step) => {
      const el = document.getElementById(step.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [steps])

  // Keep the active pill in view on narrow screens
  useEffect(() => {
    if (!active || !listRef.current) return
    const link = listRef.current.querySelector<HTMLElement>(`a[href="#${active}"]`)
    const list = listRef.current
    if (link && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: link.offsetLeft - 16, behavior: 'smooth' })
    }
  }, [active])

  return (
    <nav className={s.stepnav} aria-label="Stappen in dit plan">
      <div className={s.wrap}>
        <ul className={s.stepnavList} ref={listRef}>
          {steps.map((step, i) => (
            <li key={step.id}>
              <a
                href={`#${step.id}`}
                className={`${s.stepnavLink} ${active === step.id ? s.stepnavActive : ''}`}
                aria-current={active === step.id ? 'step' : undefined}
              >
                <span className={s.stepnavNum}>{i + 1}</span>
                {step.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
