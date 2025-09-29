"use client";
import { useState } from 'react';
import { ChatBubbleLeftRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { SourceIllustration } from './SourceIllustration';
import { SourceTitleCard } from './SourceTitleCard';
import { TiptapEditor } from './TiptapEditor'; // Kita pakai lagi editor canggih kita

export const QASource = () => {
    // State untuk menyimpan daftar pertanyaan & jawaban
    const [qaList, setQaList] = useState([{ question: '', answer: '' }]);

    const handleAddQuestion = () => {
        setQaList([...qaList, { question: '', answer: '' }]);
    };

    return (
        <div>
            <SourceIllustration><ChatBubbleLeftRightIcon className="w-8 h-8 text-gray-500" /></SourceIllustration>
            <SourceTitleCard title="Q&A" description="Craft responses for key questions, ensuring your AI shares relevant info." />

            <div className="space-y-6">
                {/* Input untuk Title */}
                <div>
                    <label htmlFor="qa-title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input type="text" name="qa-title" id="qa-title" className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3" placeholder="Ex: Refund requests" />
                </div>

                {/* Daftar Pertanyaan & Jawaban Dinamis */}
                {qaList.map((qa, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
                        <div>
                            <label htmlFor={`question-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Question</label>
                            <input type="text" name={`question-${index}`} id={`question-${index}`} className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm p-3" placeholder="How do I request a refund?" />
                        </div>
                        <div>
                             <label htmlFor={`answer-${index}`} className="block text-sm font-medium text-gray-700 mb-1">Answer</label>
                             {/* Kita butuh instance TiptapEditor yang unik untuk setiap jawaban */}
                             <TiptapEditor />
                        </div>
                    </div>
                ))}

                {/* Tombol untuk menambah pertanyaan baru */}
                <div>
                    <button onClick={handleAddQuestion} type="button" className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300">
                        <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                        Add question
                    </button>
                </div>
            </div>

            <div className="flex justify-end pt-8">
                <button type="button" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-700 transition-colors duration-200">
                    Add Q&A
                </button>
            </div>
        </div>
    );
};