import { useEffect } from "react";
import ContactForm from "../../components/ContactForm"
import Header from "../../components/Header"
import Footer from "./Footer"

const Contact = () => {
      useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <div className="bg-light-blue/50">
        <Header />
        <div className="flex bg-white max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] my-10">
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
