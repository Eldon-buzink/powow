'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { lakwerkAuth } from '@/lib/pitch-auth'

type LoginState = { error?: string }

const PATH = '/pitch/lakwerk'

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const code = String(formData.get('code') ?? '')

  if (!lakwerkAuth.checkPassword(code)) {
    return { error: 'Deze code klopt niet. Controleer de code uit je e-mail.' }
  }

  cookies().set(lakwerkAuth.cookie, lakwerkAuth.createSession(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: PATH,
    maxAge: 60 * 60 * 24 * 30,
  })
  redirect(PATH)
}

export async function logout() {
  cookies().delete({ name: lakwerkAuth.cookie, path: PATH })
  redirect(PATH)
}
