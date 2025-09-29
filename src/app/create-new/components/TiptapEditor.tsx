"use client";
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const TiptapEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Enter your text here...</p>',
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
            },
        },
    });

    if (!editor) { return null; }

    return (
        <div className="bg-white rounded-md border border-gray-300">
            <div className="p-2 border-b border-gray-200 flex items-center space-x-1"><button onClick={() => editor.chain().focus().toggleBold().run()} className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}><span className="font-bold">B</span></button><button onClick={() => editor.chain().focus().toggleItalic().run()} className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}><span className="italic">I</span></button><button onClick={() => editor.chain().focus().toggleStrike().run()} className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}><span className="line-through">S</span></button></div>
            <div className="p-2 h-40 overflow-y-auto">
                 <EditorContent editor={editor} />
            </div>
        </div>
    );
};