import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <>
        <Link href='/about'>About</Link>
        <Link href='/home'>Home</Link>
        </>
    )
}

export default Header;
