import React from "react";
import { Link, useLocation } from "react-router-dom";

function ContentWrapper({ path, imageSrc, title, description }) {
  return (
    <div className="group relative items-center justify-center overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:shadow-black rounded-[20px] w-72 h-96">
      <Link to={path}>
        <div
          className={`mx-auto w-full h-full justify-center bg-[url(${imageSrc})] bg-no-repeat bg-cover bg-center rounded-[20px]`}
        >
          <div className="bg-black bg-opacity-60 w-full h-full pt-32 text-white rounded-[20px] flex items-end justify-center pb-7">
            <Link
              to={path}
              className="font-semibold text-xl flex justify-center mb-5"
            >
              {title}
            </Link>
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
    },
    {
      path: "/embroidery",
      imageSrc: "src/assets/tiger.png",
      title: "Embroidery Digitizing",
    },
    {
      path: "/artvisuals",
      imageSrc: "src/assets/art1.png",
      title: "Art / Visual Proofs",
    },
    {
      path: "/orderentry",
      imageSrc: "src/assets/order.jpg",
      title: "Order Entry Management",
    },
    {
      path: "/imageedit",
      imageSrc: "src/assets/imgedit1.jpeg",
      title: "Image Editing",
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
