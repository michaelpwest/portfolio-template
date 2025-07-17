import type { Metadata } from 'next';
import './tailwind.css';
import './globals.scss';
import { Details } from '../portfolio';

export const metadata: Metadata = {
  title: Details.seo.title,
  description: Details.seo.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900">{children}</body>
    </html>
  );
}
