import React, { FC } from "react";
import image1 from "@/public/assets/worksImage1.svg";
import image2 from "@/public/assets/worksImage2.svg";
import image3 from "@/public/assets/worksImage3.svg";
import image4 from "@/public/assets/worksImage4.svg";
import image5 from "@/public/assets/worksImage5.svg";
import image6 from "@/public/assets/worksImage6.svg";
import Image from "next/image";
import FadeIn from "./FadeIn";

const WorksGrid: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FadeIn delay={0.6} direction="down">
        <div className="flex flex-col items-center p-4 py-12 cursor-pointer hover:shadow-xl">
          <Image src={image1} alt="image1" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Community engagement
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Think global, act local.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.6} direction="down">
        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image2} alt="image2" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Reduction of Risky Behaviors
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Structured after-school programs reduce the risk of children
            engaging in risky behaviors or negative peer groups.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.6} direction="down">
        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image3} alt="image3" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Safe and Supervised Environment
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            We provide a safe and supervised space for children during the
            after-school hours.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.8} direction="up">
        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image4} alt="image4" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Skill Development
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            After school activities help children discover and develop their
            talents and interests.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.8} direction="up">
        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image5} alt="image5" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Excepteur
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Sint occaecat cupidatat non proident culpa qui officia deserunt
            mollit anim
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.8} direction="up">
        <div className="flex flex-col items-center cursor-pointer hover:shadow-xl p-4 py-12">
          <Image src={image6} alt="image6" />
          <h4 className="font-bold font-poppins text-2xl text-fontBlack">
            Accusamus
          </h4>
          <p className="text-fontBlack/50 text-center md:w-[322px]">
            Odio dignissimos ducimus qui blanditiis praesentium voluptatum
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

export default WorksGrid;
