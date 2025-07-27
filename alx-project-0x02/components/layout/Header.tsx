import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    const router = useRouter();

  const isActive = (path: string) =>
    router.pathname === path ? 'text-blue-700 font-bold underline' : 'text-gray-700';

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-2xl font-semibold text-gray-800">My Next.js</h2>
      <nav className="space-x-4">
        <Link href="/home" className={isActive('/home')}>Home</Link>
        <Link href="/about" className={isActive('/about')}>About</Link>
        <Link href="/posts" className={isActive('/posts')}>Posts</Link>
        <Link href="/users" className={isActive('/users')}>Users</Link>

      </nav>
    </header>
  );
}

export default Header;
