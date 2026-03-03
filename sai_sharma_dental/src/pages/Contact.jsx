import ContactSection from '../components/clinic/ContactSection';

const Contact = () => {
  return (
    <main className='bg-white'>
      <section className='bg-linear-to-b from-sky-50 via-white to-white py-14 md:py-18'>
        <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
          <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
            Contact Us
          </p>
          <h1 className='mt-4 text-4xl font-bold text-slate-900 md:text-5xl'>
            We’re Here to Help You Smile with Confidence
          </h1>
          <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600'>
            Reach out for appointments, treatment guidance, or clinic directions. Our team responds quickly and makes your visit easy.
          </p>
        </div>
      </section>

      <ContactSection />
    </main>
  );
};

export default Contact;
