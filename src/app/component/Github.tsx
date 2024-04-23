import { motion } from "framer-motion";

const Github = () => {
  return (
    <motion.a
      href="https://github.com/takumi2003"
      className="pl-10 pt-16 text-6xl font-bold"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      id="GitHub"
    >
      GitHub
    </motion.a>
  );
};

export default Github;
