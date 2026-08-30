import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Akbar Farooq — Full Stack Web & Agentic AI Developer',
  description: 'Official portfolio of Akbar Farooq. Building autonomous agent systems, robust distributed web architectures, and tactile human-AI interfaces.',
  keywords: ['Akbar Farooq', 'Full Stack Developer', 'Agentic AI', 'Next.js', 'React', 'OpenAI Agents SDK'],
  authors: [{ name: 'Akbar Farooq' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://akbarfarooq.github.io',
    title: 'Akbar Farooq — Engineering Portfolio',
    description: 'Building autonomous agent systems and robust distributed web architectures.',
    siteName: 'Akbar Farooq',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akbar Farooq — Engineering Portfolio',
    description: 'Building autonomous agent systems and robust distributed web architectures.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
