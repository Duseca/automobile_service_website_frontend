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
const About = () => {
      useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero bgImage={bgImage}
       subtitle={"Whether you need a quick oil change, a trusted mechanic, or you're a garage looking to offer your services, we make it easy to connect the right people at the right time."}
  
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
