import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fastandfree,
  proprecision,
  vision,
  ontime,
  consult,
  designphase,
  qualitycontrol,
  delivery,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "faqs",
    title: "FAQ",
  },
];

const services = [
  {
    title: "Fast & Free",
    description:
      "Rush jobs? No problem. Our rush service is free, delivering quality with speed.",
    icon: fastandfree,
  },
  {
    title: "Pro Precision",
    description:
      "Experts in vector conversion and embroidery design for meticulous results.",
    icon: proprecision,
  },
  {
    title: "Your Vision, Our Mission",
    description: " Collaborate with us for your project. Questions? Just ask!",
    icon: vision,
  },
  {
    title: "On-Time Assurance",
    description:
      "Timely delivery is not just a promise; it's a cornerstone of our expertise.",
    icon: ontime,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Consultation:",
    company_name: "Step-1",
    icon: consult,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Understanding Your Needs: We initiate the process with a thoughtful consultation, where we delve into your project requirements. Whether it's vector conversion, embroidery design, or image editing, we pay close attention to your goals and expectations.",
      "Evaluating the Source: In this phase, we meticulously review the source images or designs you provide, assessing their complexity and unique features.",
    ],
  },
  {
    title: "Conversion or Design Phase:",
    company_name: "Step-2",
    icon: designphase,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Vector Mastery: Our skilled designers transform raster images into precise, scalable vectors, ensuring clarity.",
      "Embroidery Finesse: For embroidery projects, we meticulously adapt designs with thread colors and stitches for a perfect result.",
      "Digital Enhancements: Image editing? Our experts refine visuals with adjustments for a compelling visual story. Questions? Ask away!",
    ],
  },
  {
    title: "Quality Control:",
    company_name: "Step-3",
    icon: qualitycontrol,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Thorough Review: Every project undergoes rigorous quality control checks to ensure that the conversion, design, or editing meets our high standards.",
      "Client Involvement: Your feedback is invaluable during this stage. We encourage your input to make any necessary adjustments, ensuring your complete satisfaction.",
    ],
  },
  {
    title: "Final Delivery:",
    company_name: "Step-4",
    icon: delivery,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "High-Quality Files: Upon successful completion, we provide you with the final converted vector, embroidery design, or edited image in various formats suitable for your specific needs, whether for printing, digital use, or embroidery machines.",
      "Detailed Guidelines: If your project involves embroidery, we also offer guidelines for proper stitching techniques to achieve the best results on your chosen materials.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Absolutely stoked wearing my company logo, vectorized to perfection! Jersey game = on point. Thanks! ✨",
    name: "Filip Cerny",
    designation: "System Admin",
    company: "Polymer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Jersey went from meh to wow! with stitch magic. My logo's never looked so legit.Thanks for the upgrade!",
    name: "Rochelle Fernandes",
    designation: "Designer",
    company: "Nudge",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    testimonial:
      "Appreciting the work of editing images of our products with great pixelation by Logo Craftsmen",
    name: "Jessica Strobehn",
    designation: "Design Lead",
    company: "Clay",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const faqs = [
  {
    question: "What is the typical turnaround time for a logo design project?",
    answer:
      "The turnaround time can vary based on the complexity of the project. Generally, we aim to deliver initial logo concepts within same day. The total duration depends on the number of revisions and client feedback. We strive to meet your deadlines and can provide estimated timelines during the initial consultation.",
  },
  {
    question: "Can you convert any image to a vector graphic?",
    answer:
      "We can convert most raster images to vector format. However, the quality and complexity of the original image can affect the conversion process. We'll assess your image during the project consultation and inform you of any limitations or challenges.",
  },
  {
    question:
      "What file formats will I receive for my vector or embroidery design?",
    answer:
      "For vector conversions, we provide the final design in commonly used vector formats such as AI, EPS, and SVG, which are ideal for printing and digital use. For embroidery designs, you&#39;ll receive the design in formats compatible with embroidery machines, such as DST, PES, or other industry-standard formats.",
  },
  {
    question: "Do you offer any guarantees or revisions for your designs?",
    answer:
      "We value client satisfaction and offer a reasonable number of revisions to ensure you are thrilled with the final design. Your feedback is crucial during the revision process, and we work closely with you to refine the design according to your preferences.",
  },
  {
    question: "How do I provide feedback during the design process?",
    answer:
      "We encourage open communication and collaboration. You can provide feedback via email or the communication platform we use for the project. Specific feedback on what you like or would like to change helps us tailor the design to your vision.",
  },
  {
    question:
      "What is the pricing structure for vector conversion and embroidery services?",
    answer:
      "Our pricing is based on the complexity of the project and the specific requirements. We offer transparent pricing with different packages to suit your needs. Contact us for a customized quote, and we'll provide detailed information about the pricing structure.",
  },
  {
    question:
      "Can you provide embroidery designs for specific fabrics and materials?",
    answer:
      "Yes, we consider the type of fabric or material you plan to use for embroidery. We provide guidelines on how the design should be stitched to achieve the best results, ensuring that it suits your chosen fabric and product.",
  },
  {
    question: "Do you offer rush services for urgent projects?",
    answer:
      "Yes, we understand that some projects have tight deadlines. We offer rush services for urgent projects, and we will work with you to accommodate your timeline. Without any Rush charges.",
  },
  {
    question:
      "How can I get started with a logo design, vector conversion, or embroidery project with Logo Craftsmen?",
    answer:
      "Getting started is easy. Simply reach out to us via our website or contact us through email or phone. We'll set up an initial consultation to discuss your project, understand your needs, and provide you with a customized plan to bring your design ideas to life.",
  },
];

export const Contacts = [{ name: "Prashant Jaiswal", link: "#" }, { name: "" }];

export const Services = [
  { name: "Vector Conversion", link: "/vector" },
  { name: "Embroidery Digitizing", link: "/embroidery" },
  { name: "Art / Visual Proofs", link: "/artvisuals" },
  { name: "Order Entry Management", link: "/orderentry" },
  { name: "Image Editing", link: "/imageedit" },
];

export const Insights = [{ name: "Portfolio", link: "/portfolio" }];

export const Company = [
  { name: "About Us", link: "#" },
  { name: "Our Team", link: "#" },
  { name: "Careers", link: "#" },
  { name: "Newsroom", link: "#" },
];

export const Icons = [
  { name: "logo-facebook", link: "#" },
  { name: "logo-twitter", link: "#" },
  { name: "logo-instagram", link: "#" },
  { name: "logo-linkedin", link: "#" },
];

export { faqs, services, technologies, experiences, testimonials, projects };
