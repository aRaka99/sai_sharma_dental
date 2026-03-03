import TopBar from '../components/layout/TopBar';
import Hero from '../components/clinic/Hero';
import AboutClinic from '../components/clinic/AboutClinic';
import Services from '../components/clinic/Services';
import DoctorProfile from '../components/clinic/DoctorProfile';
import Testimonials from '../components/clinic/Testimonials';
import AppointmentCTA from '../components/clinic/AppointmentCTA';
import ContactSection from '../components/clinic/ContactSection';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <AboutClinic />
        <Services />
        <DoctorProfile />
        <Testimonials />
        <AppointmentCTA />
      </main>
    </>
  );
};

export default Home;
