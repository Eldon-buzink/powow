import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { lakwerkAuth } from '@/lib/pitch-auth'
import LoginForm from './LoginForm'
import Plan from './Plan'
import s from './lakwerk.module.css'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Groeiplan LAKWERK · Eldon Buzink',
  description: 'Een besloten voorstel van Eldon Buzink.',
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
}

// lakwerk.com uses Montserrat for body copy, so the page feels familiar
const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

export default function LakwerkPlanPage() {
  const authed = lakwerkAuth.isAuthenticated()

  return (
    <div lang="nl" className={`${montserrat.className} ${s.page}`}>
      {authed ? (
        <Plan />
      ) : (
        <main className={s.login}>
          <div className={s.loginCard}>
            <p className={s.loginKicker}>Besloten voorstel</p>
            <h1 className={s.loginTitle}>Groeiplan voor LAKWERK</h1>
            <p className={s.loginText}>Van Eldon Buzink. Vul de toegangscode uit je e-mail in.</p>
            <LoginForm />
            <p className={s.loginNote}>Gemaakt op basis van de website, Fresha en de Nailschool. Nog zonder interne cijfers.</p>
          </div>
        </main>
      )}
    </div>
  )
}
