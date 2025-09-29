"use client";

import { Fragment, useState, useEffect, FC, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export type ProcessedFile = {
    file: File;
    dateAdded: Date;
}

const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

type FileDetailsDrawerProps = {
    processedFile: ProcessedFile | null;
    onClose: () => void;
};

export const FileDetailsDrawer: React.FC<FileDetailsDrawerProps> = ({ processedFile, onClose }) => {
    const [content, setContent] = useState('Loading content...');

    useEffect(() => {
        if (processedFile && processedFile.file.type === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => { setContent(e.target?.result as string); };
            reader.readAsText(processedFile.file);
        } else if (processedFile) {
            setContent('Preview for this file type will be available after backend processing.');
        }
    }, [processedFile]);

    const file = processedFile?.file;
    const dateAdded = processedFile?.dateAdded;

    return (
        <AnimatePresence>
            {processedFile && (
                // Wrapper utama untuk overlay dan drawer
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40">
                    
                    {/* PERBAIKAN 1: Overlay gelap di belakang, bisa diklik untuk menutup */}
                    <div onClick={onClose} className="absolute inset-0 bg-black/30" />

                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative h-full w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col ml-auto" // ml-auto untuk nempel kanan
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center min-w-0">
                                <DocumentTextIcon className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
                                {/* PERBAIKAN 2: `truncate` dihapus, diganti `break-words` */}
                                <h2 className="text-lg font-semibold text-gray-900 break-words">{file?.name}</h2>
                            </div>
                            {/* PERBAIKAN 1: Tombol close "X" dipastikan ada */}
                            <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 ml-4">
                                <XMarkIcon className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex-1 p-6 overflow-y-auto">
                            <h3 className="text-base font-semibold text-gray-800 mb-2">File Content</h3>
                            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700 max-h-96 overflow-y-auto whitespace-pre-wrap font-mono">
                               {content}
                            </div>
                            
                            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">Details</h3>
                            <div className="text-sm border-t border-gray-200">
                                <div className="flex justify-between py-3 border-b border-gray-200"><span className="text-gray-500">File Size</span><span className="font-medium text-gray-800">{file ? formatBytes(file.size) : 'N/A'}</span></div>
                                <div className="flex justify-between py-3 border-b border-gray-200"><span className="text-gray-500">Date Added</span><span className="font-medium text-gray-800">{dateAdded ? dateAdded.toLocaleString() : 'N/A'}</span></div>
                                <div className="flex justify-between py-3"><span className="text-gray-500">Last Modified</span><span className="font-medium text-gray-800">{file ? new Date(file.lastModified).toLocaleString() : 'N/A'}</span></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};