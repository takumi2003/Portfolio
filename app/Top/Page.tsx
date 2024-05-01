import { motion } from "framer-motion";
import React from "react";

const Top = () => {
  return (
    <motion.div
      className="rounded-lg bg-[#eae7e2] p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.3 }}
    >
      <div className="mb-[-130px] ml-[-20px] mt-[-150px] flex items-center">
        <h1 className="text-[400px] font-bold">H</h1>
        <h1 className="mb-[-200px] ml-[-13px] text-9xl font-bold">
          ello world!
        </h1>
      </div>

      <h1 className="text-9xl font-bold">
        Welcome to <br />
        Takumi Kitamura&apos;s <br />
        Portfolio!
      </h1>
      <h2 className=" pl-0.5 text-3xl font-bold">Create by React</h2>
    </motion.div>
  );
};

export default Top;
