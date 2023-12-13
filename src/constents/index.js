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
    title: "Feature 1",
    icon: web,
  },
  {
    title: "Feature 2",
    icon: mobile,
  },
  {
    title: "Feature 3",
    icon: backend,
  },
  {
    title: "Feature 4",
    icon: creator,
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
    title: "React.js Developer",
    company_name: "Step-1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Step-2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Step-3",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Step-4",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
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

export { faqs, services, technologies, experiences, testimonials, projects };
