'use client'

import React, { useId, useState } from 'react'
import s from './lakwerk.module.css'

const eur = (n: number) =>
  new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)

type SliderProps = {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: React.Dispatch<React.SetStateAction<number>>
  hint: string
}

function Slider({ label, value, display, min, max, step, onChange, hint }: SliderProps) {
  const id = useId()
  return (
    <div className={s.calcRow}>
      <label htmlFor={id}>
        {label} <output htmlFor={id}>{display}</output>
      </label>
      <input
        id={id}
        className={s.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={display}
      />
      <span className={s.calcHint}>{hint}</span>
    </div>
  )
}

export default function Calculator() {
  const [ticket, setTicket] = useState(65)
  const [visits, setVisits] = useState(6)
  const [years, setYears] = useState(1.5)
  const [share, setShare] = useState(40)
  const [friends, setFriends] = useState(1)

  const first = (ticket * share) / 100
  const own = first * visits * years
  const total = own * (1 + friends)
  const pct = (n: number) => `${Math.max(1.5, (n / total) * 100)}%`

  return (
    <div className={s.calc}>
      <div className={s.calcInputs}>
        <Slider label="Gemiddelde bon" value={ticket} display={eur(ticket)} min={35} max={140} step={5} onChange={setTicket}
          hint="Fresha: gellak € 45, BIAB € 62,50–70, Laklevel 1 BIAB € 80" />
        <Slider label="Bezoeken per jaar" value={visits} display={`${visits}×`} min={1} max={15} step={1} onChange={setVisits}
          hint="BIAB houdt 3–4 weken. Wie fan is, komt 10× of vaker" />
        <Slider label="Jaren dat de band blijft" value={years} display={`${years.toLocaleString('nl-NL')} jaar`} min={0.5} max={4} step={0.5} onChange={setYears}
          hint="Uit de Fresha-export te halen" />
        <Slider label="Deel voor LAKWERK" value={share} display={`${share}%`} min={20} max={100} step={5} onChange={setShare}
          hint="Wat overblijft na de nailtech (zzp) en materiaal" />
        <Slider label="Vriendinnen die ze meeneemt" value={friends} display={`${friends}`} min={0} max={3} step={1} onChange={setFriends}
          hint="Die op hun beurt net zo vaak terugkomen" />
      </div>

      <div className={s.calcOut} aria-live="polite">
        <div className={s.calcHighlight}>
          <span className={s.calcLabel}>Wat één relatie LAKWERK oplevert</span>
          <span className={s.calcBig}>{eur(total)}</span>
        </div>
        <div className={s.stack} aria-hidden="true">
          <i className={s.stackClick} style={{ width: pct(first) }} />
          <i className={s.stackReturn} style={{ width: pct(own - first) }} />
          <i className={s.stackFriends} style={{ width: pct(total - own) }} />
        </div>
        <ul className={s.stackLegend}>
          <li><span className={s.dotClick} /> Eerste bezoek <strong>{eur(first)}</strong><em>wat een advertentie koopt</em></li>
          <li><span className={s.dotReturn} /> Terugkomen <strong>{eur(own - first)}</strong><em>wat de relatie oplevert</em></li>
          <li><span className={s.dotFriends} /> Vriendinnen <strong>{eur(total - own)}</strong><em>wat doorvertellen oplevert</em></li>
        </ul>
        <p className={s.calcNote}>
          De klik is <strong>{Math.round((first / total) * 100)}%</strong> van de waarde. De rest ontstaat ná het eerste bezoek.
        </p>
      </div>
    </div>
  )
}
