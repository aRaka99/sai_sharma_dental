import { Link, NavLink } from 'react-router-dom';

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Appointment', to: '/appointment' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='mt-16 border-t border-sky-100 bg-slate-950 text-slate-200'>
      <div className='mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6'>
        <div>
          <Link to='/' className='flex items-center gap-3'>
            <span className='grid h-10 w-10 place-items-center rounded-full bg-sky-600 text-lg text-white'>
              🦷
            </span>
            <div>
              <p className='text-base font-semibold text-white'>Sai Sharma Dental</p>
              <p className='text-xs text-slate-400'>Gentle & Modern Dental Care</p>
            </div>
          </Link>
          <p className='mt-4 max-w-xs text-sm leading-6 text-slate-300'>
            Comprehensive dental care with a focus on comfort, hygiene, and long-term oral health.
          </p>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-cyan-300'>Quick Links</h3>
          <div className='mt-4 flex flex-col gap-2'>
            {quickLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className='text-sm text-slate-300 transition-colors hover:text-cyan-300'
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div>
          <h3 className='text-sm font-semibold uppercase tracking-wider text-cyan-300'>Contact</h3>
          <div className='mt-4 space-y-2 text-sm text-slate-300'>
            <p>📞 +91 99889 36541</p>
            <p>✉️ care@saisharmadental.com</p>
            <p>📍 Deep Nagar, Birring road, jalandhar Cantt, near aggarwal sweets, Jalandhar, Punjab 144005</p>
            <p className='pt-2 text-slate-400'>Mon - Sat: 8:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>

      <div className='border-t border-slate-800'>
        <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 text-xs text-slate-400 md:px-6'>
          <p>© {year} Sai Sharma Dental. All rights reserved.</p>
          <p>Designed by Shivam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
