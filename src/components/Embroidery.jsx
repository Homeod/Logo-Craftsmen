import React from "react";
import { Navbar, Footer, ServiceCard } from "../components";
import { embskull, embdragon } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Embroidery = () => {
  return (
    <div>
      <Navbar />
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
