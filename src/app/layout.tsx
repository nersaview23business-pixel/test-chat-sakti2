// Lokasi: src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const monaSans = localFont({
  src: './fonts/Mona-Sans.ttf',
  display: 'swap',
  variable: '--font-mona-sans', 
});

export const metadata: Metadata = {
  title: "ChatSakti Dashboard",
  description: "Your AI Agents Platform",
};

// ===== PERBAIKAN DI SINI =====
// Mengganti React.Node menjadi React.ReactNode
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${monaSans.variable} font-sans`}>
        <Toaster 
          position="top-center" 
          toastOptions={{
            // Style utama untuk semua notifikasi
            style: {
              background: '#1F2937',
              color: '#F9FAFB',
              borderRadius: '8px',
              border: '1px solid #374151',
              padding: '12px 16px',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.2), 0 4px 6px -4px rgb(0 0 0 / 0.2)',
            },
            // Style khusus untuk notifikasi sukses
            success: {
              iconTheme: {
                primary: '#22C55E',
                secondary: '#1F2937',
              },
            },
             // Style khusus untuk notifikasi error
             error: {
              iconTheme: {
                primary: '#EF4444',
                secondary: '#1F2937',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}