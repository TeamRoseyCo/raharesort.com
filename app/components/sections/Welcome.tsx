"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

import { PHOTOS } from "@/app/lib/photos";
const IMG_1 = PHOTOS.welcome1;
const IMG_2 = PHOTOS.welcome2;

export default function Welcome() {
  return (
    <section
      id="welcome"
      data-theme="light"
      className="theme-light section-screen relative bg-white"
      style={{ padding: "4rem 0" }}
    >
      <div className="container-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy column */}
          <div className="lg:pr-8">
            <Reveal>
              <span className="section-subtitle">Welcome</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mb-2 text-[var(--color-secondary)]">
                A Haven of Tranquility
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="title-divider" />
            </Reveal>
            <Reveal delay={0.2}>
              <p
                className="mb-8 text-[1.1rem] leading-[1.8] text-[var(--color-text-light)]"
              >
                Raha Resort combines natural beauty with modern comfort. Nestled
                among breathtaking landscapes, our resort offers an escape from
                the ordinary. A sanctuary where every detail has been
                thoughtfully crafted for your relaxation and ease.
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <p
                className="mb-10 text-[1.1rem] leading-[1.8] text-[var(--color-text-light)]"
              >
                Whether you come for rest, adventure, or celebration, Raha
                welcomes you warmly.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <a href="#rooms" className="btn btn-primary">
                Discover More
              </a>
            </Reveal>
          </div>

          {/* Image composition column */}
          <div className="relative h-[500px] w-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="zoom-host absolute right-0 top-0 h-[80%] w-[70%] overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
            >
              <Image
                src={IMG_1}
                alt="Resort exterior with mountain views"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="img-zoom object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="zoom-host absolute bottom-0 left-0 h-[50%] w-[50%] overflow-hidden border-[8px] border-white"
              style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
            >
              <Image
                src={IMG_2}
                alt="Luxurious resort room interior"
                fill
                sizes="(max-width: 1024px) 60vw, 30vw"
                className="img-zoom object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
