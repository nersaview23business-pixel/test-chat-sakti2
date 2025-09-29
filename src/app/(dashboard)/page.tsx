"use client";

import Link from 'next/link';
import { PlusIcon, EllipsisHorizontalIcon, CpuChipIcon, DocumentDuplicateIcon, FireIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Tipe Data untuk agent
type Agent = {
  id: number;
  name: string;
  sourceCount: number;
  iconColor: string;
  shadowColor: string;
};

// Data agent
const dummyAgents: Agent[] = [
    { id: 1, name: 'Chatbot Toko Online', sourceCount: 5, iconColor: 'from-blue-500 to-indigo-600', shadowColor: 'shadow-blue-600/20' },
    { id: 2, name: 'Customer Service Restoran', sourceCount: 3, iconColor: 'from-green-500 to-teal-500', shadowColor: 'shadow-green-600/20' },
    { id: 3, name: 'Agen Properti Virtual', sourceCount: 12, iconColor: 'from-purple-600 to-fuchsia-600', shadowColor: 'shadow-purple-600/20' },
];

// Komponen Kartu Agent (dengan efek visual yang kuat)
const AgentCard = ({ agent }: { agent: Agent }) => (
    <Link href={`/agent/${agent.id}`} className="group block">
        <motion.div 
            whileHover={{ y: -8, scale: 1.02, rotate: -1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className={`relative h-60 bg-white border border-gray-200/80 rounded-2xl shadow-xl ${agent.shadowColor}`}>
            
            <div className={`absolute top-0 left-0 h-32 w-full bg-gradient-to-br ${agent.iconColor} opacity-20 blur-3xl`}></div>
            
            <div className="relative h-full p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${agent.iconColor} shadow-lg`}>
                        <CpuChipIcon className="h-7 w-7 text-white" />
                    </div>
                    <button 
                        onClick={(e) => { e.preventDefault(); alert('Menu options clicked!'); }} 
                        className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-gray-100 z-10">
                        <EllipsisHorizontalIcon className="h-5 w-5" />
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-800 leading-tight">{agent.name}</h3>
                    <div className="mt-2">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-gray-100 rounded-full">
                            <DocumentDuplicateIcon className="h-4 w-4 text-gray-400" />
                            <span className="text-xs font-semibold text-gray-600">{agent.sourceCount} Sources</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </Link>
);

// Komponen Kartu "Create New Agent" yang vibrant
const CreateAgentCard = () => (
    <Link href="/create-new">
        <motion.div 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="group flex flex-col items-center justify-center text-center h-60 border border-transparent rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/30 text-white cursor-pointer relative overflow-hidden">
            
            <div className="absolute top-0 left-0 h-full w-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 mb-3 ring-1 ring-white/30">
                    <FireIcon className="h-7 w-7" />
                </div>
                <h3 className="text-base font-semibold">Create New Agent</h3>
                <p className="mt-1 text-xs opacity-80">Start with an AI template</p>
                <div className="mt-4 inline-flex items-center justify-center px-3 py-1.5 bg-white text-indigo-600 font-semibold rounded-lg shadow-md group-hover:scale-105 transition-transform text-xs">
                    + Create Agent
                </div>
            </div>
        </motion.div>
    </Link>
);

// Komponen Empty State
const EmptyState = () => (
    <div className="text-center max-w-xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Welcome to ChatSakti</h1>
        <p className="mt-3 text-base text-gray-600">
            Buat AI Agent pertama kamu untuk menjawab pertanyaan customer, generate leads, dan bantu support bisnis kamu.
        </p>
        <div className="mt-8 max-w-sm mx-auto">
            <CreateAgentCard />
        </div>
    </div>
);

export default function AgentsPage() {
  const agents = dummyAgents;

  if (agents.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Your Agents</h1>
            <Link href="/create-new">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                    Create New Agent
                </button>
            </Link>
        </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}