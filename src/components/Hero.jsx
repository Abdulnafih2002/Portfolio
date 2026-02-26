import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-24 pb-16 relative overflow-hidden">
            {/* Decorative scribble circles */}
            <motion.div
                className="absolute top-20 right-10 w-32 h-32 rounded-full border-2 border-[var(--color-light-grey)] opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }}
            />
            <motion.div
                className="absolute bottom-32 left-8 w-20 h-20 rounded-full border border-[var(--color-light-grey)] opacity-20"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                style={{ borderRadius: '15px 255px 15px 225px / 225px 15px 255px 15px' }}
            />

            {/* Small doodle marks */}
            <div className="absolute top-40 left-16 text-[var(--color-light-grey)] text-6xl opacity-20 select-none" style={{ fontFamily: 'var(--font-sketch)' }}>*</div>
            <div className="absolute bottom-48 right-20 text-[var(--color-light-grey)] text-4xl opacity-15 select-none" style={{ fontFamily: 'var(--font-sketch)' }}>~</div>

            <div className="max-w-4xl mx-auto text-center">
                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6 tracking-tight"
                    style={{ fontFamily: 'var(--font-sketch)' }}
                >
                    Creative
                    <br />
                    <span className="relative inline-block">
                        Developer
                        {/* Hand-drawn underline */}
                        <motion.svg
                            viewBox="0 0 300 12"
                            className="absolute -bottom-2 left-0 w-full"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                        >
                            <motion.path
                                d="M2 8 Q 40 2, 80 7 Q 120 12, 160 6 Q 200 0, 240 7 Q 270 10, 298 4"
                                fill="none"
                                stroke="var(--color-ink)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
                            />
                        </motion.svg>
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl font-light text-[var(--color-pencil)] max-w-2xl mx-auto mt-8 leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    I think visually, work precisely, and build digital
                    <br className="hidden sm:block" />
                    experiences with <strong className="font-semibold text-[var(--color-ink)]">personality</strong>.
                </motion.p>

                {/* CTA Arrow */}
                <motion.a
                    href="#work"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="inline-block mt-16"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-[var(--color-pencil)]"
                    >
                        <span className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: 'var(--font-body)' }}>
                            Scroll
                        </span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M12 5v14M5 12l7 7 7-7" />
                        </svg>
                    </motion.div>
                </motion.a>
            </div>
        </section>
    )
}
