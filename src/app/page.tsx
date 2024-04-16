"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const newline: string = "<br />";
  return (
    <>
      <div className="ml-10 mt-10">
        <motion.h1 className="text-9xl font-bold ">
          Hello world!
          <br />
          Welcome to <br />
          my test page!
        </motion.h1>

        <div className="pt-16">
          <h2 className="text-lg">ご挨拶</h2>
          <p className="pt-3 text-base">
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
      </div>
    </>
  );
}
