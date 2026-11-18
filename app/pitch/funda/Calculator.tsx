'use client'

import { useId, useState } from 'react'
import s from './funda.module.css'

const REVENUE = 73_000_000 // source [2]
const SOLD = 195_392 // source [1]

const nf = new Intl.NumberFormat('nl-NL')

function note(share: number) {
  if (share > 1) return 'Onmogelijk met alleen kopers. Dan zijn er meer doelgroepen of hogere waarde per klant nodig.'
  if (share > 0.35) return 'Kan alleen als kopers meerdere diensten afnemen.'
  if (share > 0.15) return 'Vraagt groot bereik en goede conversie.'
  return 'Haalbaar als de dienst bijna elke koper bereikt.'
}

export default function Calculator() {
  const [pct, setPct] = useState(10)
  const [value, setValue] = useState(200)
  const id = useId()

  const needed = Math.round((REVENUE * pct) / 100 / value)
  const share = needed / SOLD

  return (
    <div className={s.calc}>
      <div className={s.calcRow}>
        <label htmlFor={`${id}-pct`}>
          Extra omzet <output htmlFor={`${id}-pct`}>+{pct}%</output>
        </label>
        <input
          id={`${id}-pct`}
          className={s.range}
          type="range"
          min={2}
          max={30}
          step={1}
          value={pct}
          onChange={(e) => setPct(Number(e.target.value))}
          aria-valuetext={`${pct} procent, ${nf.format((REVENUE * pct) / 100)} euro`}
        />
      </div>
      <div className={s.calcRow}>
        <label htmlFor={`${id}-val`}>
          Omzet per koper met dienst <output htmlFor={`${id}-val`}>€ {value}</output>
        </label>
        <input
          id={`${id}-val`}
          className={s.range}
          type="range"
          min={25}
          max={600}
          step={25}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-valuetext={`${value} euro`}
        />
      </div>
      <div className={s.calcOut} aria-live="polite">
        <div>
          <span className={s.calcBig}>{nf.format(needed)}</span> kopers nodig
        </div>
        <div className={s.meter} aria-hidden="true">
          <span style={{ width: `${Math.min(share, 1) * 100}%` }} />
        </div>
        <div>
          <strong>{Math.round(share * 100)}%</strong> van alle via funda verkochte woningen.{' '}
          <span className={s.muted}>{note(share)}</span>
        </div>
      </div>
    </div>
  )
}
