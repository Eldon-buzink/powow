'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { PITCH_COOKIE, checkPassword, createSession } from '@/lib/pitch-auth'

type LoginState = { error?: string }

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const password = String(formData.get('password') ?? '')

  if (!checkPassword(password)) {
    return { error: 'that password doesn’t look right' }
  }

  cookies().set(PITCH_COOKIE, createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/pitch/by-bar',
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect('/pitch/by-bar')
}

export async function logout() {
  cookies().delete({ name: PITCH_COOKIE, path: '/pitch/by-bar' })
  redirect('/pitch/by-bar')
}
