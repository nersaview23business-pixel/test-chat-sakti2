// Lokasi: src/app/components/SettingsNav.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'; // <-- Impor motion dari Framer Motion

const tabs = [
  { name: 'Profile', href: '/settings', id: 'profile' },
  { name: 'Members', href: '/members', id: 'members' },
  { name: 'Billing', href: '/billing', id: 'billing' },
  { name: 'My Plan', href: '/my-plan', id: 'my-plan' },
];

export default function SettingsNav() {
  const pathname = usePathname();
  const activeTab = tabs.find((tab) => pathname.startsWith(tab.href));

  return (
    // Kita bungkus navigasinya dengan 'relative'
    <nav className="relative flex space-x-2 p-1 bg-gray-100 rounded-lg" aria-label="Tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          href={tab.href}
          className={`relative z-10 whitespace-nowrap py-2 px-4 font-medium text-sm rounded-md transition-colors ${
            activeTab?.id === tab.id
              ? 'text-gray-900' // Teks jadi hitam saat aktif
              : 'text-gray-500 hover:text-gray-800' // Teks abu-abu saat tidak aktif
          }`}
        >
          {/* Efek animasi background putih ada di sini */}
          {activeTab?.id === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white shadow-sm"
              style={{ borderRadius: 6 }} // border radius dibuat sedikit lebih kecil
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            />
          )}
          <span className="relative">{tab.name}</span>
        </Link>
      ))}
    </nav>
  );
}