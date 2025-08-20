import BlackButton from "./BlackButton";
import bannerImage from '../assets/bannerImg.svg';
import serviceBannerImage from '../assets/serviceList.svg';
import verifiedProvider from  '../assets/verified-provider.svg';
import securePayments from '../assets/secure-payments.svg';
import dedicatedSupport from '../assets/dedicated-support.svg';
import realReviews from '../assets/real-reviews.svg';
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