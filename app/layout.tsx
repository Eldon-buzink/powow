import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PostHogInit from '@/components/PostHogInit';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Powow - Eldon Buzink',
  description: 'Digital product builder, side project lover, and anything to make people happy!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <PostHogInit />
        <div className="min-h-screen flex flex-col w-full">
          <Nav />
          <main className="flex-grow w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 