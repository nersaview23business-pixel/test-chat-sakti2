export const SourceTitleCard = ({ title, description }: { title: string, description: string }) => (
    <div className="pb-6 border-b border-gray-200 mb-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
);