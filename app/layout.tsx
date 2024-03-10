import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Yak Dashboard',
    default: 'Yak Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-nine-chi-61.vercel.app/'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>  
    </html>
  );
}
