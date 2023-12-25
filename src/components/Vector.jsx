import React from "react";
import { Navbar, Footer, ServiceCard } from "../components";
import { monkey, img2 } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Vector = () => {
  return (
    <div>
      <Navbar />
      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className={styles.sectionSubText}>Precision In Every Pixel </p>
              <p className={styles.sectionHeadText}>Vector Artwork Services.</p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    At <span className="font-bold">Logo Craftsmen</span>, our
                    Vector Artwork Services redefine the way you perceive and
                    present digital graphics. Dive into a world of precision,
                    scalability, and enduring visual impact as we elevate your
                    images through meticulous vectorization.
                    <br />
                    <br />
                    <span className="font-bold">What is Vector Artwork?</span>
                    <br />
                    Vector artwork involves the transformation of raster images,
                    typically composed of pixels, into a vector format. Unlike
                    raster images that may lose quality when resized, vectors
                    are created using mathematical equations to represent
                    shapes, ensuring flawless scalability without pixilation.
                    <br />
                    <br />
                    <span className="font-bold">
                      Our Vectorization Process:
                    </span>
                    <br />
                    1. <span className="font-bold">Manual Expertise:</span> Our
                    skilled artisans manually trace the outer edges of shapes,
                    ensuring a nuanced approach to every detail in your image.
                    This hands-on process is ideal for intricate designs, logos,
                    or illustrations that demand a human touch.
                    <br />
                    2. <span className="font-bold">
                      Automated Precision:
                    </span>{" "}
                    Leveraging advanced software tools, we streamline the
                    conversion process, automating the tracing of shapes for
                    efficiency. This method is ideal for large-scale projects,
                    where precision and speed are both paramount.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto rounded-xl border-2 border-black  "
                    src={monkey}
                    alt="Placeholder"
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto rounded-xl "
                    src={img2}
                    alt="Placeholder"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    <span className="font-bold">Services Offered:</span>
                    <br />
                    <span className="font-bold">Logo Vectorization</span>:
                    Transform your existing logo into a versatile vector format.
                    Whether you're rebranding or need a scalable logo for
                    various applications, our services ensure your brand
                    identity remains crisp and consistent.
                    <br />
                    <span className="font-bold">
                      Illustration Vectorization
                    </span>
                    : Breathe life into your digital illustrations. Our
                    vectorization process preserves the essence of your artwork,
                    making it suitable for print, merchandise, or any platform
                    where quality matters.
                    <br />
                    <span className="font-bold">Graphics Enhancement</span>:
                    Upgrade your graphics for optimal performance. From detailed
                    product images to complex graphics, our vectorization
                    services enhance clarity, making your visuals stand out.
                    <br />
                    <span className="font-bold">Versatile File Formats</span>:
                    Receive your final files in .cdr, .eps, .ai, and .pdf
                    formats. The CDR or EPS file is ready for reproduction, and
                    the PDF file allows you to proof the masterpiece.
                    <br />
                    <span className="font-bold">Free Rush Service</span>: Need
                    it fast? Our free rush service is at your disposal. We
                    understand the urgency of your updates, and our team is
                    dedicated to ensuring your projects are delivered promptly
                    without compromising on quality.
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
                Why Choose Our Vector Artwork Services?
              </p>
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  <span className="font-bold">Scalability</span>: Enjoy the
                  freedom to use your images at any size without compromising
                  quality. Perfect for banners, billboards, or any application
                  where your visuals need to make a statement.
                  <br />
                  <span className="font-bold">Versatility</span>: Vectorized
                  images are versatile and can be easily adapted for various
                  mediums, from digital platforms to physical merchandise.
                  <br />
                  <span className="font-bold">Consistency</span>: Maintain a
                  consistent visual identity across different applications.
                  Vector artwork ensures that your brand&#39;s visual elements
                  remain uniform and recognizable.
                  <br />
                  <span className="font-bold">Professional Touch</span>: Our
                  team of experienced designers and advanced tools ensure a
                  professional touch to every vectorization project. Expect
                  precision, creativity, and a commitment to delivering results
                  that exceed expectations.
                  <br />
                  Don&#39;t let poor quality images hinder your progress.
                  <span className="font-bold">Trust Logo Craftsmen for</span>:
                  <br />
                  Raster to Vector Conversion/Image to Vector Conversion.
                  <br />
                  JPG to Vector Conversion/Vector Logo Conversion.
                  <br />
                  Vector Line Drawing/Vector Map Drawing.
                  <br />
                  Vector Floor Plan Drawing/Architectural Vector Drawing.
                  <br />
                  <br />
                  <span className="italic">
                    Elevate your visual storytelling with Logo Craftsmen&#39;s
                    Vector Artwork Services. Whether it&#39;s breathing new life
                    into your logo or enhancing complex graphics, our commitment
                    to precision ensures your visuals leave a lasting
                    impression.
                  </span>
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>

      <ServiceCard />
      <Footer />
    </div>
  );
};

export default Vector;
