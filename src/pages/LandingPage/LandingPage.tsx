
import Hero from '../../components/Hero'
import FAQ from './FAQ'
import Footer from './Footer'
import GetStarted from './GetStarted'
import bgImage from '../../assets/bgImage.svg';
import BeSeen from './BeSeen';
import Banner from './Banner';
import ServicePlatform from './ServicePlatform';
import VeFixBookingSection from '../../components/VeFixBookingSection';
import Reviews from './Reviews';
import SupportSection from './SupportSection';
import HowItWorks from './HowItWorks';
import { useEffect } from 'react';
import Header from '../../components/Header';
const LandingPage = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Header />
      <Hero bgImage={bgImage}
       subtitle={"Whether you need a quick oil change, a trusted mechanic, or you're a garage looking to offer your services, we make it easy to connect the right people at the right time."}
  
        titleTwo={""}
          title={"Auto Care Made Easy for Everyone"} />
          <div >
          <BeSeen />
          <ServicePlatform />
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

export default LandingPage
