'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login } from './actions'
import s from './lakwerk.module.css'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button type="submit" disabled={pending} className={`${s.button} ${s.full}`}>
      {pending ? 'Even geduld…' : 'Bekijk het voorstel'}
    </button>
  )
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, {})

  return (
    <form action={formAction}>
      <div className={s.field}>
        <label htmlFor="code">Toegangscode</label>
        <input
          id="code"
          name="code"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          aria-invalid={Boolean(state.error)}
          aria-describedby={state.error ? 'code-error' : undefined}
          className={s.input}
        />
      </div>
      {state.error && (
        <p id="code-error" role="alert" className={s.error}>
          {state.error}
        </p>
      )}
      <SubmitButton />
    </form>
  )
}
