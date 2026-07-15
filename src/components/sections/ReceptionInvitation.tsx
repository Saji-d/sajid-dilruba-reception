"use client";

import { motion } from "framer-motion";

export default function ReceptionInvitation() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[var(--background)] relative overflow-hidden text-center z-10">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="text-[var(--color-gold-500)] text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            The Invitation
          </p>
          <div className="w-12 h-[1px] bg-[var(--color-gold-400)]/60 mx-auto"></div>
          
          <p className="font-playfair text-xl md:text-2xl leading-relaxed text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)] max-w-2xl mx-auto px-4">
            "With heartfelt gratitude, we invite you to join us for our Wedding Reception as we celebrate the beginning of our new journey together."
          </p>
          
          <p className="font-playfair text-xl md:text-2xl leading-relaxed text-[var(--color-burgundy-900)] dark:text-[var(--color-champagne)] max-w-2xl mx-auto px-4 mt-4">
            "Your presence, blessings, and good wishes will make this occasion truly memorable."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
