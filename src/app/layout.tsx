import type { Metadata } from 'next';
import { seoConfig, generateMetadata } from '@/config/seo';
// import { ThemeProvider } from 'next-themes';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoConfig.siteUrl} />
      </head>
      <body className="bg-dark-900 text-dark-100">
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
          <Header />
          <main>{children}</main>
          <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
