import React from "react";
import { Footer, ServiceCard } from "../components";
import { embskull, embdragon, tiger } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Embroidery = () => {
  return (
    <div>
      <div className="m-3 sm:m-10 border-2 border-green-400 bg-green-100 rounded-[20px]">
        <div className="grid md:grid-cols-2 md:grid-rows-1 auto-rows-min md:gap-2 gap-4 px-8 py-10 ">
          <div className="flex flex-col gap-6 mt-8 md:px-8 md:py-6">
            <div>
              <div className="md:text-4xl text-2xl leading-8 md:leading-snug md:text-start text-center font-black tracking-widest">
                Embroidery Design Excellence!
              </div>
            </div>
            <div className="md:text-lg text-md md:text-start text-center mt-5">
              <span className=" font-serif text-2xl italic">
                From Logos to Apparel -{" "}
                <span className="text-2xl font-bold">Stitched Brilliance.</span>
              </span>
              <br />
              <br />
              <span className="text-gray-500 font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]">
                EARLY OFFERS!
              </span>
              <br />
              <br />
              <span className="font-serif text-2xl italic">
                Price:{" "}
                <span className="text-4xl font-bold">$1 / 1000 stitches</span>
              </span>
            </div>
            <div className="flex gap-4 items-center md:justify-start justify-around">
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Upload
              </button>
              <button className="bg-blue-400 md:px-6 md:py-3 px-4 py-2 text-white rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mx-auto my-6 ">
            <img
              src={tiger}
              className="md:w-full md:h-[24rem] sm:w-[60vw] mx-auto rounded-2xl shadow-zinc-700 "
            />
          </div>
        </div>
      </div>

      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className={styles.sectionSubText}>
                Stitching Your Vision Into Reality{" "}
              </p>
              <p className={styles.sectionHeadText}>
                Embroidery Digitizing Services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    Welcome to <span className="font-bold">Logo Craftsmen</span>
                    , where we bring your designs to life with precision and
                    artistry through our Embroidery Digitizing Services.
                    Transform your digital images into intricate, stitched
                    masterpieces that leave a lasting impression.
                    <br />
                    <br />
                    <span className="font-bold">
                      What is Embroidery Digitizing?
                    </span>
                    <br />
                    Embroidery digitizing is the process of converting digital
                    images into a format that can be stitched onto fabric using
                    embroidery machines or hand-thread stitching. This
                    meticulous process involves translating your vision into a
                    grid of stitch points, ensuring the embroidery machine
                    captures every detail with accuracy.
                    <br />
                    <br />
                    <span className="font-bold">Our Digitizing Process:</span>
                    <br />
                    1. <span className="font-bold">Image Assessment:</span> Our
                    experienced team begins by thoroughly assessing your digital
                    image. Understanding the intricacies of your design allows
                    us to plan the digitizing process effectively.
                    <br />
                    2. <span className="font-bold">
                      Stitch Point Mapping:
                    </span>{" "}
                    Every design is translated into a precise grid of stitch
                    points. This mapping is crucial to ensure that the
                    embroidery machine captures the details of your design
                    accurately.
                    <br />
                    3.{" "}
                    <span className="font-bold">
                      Embroidery Machine Programming:
                    </span>{" "}
                    The mapped design is then programmed into our state-
                    of-the-art embroidery machines. This step is critical to
                    achieving the desired result and ensuring the final product
                    reflects the quality and detail of your original image.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto  "
                    src={embskull}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto "
                    src={embdragon}
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    <span className="font-bold">Services Offered:</span>
                    <br />
                    <span className="font-bold">Logo Embroidery:</span> Take
                    your brand to the next level with customized logo
                    embroidery. Whether it&#39;s for uniforms, merchandise, or
                    promotional items, our digitizing services ensure your logo
                    is translated seamlessly into stunning embroidered designs.
                    <br />
                    <span className="font-bold">Custom Designs:</span> From
                    intricate patterns to personalized messages, our digitizing
                    services can bring any design to life on fabric. Perfect for
                    personalizing clothing, accessories, or gifts with a unique
                    touch.
                    <br />
                    <span className="font-bold">Monogram Digitizing:</span>:
                    Elevate your personal or business items with monogram
                    embroidery. Our digitizing process ensures the intricate
                    details of your monogram are captured with precision, adding
                    a touch of sophistication to every piece.
                    <br />
                  </p>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className="flex justify-center font-semibold text-4xl">
                Why Choose Our Embroidery Digitizing Services?
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6"> */}
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  <span className="font-bold">Precision in Detail:</span> Our
                  digitizing process ensures that every detail of your design is
                  accurately captured, resulting in stunning embroidery that
                  reflects the intricacies of the original image.
                  <br />
                  <span className="font-bold">Versatility</span>: Whether
                  it&#39;s a company logo, personalized design, or monogram, our
                  services cater to a wide range of embroidery needs, offering
                  versatility for various applications.
                  <br />
                  <span className="font-bold">Quality Assurance:</span>: Our
                  commitment to quality is unwavering. We use the latest
                  technology and a skilled team to guarantee that the final
                  embroidered product meets the highest standards.
                  <br />
                  <span className="font-bold">Free Rush Service:</span> Need
                  your embroidered items in a hurry? Our free rush service is at
                  your disposal. We understand the importance of meeting tight
                  deadlines and are dedicated to delivering your embroidered
                  goods promptly without compromising on quality.
                  <br />
                  <br />
                  <span className="italic">
                    Experience the art of precision with Logo Craftsmen&#39;s
                    Embroidery Digitizing Services. Whether it&#39;s showcasing
                    your brand through logo embroidery or adding a personalized
                    touch to your garments, our commitment to excellence ensures
                    your vision is stitched into every creation.
                  </span>
                </p>
              </div>
              {/* </div> */}
            </section>
          </motion.div>
        </div>
      </div>

      <ServiceCard />
      <Footer />
    </div>
  );
};

export default Embroidery;
