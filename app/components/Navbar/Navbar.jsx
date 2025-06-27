'use client';

import Link from 'next/link';
import { useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-[1130px] mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-purple-700">
          BlogSite
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-purple-600">
            About
          </Link>
          <Link href="/posts" className="hover:text-purple-600">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <RxCross2 size={24} /> : <TiThMenu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 bg-white gap-3">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/posts" onClick={() => setOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
