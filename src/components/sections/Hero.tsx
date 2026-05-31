"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-black text-white">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400"
      >
        Cultural Archive
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl text-5xl font-bold md:text-7xl"
      >
        Mala Costumbre Archive
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="mt-6 max-w-2xl text-lg text-zinc-400"
      >
        Documenting the creative voices shaping tomorrow.
      </motion.p>
    </section>
  );
}