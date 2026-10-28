'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { login } from './actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#99B7B4] px-6 py-3 text-[13px] lowercase tracking-[0.1em] text-white transition hover:bg-[#86a5a2] disabled:opacity-60"
    >
      {pending ? 'one moment…' : 'watch the pitch'}
    </button>
  )
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, {})

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label htmlFor="password" className="text-[12px] lowercase tracking-[0.1em]">
        password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoFocus
        autoComplete="current-password"
        className="w-full border border-[#DCDCDA] bg-white px-3 py-2.5 text-[14px] text-[#3f3e40] outline-none transition focus:border-[#99B7B4]"
      />
      {state.error && (
        <p role="alert" className="text-[12px] lowercase tracking-[0.05em] text-[#A31819]">
          {state.error}
        </p>
      )}
      <SubmitButton />
    </form>
  )
}
