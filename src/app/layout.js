/** @format */
import '@/styles/globals.css';
import '@/styles/reset.css';
export const metadata = {
  title: 'zuidap blog',
  description: 'zuidap blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
