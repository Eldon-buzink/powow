import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import { issueSignedToken, presignUrl } from '@vercel/blob'
import { isAuthenticated } from '@/lib/pitch-auth'
import LoginForm from './LoginForm'
import { logout } from './actions'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'the purchase is the beginning · a pitch for by-bar',
  description: 'A private pitch for by-bar by Eldon Buzink.',
  robots: { index: false, follow: false },
}

const cabin = Cabin({ subsets: ['latin'], weight: ['400', '500', '700'] })

const VIDEO_PATH = 'pitches/by-bar/pitch.mp4'
const POSTER_PATH = 'pitches/by-bar/poster.jpg'

// Presigned URLs keep the private blobs unreachable without a valid session
async function signedUrl(pathname: string) {
  const validUntil = Date.now() + 1000 * 60 * 60 * 6
  const token = await issueSignedToken({ pathname, operations: ['get'], validUntil })
  const { presignedUrl } = await presignUrl(token, {
    operation: 'get',
    pathname,
    access: 'private',
    validUntil,
  })
  return presignedUrl
}

function Header() {
  return (
    <header className="border-b border-[#DCDCDA]">
      <div className="mx-auto flex h-16 max-w-[1260px] items-center justify-between px-5 md:px-12">
        <span className="text-[18px] lowercase tracking-[0.3em] text-[#3f3e40]">by-bar</span>
        <span className="text-[11px] lowercase tracking-[0.15em]">private preview · powow</span>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#DCDCDA]">
      <div className="mx-auto flex max-w-[1260px] flex-col gap-2 px-5 py-6 text-[11px] lowercase tracking-[0.1em] md:flex-row md:justify-between md:px-12">
        <span>a brainstorm by eldon buzink · october 2026 · confidential</span>
        <a href="mailto:e.buzink@gmail.com" className="underline-offset-4 hover:underline">
          e.buzink@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default async function ByBarPitchPage() {
  const authed = isAuthenticated()
  const [videoUrl, posterUrl] = authed
    ? await Promise.all([signedUrl(VIDEO_PATH), signedUrl(POSTER_PATH)])
    : [null, null]

  return (
    <div className={`${cabin.className} flex min-h-screen flex-col bg-[#F0F0ED] text-[#6C6B6D]`}>
      <div className="bg-[#99B7B4] py-2 text-center text-[11px] lowercase tracking-[0.15em] text-white">
        prepared exclusively for by-bar amsterdam
      </div>
      <Header />

      {authed ? (
        <main className="mx-auto w-full max-w-[1150px] flex-grow px-5 py-10 md:px-12 md:py-16">
          <p className="mb-3 text-[12px] lowercase tracking-[0.12em]">a brainstorm by eldon</p>
          <h1 className="mb-4 text-[28px] lowercase leading-tight tracking-[0.12em] text-[#3f3e40] md:text-[36px]">
            the purchase is the beginning
          </h1>
          <p className="mb-8 max-w-[640px] text-[14px] leading-relaxed">
            Building a lasting relationship with the by-bar customer, in a time where loyalty
            can&apos;t be taken for granted.
          </p>

          <div className="bg-white p-2 shadow-[0_5px_30px_rgb(0_0_0/0.05)] md:p-3">
            <video
              controls
              playsInline
              preload="metadata"
              poster={posterUrl!}
              src={videoUrl!}
              className="aspect-[1600/1062] w-full bg-[#e6e6e2]"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 text-[12px] lowercase tracking-[0.1em] md:flex-row md:items-center md:justify-between">
            <span>8 min · october 2026 · confidential</span>
            <div className="flex items-center gap-6">
              <a
                href="mailto:e.buzink@gmail.com?subject=by-bar%20pitch"
                className="bg-[#99B7B4] px-5 py-2.5 text-white transition hover:bg-[#86a5a2]"
              >
                let&apos;s talk
              </a>
              <form action={logout}>
                <button type="submit" className="underline-offset-4 hover:underline">
                  log out
                </button>
              </form>
            </div>
          </div>
        </main>
      ) : (
        <main className="flex flex-grow items-center justify-center px-5 py-16">
          <div className="w-full max-w-[440px] bg-white px-6 py-10 shadow-[0_5px_30px_rgb(0_0_0/0.05)] md:px-10">
            <p className="mb-3 text-center text-[11px] lowercase tracking-[0.15em]">
              private preview
            </p>
            <h1 className="mb-3 text-center text-[22px] lowercase leading-snug tracking-[0.12em] text-[#3f3e40]">
              the purchase is the beginning
            </h1>
            <p className="mb-8 text-center text-[13px] leading-relaxed">
              A short video pitch, made for by-bar. Enter the password you received to watch.
            </p>
            <LoginForm />
          </div>
        </main>
      )}

      <Footer />
    </div>
  )
}
