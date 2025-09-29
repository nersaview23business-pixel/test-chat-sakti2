// Lokasi File: src/components/Sidebar.tsx

"use client"; // <-- Tambahan penting, karena kita akan pake fitur browser

import Link from 'next/link'; // <-- Impor komponen Link
import { usePathname } from 'next/navigation'; // <-- Impor "detektor" URL
import { Cog6ToothIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  // Hook ini akan ngasih tau kita lagi ada di halaman mana, misal "/" atau "/settings"
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-200 flex flex-col">
      
      {/* Bagian Logo */}
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center font-bold text-white text-lg">
          C
        </div>
        <span className="ml-3 font-semibold text-lg text-gray-800">ChatSakti</span>
      </div>
      
      {/* Bagian Menu Navigasi */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        
        {/* Menu Item "Agents" */}
        <Link 
          href="/" 
          className={
            // Logika: JIKA pathname adalah "/", maka pakai style aktif, JIKA TIDAK, pakai style normal
            pathname === '/' 
              ? "bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          }
        >
          <Squares2X2Icon className="mr-3 h-6 w-6" />
          Agents
        </Link>
        
        {/* Menu Item "Settings" */}
        <Link 
          href="/settings" 
          className={
            // Logika: JIKA pathname adalah "/settings", maka pakai style aktif, JIKA TIDAK, pakai style normal
            pathname === '/settings' 
              ? "bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
              : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          }
        >
          <Cog6ToothIcon className="mr-3 h-6 w-6" />
          Settings
        </Link>
      </nav>

      {/* Bagian Profile User */}
      <div className="p-4 border-t border-gray-200">
         <a href="#" className="group flex items-center space-x-3">
            <div className="w-9 h-9 bg-gray-200 rounded-full"></div>
            <div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Habib Dwi K</p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
            </div>
         </a>
      </div>

    </aside>
  );
};

export default Sidebar;