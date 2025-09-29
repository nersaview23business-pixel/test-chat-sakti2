"use client";

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from "../components/Sidebar";
import { 
  Cog6ToothIcon, 
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Komponen Logo
const FloatingLogo = () => (
  <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
    <div className="flex items-center justify-center h-8 w-8 bg-black rounded-full text-white font-bold text-sm">
      C
    </div>
    <span className="font-semibold text-gray-800 hidden sm:block">ChatSakti</span>
  </Link>
);

// Komponen Menu Profile
const FloatingProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const profileNavigation = [
    { name: 'Account Settings', href: '/settings', icon: Cog6ToothIcon },
    { name: 'Create Framework', href: '#', icon: PlusCircleIcon },
    { name: 'Logout', href: '#', icon: ArrowLeftOnRectangleIcon },
  ];

  return (
    <div className="relative flex-shrink-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 150)}
        className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
      >
        <UserCircleIcon className="h-7 w-7 text-gray-600" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute top-full right-0 mt-2 w-56 origin-top-right bg-white rounded-xl shadow-lg border border-gray-200/80 overflow-hidden"
          >
            <div className="p-2">
              {profileNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <item.icon className="h-5 w-5 text-gray-500" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen text-gray-800">
      
      {/* LAPISAN BACKGROUND */}
      <div className="absolute inset-0 bg-gray-50 -z-20" />
      <div className="absolute top-[-10rem] left-[-25rem] h-[35rem] w-[50rem] bg-purple-200/50 rounded-full blur-[120px] -z-10" />
      
      {/* PULAU 1: LOGO (FLOATING KIRI) */}
      <div className="fixed top-6 left-4 sm:left-6 lg:left-8 z-40">
        <FloatingLogo />
      </div>

      {/* PULAU 2: NAVIGASI (FLOATING TENGAH) */}
      <Sidebar /> 
      
      {/* PULAU 3: PROFILE (FLOATING KANAN) */}
      <div className="fixed top-6 right-4 sm:right-6 lg:right-8 z-40">
        <FloatingProfileMenu />
      </div>
      
      {/* KONTEN UTAMA */}
      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

    </div>
  );
}