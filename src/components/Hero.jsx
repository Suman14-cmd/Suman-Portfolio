import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
import { Avatar, useMediaQuery } from "@mui/material";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  return (
    <section
      className={`flex-between-center relative mx-auto h-screen w-full flex-col`}
    >
      <ParticlesContainer />
      <div className="flex-between-center">
        <div
          className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="mt-5 flex flex-col items-center justify-center">
            <div className="h-6 w-6 animate-pulse rounded-full bg-gradient-to-r from-[#ff8a00] to-[#ff6f00]" />
            <div className="animate-fade-in h-40 w-1 bg-gradient-to-b from-[#ff6f00] to-transparent sm:h-80" />
          </div>
          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm {" "} 
              <span className="bg-gradient-to-r from-[#FF6B6B] via-[#FFB100] to-[#915EFF] bg-clip-text text-transparent">
                Suman
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
              I develop{" "}
              <span className="font-bold text-[#4ADE80]">Full Stack</span> Web
              Applications, using
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] bg-clip-text text-lg font-bold text-transparent">
                {" "}
                MERN Stack
              </span>
            </p>
          </motion.div>
        </div>
        <motion.div
          variants={textVariant()}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="z-[1] h-full"
        >
          <Avatar
            alt="my image"
            src="./myImage1.Jpg"
            sx={
              !isSmallScreen
                ? { width: 310, height: 350 }
                : { width: 100, height: 200 }
            }
          />
        </motion.div>
      </div>

      <div className="flex-center-center mb-40 w-full">
        <a href="#about">
          <div className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ y: [-8, 0, -8], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl text-secondary drop-shadow-[0_0_10px_#facc15]"
            >
              ▲
            </motion.div>
            <motion.div
              animate={{ y: [8, 0, 8], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-3xl text-secondary drop-shadow-[0_0_10px_#facc15]"
            >
              ▼
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
