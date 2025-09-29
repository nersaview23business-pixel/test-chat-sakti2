// Lokasi: src/app/(dashboard)/usage/page.tsx

import { ChevronDownIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

export default function UsagePage() {
  return (
    <>
      {/* Top Bar dengan Filter */}
      <div className="h-16 flex-shrink-0 bg-white flex items-center justify-between px-6">
        <h1 className="text-xl font-semibold text-gray-900">Usage</h1>
        
        {/* === Kumpulan Filter di sini === */}
        <div className="flex items-center space-x-4">
          {/* Filter Agents */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            All agents
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" />
          </button>

          {/* Filter Tanggal */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <CalendarDaysIcon className="mr-2 h-5 w-5 text-gray-500" />
            Sep 01, 2025 - Sep 17, 2025
          </button>
        </div>
      </div>

      {/* Area Konten Utama */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Kartu Credits Used */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                <h3 className="text-base font-medium text-gray-500">Credits used</h3>
                <div className="mt-4 flex items-baseline space-x-2">
                    <p className="text-3xl font-semibold text-gray-900">0</p>
                    <p className="text-sm text-gray-500">/ 100</p>
                </div>
            </div>
            {/* Kartu Agents Used */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-5">
                <h3 className="text-base font-medium text-gray-500">Agents used</h3>
                <div className="mt-4 flex items-baseline space-x-2">
                    <p className="text-3xl font-semibold text-gray-900">0</p>
                    <p className="text-sm text-gray-500">/ 1</p>
                </div>
            </div>
        </div>

        {/* Kartu Usage History */}
        <div className="mt-8 bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">Usage history</h3>
            </div>
            <div className="p-5 border-t border-gray-200 h-80 flex items-center justify-center">
                <p className="text-sm text-gray-500">Graph will be displayed here.</p>
            </div>
        </div>
      </main>
    </>
  );
}