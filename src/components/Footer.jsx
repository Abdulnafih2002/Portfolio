import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="pb-12 pt-6 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Doodle Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <svg width="100%" height="20" viewBox="0 0 800 20" preserveAspectRatio="none">
                        <path
                            d="M0 10 Q 50 2, 100 10 T 200 10 T 300 10 T 400 10 T 500 10 T 600 10 T 700 10 T 800 10"
                            fill="none"
                            stroke="var(--color-light-grey)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <span
                        className="text-xl"
                        style={{ fontFamily: 'var(--font-sketch)' }}
                    >
                        portfolio<span className="text-[var(--color-mid-grey)]">.</span>
                    </span>

                    {/* Links */}
                    <div className="flex items-center gap-6">
                        {['GitHub', 'Dribbble', 'LinkedIn', 'Twitter'].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="pencil-hover text-xs uppercase tracking-widest text-[var(--color-pencil)] hover:text-[var(--color-ink)] transition-colors"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p
                        className="text-sm text-[var(--color-mid-grey)]"
                        style={{ fontFamily: 'var(--font-handwrite)' }}
                    >
                        © {currentYear} — Made with ✎ & ♥
                    </p>
                </div>
            </div>
        </footer>
    )
}
