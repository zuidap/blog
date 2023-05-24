/** @format */
'use client';
import { ReduxProvider } from '@/store/store';
import '@/styles/globals.css';
import '@/styles/reset.css';
import { ThemeProvider } from '@/theme/themeProvider';
import Script from 'next/script';

// export const metadata = {
//   title: 'zuidap blog',
//   description: 'zuidap blog',
// };
import LocalStore from '@/store/localStore';
import { redirect, usePathname } from 'next/navigation';
import { useEffect } from 'react';
export default function RootLayout({ children }) {
  const pathName = usePathname();

  useEffect(() => {
    if (!LocalStore.isLogin()) {
      if (pathName !== '/leader') {
        redirect('/leader');
      }
    }
  }, [pathName]);

  return (
    <html lang='en'>
      <head>
        <title>zuidap blog</title>
      </head>
      <Script src='//at.alicdn.com/t/c/font_3932212_3i5ow2dv50l.js'></Script>
      <ReduxProvider>
        <ThemeProvider>
          <body>{children}</body>
        </ThemeProvider>
      </ReduxProvider>
    </html>
  );
}
