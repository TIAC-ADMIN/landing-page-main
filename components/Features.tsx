"use client";
import React, { FC } from "react";
import FadeIn from "./FadeIn";

import FeaturesImages from "./TempFeaturesImages.jsx";

const Features: FC = () => {
  return (
    <div
      className="flex flex-col p-4 py-12 lg:pt-16 lg:p-12 xl:p-36 h-full w-full bg-[#FFF6E9] gap-10"
      id="features"
    >
      {/* writing */}
      <div className="justify-between items-start lg:items-center lg:flex-row gap-1">
        <div className="flex flex-col gap-4 items-start text-fontBlack">
          <FadeIn delay={0.2} direction="right">
            <h5 className="uppercase font-bold font-poppins"></h5>
          </FadeIn>

          <FadeIn delay={0.4} direction="right">
            <h1 className="font-bold font-poppins lg:text-[56px] text-[40px] leading-[48px] lg:leading-[64px] w-[431px]">
              The Project
            </h1>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} direction="left">
          <p className="text-fontBlack/50 md:w-[570px] text-justify">
            Our mission is to build a youth center to inspire young people to
            pursue their passions and provide an alternative for discovering
            their potential. In 2024, we will be recording a documentary
            showcasing the progress of the project in the location and within
            the community
          </p>
        </FadeIn>
      </div>

      {/* features */}
      <FadeIn delay={1.3} direction="up">
        <FeaturesImages />
      </FadeIn>
    </div>
  );
};

export default Features;
{
  /* <div className="flex flex-wrap gap-4 items-center text-fontBlack/50 ">
        <FadeIn delay={0.7} direction="down">
          <p className="cursor-pointer font-semibold text-fontBlack ">
            Quis Autem
          </p>
        </FadeIn>
        <FadeIn delay={0.8} direction="down">
          <p className="cursor-pointer ">Reprehenderit</p>
        </FadeIn>
        <FadeIn delay={0.9} direction="down">
          <p className="cursor-pointer ">Voluptate</p>
        </FadeIn>
        <FadeIn delay={1.0} direction="down">
          <p className="cursor-pointer ">Molestiae</p>
        </FadeIn>
        <FadeIn delay={1.1} direction="down">
          <p className="cursor-pointer ">Consequatur</p>
        </FadeIn>
      </div> */
}
{
  /* <FadeIn delay={1.4} direction="up">
        <div className="flex items-center justify-center">
          <button className="bg-secondary border border-secondary rounded-full py-2 px-16 font-bold text-white hover:bg-transparent hover:text-secondary transition-all duration-500">
            All works
          </button>
        </div>
      </FadeIn> */
}
