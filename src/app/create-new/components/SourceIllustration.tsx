import { ReactNode } from 'react';

export const SourceIllustration = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gray-100 rounded-2xl border border-gray-200">
        {children}
    </div>
);