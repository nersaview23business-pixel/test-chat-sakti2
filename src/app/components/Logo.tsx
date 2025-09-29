// Lokasi: src/app/components/Logo.tsx
import Link from 'next/link';

export default function Logo() {
  return (
    // Kita bungkus semua dengan Link biar bisa di-klik ke halaman utama
    <Link href="/" className="flex items-center overflow-hidden">
      <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center font-bold text-white text-lg flex-shrink-0">
        C
      </div>
      {/* Teks "ChatSakti" akan jadi bagian dari komponen ini */}
      <span className="ml-3 font-semibold text-lg text-gray-800 whitespace-nowrap">
        ChatSakti
      </span>
    </Link>
  );
}