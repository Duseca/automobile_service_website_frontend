import BlackButton from "./BlackButton";
import bannerImage from '../assets/bannerImg.svg';
import serviceBannerImage from '../assets/serviceList.svg';
export const faqs = [
  {
    id: "faq1",
    type: "business",
    question: "How do I create a business account?",
    answer: "To create a business account, click on the 'Sign Up' button and select 'Business Account' option. You'll need to provide your business details including registration number and tax ID.",
    active: true,
  },
  {
    id: "faq2",
    type: "business",
    question: "What are the benefits of a business account?",
    answer: "Business accounts offer higher transaction limits, access to business analytics, multi-user access, invoicing tools, and dedicated business support."
  },
  {
    id: "faq3",
    type: "business",
    question: "Can I have multiple users on my business account?",
    answer: "Yes, our business accounts support multiple users with different permission levels. You can add team members and set specific access rights for each user.",
  },
  {
    id: "faq4",
    type: "business",
    question: "How are business account fees calculated?",
    answer: "Business account fees are based on your transaction volume and services used. We offer tiered pricing with discounts for higher volumes. Contact our sales team for a customized quote.",
  },
  {
    id: "faq5",
    type: "personal",
    question: "What is VeFix?",
    answer: "VeFix is a comprehensive platform that connects service providers with customers. We offer a wide range of services from home repairs to professional consultations, all in one convenient place."
  },
  {
    id: "faq6",
    type: "personal",
    question: "How do I find a specific service or product?",
    answer: "You can search for services using our search bar, browse by category, or use our interactive map to find providers near your location. Filter options help narrow down your results."
  },
  {
    id: "faq7",
    type: "personal",
    question: "How do I book a service?",
    answer: "Once you find a service provider, select your preferred service package, choose an available time slot, and proceed to checkout. You'll receive confirmation details via email and in your account.",
  },
  {
    id: "faq8",
    type: "personal",
    question: "Are the service providers verified?",
    answer: "Yes, all service providers undergo a thorough verification process including identity checks, professional certification verification, and customer review evaluation before joining our platform.",
  },
  {
    id: "faq9",
    type: "personal",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, bank transfers, and in some regions, mobile payment options. Payment methods may vary slightly by location.",
  }
];
export const serviceListCardData = [
  {
    id: 1,
    title: "Book or Buy What You Need",
    description:
      "Find trusted service providers, compare options, and book appointments or purchase car parts with just a few clicks. Convenience and confidence, all in one place.",
    gradient: "from-yellow-400 to-yellow-500",
    textColor: "text-yellow-50",
    bgImage: bannerImage,
    button: <BlackButton wFull={false} text="Explore now" />,
    icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.12 26.18L43.38 37.36L36.74 43.92L25.56 32.74V30.9L30.28 26.18H32.12ZM33.94 21.12L32 19.2L22.42 28.8V32.74L11.16 44L4.60001 37.36L15.78 26.18H19.72L21.28 24.62L13.6 16.92H11L5.38001 11.24L10.62 6L16.22 11.6V14.22L24 21.9L29.32 16.58L27.4 14.56L30 11.94H24.68L23.38 10.64L30 4L31.32 5.32V10.64L33.94 8L40.5 14.56C42.68 16.76 42.68 20.34 40.5 22.52L36.56 18.5L33.94 21.12Z" fill="#061420"/>
</svg>
,
  },
  {
    id: 2,
    title: "List Your Products & Services",
    description:
      "Share your expertise with the community. From spare parts to detailing services — create listings, manage bookings, and grow your automotive business with ease.",
    gradient: "from-blue-500 to-blue-600",
    textColor: "text-blue-50",
    bgImage: serviceBannerImage,
    button: (
      <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
        Add your listing
      </button>
    ),
    icon:<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_8610_5341"  maskUnits="userSpaceOnUse" x="11" y="11" width="38" height="38">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 21H48L46 48H14L12 21Z" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/>
<path d="M22 25V12H38V25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 40H38" stroke="black" stroke-width="2" stroke-linecap="round"/>
</mask>
<g mask="url(#mask0_8610_5341)">
<path d="M6 6H54V54H6V6Z" fill="#FEFEFE"/>
</g>
</svg>

,


  },
];