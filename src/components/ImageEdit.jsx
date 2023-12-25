import React from "react";
import { Navbar, Footer, ServiceCard } from "../components";
import { imgedit2, imgedit3 } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";

const ImageEdit = () => {
  return (
    <div>
      <Navbar />
      <div className="m-3 sm:m-10 bg-violet-100 rounded-[20px]">
        <div className={`${styles.padding} rounded-2xl min-h-[300px]`}>
          <motion.div>
            <section className="container mx-auto ">
              <p className={styles.sectionSubText}>
                Transforming Visions into Visual Masterpieces{" "}
              </p>
              <p className={styles.sectionHeadText}>Image Editing Services.</p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    At <span className="font-bold">Logo Craftsmen</span>, we
                    understand the power of a visually compelling image. Our
                    Image Editing Services are crafted to enhance and elevate
                    your photographs, ensuring they leave a lasting impression
                    on your audience. With precision, creativity, and a keen eye
                    for detail, we transform your visions into visual
                    masterpieces.
                    <br />
                    <br />
                    <span className="font-bold">What is Image Editing?</span>
                    <br />
                    Image editing refers to the process of enhancing or
                    improving the quality of a photograph using digital editing
                    software. It involves a comprehensive set of adjustments to
                    various parameters, including brightness, contrast, color
                    balance, sharpness, and other advanced features. Our image
                    editing services go beyond basic enhancements, providing a
                    meticulous touch that brings out the true potential of your
                    visuals.
                    <br />
                    <br />
                    <span className="font-bold">
                      Our Image Editing Process:
                    </span>
                    <br />
                    1. <span className="font-bold">
                      Detailed Assessment:
                    </span>{" "}
                    Every image undergoes a thorough assessment to identify
                    areas that can be improved. Whether it&#39;s for personal or
                    professional use, we tailor our editing approach to meet
                    your specific needs and objectives.
                    <br />
                    2. <span className="font-bold">
                      Creative Enhancement:
                    </span>{" "}
                    Our skilled editors bring creativity to the forefront,
                    adding a professional touch to your images. From subtle
                    adjustments to transformative edits, we ensure that each
                    image tells a compelling story.
                    <br />
                    3. <span className="font-bold">Quality Assurance:</span> Our
                    commitment to quality is unwavering. We use the latest
                    editing tools and techniques to guarantee that the final
                    result meets the highest standards, aligning with your
                    vision and purpose.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto  "
                    src={imgedit2}
                    alt=""
                  />
                </div>
                <div className="flex items-center">
                  <img
                    className="object-cover w-full h-full md:h-auto "
                    src={imgedit3}
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl mt-4 ">
                    <span>Services Offered:</span>
                    <br />
                    1. <span className="font-bold">
                      Basic Enhancements:
                    </span>{" "}
                    Elevate the overall quality of your images with basic
                    enhancements. Adjustments to brightness, contrast, and color
                    balance ensure that your photos are vibrant and visually
                    appealing.
                    <br />
                    2. <span className="font-bold">
                      Advanced Retouching:
                    </span>{" "}
                    For images that require a more nuanced touch, our advanced
                    retouching services address imperfections, blemishes, and
                    other details. This is ideal for portraits, product
                    photography, or any visuals where flawless presentation is
                    paramount.
                    <br />
                    3. <span className="font-bold">Creative Effects:</span> Add
                    a touch of artistry to your images with creative effects.
                    From filters to artistic overlays, we enhance your visuals
                    to create a unique and impactful look that aligns with your
                    brand or personal style.
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
                Why Choose Our Image Editing Services?
              </p>
              <div className="text-left">
                <p className="text-xl mt-4 ">
                  1. <span className="font-bold">Professional Expertise:</span>{" "}
                  Our team of skilled editors brings years of experience to the
                  table. From basic enhancements to intricate retouching, we
                  have the expertise to handle diverse image editing needs.
                  <br />
                  2. <span className="font-bold">Customization:</span> We
                  understand that each image has its own story. Our services are
                  highly customizable, ensuring that the edits align with your
                  specific requirements and objectives.
                  <br />
                  3.{" "}
                  <span className="font-bold">
                    Diverse Software Proficiency:
                  </span>{" "}
                  Whether you prefer Adobe Photoshop, Lightroom, or GIMP, our
                  team is proficient in a variety of image editing software,
                  providing flexibility to meet your preferred editing
                  environment.
                  <br />
                  4. <span className="font-bold">Free Rush Service:</span> Need
                  your edited images in a hurry? Our free rush service ensures
                  that urgent editing requests are prioritized without
                  compromising on the quality of the final output. We understand
                  the importance of timely deliverables.
                  <br />
                  <br />
                  <span className="italic">
                    Experience the transformative power of image editing with
                    Logo Craftsmen. Whether you&#39;re enhancing personal
                    photos, refining product images, or curating a stunning
                    portfolio, our services are designed to bring out the best
                    in your visuals.
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

export default ImageEdit;
