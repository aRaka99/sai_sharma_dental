import { Link } from 'react-router-dom';

const AppointmentCTA = () => {
  return (
    <section className='py-16 md:py-20'>
      <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
        <div className='relative overflow-hidden rounded-3xl border border-sky-100 bg-slate-950 px-6 py-10 text-white shadow-2xl md:px-10 md:py-12'>
          <div className='absolute -left-16 -top-16 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl' />
          <div className='absolute -bottom-20 -right-14 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl' />

          <div className='relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center'>
            <div>
              <p className='inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-200'>
                Your Smile Deserves Immediate Care
              </p>

              <h2 className='mt-4 text-3xl font-bold leading-tight md:text-4xl'>
                Don’t Let Dental Pain Steal Your Confidence
              </h2>

              <p className='mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base'>
                Every day you delay can make oral problems worse. Get expert, gentle treatment at Sai Sharma Dental and feel the relief of being cared for by a trusted team.
              </p>

              <div className='mt-7 flex flex-wrap gap-3'>
                <Link
                  to='/appointment'
                  className='rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
                >
                  Book Appointment Now
                </Link>
                <a
                  href='tel:+919988936541'
                  className='rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-900'
                >
                  Call +91 99889 36541
                </a>
              </div>
            </div>

            <div className='rounded-2xl border border-slate-700 bg-slate-900/80 p-5'>
              <p className='text-sm font-semibold text-cyan-300'>Why book today?</p>
              <ul className='mt-3 space-y-2 text-sm text-slate-200'>
                <li>• Fast appointments with personalized consultation</li>
                <li>• Pain-conscious treatment in a hygienic setup</li>
                <li>• Clear guidance on treatment timeline and costs</li>
              </ul>
              <p className='mt-4 text-xs text-slate-400'>Mon - Sat • 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
