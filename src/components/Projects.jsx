import { motion } from 'framer-motion'

const projects = [
    {
        title: 'Sketchflow',
        description: 'A collaborative whiteboard app with real-time drawing and infinite canvas. Built with WebSocket, Canvas API, and React.',
        tags: ['React', 'WebSocket', 'Canvas API'],
        link: '#',
    },
    {
        title: 'Typecraft',
        description: 'A typography exploration tool that lets designers preview, pair, and export font combinations with live rendering.',
        tags: ['Next.js', 'Google Fonts API', 'CSS'],
        link: '#',
    },
    {
        title: 'Inkfolio',
        description: 'A minimal portfolio generator for illustrators. Upload your work, pick a layout, and get a live site in seconds.',
        tags: ['React', 'Firebase', 'Tailwind'],
        link: '#',
    },
    {
        title: 'Gridlock',
        description: 'An interactive CSS Grid playground with visual editing, code export, and template sharing.',
        tags: ['Vue.js', 'CSS Grid', 'IndexedDB'],
        link: '#',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
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
                        Projects
                    </h2>
                    <div className="w-24 h-0.5 bg-[var(--color-ink)]" />
                </motion.div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="block group"
                        >
                            <div className="torn-top pt-6">
                                <div className="sketch-card p-8 h-full">
                                    {/* Project Number */}
                                    <span
                                        className="text-6xl font-bold text-[var(--color-light-grey)] select-none leading-none"
                                        style={{ fontFamily: 'var(--font-sketch)' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>

                                    {/* Title */}
                                    <h3
                                        className="text-2xl sm:text-3xl mt-3 mb-4 group-hover:underline decoration-2 underline-offset-4"
                                        style={{ fontFamily: 'var(--font-sketch)' }}
                                    >
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-[var(--color-pencil)] leading-relaxed mb-6"
                                        style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.15rem' }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs uppercase tracking-widest px-3 py-1 border border-[var(--color-ink)] bg-[var(--color-paper)]"
                                                style={{
                                                    fontFamily: 'var(--font-body)',
                                                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Arrow */}
                                    <div className="mt-6 flex items-center gap-2 text-[var(--color-pencil)] group-hover:text-[var(--color-ink)] transition-colors">
                                        <span className="text-sm uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>
                                            View Project
                                        </span>
                                        <motion.span
                                            className="inline-block"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 4 }}
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
