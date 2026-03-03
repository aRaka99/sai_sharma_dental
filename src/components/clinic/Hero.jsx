import { Link } from 'react-router-dom';

const highlights = [
  { label: 'Happy Patients', value: '10k+' },
  { label: 'Years of Care', value: '12+' },
  { label: 'Success Rate', value: '99%' },
];

const Hero = () => {
  return (
    <section className='relative overflow-hidden bg-linear-to-b from-sky-50 via-white to-white'>
      <div className='absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-100 blur-3xl' />
      <div className='absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-cyan-100 blur-3xl' />

      <div className='relative mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:px-6 md:py-24'>
        <div>
          <span className='inline-flex items-center rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
            Premium Dental Excellence
          </span>

          <h1 className='mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl'>
            A Confident Smile Starts With
            <span className='block text-sky-700'>Advanced & Gentle Care</span>
          </h1>

          <p className='mt-5 max-w-xl text-base leading-7 text-slate-600 md:text-lg'>
            Experience modern dentistry in a calm and hygienic environment with personalized treatment plans designed for long-term oral health.
          </p>

          <div className='mt-8 flex flex-wrap items-center gap-3'>
            <Link
              to='/appointment'
              className='rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
            >
              Book Appointment
            </Link>
            <Link
              to='/services'
              className='rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50'
            >
              Explore Services
            </Link>
          </div>

          <div className='mt-8 grid max-w-lg grid-cols-3 gap-3'>
            {highlights.map((item) => (
              <div key={item.label} className='rounded-2xl border border-sky-100 bg-white p-4 text-center shadow-sm'>
                <p className='text-2xl font-bold text-sky-700'>{item.value}</p>
                <p className='mt-1 text-xs text-slate-500'>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <div className='rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100/60 md:p-8'>
            <div className='rounded-2xl bg-sky-700 p-6 text-white'>
              <p className='text-sm uppercase tracking-wider text-sky-100'>Today’s Priority</p>
              <h3 className='mt-2 text-2xl font-semibold'>Same-Day Smile Consultation</h3>
              <p className='mt-3 text-sm leading-6 text-sky-100'>
                Fast appointments, digital diagnostics, and transparent treatment guidance from our expert dental team.
              </p>
            </div>

            <div className='mt-5 rounded-2xl border border-sky-100 bg-sky-50 p-5'>
              <p className='text-sm font-semibold text-slate-800'>Why patients choose us</p>
              <ul className='mt-3 space-y-2 text-sm text-slate-600'>
                <li>• Pain-conscious procedures with modern tools</li>
                <li>• Strict sterilization & global hygiene protocols</li>
                <li>• Clear treatment plans with flexible scheduling</li>
              </ul>
            </div>
          </div>

          <div className='absolute -bottom-5 -left-5 rounded-2xl border border-cyan-100 bg-white px-4 py-3 shadow-md'>
            <p className='text-xs text-slate-500'>Clinic Timings</p>
            <p className='text-sm font-semibold text-slate-900'>Mon - Sat · 8:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
