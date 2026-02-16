import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Influencer Platform',
  description: 'Influencer-brand collaboration platform'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
