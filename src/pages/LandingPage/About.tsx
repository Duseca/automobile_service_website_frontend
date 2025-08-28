import Hero from '../../components/Hero'
import FAQ from './FAQ'
import Footer from './Footer'
import GetStarted from './GetStarted'
import bgImage from '../../assets/bgImage.svg';
import Banner from './Banner';
import VeFixBookingSection from '../../components/VeFixBookingSection';
import Reviews from './Reviews';
import SupportSection from './SupportSection';
import HowItWorks from './HowItWorks';
import { useEffect } from 'react';
import Simplicity from './Simplicity';
import FeauturesAbout from './FeauturesAbout';
import Header from '../../components/Header';
const About = () => {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <Hero bgImage={bgImage}
       subtitle={"From oil changes to trusted mechanics and garages, VeFix makes it easy to find the right service — anytime, anywhere."}
  
        titleTwo={""}
          title={"Auto Care Made Easy for Everyone"} />
          <div >
        <Simplicity />
        <FeauturesAbout />
           <Banner />
          <VeFixBookingSection />
          <HowItWorks />
         <Reviews />
         <SupportSection />
          </div>
          <FAQ />
          <GetStarted />
          <Footer />
    </div>
  )
}

export default About
