import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                {/* Left — Sketch Doodle */}
                <motion.div
                    initial={{ opacity: 0, rotate: -5 }}
                    whileInView={{ opacity: 1, rotate: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/3 flex-shrink-0 mx-auto lg:mx-0"
                >
                    <div
                        className="w-full aspect-square bg-[var(--color-paper-dark)] border-2 border-[var(--color-ink)] relative"
                        style={{
                            boxShadow: '4px 4px 0px var(--color-ink)',
                            backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="300" fill="#e8e0d8"/><circle cx="150" cy="120" r="45" fill="none" stroke="#888" stroke-width="2"/><line x1="150" y1="165" x2="150" y2="230" stroke="#888" stroke-width="2"/><line x1="150" y1="190" x2="115" y2="170" stroke="#888" stroke-width="2"/><line x1="150" y1="190" x2="185" y2="170" stroke="#888" stroke-width="2"/><line x1="150" y1="230" x2="120" y2="270" stroke="#888" stroke-width="2"/><line x1="150" y1="230" x2="180" y2="270" stroke="#888" stroke-width="2"/><circle cx="140" cy="112" r="3" fill="#888"/><circle cx="160" cy="112" r="3" fill="#888"/><path d="M140 130 Q150 140 160 130" fill="none" stroke="#888" stroke-width="1.5"/></svg>`)}")`,
                            backgroundSize: 'cover',
                        }}
                    >
                        {/* Tape on top */}
                        <div
                            className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6"
                            style={{
                                background: 'var(--color-tape)',
                                transform: 'translateX(-50%) rotate(1deg)',
                                border: '1px solid rgba(0,0,0,0.05)',
                            }}
                        />
                    </div>
                </motion.div>

                {/* Right — Sticky Note */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-2/3"
                >
                    <div className="sticky-note sketch-border">
                        <h2
                            className="text-3xl sm:text-4xl mb-6"
                            style={{ fontFamily: 'var(--font-sketch)' }}
                        >
                            About Me
                        </h2>
                        <div className="space-y-4 text-[var(--color-pencil)] leading-relaxed" style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.25rem' }}>
                            <p>
                                I'm a creative developer who lives at the intersection of design and code.
                                I believe the best digital experiences happen when aesthetics meet engineering precision.
                            </p>
                            <p>
                                With over 5 years of crafting web experiences, I've learned that every pixel tells a story —
                                and I'm here to make sure it's a good one.
                            </p>
                            <p>
                                When I'm not pushing boundaries in code, you'll find me sketching ideas in my notebook,
                                exploring typography, or hunting for the perfect shade of grey.
                            </p>
                        </div>

                        {/* Signature */}
                        <div className="mt-8 pt-4 border-t border-[var(--color-light-grey)]">
                            <p
                                className="text-2xl text-[var(--color-ink)]"
                                style={{ fontFamily: 'var(--font-sketch)' }}
                            >
                                — Alex
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
