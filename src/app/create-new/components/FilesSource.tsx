// Lokasi: src/app/create-new/components/FilesSource.tsx

"use client";
import { useCallback, useState, useEffect, FC } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';
import toast from 'react-hot-toast';
import { DocumentIcon, XCircleIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { SourceIllustration } from './SourceIllustration';
import { SourceTitleCard } from './SourceTitleCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ProcessedFile } from './FileDetailsDrawer';

const formatBytes = (bytes: number, decimals: number = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export type FilesSourceProps = {
    processedFiles?: ProcessedFile[];
    setProcessedFiles?: (files: ProcessedFile[] | ((prevFiles: ProcessedFile[]) => ProcessedFile[])) => void;
    onFileSelect?: (file: ProcessedFile) => void;
};

const FileItem = ({ processedFile, onRemove, onSelect }: { processedFile: ProcessedFile, onRemove: () => void, onSelect: () => void }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => { const timer = setTimeout(() => setProgress(100), 100); return () => clearTimeout(timer); }, []);
    const file = processedFile.file;
    return (
        <motion.li initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
            <button onClick={onSelect} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center space-x-4 text-left hover:border-black transition-colors">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md"><DocumentIcon className="h-6 w-6 text-gray-500" /></div>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                    <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-1.5 mt-1"><div className="bg-black rounded-full h-1.5 transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div></div>
                        <p className="text-xs text-gray-500">{formatBytes(file.size)}</p>
                    </div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); onRemove(); }} className="text-gray-400 hover:text-red-600 transition-colors z-10"><XCircleIcon className="h-6 w-6" /></button>
            </button>
        </motion.li>
    );
};

export const FilesSource: FC<FilesSourceProps> = ({ processedFiles = [], setProcessedFiles, onFileSelect }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;
        const newProcessedFiles: ProcessedFile[] = acceptedFiles.map(file => ({ file, dateAdded: new Date() }));
        setProcessedFiles?.(prevFiles => [...prevFiles, ...newProcessedFiles]);
        toast.success(`${acceptedFiles.length} file(s) added successfully!`);
    }, [setProcessedFiles]);

    const onDropRejected = useCallback((fileRejections: FileRejection[]) => {
        fileRejections.forEach(({ file, errors }) => {
            const errorMessage = errors[0]?.message || 'Unknown error';
            toast.error(`Error with ${file.name}: ${errorMessage}`);
        });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
        onDrop,
        onDropRejected,
        accept: {
            'application/pdf': ['.pdf'],
            'text/plain': ['.txt'],
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
        }
    });

    const removeFile = (fileToRemove: ProcessedFile) => {
        setProcessedFiles?.(prevFiles => prevFiles.filter(pf => pf.file !== fileToRemove.file));
        toast.success(`"${fileToRemove.file.name}" removed.`);
    };

    return (
        <div>
            <SourceIllustration><DocumentIcon className="w-8 h-8 text-gray-500" /></SourceIllustration>
            <SourceTitleCard title="Upload Documents" description="Provide documents for your AI to learn from. We support PDF, DOCX, and TXT files." />
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded-md"><p className="text-sm text-yellow-800">Pro-Tip: For best results with PDFs, please ensure the text is selectable and not an image.</p></div>
            <div className="mt-6 space-y-4">
                <div {...getRootProps()} className={`relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all duration-200 ${isDragActive ? 'border-black bg-gray-100 scale-105' : 'border-gray-300 hover:border-black'}`}>
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center">
                         <ArrowUpTrayIcon className="mx-auto h-10 w-10 text-gray-400" />
                         <p className="mt-3 text-sm font-semibold text-gray-700">{isDragActive ? "Drop the files here ..." : "Drop files here or click to upload"}</p>
                         <p className="text-xs text-gray-500 mt-1">Max file size: 100MB</p>
                    </div>
                </div>
                {processedFiles.length > 0 && (
                    <div className="space-y-3">
                         <h3 className="text-base font-semibold text-gray-900 pt-4">File Sources</h3>
                         <ul className="space-y-3">
                            <AnimatePresence>
                                {processedFiles.map((pf) => ( <FileItem key={pf.file.name + pf.file.lastModified} processedFile={pf} onRemove={() => removeFile(pf)} onSelect={() => onFileSelect?.(pf)} /> ))}
                            </AnimatePresence>
                         </ul>
                    </div>
                )}
            </div>
        </div>
    );
};