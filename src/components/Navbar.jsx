import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
    { label: 'About',      href: '#about' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
    const [isOpen,   setIsOpen]   = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    const navStyle = {
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'rgba(240,237,230,0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${scrolled ? 'var(--color-border)' : 'transparent'}`,
        boxShadow: scrolled ? '0 1px 20px rgba(26,26,24,0.08)' : 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    }

    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={navStyle}
        >
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 18, fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.01em' }}>
                        nafih.
                    </span>
                    {/* Pulsing available dot */}
                    <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                        <motion.span
                            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', background: 'var(--color-accent)' }}
                        />
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-accent)', position: 'relative', zIndex: 1 }} />
                    </span>
                </a>

                {/* Desktop nav */}
                <ul style={{ display: 'flex', alignItems: 'center', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}
                    className="desktop-nav"
                >
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="pencil-hover"
                                style={{ fontFamily: 'var(--font-ui)', fontSize: 13, fontWeight: 500, color: 'var(--color-pencil)', textDecoration: 'none', letterSpacing: '0.01em' }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="mailto:mailtomenafih@gmail.com" className="btn-primary" style={{ fontSize: 12 }}>
                            Hire Me
                        </a>
                    </li>
                </ul>

                {/* Mobile toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ display: 'none', flexDirection: 'column', gap: 5, width: 24, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    className="mobile-toggle"
                    aria-label="Toggle menu"
                >
                    <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} style={{ display: 'block', height: 1.5, width: '100%', background: 'var(--color-ink)' }} />
                    <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} style={{ display: 'block', height: 1.5, width: '100%', background: 'var(--color-ink)' }} />
                    <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} style={{ display: 'block', height: 1.5, width: '100%', background: 'var(--color-ink)' }} />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden', borderTop: '1px solid var(--color-border)', background: 'rgba(240,237,230,0.98)' }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.div key={link.label} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.04 }}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    style={{ display: 'block', padding: '14px 24px', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 500, color: 'var(--color-ink)', textDecoration: 'none', borderBottom: '1px solid var(--color-border)' }}
                                >
                                    {link.label}
                                </a>
                            </motion.div>
                        ))}
                        <div style={{ padding: '16px 24px' }}>
                            <a href="mailto:mailtomenafih@gmail.com" className="btn-primary" style={{ fontSize: 13 }}>
                                Hire Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none !important; }
                    .mobile-toggle { display: flex !important; }
                }
            `}</style>
        </motion.nav>
    )
}
