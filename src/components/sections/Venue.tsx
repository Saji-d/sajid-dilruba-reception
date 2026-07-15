"use client";

import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { HiOutlineMap } from "react-icons/hi";
import Image from "next/image";

export default function Venue() {
  const openDirections = () => {
    window.open(weddingConfig.venue.googleMapsUrl, "_blank");
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-[var(--background)] relative overflow-hidden z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-great-vibes text-[var(--color-gold-500)] mb-4">
            The Venue
          </h2>
          <div className="w-12 h-[1px] bg-[var(--color-gold-400)]/60 mx-auto mb-8"></div>
        </motion.div>

        {/* Large Visual Presentation of the Venue */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-xl mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[var(--color-gold-400)]/30 group mb-10"
        >
          <Image
            src="/images/twenty2_enhanced.jpeg"
            alt="Twenty Twenty Restaurant & Party Center"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Subtle Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          {/* Text Overlay on the Image */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-left">
            <p className="font-cormorant text-xs md:text-sm tracking-[0.3em] uppercase text-[var(--color-gold-400)] font-bold mb-2">
              Premium Dining & Events
            </p>
            <h3 className="text-2xl md:text-4xl font-playfair font-bold text-[var(--color-ivory)] leading-tight">
              Twenty Twenty Restaurant & Party Center
            </h3>
            <p className="font-cormorant text-sm md:text-base text-gray-300 mt-2">
              A luxury ambient space to celebrate our new beginnings.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h4 className="text-2xl md:text-3xl font-playfair font-bold text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)]">
            Twenty Twenty Restaurant & Party Center
          </h4>
          
          <p className="font-cormorant text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Please join us and celebrate. For your convenience, navigate directly to the venue using the button below.
          </p>

          <motion.button
            onClick={openDirections}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-[var(--color-burgundy-800)] text-[var(--color-champagne)] rounded-full transition-all duration-500 font-cormorant tracking-[0.25em] uppercase text-xs md:text-sm shadow-[0_15px_35px_rgba(128,0,32,0.4)] group overflow-hidden border border-[var(--color-gold-400)]/30 hover:border-[var(--color-gold-500)] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold-400)]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <HiOutlineMap className="w-5 h-5 text-[var(--color-gold-400)] group-hover:text-[var(--color-gold-300)] transition-colors" />
            <span className="relative z-10 group-hover:text-[var(--color-ivory)] transition-colors font-bold">Get Directions</span>
            
            {/* Subtle Animated Border Glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_25px_rgba(212,175,55,0.35)]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
