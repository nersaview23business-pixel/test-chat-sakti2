// Lokasi: src/app/create-new/components/TextSource.tsx
"use client";
import { useState } from 'react';
import toast from 'react-hot-toast'; // Import toast
import { BookOpenIcon, XCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { SourceIllustration } from './SourceIllustration';
import { SourceTitleCard } from './SourceTitleCard';
import { TiptapEditor } from './TiptapEditor';
import { motion, AnimatePresence } from 'framer-motion';
import { SnippetDetailsDrawer } from './SnippetDetailsDrawer'; // Import drawer baru

// Tipe data untuk setiap snippet (di-export biar bisa dibaca drawer)
export type Snippet = {
    id: number;
    title: string;
    content: string; 
};

export const TextSource = () => {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const [title, setTitle] = useState('');
    const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(null);

    const handleSaveSnippet = () => {
        if (!title) {
            toast.error("Title cannot be empty.");
            return;
        }
        const newSnippet: Snippet = {
            id: Date.now(),
            title: title,
            content: "Ini adalah isi dari rich text editor..." // Nanti kita integrasikan dengan Tiptap
        };
        setSnippets(prev => [...prev, newSnippet]);
        setTitle('');
        toast.success("Snippet added successfully!"); // Notifikasi sukses
    };

    const handleRemoveSnippet = (id: number) => {
        setSnippets(prev => prev.filter(s => s.id !== id));
        toast.success("Snippet removed.");
    };

    return (
        <div>
            <SourceIllustration><BookOpenIcon className="w-8 h-8 text-gray-500" /></SourceIllustration>
            <SourceTitleCard title="Add a Text Snippet" description="Provide specific information by pasting text directly into the knowledge base." />
            <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-sm">
                <div className="space-y-4">
                    <div><label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label><input value={title} onChange={(e) => setTitle(e.target.value)} type="text" name="title" id="title" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3" placeholder="Ex: Refund requests" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">Content</label><TiptapEditor /></div>
                </div>
                <div className="flex justify-end pt-6"><button onClick={handleSaveSnippet} type="button" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-200">Save Snippet</button></div>
            </div>

            {snippets.length > 0 && (
                <div className="mt-8">
                    <h3 className="text-base font-semibold text-gray-900 mb-4">Text Snippets Added</h3>
                    <ul className="space-y-3">
                        <AnimatePresence>
                            {snippets.map((snippet) => (
                                <motion.li key={snippet.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                                    {/* Item sekarang bisa diklik */}
                                    <button onClick={() => setSelectedSnippet(snippet)} className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-between text-left hover:border-black transition-colors">
                                        <div className="flex items-center"><DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3" /><span className="text-sm font-medium text-gray-800">{snippet.title}</span></div>
                                        <button onClick={(e) => { e.stopPropagation(); handleRemoveSnippet(snippet.id); }} className="text-gray-400 hover:text-red-600"><XCircleIcon className="h-5 w-5" /></button>
                                    </button>
                                </motion.li>
                            ))}
                        </AnimatePresence>
                    </ul>
                </div>
            )}
            
            {/* Render komponen drawer di sini */}
            <SnippetDetailsDrawer snippet={selectedSnippet} onClose={() => setSelectedSnippet(null)} />
        </div>
    );
};