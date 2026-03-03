const clinicContact = {
  phoneDisplay: '+91 99889 36541',
  phoneHref: 'tel:+919988936541',
  email: 'care@saisharmadental.com',
  address:
    'Deep Nagar, Birring Road, Jalandhar Cantt, Near Aggarwal Sweets, Jalandhar, Punjab 144005',
  timings: 'Mon - Sat • 8:00 AM - 9:00 PM',
  mapLink: 'https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6',
};

const ContactSection = () => {
  return (
    <section className='py-16 md:py-20'>
      <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
        <div className='grid gap-6 md:grid-cols-3'>
          <article className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'>
            <p className='text-sm font-semibold text-sky-800'>Call Us</p>
            <a
              href={clinicContact.phoneHref}
              className='mt-2 block text-lg font-bold text-slate-900 transition-colors hover:text-cyan-600'
            >
              {clinicContact.phoneDisplay}
            </a>
            <p className='mt-2 text-sm text-slate-600'>Quick support for appointments and treatment guidance.</p>
          </article>

          <article className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'>
            <p className='text-sm font-semibold text-sky-800'>Visit Clinic</p>
            <p className='mt-2 text-sm leading-6 text-slate-700'>{clinicContact.address}</p>
            <a
              href={clinicContact.mapLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-100'
            >
              Open in Google Maps
            </a>
          </article>

          <article className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'>
            <p className='text-sm font-semibold text-sky-800'>Hours & Email</p>
            <p className='mt-2 text-sm text-slate-700'>{clinicContact.timings}</p>
            <a
              href={`mailto:${clinicContact.email}`}
              className='mt-2 inline-block text-sm font-medium text-cyan-700 transition-colors hover:text-cyan-800'
            >
              {clinicContact.email}
            </a>
            <p className='mt-3 text-xs text-slate-500'>Appointments available throughout the week.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
