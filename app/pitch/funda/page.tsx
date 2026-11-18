import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import { fundaAuth } from '@/lib/pitch-auth'
import LoginForm from './LoginForm'
import Plan from './Plan'
import s from './funda.module.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Plan nieuwe diensten · Eldon Buzink',
  description: 'Een besloten voorstel van Eldon Buzink.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

// funda uses Proxima Nova (licensed); Figtree is the closest free match
const figtree = Figtree({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

export default function FundaPlanPage() {
  const authed = fundaAuth.isAuthenticated()

  return (
    <div lang="nl" className={`${figtree.className} ${s.page}`}>
      {authed ? (
        <Plan />
      ) : (
        <main className={s.login}>
          <div className={s.loginCard}>
            <p className={s.loginKicker}>Besloten voorstel</p>
            <h1 className={s.loginTitle}>Plan voor nieuwe diensten rond wonen</h1>
            <p className={s.loginText}>Van Eldon Buzink. Vul de toegangscode uit je e-mail in.</p>
            <LoginForm />
            <p className={s.loginNote}>Op basis van publieke bronnen. Niet gemaakt door of namens funda.</p>
          </div>
        </main>
      )}
    </div>
  )
}
