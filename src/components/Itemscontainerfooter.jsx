import Itemsfooter from "./Itemsfooter";
import { Insights, Services, Company } from "../constents";
import { craftsmen } from "../assets";

const Itemscontainerfooter = () => {
  const openMap = (address) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      "_blank"
    );
  };
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-6 md:px-8 px-5 py-16 sm: justify-center ">
      <div className="flex justify-center ">
        <a href="/">
          <img
            src={craftsmen}
            alt="logo"
            className=" w-42 h-24 object-contain  lg:justify-start "
          />
        </a>
      </div>
      <div className="flex justify-center lg:text-left md:text-center text-center">
        <ul>
          <h1 className="mb-1 font-semibold underline underline-offset-8">
            Contacts
          </h1>
          <a
            href="tel:+859-181-3460"
            title="859-181-3460"
            className="text-gray-400 hover:text-teal-400 duration-300"
          >
            <li>
              <i className="fas fa-phone mr-2 mb-2"></i> 859-181-3460
            </li>
          </a>
          <li>
            <a
              href="mailto:art@logocraftsmen.com"
              title="art@logocraftsmen"
              className="text-gray-400 hover:text-teal-400 duration-300"
            >
              <i className="fas fa-envelope mr-2 mb-2"></i> art@logocraftsmen
            </a>
          </li>
          <li
            className="text-gray-400 hover:text-teal-400 duration-300"
            onClick={() =>
              openMap("Prabhat Nagar,Bhayander West, Thane 401101, India")
            }
          >
            <i className="fas fa-map-marker-alt float-left mt-2"></i>{" "}
            <p className="ml-7 cursor-pointer">
              India:- Prabhat Nagar, Bhayander West, Thane 401101, India.
            </p>
          </li>
          <li
            className="text-gray-400 hover:text-teal-400 duration-300"
            onClick={() =>
              openMap("2423 Lyttonsville Rd, Silver Spring, MD 20910, USA")
            }
          >
            <i className="fas fa-map-marker-alt float-left mt-2"></i>{" "}
            <p className="ml-7 cursor-pointer">
              USA:- 2423 Lyttonsville Rd, Silver Spring, MD 20910
            </p>
          </li>
        </ul>
      </div>
      <Itemsfooter Links={Insights} title="Insights" />
      <Itemsfooter Links={Services} title="Services" />
      <Itemsfooter Links={Company} title="Company" />
    </div>
  );
};

export default Itemscontainerfooter;
