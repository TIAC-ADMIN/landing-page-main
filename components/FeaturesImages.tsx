"use client";
import React, { FC, useEffect, useState } from "react";
import image1 from "@/public/assets/featuresImage1.svg";
import image2 from "@/public/assets/featuresImage2.svg";
import image3 from "@/public/assets/featuresImage3.svg";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";

const FeaturesImages: FC = () => {
  const Images = [image1, image2, image3];

  // hovered state
  const [isHovered1, setHovered1] = useState<boolean>(false);

  // handler to set the hovered state to oposite its value
  const handleHover1 = () => {
    setHovered1(!isHovered1);
  };

  // hovered state
  const [isHovered2, setHovered2] = useState<boolean>(false);

  // handler to set the hovered state to oposite its value
  const handleHover2 = () => {
    setHovered2(!isHovered2);
  };

  // hovered state
  const [isHovered3, setHovered3] = useState<boolean>(false);

  // handler to set the hovered state to oposite its value
  const handleHover3 = () => {
    setHovered3(!isHovered3);
  };

  // animation hook
  const control = useAnimation();

  //
  const grayVariant: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant: Variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
      },
    },
  };

  // whenever hovered changes set control start to visible
  useEffect(() => {
    if (isHovered1 || isHovered2 || isHovered3) {
      control.start("visible");
    }
  }, [isHovered1, isHovered2, isHovered3]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">




      
      {/* when the mouse enters set handle hover to oposite and likewise */}
      {/* <div
        className="flex w-[40.75rem] overflow-hidden rounded-xl  justify-center relative cursor-pointer items-center h-[40.75rem]"
        onMouseEnter={handleHover1}
        onMouseLeave={handleHover1}
      > */}
        {/*  */}
        {/* <Image
          style={{ height: "100%", flexGrow: 1, objectFit: "cover" }}
          src={image1}
          alt="image1"
          className="w-full h-full"
        /> */}

        {/* if hover is active  */}
        {/* {isHovered1 && (
          <motion.div
            className="h-full w-full bg-black/50 absolute"
            variants={grayVariant}
            initial="hidden"
            animate={control}
          >
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <motion.h4
                  className="font-poppins font-bold text-2xl text-white"
                  variants={childVariant}
                >
                  MABOKONI VILLAGE SKATEPARK
                </motion.h4>
                <motion.p className="text-white/50" variants={childVariant}>
                  Ullamco laboris{" "}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </div> */}

      {/*  */}

      {/* <div
        className="flex w-[40.75rem] overflow-hidden rounded-xl  justify-center relative cursor-pointer items-center h-[40.75rem]"
        onMouseEnter={handleHover2}
        onMouseLeave={handleHover2}
      > */}
        {/* <Image
          style={{ height: "100%", flexGrow: 1, objectFit: "cover" }}
          src={image2}
          alt="image2"
          className="w-full h-full"
        /> */}
        {/* {isHovered2 && (
          <motion.div
            className="h-full w-full bg-black/50 absolute"
            variants={grayVariant}
            initial="hidden"
            animate={control}
          >
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <motion.h4
                  className="font-poppins font-bold text-2xl text-white"
                  variants={childVariant}
                >
                  Solar Well
                </motion.h4>
                <motion.p className="text-white/50" variants={childVariant}>
                  Ullamco laboris{" "}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </div> */}

      {/*  */}
      {/* <div
        className="flex overflow-hidden rounded-xl    justify-center relative cursor-pointer items-center w-[40.75rem] h-[40.75rem]"
        onMouseEnter={handleHover3}
        onMouseLeave={handleHover3}
      >
        <Image
          style={{ height: "100%", flexGrow: 1, objectFit: "cover" }}
          src={image3}
          alt="image3"
          className="w-full h-full"
        />
        {isHovered3 && (
          <motion.div
            className="h-full w-full bg-black/50 absolute"
            variants={grayVariant}
            initial="hidden"
            animate={control}
          >
            <div className="relative h-full w-full">
              <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                <motion.h4
                  className="font-poppins font-bold text-2xl text-white"
                  variants={childVariant}
                >
                  Arts Centre
                </motion.h4>
                <motion.p className="text-white/50" variants={childVariant}>
                  Ullamco laboris{" "}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </div> */}
      
    </div>
  );
};

export default FeaturesImages;
