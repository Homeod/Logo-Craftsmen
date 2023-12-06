import React from "react";

const Contact = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-5 gap-x-8 text-center lg:text-left">
          {/* bg */}
          <div>bg</div>

          {/* text & form */}
          <div className="lg:flex-1 lg:pt-32 px-4">
            <h1 className="text-2xl font-medium">Contact me</h1>
            <p className="mb-12">We would love to connect with you</p>
            <form className="">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary
                    h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
            </form>
          </div>

          {/* image */}
          <div>image</div>
        </div>
      </div>
    </section>
  );
};

export default Contact
