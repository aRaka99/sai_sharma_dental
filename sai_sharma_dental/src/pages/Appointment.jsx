const Appointment = () => {
  return (
    <main className='bg-white'>
      <section className='bg-linear-to-b from-sky-50 via-white to-white py-14 md:py-18'>
        <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
          <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
            Book Appointment
          </p>
          <h1 className='mt-4 text-4xl font-bold text-slate-900 md:text-5xl'>
            Start Your Treatment Journey Today
          </h1>
          <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600'>
            Share your details and our team will contact you to confirm the best available slot. You can also call directly for urgent concerns.
          </p>
        </div>
      </section>

      <section className='pb-16 md:pb-20'>
        <div className='mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-3 md:px-6'>
          <div className='rounded-2xl border border-sky-100 bg-white p-6 shadow-sm md:col-span-2'>
            <h2 className='text-xl font-semibold text-slate-900'>Request an Appointment</h2>
            <p className='mt-2 text-sm text-slate-600'>
              Fill this quick form and we’ll call you shortly.
            </p>

            <form className='mt-5 grid gap-4 sm:grid-cols-2'>
              <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                Full Name
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-2'
                />
              </label>

              <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                Phone Number
                <input
                  type='tel'
                  placeholder='+91 '
                  className='rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-2'
                />
              </label>

              <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                Preferred Date
                <input
                  type='date'
                  className='rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-2'
                />
              </label>

              <label className='flex flex-col gap-1 text-sm font-medium text-slate-700'>
                Preferred Time
                <input
                  type='time'
                  className='rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-2'
                />
              </label>

              <label className='flex flex-col gap-1 text-sm font-medium text-slate-700 sm:col-span-2'>
                Concern
                <textarea
                  rows={4}
                  placeholder='Tell us your issue (pain, cleaning, braces, RCT, etc.)'
                  className='rounded-xl border border-sky-100 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none ring-cyan-300 transition focus:ring-2'
                />
              </label>

              <button
                type='button'
                className='sm:col-span-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
              >
                Submit Appointment Request
              </button>
            </form>
          </div>

          <aside className='h-fit rounded-2xl border border-sky-100 bg-slate-950 p-6 text-slate-200 shadow-xl'>
            <h3 className='text-lg font-semibold text-white'>Need Immediate Help?</h3>
            <p className='mt-2 text-sm leading-6 text-slate-300'>
              For urgent pain or quick booking confirmation, contact us directly.
            </p>

            <div className='mt-5 space-y-3 text-sm'>
              <a
                href='tel:+919988936541'
                className='block rounded-full bg-cyan-500 px-4 py-2.5 text-center font-semibold text-white transition-colors hover:bg-cyan-600'
              >
                Call +91 99889 36541
              </a>
              <a
                href='https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6'
                target='_blank'
                rel='noopener noreferrer'
                className='block rounded-full border border-slate-700 px-4 py-2.5 text-center font-semibold text-slate-100 transition-colors hover:bg-slate-900'
              >
                Open Clinic on Maps
              </a>
            </div>

            <div className='mt-6 rounded-xl border border-slate-700 bg-slate-900 p-4 text-xs text-slate-300'>
              <p className='font-semibold text-cyan-300'>Clinic Timings</p>
              <p className='mt-1'>Mon - Sat • 8:00 AM - 9:00 PM</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Appointment;
