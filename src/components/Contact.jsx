import React, { useState } from "react";
import Img from "../assets/Img4.jpg";
import { vectorcow, ClubLogo, art3 } from "../assets";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Vector from "./Vector";
import Footer from "./Footer";

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const Contact = ({ setIsUploadOpen }) => {
  const [toShow, setToShow] = useState(window.location.pathname === "/");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    service: "",
    ImageFile: [],
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const { name, email, phone, message, ImageFile } = formData;

  const options = [
    { value: "Vector Conversion", label: "Vector Conversion" },
    { value: "Embroidery", label: "Embroidery" },
    { value: "Image editing", label: "Image editing" },
    { value: "Arts / visual proof", label: "Arts / visual proof" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const cleanedPhoneNumber = e.target.value.replace(/\D/g, "");
    setFormData((p) => ({
      ...p,
      phone: cleanedPhoneNumber,
    }));
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setFormData((p) => ({
      ...p,
      service: selectedValue,
    }));
  };

  const handleFileChange = async (e) => {
    const input = e.target;
    const maxSize = 15 * 1024 * 1024;

    if (input.files.length > 0) {
      const totalSize = Array.from(input.files).reduce(
        (acc, file) => acc + file.size,
        0
      );

      if (totalSize <= maxSize) {
        setErrorMessage("");
      } else {
        setErrorMessage("Total size of selected attachments exceeds 20 MB.");
        input.value = "";
      }

      const imageArray = ImageFile;
      for (var i = 0; i < input.files.length; i++) {
        const file = e.target.files[i];
        const base64 = await convertToBase64(file);
        imageArray.push(base64);
      }
      setFormData((prev) => ({
        ...prev,
        ImageFile: imageArray,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !((phone.startsWith("91") && phone.length === 12) || phone.length === 10)
    ) {
      toast.error("Phone Number Not valid");
      return;
    }
    const serializedFormData = JSON.stringify(formData);
    const payloadSizeInBytes = new TextEncoder().encode(
      serializedFormData
    ).length;
    const maxTotalPayloadSize = 25 * 1024 * 1024;

    if (payloadSizeInBytes > maxTotalPayloadSize) {
      toast.error(
        "Payload Size is greater than 25mb. Try to reduce size of iamges."
      );
    }
    setLoading(true);
    const response = await axios.post(
      `http://localhost:4444/${toShow ? "uploadImages" : "contactAdmin"}`,
      formData
    );
    setLoading(false);
    if (response.statusText === "OK") {
      toast.success("Email sent successfully!");
      setIsUploadOpen(false);
      if (!toShow) navigate("/");
    } else toast.error("Error occured while sending email");

    setFormData({
      name: "",
      email: "",
      message: "",
      phone: "",
      service: "",
      ImageFile: [],
    });
  };

  const openMap = (address) => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
      "_blank"
    );
  };

  return (
    <div>
      <div className="m-3 sm:m-10 pb-8 flex flex-col bg-fuchsia-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <p className={styles.sectionSubText}>Want a Conversation</p>
          <p className={styles.sectionHeadText}>Contact us</p>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mx-auto">
              <a
                href="tel:+859-181-3460"
                title="859-181-3460"
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-center gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <p className="font-semibold">859-181-3460</p>
                </div>
              </a>
              <a
                href="mailto:art@logocraftsmen.com"
                title="art@logocraftsmen.com"
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-center gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <p className="font-semibold">art@logocraftsmen.com</p>
                </div>
              </a>
              <a
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
                onClick={() =>
                  openMap("2423 Lyttonsville Rd, Silver Spring, MD 20910, USA")
                }
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-end pb-2 gap-3 items-center cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="font-semibold text-center">
                    <span>USA</span>
                    <br /> 2423 Lyttonsville Rd, Silver Spring, MD 20910.
                  </p>
                </div>
              </a>
              <a
                className="text-black hover:text-blue-600 duration-300 hover:shadow-xl"
                onClick={() =>
                  openMap("Prabhat Nagar,Bhayander West, Thane 401101, India")
                }
              >
                <div className="relative w-60 h-44 bg-white rounded-lg shadow-xl flex flex-col justify-end pb-2 gap-3 items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="font-semibold text-center">
                    <span className="">India</span>
                    <br /> Prabhat Nagar, Bhayandar west, Thane 401101.
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex h-full w-fit items-center justify-center flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left sm:mt-4 sm:rounded-lg ">
              <div className="w-full ">
                <form className="" onSubmit={handleSubmit} mai>
                  <div className="flex flex-col gap-x-10">
                    <input
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="text"
                      name="name"
                      value={name}
                      placeholder="Your name *"
                      onChange={handleChange}
                      required
                    />
                    <input
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Your email address *"
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={phone}
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      onChange={handlePhoneNumberChange}
                      required
                      placeholder="Your 10-digit phone number *"
                    />
                    {toShow && (
                      <select
                        onChange={handleSelectChange}
                        className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      >
                        <option value="" className="text-black">
                          Select Service
                        </option>
                        {options.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="text-black"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    )}
                    <textarea
                      className="outline-none border border-black m-2 rounded-[10px]
                    h-[120px] bg-transparent font-secondary w-full p-3 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879]"
                      type="text"
                      name="message"
                      value={message}
                      placeholder="Type a message to admin *"
                      onChange={handleChange}
                      required
                    />
                    {toShow && (
                      <input
                        className="outline-none border border-black m-2 rounded-[10px]
                    h-[60px] bg-transparent font-secondary w-full pl-3 py-4 focus:border-black focus:border-2 focus:bg-slate-100 placeholder:text-[#757879] "
                        type="file"
                        name="ImageFile"
                        onChange={handleFileChange}
                        multiple
                        required
                      />
                    )}
                  </div>
                  {errorMessage && (
                    <div className="text-red-500 text-xs">*{errorMessage}</div>
                  )}
                  <button
                    className={`py-3 m-2 text-xl w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded ${
                      !loading && "cursor-pointer"
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Sending... Please Wait" : "Submit"}
                  </button>
                </form>
              </div>

              <div className="background">
                <div className="gallery">
                  <div className="card">
                    <figure>
                      <img src={vectorcow} alt="Forest" />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img src={Img} alt="Wooden Bridge" />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img
                        src={ClubLogo}
                        alt="Forest mountains"
                        className="bg-white"
                      />
                    </figure>
                  </div>
                  <div className="card">
                    <figure>
                      <img
                        src={art3}
                        alt="Lavender Field"
                        className="bg-sky-300"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
