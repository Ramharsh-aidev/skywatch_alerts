'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-blue-600 text-white p-4 mb-8">
      <div className="container mx-auto flex space-x-6">
        <Link href="/" className={`hover:underline ${pathname === '/' ? 'font-bold' : ''}`}>
          Live Radar
        </Link>
        <Link href="/alerts" className={`hover:underline ${pathname === '/alerts' ? 'font-bold' : ''}`}>
          Alerts
        </Link>
        <Link href="/about" className={`hover:underline ${pathname === '/about' ? 'font-bold' : ''}`}>
          About
        </Link>
      </div>
    </nav>
  );
}