"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// ===== PERBAIKAN DI SINI: Tambahkan ChevronDownIcon =====
import { GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { SourceIllustration } from './SourceIllustration';
import { SourceTitleCard } from './SourceTitleCard';

export const WebsiteSource = () => {
    const [activeTab, setActiveTab] = useState('Crawl links');
    const [showAdvanced, setShowAdvanced] = useState(false);

    return (
        <div>
            <SourceIllustration><GlobeAltIcon className="w-8 h-8 text-gray-500" /></SourceIllustration>
            <SourceTitleCard title="Website" description="Crawl web pages or submit sitemaps to update your AI with the latest content." />
            
            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                    {['Crawl links', 'Sitemap', 'Individual link'].map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)} className={`${ tab === activeTab ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300' } whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors`}>
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="space-y-4">
                <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
                <input type="url" name="url" id="url" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3" placeholder="https://example.com" />
            </div>

            { (activeTab === 'Crawl links' || activeTab === 'Sitemap') &&
                <div className="pt-6">
                    <button onClick={() => setShowAdvanced(!showAdvanced)} className="flex items-center text-sm font-medium text-gray-600 hover:text-black">
                        <ChevronDownIcon className={`w-5 h-5 mr-2 transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`} />
                        Advanced options
                    </button>
                    <AnimatePresence>
                    { showAdvanced && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="include" className="block text-sm text-gray-500">Include only paths</label>
                                    <input type="text" name="include" id="include" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2" placeholder="Ex: /blog/*, /dev/*" />
                                </div>
                                <div>
                                    <label htmlFor="exclude" className="block text-sm text-gray-500">Exclude paths</label>
                                    <input type="text" name="exclude" id="exclude" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-2" placeholder="Ex: /blog/*, /dev/*" />
                                </div>
                            </div>
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>
            }

            <div className="flex justify-end pt-8">
                <button type="button" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-200">
                    {activeTab === 'Crawl links' && 'Fetch links'}
                    {activeTab === 'Sitemap' && 'Load sitemap'}
                    {activeTab === 'Individual link' && 'Add link'}
                </button>
            </div>
        </div>
    );
};