// import React from "react";

// const ServiceCard = () => {
//   return (
//     <div className="relative bg-gray-100 pt-5">
//       <div>
//         <h1 className="flex justify-center font-semibold text-2xl">
//           Explore More Services
//         </h1>
//       </div>
//       <div className="flex min-h-screen bg-gray-100 px-10 py-10 justify-center ">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//           <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px]">
//             <a href="/vector">
//               <div className="mx-auto w-full h-full justify-center bg-[url(src/assets/vectorcow.png)] bg-no-repeat bg-cover bg-center rounded-[20px]">
//                 <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px]">
//                   <h1 className="font-semibold text-xl flex justify-center mb-5">
//                     Vector Conversion
//                   </h1>
//                   <p className="mx-2">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Fugit, culpa. Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Dicta, quo?
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px]">
//             <a href="/embroidery">
//               <div className="mx-auto w-full h-full justify-center bg-[url(src/assets/tiger.png)] bg-no-repeat bg-cover bg-center rounded-[20px]">
//                 <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px]">
//                   <h1 className="font-semibold text-xl flex justify-center mb-5">
//                     Embroidery Digitizing
//                   </h1>
//                   <p className="mx-2">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Fugit, culpa. Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Dicta, quo?
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>

//           <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px]">
//             <a href="">
//               <div className="mx-auto w-full h-full justify-center bg-[url(src/assets/art1.png)] bg-no-repeat bg-cover bg-center rounded-[20px]">
//                 <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px]">
//                   <h1 className="font-semibold text-xl flex justify-center mb-5">
//                     Art / Visual Proofs
//                   </h1>
//                   <p className="mx-2">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Fugit, culpa. Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Dicta, quo?
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//           <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px]">
//             <a href="">
//               <div className="mx-auto w-full h-full justify-center bg-[url(src/assets/order.jpg)] bg-no-repeat bg-cover bg-center rounded-[20px]">
//                 <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px]">
//                   <h1 className="font-semibold text-xl flex justify-center mb-5">
//                     Order Entry Management
//                   </h1>
//                   <p className="mx-2">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Fugit, culpa. Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Dicta, quo?
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>

//           <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px]">
//             <a href="/imageedit">
//               <div className="mx-auto w-full h-full  justify-center bg-[url(src/assets/imgedit1.jpeg)] bg-no-repeat bg-cover bg-center rounded-[20px]">
//                 <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px] ">
//                   <h1 className="font-semibold text-xl flex justify-center mb-5">
//                     Image Editing
//                   </h1>
//                   <p className="mx-2">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Fugit, culpa. Lorem ipsum dolor sit amet, consectetur
//                     adipisicing elit. Dicta, quo?
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

// Import necessary modules
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Your component definition
function ContentWrapper({ path, imageSrc, title, description }) {
  return (
    <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px] w-72 h-96">
      <Link
        to={path}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Optional: Add smooth scrolling behavior
          });
        }}
      >
        <div
          className={`mx-auto w-full h-full justify-center bg-[url(${imageSrc})] bg-no-repeat bg-cover bg-center rounded-[20px]`}
        >
          <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px] flex items-end justify-center pb-7">
            <div className="font-semibold text-xl flex justify-center mb-5">
              {title}
            </div>

            <p className="m-2">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

function YourComponent() {
  const location = useLocation();
  const currentPath = location.pathname;

  const services = [
    {
      path: "/vector",
      imageSrc: "src/assets/vectorcow.png",
      title: "Vector Conversion",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quo?",
    },
    {
      path: "/embroidery",
      imageSrc: "src/assets/tiger.png",
      title: "Embroidery Digitizing",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quo?",
    },
    {
      path: "/artvisuals",
      imageSrc: "src/assets/art1.png",
      title: "Art / Visual Proofs",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quo?",
    },
    {
      path: "/orderentry",
      imageSrc: "src/assets/order.jpg",
      title: "Order Entry Management",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quo?",
    },
    {
      path: "/imageedit",
      imageSrc: "src/assets/imgedit1.jpeg",
      title: "Image Editing",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, quo?",
    },
  ];

  return (
    <div className="relative bg-gray-100">
      <div>
        <h1 className="flex justify-center font-semibold text-2xl pt-5">
          Explore More Services
        </h1>
      </div>
      <div className="flex bg-gray-100 px-10 py-10 justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {services.map((service) => {
            // Conditionally exclude the current path from the grid
            if (currentPath === service.path) {
              return null;
            }

            return (
              <ContentWrapper
                key={service.path}
                path={service.path}
                imageSrc={service.imageSrc}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourComponent;
