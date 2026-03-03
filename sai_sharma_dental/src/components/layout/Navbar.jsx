import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-sky-100 text-sky-800'
        : 'text-slate-700 hover:bg-sky-50 hover:text-sky-700'
    }`;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className='sticky top-0 z-50 border-b border-sky-100 bg-white/95 backdrop-blur'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6'>
        <Link to='/' className='flex items-center gap-3' onClick={closeMenu}>
          <span className='grid h-10 w-10 place-items-center rounded-full bg-sky-700 text-lg text-white'>
            🦷
          </span>
          <div>
            <p className='text-base font-semibold text-slate-900'>Sai Sharma Dental</p>
            <p className='text-xs text-slate-500'>Gentle & Modern Dental Care</p>
          </div>
        </Link>

        <div className='hidden items-center gap-3 md:flex'>
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to='/appointment'
            className='rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
          >
            Book Appointment
          </NavLink>
        </div>

        <button
          type='button'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='inline-flex items-center rounded-md border border-sky-200 px-3 py-2 text-sm font-medium text-slate-700 md:hidden'
          aria-expanded={isMenuOpen}
          aria-label='Toggle menu'
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <div className='border-t border-sky-100 bg-white px-4 py-3 md:hidden'>
          <div className='flex flex-col gap-2'>
          {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClass}
                onClick={closeMenu}
              >
              {item.label}
              </NavLink>
          ))}

            <NavLink
              to='/appointment'
              className='mt-1 rounded-full bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
              onClick={closeMenu}
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
