
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <motion.div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        initial={{x:-100}}
        animate={{x:0,rotate:[0,45,360,0]}}
        transition={{
          type:'spring',
          bounce:0.8,
          duration:2}}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </motion.div>

        <div className="flex flex-row justify-between items-center w-full">
          <motion.h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]"
           initial={{x:-200}}
           animate={{x:0}}
           transition={{duration:5}}
          >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </motion.h1>
          <motion.div className="ss:flex hidden md:mr-4 mr-0"
            initial={{x:-20,y:-100}}
            animate={{x:0,y:0}}
            transition={{duration:1}}
          >
            <GetStarted />
          </motion.div>
        </div>

        <motion.h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full"
          initial={{x:0,y:300}}
          animate={{x:0,y:0}}
          transition={{duration:4}}
        >
          Payment Method.
        </motion.h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <motion.img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" 
          initial={{x:-100}}
          animate={{
            x:0,
            rotate:[0,90,0]}}
          transition={{
          type:'spring',
          bounce:1.5,
          duration:3}}
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;