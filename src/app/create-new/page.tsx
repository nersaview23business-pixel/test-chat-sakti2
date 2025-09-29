// Lokasi: src/app/create-new/page.tsx

"use client";

import { useState, useMemo, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DocumentIcon, BookOpenIcon, GlobeAltIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

import { FilesSource, FilesSourceProps } from './components/FilesSource';
import { TextSource } from './components/TextSource';
import { WebsiteSource } from './components/WebsiteSource';
import { QASource } from './components/QASource';
import { FileDetailsDrawer, ProcessedFile } from './components/FileDetailsDrawer';

const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const sources = [
    { name: 'Files', icon: DocumentIcon },
    { name: 'Text', icon: BookOpenIcon },
    { name: 'Website', icon: GlobeAltIcon },
    { name: 'Q&A', icon: ChatBubbleLeftRightIcon },
];

export default function CreateNewAgentPage() {
    const [activeSource, setActiveSource] = useState('Files');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [processedFiles, setProcessedFiles] = useState<ProcessedFile[]>([]);
    const [selectedFile, setSelectedFile] = useState<ProcessedFile | null>(null);
    
    const totalSize = useMemo(() => processedFiles.reduce((acc, pf) => acc + pf.file.size, 0), [processedFiles]);
    const totalSizeFormatted = useMemo(() => formatBytes(totalSize, 0), [totalSize]);

    return (
        <div className="flex flex-col h-screen bg-white">
            <header className="h-16 flex-shrink-0 border-b border-gray-200 flex items-center justify-between px-6 z-20">
                <div><h1 className="text-lg font-semibold text-gray-900">Create New Agent</h1><p className="text-xs text-gray-500">Build your agent's knowledge by adding data sources.</p></div>
                <button type="button" className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">Create Agent</button>
            </header>

            {/* ===== PERBAIKAN SIDEBAR KEPOTONG DI SINI ===== */}
            <div className="flex-1 flex min-h-0"> {/* `min-h-0` penting untuk flexbox */}
                <aside 
                    onMouseEnter={() => setSidebarOpen(true)}
                    onMouseLeave={() => setSidebarOpen(false)}
                    className={`bg-gray-100 border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out z-10 ${isSidebarOpen ? 'w-56' : 'w-16'}`}
                >
                    <div className="flex-1 p-4">
                        <h2 className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4 h-5 flex items-center">
                            <AnimatePresence>{isSidebarOpen && (<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>DATA SOURCES</motion.span>)}</AnimatePresence>
                        </h2>
                        <nav className="space-y-1">
                            {sources.map((source) => (
                                <button key={source.name} onClick={() => setActiveSource(source.name)} className={`relative w-full flex items-center h-10 px-3 rounded-lg group`}>
                                    {activeSource === source.name && isSidebarOpen && ( <motion.div layoutId="active-sidebar-pill" className="absolute inset-0 bg-white border border-gray-200 shadow-sm" style={{ borderRadius: '8px' }} transition={{ type: 'spring', duration: 0.6 }} /> )}
                                    <div className={`flex items-center transition-all duration-300 ${isSidebarOpen ? '' : 'w-full justify-center'}`}><source.icon className={`relative h-5 w-5 transition-colors duration-300 ${activeSource === source.name ? 'text-black' : 'text-gray-400 group-hover:text-black'}`} /><AnimatePresence>{isSidebarOpen && ( <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }} exit={{ opacity: 0, x: -10 }} className={`relative ml-3 transition-colors duration-300 whitespace-nowrap ${activeSource === source.name ? 'text-black font-semibold' : 'text-gray-600 group-hover:text-black'}`}> {source.name} </motion.span> )}</AnimatePresence></div>
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <AnimatePresence>
                        {isSidebarOpen && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }} exit={{ opacity: 0 }}>
                                <div className="flex justify-between items-center text-gray-600 mb-1"><span className="text-sm font-semibold">Knowledge Size</span><span className="text-sm font-medium">{totalSizeFormatted} / Unlimited</span></div>
                            </motion.div>
                        )}
                        </AnimatePresence>
                    </div>
                </aside>
                
                {/* `overflow-y-auto` dipindahkan ke sini, di area konten */}
                <main className="flex-1 p-10 overflow-y-auto bg-gray-50">
                     <AnimatePresence mode="wait">
                        <motion.div key={activeSource} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                            {/* ===== PERBAIKAN ERROR DI SINI ===== */}
                            {activeSource === 'Files' && <FilesSource processedFiles={processedFiles} setProcessedFiles={setProcessedFiles} onFileSelect={setSelectedFile} />}
                            {activeSource === 'Text' && <TextSource />}
                            {activeSource === 'Website' && <WebsiteSource />}
                            {activeSource === 'Q&A' && <QASource />}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
            
            <FileDetailsDrawer processedFile={selectedFile} onClose={() => setSelectedFile(null)} />
        </div>
    );
}