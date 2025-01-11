import React from 'react';

function Navbar() {
  return (
    <nav className='fixed w-full h-16 flex items-center bg-gradient-to-r from-gray-100 to-blue-100 shadow-md z-10'>
      <a className='ml-6 text-3xl font-serif text-gray-800 hover:text-blue-500 transition-all duration-300' href='#home'>
        Saurabh Mulik
      </a>
      <ul className='ml-auto flex space-x-8 text-xl'>
        <li>
          <a className='text-zinc-600 hover:text-black hover:bg-slate-400 rounded-md p-2 transition-all duration-300' href="#about">
            About
          </a>
        </li>
        <li>
          <a className='text-zinc-600 hover:text-black hover:bg-slate-400 rounded-md p-2 transition-all duration-300' href="#experince">
            Experience
          </a>
        </li>
        <li>
          <a className='text-zinc-600 hover:text-black hover:bg-slate-400 rounded-md p-2 transition-all duration-300' href="#project">
            Project
          </a>
        </li>
        <li>
          <a className='text-zinc-600 hover:text-black hover:bg-slate-400 rounded-md p-2 transition-all duration-300' href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
