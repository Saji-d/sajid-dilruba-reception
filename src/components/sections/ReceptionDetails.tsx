"use client";

import { motion } from "framer-motion";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineLocationMarker } from "react-icons/hi";

export default function ReceptionDetails() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[var(--color-champagne)] dark:bg-[var(--color-burgundy-900)] relative overflow-hidden z-10">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl border border-[var(--color-gold-400)]/30 shadow-2xl relative overflow-hidden text-center bg-white/40 dark:bg-black/40"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[var(--color-gold-400)]/60"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[var(--color-gold-400)]/60"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[var(--color-gold-400)]/60"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[var(--color-gold-400)]/60"></div>

          <h3 className="text-4xl md:text-5xl font-great-vibes text-[var(--color-gold-500)] mb-8 tracking-wide">
            Reception
          </h3>

          <div className="space-y-8 text-left font-playfair">
            {/* Date */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-gold-400)]/15 border border-[var(--color-gold-400)]/30 flex-shrink-0 mt-1">
                <HiOutlineCalendar className="w-5 h-5 text-[var(--color-gold-500)]" />
              </div>
              <div>
                <h4 className="font-cormorant text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold">
                  Date
                </h4>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)] mt-1">
                  18 July 2026
                </p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-gold-400)]/15 border border-[var(--color-gold-400)]/30 flex-shrink-0 mt-1">
                <HiOutlineClock className="w-5 h-5 text-[var(--color-gold-500)]" />
              </div>
              <div>
                <h4 className="font-cormorant text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold">
                  Time
                </h4>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)] mt-1">
                  1:30 PM onwards
                </p>
                <p className="font-cormorant text-sm text-[var(--color-gold-500)] mt-0.5 italic">
                  (After Zuhr Prayer)
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-gold-400)]/15 border border-[var(--color-gold-400)]/30 flex-shrink-0 mt-1">
                <HiOutlineLocationMarker className="w-5 h-5 text-[var(--color-gold-500)]" />
              </div>
              <div>
                <h4 className="font-cormorant text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400 font-bold">
                  Venue
                </h4>
                <p className="text-lg md:text-xl font-semibold text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)] mt-1 leading-snug">
                  Twenty Twenty Restaurant & Party Center
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
