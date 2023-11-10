import React from "react";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Feed | LinkedIn Clone'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  )
}