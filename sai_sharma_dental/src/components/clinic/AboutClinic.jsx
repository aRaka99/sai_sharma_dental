import { useEffect, useState } from 'react';

import clinicPlaceholder1 from '../../assets/images/first_photo.jpg';
import clinicPlaceholder2 from '../../assets/images/second_photo.jpg';
import clinicPlaceholder3 from '../../assets/images/third_photo.jpg';

const clinicInfo = {
  name: 'Sai Sharma Dental',
  tagline: 'Modern Dentistry with a Gentle Touch',
  description:
    'Sai Sharma Dental provides patient-first dental care focused on comfort, precision, and long-term oral health. Our clinic combines advanced treatment methods with strict hygiene standards to deliver safe and trusted care for every age group.',
  address:
    'Deep Nagar, Birring Road, Jalandhar Cantt, Near Aggarwal Sweets, Jalandhar, Punjab 144005',
  phone: '+91 99889 36541',
  timings: 'Mon - Sat • 8:00 AM - 9:00 PM',
  mapLink: 'https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6',
};

const points = [
  'Advanced diagnostics and painless treatment approach',
  'Sterilization-first workflow with high safety standards',
  'Personalized smile and preventive dental care plans',
];

const clinicGallery = [clinicPlaceholder1, clinicPlaceholder2, clinicPlaceholder3];

const AboutClinic = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % clinicGallery.length);
    }, 3500);

    return () => clearInterval(slideTimer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + clinicGallery.length) % clinicGallery.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % clinicGallery.length);
  };

  return (
    <section className='bg-white py-16 md:py-20'>
      <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-center md:px-6'>
        <div>
          <p className='inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-800'>
            About Our Clinic
          </p>
          <h2 className='mt-4 text-3xl font-bold leading-tight text-slate-900 md:text-4xl'>
            {clinicInfo.name}
          </h2>
          <p className='mt-2 text-sm font-semibold uppercase tracking-wider text-cyan-600'>
            {clinicInfo.tagline}
          </p>
          <p className='mt-5 text-base leading-7 text-slate-600'>{clinicInfo.description}</p>

          <ul className='mt-6 space-y-2'>
            {points.map((item) => (
              <li key={item} className='flex items-start gap-2 text-sm text-slate-700'>
                <span className='mt-1 h-2 w-2 rounded-full bg-cyan-500' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='rounded-3xl border border-sky-100 bg-linear-to-br from-sky-50 to-white p-6 shadow-xl shadow-sky-100/50 md:p-8'>
          <div className='overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm'>
            <div className='relative aspect-16/10 w-full'>
              {clinicGallery.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Sai Sharma Dental clinic view ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    activeSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <div className='absolute inset-x-0 bottom-3 flex items-center justify-center gap-2'>
                {clinicGallery.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type='button'
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? 'w-6 bg-cyan-500' : 'w-2.5 bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type='button'
                onClick={goToPrevSlide}
                className='absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white'
                aria-label='Previous slide'
              >
                ‹
              </button>
              <button
                type='button'
                onClick={goToNextSlide}
                className='absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white'
                aria-label='Next slide'
              >
                ›
              </button>
            </div>
          </div>

          <h3 className='text-lg font-semibold text-slate-900'>Visit Our Clinic</h3>

          <div className='mt-5 space-y-4 text-sm text-slate-700'>
            <p>
              <span className='font-semibold text-slate-900'>Address:</span> {clinicInfo.address}
            </p>
            <p>
              <span className='font-semibold text-slate-900'>Call:</span> {clinicInfo.phone}
            </p>
            <p>
              <span className='font-semibold text-slate-900'>Hours:</span> {clinicInfo.timings}
            </p>
          </div>

          <div className='mt-6 flex flex-wrap gap-3'>
            <a
              href={clinicInfo.mapLink}
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
            >
              Open in Google Maps
            </a>
            <a
              href='tel:+919988936541'
              className='rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50'
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
