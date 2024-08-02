import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { DiPython } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { motion } from "framer-motion";
const Technologies = () => {
  const iconVariants = (duration, delay) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b border-neutral-800 md:pb-24 pb-12 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="md:my-20 my-12 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiHtml5 className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiBootstrapLine className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiRedis className="text-7xl text-purple-700" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className="text-7xl text-black-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiPython className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(2, 1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <DiDjango className="text-7xl text-red-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
