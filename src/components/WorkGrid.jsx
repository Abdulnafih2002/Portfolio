import { motion } from 'framer-motion'

const works = [
    { id: 1, rotation: -2, label: 'Brand Identity' },
    { id: 2, rotation: 1.5, label: 'Web Design' },
    { id: 3, rotation: -1, label: 'Mobile App' },
    { id: 4, rotation: 2.5, label: 'Illustration' },
    { id: 5, rotation: -1.5, label: 'UI/UX Design' },
    { id: 6, rotation: 1, label: 'Typography' },
]

function generatePattern(id) {
    const patterns = [
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#e0dcd6"/><g stroke="#aaa" stroke-width="0.8"><line x1="0" y1="0" x2="200" y2="200"/><line x1="40" y1="0" x2="200" y2="160"/><line x1="80" y1="0" x2="200" y2="120"/><line x1="120" y1="0" x2="200" y2="80"/><line x1="160" y1="0" x2="200" y2="40"/><line x1="0" y1="40" x2="160" y2="200"/><line x1="0" y1="80" x2="120" y2="200"/><line x1="0" y1="120" x2="80" y2="200"/><line x1="0" y1="160" x2="40" y2="200"/><line x1="200" y1="0" x2="0" y2="200"/><line x1="160" y1="0" x2="0" y2="160"/><line x1="120" y1="0" x2="0" y2="120"/><line x1="80" y1="0" x2="0" y2="80"/><line x1="200" y1="40" x2="40" y2="200"/><line x1="200" y1="80" x2="80" y2="200"/><line x1="200" y1="120" x2="120" y2="200"/></g><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#ddd8d0"/><g fill="#bbb">${Array.from({ length: 80 }, (_, i) => `<circle cx="${(i * 27) % 190 + 5}" cy="${(i * 31) % 190 + 5}" r="${1.5 + (i % 3)}"/>`).join('')}</g><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#e2ded8"/><g stroke="#bbb" stroke-width="0.6">${Array.from({ length: 20 }, (_, i) => `<line x1="0" y1="${i * 10 + 2}" x2="200" y2="${i * 10 + 2}"/>`).join('')}</g><rect x="30" y="40" width="140" height="120" rx="4" fill="none" stroke="#999" stroke-width="1.5"/><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#dfdbd5"/><g stroke="#ccc" stroke-width="0.5">${Array.from({ length: 10 }, (_, i) => `<line x1="${i * 20}" y1="0" x2="${i * 20}" y2="200"/><line x1="0" y1="${i * 20}" x2="200" y2="${i * 20}"/>`).join('')}</g><circle cx="100" cy="100" r="50" fill="none" stroke="#aaa" stroke-width="1.2"/><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#e4e0da"/><path d="M100 100 Q120 80 140 100 Q160 120 140 140 Q120 160 100 140 Q80 120 100 100 Q130 70 160 100 Q190 130 160 160 Q130 190 100 160 Q70 130 100 100" fill="none" stroke="#bbb" stroke-width="1"/><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
        `data:image/svg+xml,${encodeURIComponent(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#ddd9d3"/><g stroke="#bbb" stroke-width="0.7">${Array.from({ length: 12 }, (_, i) => `<polyline points="0,${i * 18} ${Array.from({ length: 11 }, (_, j) => `${j * 20},${i * 18 + (j % 2 ? -6 : 6)}`).join(' ')} 200,${i * 18}" fill="none"/>`).join('')}</g><text x="100" y="108" text-anchor="middle" font-family="Inter,sans-serif" font-size="18" fill="#888">${id}</text></svg>`)}`,
    ]
    return patterns[(id - 1) % patterns.length]
}

export default function WorkGrid() {
    return (
        <section id="work" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center"
                >
                    <h2
                        className="text-4xl sm:text-5xl mb-2 text-center"
                        style={{ fontFamily: 'var(--font-sketch)' }}
                    >
                        Selected Work
                    </h2>
                    <div className="w-24 h-0.5 bg-[var(--color-ink)]" />
                </motion.div>

                {/* Grid — each card is a flex column, fully centered */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    style={{ justifyItems: 'center', alignItems: 'start' }}
                >
                    {works.map((work, i) => (
                        <motion.div
                            key={work.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.03, rotate: 0 }}
                            animate={{ rotate: work.rotation }}
                            className="tape cursor-pointer group flex flex-col items-center"
                            style={{ width: '100%', maxWidth: '280px' }}
                        >
                            {/* Image card */}
                            <div
                                className="w-full aspect-[4/3] bg-[var(--color-paper-dark)] border-2 border-[var(--color-ink)] overflow-hidden relative"
                                style={{
                                    boxShadow: '4px 4px 0px var(--color-ink)',
                                    backgroundImage: `url("${generatePattern(work.id)}")`,
                                    backgroundSize: 'cover',
                                }}
                            >
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[var(--color-ink)]/0 group-hover:bg-[var(--color-ink)]/80 transition-all duration-300 flex items-center justify-center">
                                    <span
                                        className="text-[var(--color-paper)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg"
                                        style={{ fontFamily: 'var(--font-handwrite)' }}
                                    >
                                        View →
                                    </span>
                                </div>
                            </div>

                            {/* Label — centered below card */}
                            <p
                                className="mt-4 text-center text-[var(--color-pencil)] w-full"
                                style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.3rem' }}
                            >
                                {work.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}