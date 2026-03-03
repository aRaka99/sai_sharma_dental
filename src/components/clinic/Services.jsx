import { Link } from 'react-router-dom';
import servicesData from '../../data/servicesData';

const Services = () => {
  return (
    <section className='bg-slate-50 py-16 md:py-20'>
      <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
        <div className='flex flex-wrap items-end justify-between gap-4'>
          <div>
            <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
              Our Treatments
            </p>
            <h2 className='mt-4 text-3xl font-bold text-slate-900 md:text-4xl'>
              Complete Dental Services
            </h2>
            <p className='mt-3 max-w-2xl text-sm leading-6 text-slate-600 md:text-base'>
              From preventive care to smile aesthetics, our treatments are planned for comfort, hygiene, and long-term oral health.
            </p>
          </div>

          <Link
            to='/services'
            className='rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50'
          >
            View All Services
          </Link>
        </div>

        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {servicesData.slice(0, 3).map((service) => (
            <article key={service.title} className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'>
              <span className='inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700'>
                {service.badge}
              </span>
              <h3 className='mt-4 text-lg font-semibold text-slate-900'>{service.title}</h3>
              <p className='mt-2 text-sm leading-6 text-slate-600'>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
