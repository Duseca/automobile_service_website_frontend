import  { useState } from 'react'
import { faqs } from '../../components/data';
import { ToggleIcon } from '../../components/Icons';

const FAQ = () => {
 const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'personal' | 'business'>('business');

  const businessFaqs = faqs.filter(faq => faq.type === 'business');
  const otherFaqs = faqs.filter(faq => faq.type !== 'business');

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
  <div className="w-full bg-light-blue py-16 md:pt-24">
      <div className="flex flex-wrap w-full max-w-screen-xl1 mx-auto p-4 md:px-8 lg:px-8 xl1:px-[80px] my-20">
        <div className="w-full md:w-1/2">
          <div className="">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#061420] mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-[#83898F] max-w-2xl">
                Got questions? We've got honest answers. Our FAQs cover the things most people ask before getting started.
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2">
          <div className="flex justify-around  my-6 ">
            <button
              className={`py-2 px-4 font-semibold w-1/2 text-base focus:outline-none ${
                activeTab === 'business'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-[#83898F] hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('business')}
            >
              Business Account
            </button>
            <button
              className={`py-2 px-4 font-semibold w-1/2  text-base focus:outline-none ${
                activeTab === 'personal'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-[#83898F] hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Account
            </button>
          </div>
        
          <div className="text-black flex items-start justify-start">
            <ul className=" w-full">
              {(activeTab === 'business' ? businessFaqs : otherFaqs)?.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={index}>
                    <button
                      className="relative flex gap-2 items-center w-full py-5 text-2xl font-normal text-left border-b border-gray-200 md:text-lg border-base-content/10"
                      aria-expanded={isOpen}
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className={`flex-1 text-base-content ${isOpen ? 'text-primary' : 'text-black'}`}>
                        {item.question}
                      </span>
                      <ToggleIcon isOpen={isOpen} />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        isOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                      style={{ transitionProperty: "max-height" }}
                    >
                      <div className="my-5 leading-relaxed">
                        <div className="space-y-2 leading-relaxed">{item.answer}</div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
