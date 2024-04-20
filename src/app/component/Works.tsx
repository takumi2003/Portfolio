import { motion } from "framer-motion";
import Image from "next/image";

const Works = () => {
  return (
    <motion.div
      className="rounded-lg p-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h1 className="ml-[-2px] mt-[-65px] pt-16 text-6xl font-bold" id="works">
        WORKS
      </h1>
      <div className="mt-[-3px] flex overflow-x-auto">
        <div className="ml-0.5 pr-5 pt-4">
          <h2 className="text-4xl">Linebot</h2>
          <a href="https://github.com/takumi2003/lineTrashBot">
            <Image
              src="https://placehold.jp/300x300.png"
              alt=""
              width={150}
              height={150}
              className="mt-2"
            />
          </a>
          <p className="pl-[-1px] pt-4 text-[13px]">
            城陽市の明日のゴミの種類を教えてくれるLinebot
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Works;
