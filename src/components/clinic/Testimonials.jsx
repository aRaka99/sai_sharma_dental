import testimonialsData from '../../data/testimonialsData';

const googleMapsLink = 'https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6';

const Testimonials = () => {
  return (
    <section className='bg-slate-50 py-16 md:py-20'>
      <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
              Patient Testimonials
            </p>
            <h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-4xl'>
              Trusted by Families Across Jalandhar
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base'>
              Real patient experiences help you make the right decision. Read feedback shared by people who visited Sai Sharma Dental.
            </p>
          </div>

          <a
            href={googleMapsLink}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
          >
            Read Reviews on Google Maps
          </a>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {testimonialsData.map((item) => (
            <article
              key={`${item.name}-${item.treatment}`}
              className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'
            >
              <div className='flex items-center justify-between'>
                <p className='text-sm font-semibold text-slate-900'>{item.name}</p>
                <p className='text-xs text-amber-500'>★★★★★</p>
              </div>
              <p className='mt-1 text-xs font-medium uppercase tracking-wide text-sky-700'>{item.treatment}</p>
              <p className='mt-4 text-sm leading-6 text-slate-600'>“{item.quote}”</p>
            </article>
          ))}
        </div>

        <div className='mt-8 rounded-2xl border border-sky-100 bg-white p-5 md:p-6'>
          <div className='flex flex-wrap items-center justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold text-slate-900'>Need personalized guidance before treatment?</p>
              <p className='mt-1 text-sm text-slate-600'>Speak with our clinic team and plan the right dental care for your needs.</p>
            </div>
            <a
              href='tel:+919988936541'
              className='rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50'
            >
              Call +91 99889 36541
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
