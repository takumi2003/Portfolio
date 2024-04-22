import { motion } from "framer-motion";

const Contact  = () => {
  return (
    <motion.div
      className="mb-10 pl-8 pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <h1 className="ml-[5px] mt-[-65px] pt-16 text-6xl font-bold" id="CONTACT">
        CONTACT
      </h1>
      <p className="pl-2.5 pt-3 text-[19px]">
        Mail: takumi20030819@gmail.com <br />
        twitter(現X):{" "}
        <a href="https://twitter.com/Ksu_kita">https://twitter.com/Ksu_kita</a>
      </p>
    </motion.div>
  );
};

export default Contact;
