import AboutClinic from '../components/clinic/AboutClinic';
import DoctorProfile from '../components/clinic/DoctorProfile';

const values = [
  {
    title: 'Patient-First Approach',
    description: 'Every treatment plan is personalized with clear guidance, comfort, and transparency.',
  },
  {
    title: 'Modern Dental Standards',
    description: 'Advanced equipment and strict sterilization protocols ensure safe, precise care.',
  },
  {
    title: 'Long-Term Oral Health',
    description: 'We focus on preventive care and sustainable treatment outcomes for every family member.',
  },
];

const About = () => {
  return (
    <main className='bg-white'>
      <section className='bg-linear-to-b from-sky-50 via-white to-white py-14 md:py-18'>
        <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
          <p className='inline-flex rounded-full border border-sky-200 bg-white px-4 py-1 text-sm font-medium text-sky-800'>
            About Sai Sharma Dental
          </p>
          <h1 className='mt-4 text-4xl font-bold text-slate-900 md:text-5xl'>
            Trusted, Gentle, and Modern Dental Care
          </h1>
          <p className='mt-4 max-w-3xl text-base leading-7 text-slate-600'>
            We combine compassion with advanced dentistry to help every patient feel comfortable, informed, and confident in their smile journey.
          </p>
        </div>
      </section>

      <AboutClinic />

      <section className='bg-slate-50 py-16 md:py-20'>
        <div className='mx-auto w-full max-w-6xl px-4 md:px-6'>
          <h2 className='text-3xl font-bold text-slate-900 md:text-4xl'>Why Families Choose Us</h2>
          <div className='mt-8 grid gap-4 md:grid-cols-3'>
            {values.map((item) => (
              <article key={item.title} className='rounded-2xl border border-sky-100 bg-white p-5 shadow-sm'>
                <h3 className='text-lg font-semibold text-slate-900'>{item.title}</h3>
                <p className='mt-2 text-sm leading-6 text-slate-600'>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DoctorProfile />
    </main>
  );
};

export default About;
