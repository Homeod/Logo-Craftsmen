import React, { useState } from "react";
import Img from "../assets/Img4.jpg";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Contact = ({ setIsUploadOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const navigate = useNavigate();

  const { name, email, phone, message } = formData;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      (phone.startsWith("91") && phone.length === 12) ||
      phone.length === 10
    ) {
      const response = await axios.post(
        "http://localhost:4444/contactAdmin",
        formData
      );
      if (response.statusText === "OK") {
        toast.success("Email sent successfully!");
        navigate("/");
      } else toast.error("Error occured while sending email");
    } else {
      alert("Phone number is invalid!");
    }
  };

  return (
    <section className="section Home sm:h-screen h-fit">
      <Navbar setIsUploadOpen={setIsUploadOpen} />
      <div className="container mx-auto pt-[100px]">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-4xl font-semibold mb-2">Contact me</h1>
          <div className="text-lg font-medium ">
            Its time to create something exciting!
          </div>
        </div>
        <div className="flex h-full w-fit items-center justify-center sm:flex-row flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left sm:border sm:border-gray-400 sm:mt-4 sm:rounded-lg mx-auto">
          <div className="w-full ">
            <form className="" onSubmit={handleSubmit} mai>
              <div className="flex flex-col gap-x-10">
                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Your name"
                  onChange={handleChange}
                  required
                />
                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Your email address"
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={phone}
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  onChange={handlePhoneNumberChange}
                  required
                  placeholder="Your 10-digit phone number"
                />

                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="message"
                  value={message}
                  placeholder="Type a message to admin"
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="py-3 bg-blue-400 text-white font-medium text-xl w-full rounded-lg mt-4  hover:bg-transparent hover:text-blue-400 border-2 border-blue-400">
                Submit
              </button>
            </form>
          </div>
          <div className="w-72 h-72 sm:w-full sm:h-full lg:w-fit lg:h-full">
            <img src={Img} className="lg:w-[35rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
