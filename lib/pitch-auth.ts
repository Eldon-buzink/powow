import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB)
}

/**
 * Shared-password gate for a private pitch page. The cookie holds an HMAC of the
 * password, so it can't be forged without knowing it, and rotating the env var
 * invalidates every existing session.
 */
export function createPitchAuth({ cookie, envVar, salt }: { cookie: string; envVar: string; salt: string }) {
  const password = () => process.env[envVar]
  const sessionValue = (pw: string) => createHmac('sha256', pw).update(salt).digest('hex')

  return {
    cookie,
    checkPassword(input: string) {
      const pw = password()
      return Boolean(pw) && safeEqual(input.trim(), pw!)
    },
    createSession() {
      return sessionValue(password()!)
    },
    isAuthenticated() {
      const pw = password()
      const value = cookies().get(cookie)?.value
      if (!pw || !value) return false
      return safeEqual(value, sessionValue(pw))
    },
  }
}

const byBar = createPitchAuth({ cookie: 'pitch_bybar', envVar: 'PITCH_BYBAR_PASSWORD', salt: 'by-bar-pitch' })

export const PITCH_COOKIE = byBar.cookie
export const checkPassword = byBar.checkPassword
export const createSession = byBar.createSession
export const isAuthenticated = byBar.isAuthenticated

export const fundaAuth = createPitchAuth({ cookie: 'pitch_funda', envVar: 'PITCH_FUNDA_PASSWORD', salt: 'funda-plan' })

export const lakwerkAuth = createPitchAuth({ cookie: 'pitch_lakwerk', envVar: 'PITCH_LAKWERK_PASSWORD', salt: 'lakwerk-plan' })
