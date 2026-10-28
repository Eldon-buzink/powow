import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'

export const PITCH_COOKIE = 'pitch_bybar'

// The cookie holds an HMAC of the password, so it can't be forged without knowing it
function sessionValue(password: string) {
  return createHmac('sha256', password).update('by-bar-pitch').digest('hex')
}

function safeEqual(a: string, b: string) {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB)
}

export function checkPassword(input: string) {
  const password = process.env.PITCH_BYBAR_PASSWORD
  return Boolean(password) && safeEqual(input.trim(), password!)
}

export function createSession() {
  return sessionValue(process.env.PITCH_BYBAR_PASSWORD!)
}

export function isAuthenticated() {
  const password = process.env.PITCH_BYBAR_PASSWORD
  const cookie = cookies().get(PITCH_COOKIE)?.value
  if (!password || !cookie) return false
  return safeEqual(cookie, sessionValue(password))
}
