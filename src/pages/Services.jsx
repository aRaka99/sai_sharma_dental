import servicesData from '../data/servicesData';

const clinicInfo = {
  mapLink: 'https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6',
  address:
    'Deep Nagar, Birring Road, Jalandhar Cantt, Near Aggarwal Sweets, Jalandhar, Punjab 144005',
  phone: '+91 99889 36541',
  timings: 'Mon - Sat • 8:00 AM - 9:00 PM',
};

const ServicesPage = () => {
  return (
    <main className='bg-white'>
      <section className='bg-linear-to-b from-sky-50 via-white to-white py-16 md:py-20'>
        <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
          <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
            Services
          </p>
          <h1 className='mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl'>
            Complete Dental Care Under One Roof
          </h1>
          <p className='mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg'>
            We provide a wide range of dental treatments designed for comfort, precision, and lasting oral health. Every plan is customized after thorough diagnosis and discussion.
          </p>
        </div>
      </section>

      <section className='pb-16 md:pb-20'>
        <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6'>
          <div className='md:col-span-2'>
            <div className='grid gap-4 sm:grid-cols-2'>
              {servicesData.map((service) => (
                <article
                  key={service.title}
                  className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md'
                >
                  <span className='inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700'>
                    {service.badge}
                  </span>
                  <h2 className='mt-4 text-lg font-semibold text-slate-900'>{service.title}</h2>
                  <p className='mt-2 text-sm leading-6 text-slate-600'>{service.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className='h-fit rounded-3xl border border-sky-100 bg-slate-950 p-6 text-slate-200 shadow-xl md:sticky md:top-24'>
            <h3 className='text-xl font-semibold text-white'>Visit Sai Sharma Dental</h3>
            <p className='mt-3 text-sm leading-6 text-slate-300'>
              Conveniently located in Jalandhar Cantt with flexible timing for families and working professionals.
            </p>

            <div className='mt-5 space-y-3 text-sm'>
              <p>
                <span className='font-semibold text-cyan-300'>Address:</span> {clinicInfo.address}
              </p>
              <p>
                <span className='font-semibold text-cyan-300'>Phone:</span> {clinicInfo.phone}
              </p>
              <p>
                <span className='font-semibold text-cyan-300'>Hours:</span> {clinicInfo.timings}
              </p>
            </div>

            <div className='mt-6 flex flex-col gap-3'>
              <a
                href={clinicInfo.mapLink}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-cyan-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
              >
                Open in Google Maps
              </a>
              <a
                href='tel:+919988936541'
                className='rounded-full border border-slate-700 px-5 py-2.5 text-center text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-900'
              >
                Call for Appointment
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
