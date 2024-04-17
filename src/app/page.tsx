"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
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
            Takumi Kitamura's <br />
            Portfolio!
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
              はじめまして。本ページをご閲覧いただきありがとうございます。
              <br />
              26卒京都産業大学情報学部の北村拓海と申します。
              <br />
              Webフロントに興味があり、Reactを使って開発をしています。
              <br />
              大学ではあまてくというサークルに所属しています。
              <br />
              また、現在ウェーブレット変換を使った画像処理のプロジェクトのPMをしています。
              <br />
              フロント以外にもバックエンドやインフラにも興味があります。
              <br />
              どうぞよろしくお願いいたします。
              <br />
            </p>
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg p-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-6xl font-bold pt-16 ml-[-2px] mt-[-65px] ">
            SKILL
          </h1>
          <div className="flex">
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">HTML/CSS</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">React</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-6xl font-bold pt-16 ml-[-2px] mt-[-65px]">
            WORKS
          </h1>
          <div className="flex overflow-x-auto">
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">HTML/CSS</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">HTML/CSS</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
            <div className="pt-4 ml-0.5 pr-5">
              <h2 className="text-4xl">TypeScript</h2>
              <img src="https://placehold.jp/300x300.png" className="mt-2" />
            </div>
          </div>
        </motion.div>

        <motion.a
          href="https://github.com/takumi2003"
          className="text-6xl font-bold pt-16 pl-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          GitHub
        </motion.a>

        <motion.div
          className="pt-16 pl-8 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-6xl font-bold pt-16 ml-[5px] mt-[-65px]">
            CONTACT
          </h1>
          <p className="pt-3 pl-2.5 text-[19px]">
            Mail: takumi20030819@gmail.com <br />
            twitter(現X): <a href="https://twitter.com/Ksu_kita">https://twitter.com/Ksu_kita</a>
          </p>
        </motion.div>
      </div>

      <footer className="text-gray-600 body-font mt-[100px]">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">
              Copyright©Takumi Kitamura. All Rights Reserved.
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}
