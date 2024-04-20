import { motion } from "framer-motion";
import Image from "next/image";

const Greeting = () => {
  return (
    <motion.div
      className="mb-10 flex items-center gap-4 pl-8 pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <Image src="/dog.png" alt="Dog" width={330} height={330} />
      <div>
        <h2 className="text-6xl font-bold" id="greeting">
          Greeting
        </h2>
        <p className="pl-1.5 pt-4 text-[19px]">
          はじめまして。本ページをご閲覧いただきありがとうございます。
          <br />
          26卒京都産業大学情報理工学部の北村拓海と申します。
          <br />
          Webフロントに興味があり、Reactを使って開発をしています。
          <br />
          大学ではあまてくというプログラムサークルに所属しています。
          <br />
          また、現在大学でおこなっているウェーブレット変換を使った画像処理のプロジェクトのPMをしています。
          <br />
          フロント以外にもバックエンドやインフラにも興味があります。
          <br />
          どうぞよろしくお願いいたします。
          <br />
        </p>
      </div>
    </motion.div>
  );
};

export default Greeting;
