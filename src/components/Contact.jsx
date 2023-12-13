import React, { useState } from "react";
import Img from "../assets/Img4.jpg";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    ImageFile: "",
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
      ImageFile: "",
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      ImageFile: file,
    }));
  };

  return (
    <section className="section Home sm:h-screen h-fit">
      <Navbar />
      <div className="container mx-auto mt-4">
        <div className="flex flex-col items-center justify-center mt-6 ">
          <h1 className="text-4xl font-semibold mb-2">Contact me</h1>
          <div className="text-lg font-medium ">
            Its time to create something exciting!
          </div>
        </div>
        <div className="flex h-full w-fit items-center justify-start sm:flex-row flex-col-reverse gap-6 sm:gap-12 py-8 px-8 text-center lg:text-left  sm:border sm:border-gray-400 sm:mt-4 sm:rounded-lg sm:mx-auto">
          <div className="lg:flex-1">
            <form className="" onSubmit={handleSubmit}>
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
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="message"
                  value={message}
                  placeholder="Type a message to admin"
                  onChange={handleChange}
                  required
                />
                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879] pt-4"
                  type="file"
                  name="ImageFile"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button className="py-3 bg-blue-400 text-white font-medium text-xl w-full rounded-lg mt-4  hover:bg-transparent hover:text-blue-400 border-2 border-blue-400">
                Submit
              </button>
            </form>
          </div>

          {/* image */}
          <div className="w-80 h-80 sm:h-fit">
            <img src={Img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
