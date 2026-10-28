import React from "react";
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Nav />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}
