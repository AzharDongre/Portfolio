import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-1 flex items-center justify-between py-3 px-10'>
      <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-4xl mx-2 w-10'>AD</h1>
      </div>

      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a
          href="https://www.linkedin.com/in/mohammed-azhar-dongre-285aa71b6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className='text-white' />
        </a>

        <a
          href="https://github.com/AzharDongre"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FaGithub className='text-white' />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
