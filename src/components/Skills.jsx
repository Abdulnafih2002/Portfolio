import { motion } from 'framer-motion'

const skills = [
    { name: 'React', level: 'Expert' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'CSS / Tailwind', level: 'Expert' },
    { name: 'Figma', level: 'Advanced' },
    { name: 'Framer Motion', level: 'Advanced' },
    { name: 'Git', level: 'Expert' },
    { name: 'UI/UX Design', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Illustration', level: 'Intermediate' },
    { name: 'Three.js', level: 'Learning' },
]

const levelStyles = {
    Expert: { borderWidth: '2.5px', fontWeight: 700 },
    Advanced: { borderWidth: '2px', fontWeight: 600 },
    Intermediate: { borderWidth: '1.5px', fontWeight: 500 },
    Learning: { borderWidth: '1px', fontWeight: 400, borderStyle: 'dashed' },
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2
                        className="text-4xl sm:text-5xl mb-2"
                        style={{ fontFamily: 'var(--font-sketch)' }}
                    >
                        Skills & Tools
                    </h2>
                    <div className="w-24 h-0.5 bg-[var(--color-ink)]" />
                </motion.div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-4 mb-10 text-xs uppercase tracking-widest text-[var(--color-mid-grey)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                >
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-6 h-3 border-[2.5px] border-[var(--color-ink)]" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }} />
                        Expert
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-6 h-3 border-2 border-[var(--color-ink)]" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }} />
                        Advanced
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-6 h-3 border-[1.5px] border-[var(--color-ink)]" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }} />
                        Intermediate
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-6 h-3 border border-dashed border-[var(--color-ink)]" style={{ borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px' }} />
                        Learning
                    </span>
                </motion.div>

                {/* Tags */}
                <div className="flex flex-wrap gap-4">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{
                                scale: 1.08,
                                rotate: -2,
                                backgroundColor: 'var(--color-ink)',
                                color: 'var(--color-paper)',
                            }}
                            className="doodle-tag cursor-default"
                            style={{
                                ...levelStyles[skill.level],
                                borderColor: 'var(--color-ink)',
                            }}
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </div>

                {/* Doodle decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.15 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-end"
                >
                    <svg width="120" height="40" viewBox="0 0 120 40">
                        <path
                            d="M5 35 Q 15 5, 30 20 T 55 15 T 80 25 T 105 10 T 115 30"
                            fill="none"
                            stroke="var(--color-ink)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>
            </div>
        </section>
    )
}
