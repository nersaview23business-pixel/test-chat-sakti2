"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ChartBarIcon, 
  Cog6ToothIcon, 
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const pathname = usePathname();
  const navigation = [
    { name: 'Agents', href: '/', icon: Squares2X2Icon },
    { name: 'Usage', href: '/usage', icon: ChartBarIcon },
    { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
  ];

  return (
    <aside className="fixed top-6 left-1/2 -translate-x-1/2 z-30 w-full max-w-md px-4">
      <nav className="flex items-center gap-1 w-full p-1.5 bg-white/60 backdrop-blur-2xl border border-gray-200/60 rounded-full shadow-2xl shadow-black/5">
        {navigation.map((item) => {
          const isActive = (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)));
          return (
            <Link
              key={item.name}
              href={item.href}
              title={item.name}
              className={`relative group flex items-center justify-center gap-x-2 px-3 py-1.5 text-sm rounded-full transition-colors w-full ${
                isActive
                  ? 'font-semibold text-white'
                  : 'font-medium text-gray-500 hover:text-gray-900'
              }`}
            >
              { isActive && (
                <motion.div
                  layoutId="floating-navbar-active-pill"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <item.icon className={`relative z-10 h-4 w-4 flex-shrink-0 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
              <span className="relative z-10 whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};