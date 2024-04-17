"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const newline: string = "<br />";
  return (
    <>
      <div className="ml-20 mt-10">
        <motion.div
          className="bg-[#eae7e2] rounded-lg p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center ml-[-20px] mt-[-150px] mb-[-130px]">
            <h1 className="text-[400px] font-bold">H</h1>
            <h1 className="text-9xl font-bold mb-[-200px] ml-[-13px]">
              ello world!
            </h1>
          </div>

          <h1 className="text-9xl font-bold">
            Welcome to <br />
            my test page!
          </h1>
          <h2 className="pt-6 pl-0.5 text-3xl">Create by React</h2>
        </motion.div>

        <motion.div
          className="pt-16 pl-8 flex items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src="/dog.png" className="w-80 h-80" />
          <div>
            <h2 className="text-6xl font-bold">ご挨拶</h2>
            <p className="pt-4 pl-1.5 text-[19px]">
              これはテストページです。
              <br />
              これ以降意味のあるコンテンツはありません。
              <br />
              React改行するには{newline}を使います。
              <br />
              \nで改行したい派閥がネットには結構いましたが
              <br />
              これの方が分かり易くていいですね。
              <br />
              それっぽく見えるためにノンデザイナーズブックを読んでみました。
              <br />
              デザインとは難しいですね。
              <br />
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-6xl font-bold pt-16 mt-[-65px]">使用技術</h1>
          <div className="grid grid-cols-3 gap-5 ">
            <div className="pt-4 ml-0.5">
              <h2 className="text-4xl">HTML/CSS</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5">
              <h2 className="text-4xl">React</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
          </div>
        </motion.div>

        <motion.a
          href="https://github.com/takumi2003"
          className="text-6xl font-bold pt-16 pl-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          GitHub
        </motion.a>
      </div>
    </>
  );
}
