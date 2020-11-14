import React from 'react';
import Link from 'next/link';
import Sun from './icons/sun';
import Moon from './icons/moon';
import useTheme from '../utils/theme';
import useMounted from '../utils/use-mounted';

export default function Header() {
  const isMounted = useMounted();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className='container mx-auto px-4'>
      <div className='w-full h-24 flex items-center justify-between'>
        <Link href='/'>
          <a className='gradient-shift text-3xl font-bold'>#30D30P</a>
        </Link>
        <button
          className='focus:outline-none darkmode-btn'
          onClick={toggleTheme}
          aria-label='Toggle Theme'
        >
          {isMounted &&
            (theme === 'light' ? (
              <Moon color='var(--fg)' size={30} key='icon-light' />
            ) : (
              <Sun color='var(--fg)' size={30} key='icon-dark' />
            ))}
        </button>
      </div>
    </div>
  );
}
