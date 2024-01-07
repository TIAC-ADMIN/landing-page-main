import React, { FC } from "react";
import FadeIn from "./FadeIn";
import Footer from "./Footer";

const ContactUs: FC = () => {
  return (
    <div
      className="flex items-center p-4 py-12 lg:pt-16 lg:px-12 xl:px-36 h-full w-full gap-8 lg:gap-16 flex-col bg-contact_bg bg-cover bg-no-repeat bg-bottom"
      id="contact-us"
    >
      <div className="flex items-center gap-8 flex-col text-fontBlack">
        <FadeIn delay={0.4} direction="down">
          <h2 className="text-fontBlack font-poppins font-bold lg:text-[56px] lg:leading-[64px] text-[40px] leading-[48px]">
            Contact Us
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} direction="down">
          <p className="text-center font-semibold w-[280px] sm:w-[346px] md:w-[570px]">
            Your support is the key to making a lasting impact, and we invite
            you to be a part of this incredible journey. Feel free to reach out
            with any questions or to explore how you can contribute to our
            cause.
          </p>
        </FadeIn>
        <FadeIn delay={0.6} direction="up" fullWidth>
          <div className="flex items-center flex-col lg:flex-row gap-5 w-full justify-center">
            {/* <input
              className="border p-4 bg-white border-[#DADADA] lg:w-[60%] w-full focus:outline-none focus:border-secondary outline-none"
              placeholder="Your email"
            /> */}

            <a
              href="mailto:Ines@TIACreative.org"
              className="inline-block bg-secondary py-3 px-16 rounded-full text-#366cff font-bold border border-secondary hover:bg-transparent hover:text-[#9BBFFA] duration-500 transition-all"
            >
              Email Us
            </a>

            <a
              href="tel:+07552421799"
              className="inline-block bg-secondary py-3 px-16 rounded-full text-#366cff font-bold border border-secondary hover:bg-transparent hover:text-[#9BBFFA] duration-500 transition-all"
            >
              Call Us
            </a>

            {/* <button className="bg-secondary py-3 px-16 rounded-full text-#366cff font-bold border border-secondary hover:bg-#9BBFFA hover:text-secondary duration-500 transition-all">
              Send
            </button> */}
          </div>
        </FadeIn>
      </div>

      <div className="h-[1px] w-screen bg-black/10 mt-20 lg:mt-48"></div>

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
