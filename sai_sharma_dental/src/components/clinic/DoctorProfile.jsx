import { useEffect, useState } from 'react';

import doctorSlide1 from '../../assets/images/fourth_photo.jpg';
import doctorSlide2 from '../../assets/images/fifth_photo.jpg';
import doctorSlide3 from '../../assets/images/sixth_photo.jpg';

const clinicLinks = {
  instagram: 'https://www.instagram.com/saisharmadentalclinic/?hl=en',
  maps: 'https://maps.app.goo.gl/jjfiUnSrTiZJFkSo6',
};

const expertisePoints = [
  'Comprehensive family dentistry and preventive care',
  'Painless treatment planning with patient-first consultation',
  'Aesthetic smile solutions with modern dental technology',
];

const doctorGallery = [doctorSlide1, doctorSlide2, doctorSlide3];

const DoctorProfile = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % doctorGallery.length);
    }, 3500);

    return () => clearInterval(slideTimer);
  }, []);

  const goToPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + doctorGallery.length) % doctorGallery.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % doctorGallery.length);
  };

  return (
    <section className='bg-white py-16 md:py-20'>
      <div className='mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:items-stretch md:px-6'>
        <div className='rounded-3xl border border-sky-100 bg-slate-950 p-6 text-slate-200 shadow-xl md:p-8'>
          <div className='overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-sm'>
            <div className='relative aspect-16/10 w-full'>
              {doctorGallery.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Doctor profile view ${index + 1}`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    activeSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              <div className='absolute inset-x-0 bottom-3 flex items-center justify-center gap-2'>
                {doctorGallery.map((_, index) => (
                  <button
                    key={`doctor-dot-${index}`}
                    type='button'
                    onClick={() => setActiveSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      activeSlide === index ? 'w-6 bg-cyan-500' : 'w-2.5 bg-white/80'
                    }`}
                    aria-label={`Go to doctor slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type='button'
                onClick={goToPrevSlide}
                className='absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white'
                aria-label='Previous doctor slide'
              >
                ‹
              </button>
              <button
                type='button'
                onClick={goToNextSlide}
                className='absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow-sm transition-colors hover:bg-white'
                aria-label='Next doctor slide'
              >
                ›
              </button>
            </div>
          </div>

          <p className='mt-5 inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300'>
            Meet Your Dental Team
          </p>

          <h2 className='mt-4 text-3xl font-bold text-white md:text-4xl'>
            Expert Care by Sai Sharma Dental Clinic
          </h2>
          <p className='mt-4 text-sm leading-7 text-slate-300 md:text-base'>
            Our dental team focuses on comfortable, evidence-based treatment and clear guidance at every step so every patient feels confident and cared for.
          </p>

          <ul className='mt-6 space-y-2'>
            {expertisePoints.map((item) => (
              <li key={item} className='flex items-start gap-2 text-sm text-slate-200'>
                <span className='mt-1 h-2 w-2 rounded-full bg-cyan-400' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex h-full flex-col rounded-3xl border border-sky-100 bg-linear-to-br from-sky-50 to-white p-6 shadow-lg shadow-sky-100/60 md:p-8'>
          <div className='rounded-2xl border border-sky-100 bg-white p-5'>
            <div className='mb-4 flex items-center justify-between rounded-xl bg-sky-50 px-4 py-3'>
              <div>
                <p className='text-sm font-semibold text-slate-900'>Clinical Expertise</p>
                <p className='text-xs text-slate-600'>Compassionate care with advanced dentistry</p>
              </div>
              <span className='rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white'>Trusted Care</span>
            </div>

            <p className='text-sm font-semibold text-sky-800'>Clinic Presence</p>
            <h3 className='mt-2 text-xl font-semibold text-slate-900'>Connect & Locate Us Easily</h3>
            <p className='mt-3 text-sm leading-6 text-slate-600'>
              View treatment updates on Instagram and get directions to our clinic directly from Google Maps.
            </p>

            <div className='mt-5 flex flex-wrap gap-3'>
              <a
                href={clinicLinks.instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cyan-600'
              >
                Visit Instagram
              </a>
              <a
                href={clinicLinks.maps}
                target='_blank'
                rel='noopener noreferrer'
                className='rounded-full border border-sky-200 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition-colors hover:bg-sky-50'
              >
                Open Clinic on Maps
              </a>
            </div>
          </div>

          <div className='mt-4 rounded-2xl border border-cyan-100 bg-cyan-50 p-4'>
            <p className='text-sm font-semibold text-slate-900'>For appointments and treatment guidance</p>
            <p className='mt-1 text-sm text-slate-700'>Call: +91 99889 36541</p>
          </div>

          <div className='mt-4 rounded-2xl border border-sky-100 bg-white p-4'>
            <p className='text-sm font-semibold text-slate-900'>Why Patients Feel Safe Here</p>
            <div className='mt-3 grid grid-cols-3 gap-2'>
              <div className='rounded-xl bg-sky-50 px-3 py-2 text-center'>
                <p className='text-base font-bold text-sky-700'>12+</p>
                <p className='text-[11px] text-slate-600'>Years</p>
              </div>
              <div className='rounded-xl bg-sky-50 px-3 py-2 text-center'>
                <p className='text-base font-bold text-sky-700'>10k+</p>
                <p className='text-[11px] text-slate-600'>Smiles</p>
              </div>
              <div className='rounded-xl bg-sky-50 px-3 py-2 text-center'>
                <p className='text-base font-bold text-sky-700'>99%</p>
                <p className='text-[11px] text-slate-600'>Care Score</p>
              </div>
            </div>
            <p className='mt-3 text-xs leading-5 text-slate-600'>
              Clean clinical standards, gentle treatment, and clear communication at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
