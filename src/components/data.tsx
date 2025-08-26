import BlackButton from "./BlackButton";
import bannerImage from '../assets/bannerImg.svg';
import serviceBannerImage from '../assets/serviceList.svg';
import verifiedProvider from  '../assets/verified-provider.svg';
import securePayments from '../assets/secure-payments.svg';
import dedicatedSupport from '../assets/dedicated-support.svg';
import realReviews from '../assets/real-reviews.svg';
import { FaUserEdit, FaCar,  FaKey, FaCog, FaLanguage, FaSignOutAlt } from "react-icons/fa";
import { MdLocalShipping, MdEventSeat } from "react-icons/md";
export const faqs = [
  {
    id: "faq1",
    type: "vendor",
    question: "How do I join VeFix as a vendor?",
    answer: "Click “Create Account,” choose “Business,” then complete your profile with your business info, service/product listings, pricing, and availability.",
    active: true,
  },
  {
    id: "faq2",
    type: "vendor",
    question: "Is there a fee to list on VeFix?",
    answer: "Listing is free at this current moment."
  },
  {
    id: "faq3",
    type: "vendor",
    question: "Can I manage my availability and pricing?",
    answer: "Yes, you have full control over your listings — including pricing, service hours, discounts, and product stock.",
  },
  {
    id: "faq4",
    type: "vendor",
    question: "How do I receive payments?",
    answer: "Payments are processed securely through our platform and transferred to your connected bank account on a rolling basis (e.g., every 3–5 business days).",
  },
   {
    id: "faq5",
    type: "vendor",
    question: "How do I receive payments?",
    answer: "Payments are processed securely through our platform and transferred to your connected bank account on a rolling basis (e.g., every 3–5 business days).",
  },
   {
    id: "faq6",
    type: "vendor",
    question: "How do I receive payments?",
    answer: "Payments are processed securely through our platform and transferred to your connected bank account on a rolling basis (e.g., every 3–5 business days).",
  },
  {
    id: "faq7",
    type: "vendor",
    question: "Can I offer both services and parts on VeFix?",
    answer: "Absolutely. You can list car parts, accessories, and services such as repairs, MOTs, detailing, and more — all under one business profile."
  },
  {
    id: "faq8",
    type: "vendor",
    question: "How do customer reviews work?",
    answer: "After each transaction, customers are invited to leave a review. Maintaining high ratings will boost your visibility and attract more bookings."
  },
  {
    id: "faq9",
    type: "vendor",
    question: "Can I offer emergency services or 24/7 callouts?",
    answer: "Yes. You can enable the “Emergency Callout” option in your settings and list your 24/7 offerings in the “Emergency Services” category.",
  },
  {
    id: "faq10",
    type: "vendor",
    question: "Is there support if I need help managing my listings?",
    answer: "Yes, our vendor support team is available via chat, email, or phone to assist you with listing setup, customer queries, or account management.",
  },
  {
    id: "faq11",
    type: "owner",
    question: "What is VeFix?",
    answer: "VeFix is a marketplace platform where you can find and book automotive services or purchase vehicle parts from trusted vendors across the UK.",
  },
   {
    id: "faq12",
    type: "owner",
    question: "How do I find a specific service or product?",
    answer: "Use the search bar or browse categories such as “Tyres,” “Detailing,” “Recovery Services,” or “Car Parts.” Filters help narrow down by location, price, availability, and rating.",
  },
   {
    id: "faq13",
    type: "owner",
    question: "How do I book a service?",
    answer: "Simply click on the listing, choose your desired date/time, and confirm the booking. You’ll receive a confirmation and reminder before your appointment.",
  },
   {
    id: "faq14",
    type: "owner",
    question: "Are the service providers verified?",
    answer: "Yes, all providers go through a standard verification process, including identity, business credentials, and customer reviews to maintain a safe platform.",
  },
  {
    id: "faq15",
    type: "owner",
    question: "Can I track my orders or service appointments?",
    answer: "Yes. Log into your dashboard to track service progress, order delivery, or request support if needed.",
  },
  {
    id: "faq16",
    type: "owner",
    question: "What payment methods are accepted?",
    answer: "We accept all major debit/credit cards, PayPal, and mobile payments. Some vendors may also accept cash on delivery parts & services.",
  },
   {
    id: "faq17",
    type: "owner",
    question: "What if I need to cancel or reschedule a booking?",
    answer: "You can cancel or reschedule through your account dashboard, but please review the cancellation policy of the vendor before proceeding.",
  },
   {
    id: "faq18",
    type: "owner",
    question: "How are refunds or disputes handled?",
    answer: "If a product is faulty or a service was not delivered as promised, you can raise a dispute from your account. Our team will mediate and issue a refund where applicable. Please review the refund policy of the vendor before proceeding.",
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

export const reviews = [
  "Verified Customers Only",
  "Real Experiences, Honest Feedback",
  "Helpful for Future Customers",
  "Hold Onto Clients With A Friendly Vibe",
  "Leaving A Review Is Quick And Simple",
];
export const supportData = [
  {
    title: "Verified Providers",
    description: "Only verified businesses can list products.",
    image : verifiedProvider, 
  },
  {
    title: "Real Reviews",
    description: "Genuine feedback from real customers—no fake ratings.",
    image : realReviews, 
  
  },
  {
    title: "Secure Payments",
    description: "Your payments are safe, encrypted, and hassle-free.",
    image : securePayments, 
  },
  {
    title: "Dedicated Support",
    description: "We're here to help with your booking details.",
   image : dedicatedSupport,

  },
];
export const howItWorks = [
    {
      title: "Choose a Role",
      description: "Personal Account or Business Account.",
      icon: () => <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 3H9C6.51 3 4.5 4.995 4.5 7.455V23.82C4.5 26.28 6.51 28.29 9 28.29H10.14C11.325 28.29 12.48 28.755 13.32 29.595L15.885 32.13C17.055 33.285 18.945 33.285 20.115 32.13L22.68 29.595C23.52 28.755 24.675 28.29 25.86 28.29H27C29.49 28.29 31.5 26.28 31.5 23.82V7.455C31.5 4.995 29.49 3 27 3ZM18 8.325C19.62 8.325 20.925 9.645 20.925 11.25C20.925 12.84 19.665 14.115 18.105 14.175C18.045 14.175 17.955 14.175 17.88 14.175C16.305 14.115 15.06 12.84 15.06 11.25C15.075 9.645 16.38 8.325 18 8.325ZM22.125 22.035C19.86 23.55 16.14 23.55 13.875 22.035C11.88 20.715 11.88 18.525 13.875 17.19C16.155 15.675 19.875 15.675 22.125 17.19C24.12 18.525 24.12 20.7 22.125 22.035Z" fill="#FEFEFE"/>
</svg>
,
      image: "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg"
    },
    {
      title: "Add Your Vehicle or Listing",
      description: "Get Started.",
      icon: () =><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 3H9C6.51 3 4.5 4.995 4.5 7.455V23.82C4.5 26.28 6.51 28.29 9 28.29H10.14C11.325 28.29 12.48 28.755 13.32 29.595L15.885 32.13C17.055 33.285 18.945 33.285 20.115 32.13L22.68 29.595C23.52 28.755 24.675 28.29 25.86 28.29H27C29.49 28.29 31.5 26.28 31.5 23.82V7.455C31.5 4.995 29.49 3 27 3ZM18 8.325C19.62 8.325 20.925 9.645 20.925 11.25C20.925 12.84 19.665 14.115 18.105 14.175C18.045 14.175 17.955 14.175 17.88 14.175C16.305 14.115 15.06 12.84 15.06 11.25C15.075 9.645 16.38 8.325 18 8.325ZM22.125 22.035C19.86 23.55 16.14 23.55 13.875 22.035C11.88 20.715 11.88 18.525 13.875 17.19C16.155 15.675 19.875 15.675 22.125 17.19C24.12 18.525 24.12 20.7 22.125 22.035Z" fill="#FEFEFE"/>
</svg>
,
      image: "https://images.pexels.com/photos/4489730/pexels-photo-4489730.jpeg"
    },
    {
      title: "Browse, Buy & Book",
      description: "Simple, clear, and instant.",
      icon: () => <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 3H9C6.51 3 4.5 4.995 4.5 7.455V23.82C4.5 26.28 6.51 28.29 9 28.29H10.14C11.325 28.29 12.48 28.755 13.32 29.595L15.885 32.13C17.055 33.285 18.945 33.285 20.115 32.13L22.68 29.595C23.52 28.755 24.675 28.29 25.86 28.29H27C29.49 28.29 31.5 26.28 31.5 23.82V7.455C31.5 4.995 29.49 3 27 3ZM18 8.325C19.62 8.325 20.925 9.645 20.925 11.25C20.925 12.84 19.665 14.115 18.105 14.175C18.045 14.175 17.955 14.175 17.88 14.175C16.305 14.115 15.06 12.84 15.06 11.25C15.075 9.645 16.38 8.325 18 8.325ZM22.125 22.035C19.86 23.55 16.14 23.55 13.875 22.035C11.88 20.715 11.88 18.525 13.875 17.19C16.155 15.675 19.875 15.675 22.125 17.19C24.12 18.525 24.12 20.7 22.125 22.035Z" fill="#FEFEFE"/>
</svg>
,
      image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg"
    },
      {
      title: "Done & Dusted",
      description: "Sit back, we’ll handle the rest.",
      icon: () => <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27 3H9C6.51 3 4.5 4.995 4.5 7.455V23.82C4.5 26.28 6.51 28.29 9 28.29H10.14C11.325 28.29 12.48 28.755 13.32 29.595L15.885 32.13C17.055 33.285 18.945 33.285 20.115 32.13L22.68 29.595C23.52 28.755 24.675 28.29 25.86 28.29H27C29.49 28.29 31.5 26.28 31.5 23.82V7.455C31.5 4.995 29.49 3 27 3ZM18 8.325C19.62 8.325 20.925 9.645 20.925 11.25C20.925 12.84 19.665 14.115 18.105 14.175C18.045 14.175 17.955 14.175 17.88 14.175C16.305 14.115 15.06 12.84 15.06 11.25C15.075 9.645 16.38 8.325 18 8.325ZM22.125 22.035C19.86 23.55 16.14 23.55 13.875 22.035C11.88 20.715 11.88 18.525 13.875 17.19C16.155 15.675 19.875 15.675 22.125 17.19C24.12 18.525 24.12 20.7 22.125 22.035Z" fill="#FEFEFE"/>
</svg>
,
      image: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg"
    },
  ];

  export const BusniessSelectCategory= [
    {
      id: 'car-accessories',
      title: 'Car Accessories Store',
      image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg'
    },
    {
      id: 'spare-parts',
      title: 'Spare Parts Dealer',
      image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg'
    },
    {
      id: 'car-wash',
      title: 'Car Wash & Detailing',
      image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg'
    },
    {
      id: 'tyre-shop',
      title: 'Tyre Shop',
      image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg'
    },
    {
      id: 'workshop',
      title: 'Workshop Services',
      image: 'https://images.pexels.com/photos/1460838/pexels-photo-1460838.jpeg',
      disabled: false
    }
  ];
export const featuresAbout =  [
    {
      id: 'built-for-everyone',
      title: 'Built for Everyone',
      description: 'Our platform is designed for you, whether you\'re scheduling a service or offering one.',
      icon: <svg  width="25" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.9875 15L25.575 13.2375C25.3 13.1375 25.0315 13.0125 24.7695 12.8625C24.5075 12.7125 24.2635 12.5375 24.0375 12.3375L22.3125 12.9L21.3 11.175L22.6125 9.9C22.5625 9.6 22.5375 9.3 22.5375 9C22.5375 8.7 22.5625 8.4 22.6125 8.1L21.3 6.9L22.3125 5.175L24 5.6625C24.225 5.4625 24.469 5.2875 24.732 5.1375C24.995 4.9875 25.276 4.8625 25.575 4.7625L25.9875 3H27.975L28.425 4.725C28.725 4.85 29.0065 4.9875 29.2695 5.1375C29.5325 5.2875 29.776 5.4625 30 5.6625L31.6875 5.175L32.7 6.9L31.425 8.1C31.475 8.4 31.5065 8.7065 31.5195 9.0195C31.5325 9.3325 31.501 9.6385 31.425 9.9375L32.7 11.1375L31.725 12.8625L30 12.3375C29.775 12.5375 29.525 12.7125 29.25 12.8625C28.975 13.0125 28.7 13.1375 28.425 13.2375L27.975 15H25.9875ZM27 11.25C27.625 11.25 28.1565 11.0315 28.5945 10.5945C29.0325 10.1575 29.251 9.626 29.25 9C29.249 8.374 29.0305 7.843 28.5945 7.407C28.1585 6.971 27.627 6.752 27 6.75C26.373 6.748 25.842 6.967 25.407 7.407C24.972 7.847 24.753 8.378 24.75 9C24.747 9.622 24.966 10.1535 25.407 10.5945C25.848 11.0355 26.379 11.254 27 11.25ZM11.25 24C11.875 24 12.4065 23.7815 12.8445 23.3445C13.2825 22.9075 13.501 22.376 13.5 21.75C13.499 21.124 13.2805 20.593 12.8445 20.157C12.4085 19.721 11.877 19.502 11.25 19.5C10.623 19.498 10.092 19.717 9.657 20.157C9.222 20.597 9.003 21.128 9 21.75C8.997 22.372 9.216 22.9035 9.657 23.3445C10.098 23.7855 10.629 24.004 11.25 24ZM24.75 24C25.375 24 25.9065 23.7815 26.3445 23.3445C26.7825 22.9075 27.001 22.376 27 21.75C26.999 21.124 26.7805 20.593 26.3445 20.157C25.9085 19.721 25.377 19.502 24.75 19.5C24.123 19.498 23.592 19.717 23.157 20.157C22.722 20.597 22.503 21.128 22.5 21.75C22.497 22.372 22.716 22.9035 23.157 23.3445C23.598 23.7855 24.129 24.004 24.75 24ZM27 18C27.8 18 28.5815 17.9 29.3445 17.7C30.1075 17.5 30.826 17.2 31.5 16.8V30C31.5 30.425 31.356 30.7815 31.068 31.0695C30.78 31.3575 30.424 31.501 30 31.5H28.5C28.075 31.5 27.719 31.356 27.432 31.068C27.145 30.78 27.001 30.424 27 30V28.5H9V30C9 30.425 8.856 30.7815 8.568 31.0695C8.28 31.3575 7.924 31.501 7.5 31.5H6C5.575 31.5 5.219 31.356 4.932 31.068C4.645 30.78 4.501 30.424 4.5 30V18L7.6125 9C7.7625 8.55 8.0315 8.1875 8.4195 7.9125C8.8075 7.6375 9.251 7.5 9.75 7.5H18.15C18.1 7.75 18.0625 7.994 18.0375 8.232C18.0125 8.47 18 8.726 18 9C18 9.274 18.0125 9.5305 18.0375 9.7695C18.0625 10.0085 18.1 10.252 18.15 10.5H10.275L8.7 15H20.325C21.2 15.95 22.2125 16.6875 23.3625 17.2125C24.5125 17.7375 25.725 18 27 18Z" fill="#FFCC00"/>
</svg>

    },
    {
      id: 'shop-service',
      title: 'Shop & Service in One Place',
      description: 'Order parts, book services, and compare — all without switching tabs.',
      icon:<svg  width="25" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.96 4.31994V1.43994H5.04V4.31994H0V35.2799H2.88V7.19994H5.04V10.0799H30.96V7.19994H33.12V35.2799H36V4.31994H30.96ZM30.2774 20.8799L25.5794 12.8699C25.393 12.5236 24.9242 12.2399 24.5383 12.2399H11.461C11.075 12.2399 10.6063 12.5236 10.4206 12.8699L5.72328 20.8799C4.95144 20.8799 4.32 21.5279 4.32 22.3199V29.5199C4.32 30.3119 4.95144 30.9599 5.72328 30.9599H7.2V33.1199C7.2 34.3079 8.07336 35.2799 9.2304 35.2799H9.9324C11.0894 35.2799 12.24 34.3079 12.24 33.1199V30.9599H23.76V33.1199C23.76 34.3079 24.9098 35.2799 26.0676 35.2799H26.7696C27.9266 35.2799 28.8 34.3079 28.8 33.1199V30.9599H30.2774C31.0486 30.9599 31.68 30.3119 31.68 29.5199V22.3199C31.68 21.5279 31.0486 20.8799 30.2774 20.8799ZM8.17848 26.6399C7.21008 26.6399 6.42456 25.8343 6.42456 24.8399C6.42456 23.8456 7.21008 23.0399 8.17848 23.0399C9.1476 23.0399 9.9324 23.8456 9.9324 24.8399C9.9324 25.8343 9.1476 26.6399 8.17848 26.6399ZM9.2304 20.8799L12.4243 15.0436C12.5971 14.6894 13.0543 14.3999 13.4395 14.3999H22.5598C22.9457 14.3999 23.4029 14.6894 23.575 15.0436L26.7696 20.8799H9.2304ZM27.8215 26.6399C26.8531 26.6399 26.0676 25.8343 26.0676 24.8399C26.0676 23.8456 26.8531 23.0399 27.8215 23.0399C28.7906 23.0399 29.5762 23.8456 29.5762 24.8399C29.5762 25.8343 28.7899 26.6399 27.8215 26.6399Z" fill="#FFCC00"/>
</svg>

    },
    {
      id: 'smart-matching',
      title: 'Smart Vehicle Matching',
      description: 'We connect services and parts to your car — no guesswork, just the perfect match.',
      icon: <svg  width="25" height="36" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 30.5C1.075 30.5 0.719 30.356 0.432 30.068C0.145 29.78 0.001 29.424 0 29V17L3.15 8C3.3 7.55 3.569 7.1875 3.957 6.9125C4.345 6.6375 4.776 6.5 5.25 6.5H10.5V8.5625C10.5 8.7125 10.5065 8.869 10.5195 9.032C10.5325 9.195 10.551 9.351 10.575 9.5H5.775L4.2 14H13.7625L18.7875 19.025C18.5375 19.225 18.344 19.475 18.207 19.775C18.07 20.075 18.001 20.4 18 20.75C18 21.375 18.219 21.9065 18.657 22.3445C19.095 22.7825 19.626 23.001 20.25 23C20.75 23 21.2 22.85 21.6 22.55C22 22.25 22.2625 21.8625 22.3875 21.3875C22.6625 21.4375 22.931 21.475 23.193 21.5C23.455 21.525 23.724 21.5125 24 21.4625C24.55 21.4125 25.0815 21.275 25.5945 21.05C26.1075 20.825 26.576 20.5125 27 20.1125V29C27 29.425 26.856 29.7815 26.568 30.0695C26.28 30.3575 25.924 30.501 25.5 30.5H24C23.575 30.5 23.219 30.356 22.932 30.068C22.645 29.78 22.501 29.424 22.5 29V27.5H4.5V29C4.5 29.425 4.356 29.7815 4.068 30.0695C3.78 30.3575 3.424 30.501 3 30.5H1.5ZM6.75 23C7.375 23 7.9065 22.7815 8.3445 22.3445C8.7825 21.9075 9.001 21.376 9 20.75C8.999 20.124 8.7805 19.593 8.3445 19.157C7.9085 18.721 7.377 18.502 6.75 18.5C6.123 18.498 5.592 18.717 5.157 19.157C4.722 19.597 4.503 20.128 4.5 20.75C4.497 21.372 4.716 21.9035 5.157 22.3445C5.598 22.7855 6.129 23.004 6.75 23ZM21.825 17.825L14.175 10.175C13.975 9.975 13.8125 9.731 13.6875 9.443C13.5625 9.155 13.5 8.862 13.5 8.564V2.75C13.5 2.125 13.719 1.594 14.157 1.157C14.595 0.72 15.126 0.501 15.75 0.5H21.5625C21.8625 0.5 22.1565 0.5625 22.4445 0.6875C22.7325 0.8125 22.976 0.975 23.175 1.175L30.825 8.825C31.25 9.25 31.4625 9.7815 31.4625 10.4195C31.4625 11.0575 31.25 11.5885 30.825 12.0125L25.0125 17.825C24.5875 18.25 24.0565 18.4625 23.4195 18.4625C22.7825 18.4625 22.251 18.25 21.825 17.825ZM19.5 8C19.925 8 20.2815 7.856 20.5695 7.568C20.8575 7.28 21.001 6.924 21 6.5C20.999 6.076 20.855 5.72 20.568 5.432C20.281 5.144 19.925 5 19.5 5C19.075 5 18.719 5.144 18.432 5.432C18.145 5.72 18.001 6.076 18 6.5C17.999 6.924 18.143 7.2805 18.432 7.5695C18.721 7.8585 19.077 8.002 19.5 8Z" fill="#FFCC00"/>
</svg>

    },
    {
      id: 'real-time-booking',
      title: 'Real-Time Booking & Updates',
      description: 'Our platform is designed for you, whether you\'re scheduling a service or offering one.',
     icon:<svg  width="25" height="36" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 30.5C1.075 30.5 0.719 30.356 0.432 30.068C0.145 29.78 0.001 29.424 0 29V17L3.15 8C3.3 7.55 3.569 7.1875 3.957 6.9125C4.345 6.6375 4.776 6.5 5.25 6.5H10.5V8.5625C10.5 8.7125 10.5065 8.869 10.5195 9.032C10.5325 9.195 10.551 9.351 10.575 9.5H5.775L4.2 14H13.7625L18.7875 19.025C18.5375 19.225 18.344 19.475 18.207 19.775C18.07 20.075 18.001 20.4 18 20.75C18 21.375 18.219 21.9065 18.657 22.3445C19.095 22.7825 19.626 23.001 20.25 23C20.75 23 21.2 22.85 21.6 22.55C22 22.25 22.2625 21.8625 22.3875 21.3875C22.6625 21.4375 22.931 21.475 23.193 21.5C23.455 21.525 23.724 21.5125 24 21.4625C24.55 21.4125 25.0815 21.275 25.5945 21.05C26.1075 20.825 26.576 20.5125 27 20.1125V29C27 29.425 26.856 29.7815 26.568 30.0695C26.28 30.3575 25.924 30.501 25.5 30.5H24C23.575 30.5 23.219 30.356 22.932 30.068C22.645 29.78 22.501 29.424 22.5 29V27.5H4.5V29C4.5 29.425 4.356 29.7815 4.068 30.0695C3.78 30.3575 3.424 30.501 3 30.5H1.5ZM6.75 23C7.375 23 7.9065 22.7815 8.3445 22.3445C8.7825 21.9075 9.001 21.376 9 20.75C8.999 20.124 8.7805 19.593 8.3445 19.157C7.9085 18.721 7.377 18.502 6.75 18.5C6.123 18.498 5.592 18.717 5.157 19.157C4.722 19.597 4.503 20.128 4.5 20.75C4.497 21.372 4.716 21.9035 5.157 22.3445C5.598 22.7855 6.129 23.004 6.75 23ZM21.825 17.825L14.175 10.175C13.975 9.975 13.8125 9.731 13.6875 9.443C13.5625 9.155 13.5 8.862 13.5 8.564V2.75C13.5 2.125 13.719 1.594 14.157 1.157C14.595 0.72 15.126 0.501 15.75 0.5H21.5625C21.8625 0.5 22.1565 0.5625 22.4445 0.6875C22.7325 0.8125 22.976 0.975 23.175 1.175L30.825 8.825C31.25 9.25 31.4625 9.7815 31.4625 10.4195C31.4625 11.0575 31.25 11.5885 30.825 12.0125L25.0125 17.825C24.5875 18.25 24.0565 18.4625 23.4195 18.4625C22.7825 18.4625 22.251 18.25 21.825 17.825ZM19.5 8C19.925 8 20.2815 7.856 20.5695 7.568C20.8575 7.28 21.001 6.924 21 6.5C20.999 6.076 20.855 5.72 20.568 5.432C20.281 5.144 19.925 5 19.5 5C19.075 5 18.719 5.144 18.432 5.432C18.145 5.72 18.001 6.076 18 6.5C17.999 6.924 18.143 7.2805 18.432 7.5695C18.721 7.8585 19.077 8.002 19.5 8Z" fill="#FFCC00"/>
</svg>

    },
    {
      id: 'transparent-secure',
      title: 'Transparent & Secure',
      description: 'From payments to profiles, we keep your data and transactions protected.',
       icon: <svg width="20" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 5.90991L15 0.659912L0 5.90991V17.9999C0 24.1904 3.801 28.5179 7.344 31.2044C9.48312 32.8101 11.8293 34.1194 14.319 35.0969C14.489 35.1609 14.66 35.2219 14.832 35.2799L15 35.3399L15.171 35.2799C15.499 35.166 15.8241 35.044 16.146 34.9139C18.4646 33.9586 20.6522 32.7121 22.656 31.2044C26.2005 28.5179 30 24.1904 30 17.9999V5.90991ZM13.5015 23.1224L7.14 16.7579L9.261 14.6354L13.503 18.8789L21.9885 10.3934L24.111 12.5144L13.5015 23.1224Z" fill="#FFCC00"/>
</svg>


    },
    {
      id: 'connect-directly',
      title: 'Connect Directly',
      description: 'Contact service providers or customers directly — without any hassle.',
       icon: <svg width="20" height="36" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4559 25.2883C17.3011 26.3598 16.7654 27.3396 15.9469 28.0482C15.1285 28.7569 14.0822 29.1469 12.9996 29.1469C11.917 29.1469 10.8707 28.7569 10.0523 28.0482C9.23383 27.3396 8.69814 26.3598 8.54331 25.2883H17.4559ZM12.9996 0.857178C15.8417 0.856912 18.572 1.96382 20.6116 3.94312C22.6511 5.92241 23.8394 8.61838 23.9243 11.4592V11.787H23.9295V17.0739L25.7475 21.759C25.7963 21.8859 25.8293 22.017 25.8465 22.1525L25.8593 22.3543C25.8595 22.762 25.7084 23.1552 25.4352 23.4578C25.1621 23.7605 24.7863 23.9509 24.3807 23.9923L24.2136 24H1.78174C1.52822 24.0002 1.27809 23.9419 1.05085 23.8295C0.823606 23.7171 0.625405 23.5537 0.471705 23.3521C0.318005 23.1504 0.212963 22.916 0.164772 22.6672C0.116581 22.4183 0.126545 22.1616 0.193886 21.9172L0.247885 21.7577L2.06846 17.0726V11.7883C2.06812 10.3527 2.35063 8.93113 2.89985 7.60475C3.44907 6.27837 4.25424 5.0732 5.26936 4.05808C6.28448 3.04296 7.48965 2.2378 8.81603 1.68857C10.1424 1.13935 11.564 0.85684 12.9996 0.857178Z" fill="#FFCC00"/>
</svg>

    }
  ];
   export const productCategories = [
      {
        id: 'service-parts',
        name: 'Service Parts',
        image: 'https://plus.unsplash.com/premium_photo-1661501041641-3e731115e687?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'brakes',
        name: 'Brakes',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'engine',
        name: 'Engine',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'suspension',
        name: 'Suspension',
        image: 'https://plus.unsplash.com/premium_photo-1661501041641-3e731115e687?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'transmission',
        name: 'Transmission',
        image: 'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'electrical',
        name: 'Electrical',
        image: 'https://images.unsplash.com/photo-1641494639075-5571f7ef486b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'lighting',
        name: 'Lighting',
        image: 'https://images.unsplash.com/photo-1608506375591-b90e1f955e4b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'security',
        name: 'Security',
        image: 'https://images.unsplash.com/photo-1605164598708-25701594473e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'exhaust',
        name: 'Exhaust',
        image: 'https://images.unsplash.com/photo-1641494639075-5571f7ef486b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'cooling',
        name: 'Cooling',
        image: 'https://images.unsplash.com/photo-1605164598708-25701594473e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
       {
        id: 'cooling-I',
        name: 'Cooling',
        image: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg'
      }
      , {
        id: 'cooling-II',
        name: 'Cooling',
        image: 'https://plus.unsplash.com/premium_photo-1661454209648-4764099a9be9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
      , {
        id: 'cooling-III',
        name: 'Cooling',
        image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg'
      }
      , {
        id: 'cooling-IV',
        name: 'Cooling',
        image: 'https://images.pexels.com/photos/1835897/pexels-photo-1835897.jpeg'
      } 
    ];
     export const relatedProducts = [
    {
      id: "1",
      category: "Air Filters",
      name: "EcoBoost Air Filter",
      vendor: "Speedy Wheels Garage",
      vendorLogo: "🚗",
      price: 23.0,
      rating: 4.8,
      reviewCount: 121,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "2",
      category: "Air Filters",
      name: "Duracell Car Battery",
      vendor: "VoltAuto Supplies",
      vendorLogo: "🔋",
      price: 120.0,
      rating: 4.5,
      reviewCount: 95,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "3",
      category: "Air Filters",
      name: "Bosch Spark Plug",
      vendor: "AutoKing Supplies",
      vendorLogo: "⚡",
      price: 12.5,
      rating: 4.7,
      reviewCount: 200,
      image: "https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
   
   
  ];
 export  const suggestedProducts = [
    {
      id: 1,
      name: 'Smell Fresh',
      description: 'Air Filters + Air Freshener',
      price: '$21.00',
      image: 'https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Protect & Wash',
      description: 'Air Filter + Paint',
      price: '$28.59',
      image: 'https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      isSelected: true
    },
    {
      id: 3,
      name: 'Car Care & Fun',
      description: 'Air Filter + Brake Pads',
      price: '$36.00',
      image: 'https://images.unsplash.com/photo-1604492642440-063264f0b74e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
   export const relatedServices= [
    {
      id: "11",
      category: "Car Wash",
      name: "Basic Car Wash",
      vendor: "Shiny Motors",
      vendorLogo: "🚿",
      price: 30.0,
      rating: 4.6,
      reviewCount: 180,
      image: "https://images.unsplash.com/photo-1627828982773-42814bc7e22e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "12",
      category: "Car Wash",
      name: "Interior Detailing",
      vendor: "Crystal Auto Spa",
      vendorLogo: "✨",
      price: 75.0,
      rating: 4.9,
      reviewCount: 240,
      image: "https://images.unsplash.com/photo-1681356854285-17645401bf47?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "13",
      category: "Car Wash",
      name: "Full Engine Checkup",
      vendor: "Prime Auto Care",
      vendorLogo: "🔧",
      price: 150.0,
      rating: 4.8,
      reviewCount: 300,
      image: "https://images.unsplash.com/photo-1627828982773-42814bc7e22e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "14",
      category: "Car Wash",
      name: "Brake Pad Replacement",
      vendor: "SafeDrive Repairs",
      vendorLogo: "🛠️",
      price: 110.0,
      rating: 4.7,
      reviewCount: 170,
      image: "https://images.unsplash.com/photo-1681356854285-17645401bf47?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
     {
      id: "15",
      category: "Car Wash",
      name: "Brake Pad Replacement",
      vendor: "SafeDrive Repairs",
      vendorLogo: "🛠️",
      price: 110.0,
      rating: 4.7,
      reviewCount: 170,
      image: "https://plus.unsplash.com/premium_photo-1673214881634-75644d01f266?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  export const orderItems = [ {
      id: 1,
      name: 'Bosch Engine',
      price: 18.50,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1575844611093-ed16474b4f44?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      name: 'Mann Filter',
      price: 19.75,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1575844611093-ed16474b4f44?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }]

  export const deliveryData = [
  {
    label: "Full Address",
    value: "123 Main Street, Southwale, Los Angeles, 22118",
  },
  {
    label: "City",
    value: "Los Angeles",
  },
  {
    label: "Postal Code",
    value: "5454",
  },
  {
    label: "Country",
    value: "USA",
  },
  {
    label: "Delivery Instructions",
    value: "Leave package at the front door.",
  },
];

export const vehicleDeliveryData = [
  {
    label: "Make",
    value: "Toyota",
  },
  {
    label: "Model",
    value: "Corolla",
  },
  {
    label: "Year",
    value: "2022",
  },
  {
    label: "Engine Size",
    value: "1.8L",
  },
  {
    label: "Fuel Type",
    value: "Petrol",
  },
  {
    label: "Transmission",
    value: "Automatic",
  },
  {
    label: "Color",
    value: "White",
  },
  {
    label: "VIN",
    value: "1HGCM82633A123456",
  },
  {
    label: "Registration Number",
    value: "ABC-1234",
  },
  {
    label: "Mileage",
    value: "15,000 km",
  },
];
export const sidebarLinks = [ 
  { name: "Edit Profile", path: "/dashboard/vehicleOwner", icon: <FaUserEdit /> },
  { name: "Vehicles", path: "/dashboard/vehicleOwner/vehicles", icon: <FaCar /> },
  { name: "Orders", path: "/dashboard/vehicleOwner/orders", icon: <MdLocalShipping /> },
  { name: "Bookings", path: "/dashboard/vehicleOwner/bookings", icon: <MdEventSeat /> },
  { name: "Change Password", path: "/dashboard/vehicleOwner/change-password", icon: <FaKey /> },
  { name: "Settings", path: "/dashboard/vehicleOwner/settings", icon: <FaCog /> },
  { name: "Language", path: "/dashboard/vehicleOwner/languages", icon: <FaLanguage /> },
  { name: "Logout", action: "logout", icon: <FaSignOutAlt /> }, 
];

export const VehicleOwnerVehiclesData = [
  {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
      year: 2021,
      engineSize: '1.8L',
      fuelType: 'Petrol',
      transmission: 'Automatic'
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
      year: 2020,
      engineSize: '2.0L',
      fuelType: 'Petrol',
      transmission: 'Manual'
    },
    {
      id: 3,
      brand: 'Ford',
      model: 'Focus',
      year: 2019,
      engineSize: '1.5L',
      fuelType: 'Diesel',
      transmission: 'Automatic'
    },
    {
      id: 4,
      brand: 'Chevrolet',
      model: 'Malibu',
      year: 2022,
      engineSize: '1.5L',
      fuelType: 'Petrol',
      transmission: 'Automatic'
    },
    {
      id: 5,
      brand: 'Nissan',
      model: 'Sentra',
      year: 2021,
      engineSize: '2.0L',
      fuelType: 'Petrol',
      transmission: 'CVT'
    }
  ];
export const VehicleOwnerOrdersData = [
    {
      id: 1,
      customer: "John Doe",
      orderId: "#ORD123",
      date: "Aug 24, 2025",
      amount: "$120",
      status: "Pending",
    },
    {
      id: 2,
      customer: "Sarah Smith",
      orderId: "#ORD124",
      date: "Aug 25, 2025",
      amount: "$250",
      status: "Completed",
    },
    {
      id: 3,
      customer: "Michael Johnson",
      orderId: "#ORD125",
      date: "Aug 26, 2025",
      amount: "$80",
      status: "Processing",
    },
     {
      id: 4,
      customer: "Michael Johnson",
      orderId: "#ORD125",
      date: "Aug 26, 2025",
      amount: "$80",
      status: "Cancelled",
    },
  ];

export const VehicleOwnerBookingsData = [
  {
    id: 1,
    bookingId: "#BK001",
    service: "Oil Change",
    date: "Aug 28, 2025",
    status: "Confirmed",
  },
  {
    id: 2,
    bookingId: "#BK002",
    service: "Car Wash",
    date: "Sep 02, 2025",
    status: "Pending",
  },
  {
    id: 3,
    bookingId: "#BK003",
    service: "Brake Inspection",
    date: "Sep 05, 2025",
    status: "Cancelled",
  },
  {
    id: 4,
    bookingId: "#BK004",
    service: "Engine Tune-up",
    date: "Sep 08, 2025",
    status: "Confirmed",
  },
  {
    id: 5,
    bookingId: "#BK005",
    service: "AC Repair",
    date: "Sep 12, 2025",
    status: "Pending",
  },
];
