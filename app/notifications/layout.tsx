"use client"
import React from "react";
import type { Metadata } from 'next'
import { Layout, Menu } from "antd";
import Navbar from "../(ui)/Navbar";
const { Header, Footer, Sider, Content } = Layout;

// export const metadata: Metadata = {
//   title: 'Feed | LinkedIn Clone'
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout className="max-w-6xl mx-auto">
      <Content className="m-5">{children}</Content>
    </Layout>
    
  )
}
