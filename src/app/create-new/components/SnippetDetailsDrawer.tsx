// Lokasi: src/app/create-new/components/SnippetDetailsDrawer.tsx
"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Snippet } from './TextSource'; // Kita akan export tipe Snippet nanti

type SnippetDetailsDrawerProps = {
    snippet: Snippet | null;
    onClose: () => void;
};

export const SnippetDetailsDrawer: React.FC<SnippetDetailsDrawerProps> = ({ snippet, onClose }) => {
    const calculateSize = (str: string) => new Blob([str]).size;

    return (
        <AnimatePresence>
            {snippet && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40">
                    <div onClick={onClose} className="absolute inset-0 bg-black/30" />
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="relative h-full w-full max-w-lg bg-white shadow-2xl z-50 flex flex-col ml-auto"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <div className="flex items-center min-w-0">
                                <DocumentTextIcon className="h-6 w-6 text-gray-500 mr-3 flex-shrink-0" />
                                <h2 className="text-lg font-semibold text-gray-900 break-words">{snippet.title}</h2>
                            </div>
                            <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 ml-4"><XMarkIcon className="h-6 w-6" /></button>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto">
                            <h3 className="text-base font-semibold text-gray-800 mb-2">Content</h3>
                            <div className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700 max-h-96 overflow-y-auto whitespace-pre-wrap font-mono">
                               {snippet.content}
                            </div>
                            <h3 className="text-base font-semibold text-gray-800 mt-6 mb-2">Details</h3>
                            <div className="text-sm border-t border-gray-200">
                                <div className="flex justify-between py-3 border-b border-gray-200"><span className="text-gray-500">Approx. Size</span><span className="font-medium text-gray-800">{`${(calculateSize(snippet.content) / 1024).toFixed(2)} KB`}</span></div>
                                <div className="flex justify-between py-3"><span className="text-gray-500">Date Added</span><span className="font-medium text-gray-800">{new Date(snippet.id).toLocaleString()}</span></div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};