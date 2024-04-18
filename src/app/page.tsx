"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="ml-20 mt-10">
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
            Takumi Kitamura's <br />
            Portfolio!
          </h1>
          <h2 className=" pl-0.5 text-3xl font-bold">Create by React</h2>
        </motion.div>

        <motion.div
          className="mb-10 flex items-center gap-4 pl-8 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img src="/dog.png" className="h-80 w-80" />
          <div>
            <h2 className="text-6xl font-bold">ご挨拶</h2>
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

        <motion.div
          className="rounded-lg p-10 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="ml-[-2px] mt-[-65px] pt-16 text-6xl font-bold ">
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

        <motion.div
          className="rounded-lg p-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="ml-[-2px] mt-[-65px] pt-16 text-6xl font-bold">
            WORKS
          </h1>
          <div className="mt-[-3px] flex overflow-x-auto">
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
            <div className="ml-0.5 pr-5 pt-4">
              <h2 className="text-4xl">Linebot</h2>
              <a href="https://github.com/takumi2003/lineTrashBot">
                <img src="https://placehold.jp/300x300.png" className="mt-2" />
              </a>

              <p className="pl-[-1px] pt-4 text-[13px]">
                城陽市の明日のゴミの種類を教えてくれるLinebot
              </p>
            </div>
          </div>
        </motion.div>

        <motion.a
          href="https://github.com/takumi2003"
          className="pl-10 pt-16 text-6xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          GitHub
        </motion.a>

        <motion.div
          className="mb-10 pl-8 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="ml-[5px] mt-[-65px] pt-16 text-6xl font-bold">
            CONTACT
          </h1>
          <p className="pl-2.5 pt-3 text-[19px]">
            Mail: takumi20030819@gmail.com <br />
            twitter(現X):{" "}
            <a href="https://twitter.com/Ksu_kita">
              https://twitter.com/Ksu_kita
            </a>
          </p>
        </motion.div>
      </div>

      <footer className="body-font mt-[100px] text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-gray-900 md:justify-start">
            <span className="ml-3 text-xl">
              Copyright©Takumi Kitamura. All Rights Reserved.
            </span>
          </a>
        </div>
      </footer>
    </>
  );
}
