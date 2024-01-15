"use client";
import React, { FC, useEffect, useState } from "react";
import image1 from "@/public/assets/featuresImage1.svg";
import image2 from "@/public/assets/featuresImage2.svg";
import image3 from "@/public/assets/featuresImage3.svg";
import Image from "next/image";
import { motion, useAnimation, Variants } from "framer-motion";

const FeaturesImages = () => {
  const control = useAnimation();

  const images = [image1, image2, image3];





  const [imageMetadata, setImageMetadata] = useState([
    { hovering: false, title: "Skate Park", desc: 'Empowering Though Sports"' },
    { hovering: false, title: "Community Centre", desc: 'bye"' },
    { hovering: false, title: "hello3", desc: 'bye"' },
  ]);

  // whenever hovered changes set control start to visible
  // whenever hovered changes set control start to visible
  // useEffect(() => {
  
  //   control.start("visible");
  // }, [imageMetadata]);

  // console.log(imageMetadata);
  


  
  // Function to handle mouse enter events on an image specified by index

  function mouseHandler(index) {
    // Update the state using the setImage function and the previous state
    // setImageMetadata((prevState) => {
    //   // Create a copy of the previous state to avoid direct mutation
    //   let copy = [...prevState];
    //   // Access the specific object in the array based on the given index
    //   let thisObject = copy[index];
    //   // Set the 'hovering' property of the object to the contrary
    //   thisObject = {
    //     ...thisObject,
    //     hovering: thisObject.hovering ? false : true,
    //   };
    //   // this will set the copied array but with the object we were working on replaced for its new value
    //   copy = [...copy, thisObject];
    //   // Return the updated copy of the state similar to setImageMetadata(x)
    //   return copy;
    // });
  //    setImageMetadata((prevState) => {
  //   const copy = [...prevState];
  //   copy[index].hovering = !copy[index].hovering;
  //   return copy;
  // });
  setImageMetadata((prevState) => {
    const newState = prevState.map((item, idx) => {
      if (idx === index) {
        const newHovering = !item.hovering;
        // Start the animation only for this item
        if (newHovering) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
        return { ...item, hovering: newHovering };
      }
      return item;
    });
    return newState;
  });
  }

  const grayVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-around gap-4  w-full">
      {imageMetadata.map(function (item, index) {
        return (
          <div
            key={index}
            className="h-full w-full"
            onMouseEnter={() => {
              mouseHandler(index);
            }}
            onMouseLeave={() => {
              mouseHandler(index);
            }}
          >
            {/*  */}
            <Image
              src={images[index]}
              alt={item.desc}
              className="aspect-[3/2] w-full rounded-2xl object-cover space justify-between"
            />

            {/* if hover is active  */}
            {imageMetadata[index].hovering && (
              <motion.div
                className="bg-black/50 absolute"
                variants={grayVariant}
                initial="hidden"
                animate={imageMetadata[index].hovering ? "visible" : "hidden"}
              >
                <>
                  <div className="flex items-start gap-2 flex-col absolute bottom-8 left-8">
                    <motion.h4
                      className="font-poppins font-bold text-2xl text-white"
                      variants={childVariant}
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p className="text-white/50" variants={childVariant}>
                      {item.desc}
                    </motion.p>
                  </div>
                </>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesImages;
