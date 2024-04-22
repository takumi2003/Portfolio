import { motion } from "framer-motion";

const Skill = () => {
  return (
    <motion.div
      className="rounded-lg p-10 "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h1 className="ml-[-2px] mt-[-65px] pt-16 text-6xl font-bold" id="SKILLS">
        SKILLS
      </h1>
      <div className="content-items mt-1.5 flex">
        <div className="mr-12">
          <h2 className="text-4xl">Frontend</h2>
          <p className="text-[19px]">HTML/CSS</p>
          <p className="text-[19px]">JavaScript</p>
          <p className="text-[19px]">TypeScript</p>
          <p className="text-[19px]">React & Redux</p>
          <p className="text-[19px]">Next.js</p>
        </div>
        <div className="mr-12">
          <h2 className="text-4xl">Tool</h2>
          <p className="ml-1 text-[19px]">VScode</p>
          <p className="ml-1 text-[19px]">Git</p>
        </div>
        <div>
          <h2 className="text-4xl">Others</h2>
          <p className="ml-1 text-[19px]">C</p>
          <p className="ml-1 text-[19px]">Java</p>
          <p className="ml-1 text-[19px]">Python</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
