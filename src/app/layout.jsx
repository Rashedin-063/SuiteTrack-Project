import { Inter } from 'next/font/google';
import './globals.css';
import ClientProvider from '@/providers/ClientProvider';
import { Toaster } from 'react-hot-toast';
import AuthProvider from '@/providers/AuthProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata = {
  title: 'suite-track',
  description: 'Modern Hotel Management Website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/logo.png' sizes='any' />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <AuthProvider>
          <ClientProvider>
            <Toaster />
            {children}
          </ClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
