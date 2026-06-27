import { useState } from 'react'
import { motion } from 'framer-motion'

const infoCards = [
    { icon: '📍', label: 'Location',           value: 'Kannur, Kerala, India',                     rotation: -1.2 },
    { icon: '🚀', label: 'Currently Building',  value: 'N3 GlobalTech — SaaS for SMBs',            rotation: 0.8 },
    { icon: '✅', label: 'Status',              value: 'Open to Opportunities',  accent: true,      rotation: -0.6 },
    { icon: '🎓', label: 'Education',           value: 'B.Tech IT · CGPA 7.38',                    rotation: 1.1 },
]

export default function About() {
    const [imgError, setImgError] = useState(false)
    return (
        <section id="about" style={{ padding: '80px 0' }}>
            <div className="inner">
                {/* Heading */}
                <div className="section-header">
                    <p className="section-label">Who I am</p>
                    <h2 className="section-heading">About Me</h2>
                    <div style={{ width: 60, height: 2, background: 'var(--color-ink)', marginTop: 8 }} />
                </div>

                <div style={{ display: 'flex', gap: 44, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    {/* ── LEFT — avatar + bio ───────── */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -4 }}
                        whileInView={{ opacity: 1, rotate: -1.5 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}
                    >
                        {/* Avatar with tape */}
                        <div className="tape" style={{ position: 'relative', paddingTop: 16 }}>
                            <div style={{
                                width: 120, height: 120,
                                borderRadius: '50%',
                                background: 'var(--color-ink)',
                                color: 'var(--color-paper)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: 30, fontWeight: 700, fontFamily: 'var(--font-body)',
                                border: '3px solid var(--color-ink)',
                                boxShadow: '4px 4px 0px var(--color-ink)',
                                overflow: 'hidden',
                                position: 'relative',
                                flexShrink: 0,
                            }}>
                                {!imgError ? (
                                    <img
                                        src="/profile.jpg"
                                        alt="Abdul Nafih"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: '50% 18%',
                                            transform: 'scale(1.45)',
                                            transformOrigin: '50% 18%',
                                            display: 'block',
                                            borderRadius: '50%',
                                        }}
                                        onError={() => setImgError(true)}
                                    />
                                ) : (
                                    <span style={{ fontSize: 28, fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--color-paper)' }}>AN</span>
                                )}
                            </div>
                            {/* Green available dot */}
                            <div style={{
                                position: 'absolute', bottom: 2, right: 2,
                                width: 16, height: 16, borderRadius: '50%',
                                background: 'var(--color-accent)',
                                border: '3px solid var(--color-paper)',
                                boxShadow: '1px 1px 0px var(--color-ink)',
                            }} />
                        </div>

                        {/* Name + role */}
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)' }}>Abdul Nafih</p>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginTop: 2 }}>
                                DevOps · Cloud · Dev
                            </p>
                        </div>

                        {/* Bio — Caveat handwrite feel */}
                        <p style={{
                            fontFamily: 'var(--font-body)', fontSize: 14,
                            color: 'var(--color-pencil)', lineHeight: 1.65,
                            maxWidth: 200, textAlign: 'center',
                        }}>
                            I build apps and deploy them — full-stack code, AWS, Docker, and CI/CD all in one.
                            Co-founding <strong style={{ color: 'var(--color-ink)' }}>N3 GlobalTech</strong> and shipping for real clients.
                        </p>

                        {/* Social links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, width: '100%' }}>
                            {[
                                { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/abdulnafih01' },
                                { label: 'GitHub ↗',   href: 'https://github.com/Abdulnafih2002' },
                                { label: 'Email ↗',    href: 'mailto:mailtomenafih@gmail.com' },
                            ].map(l => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    target={l.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="sketch-border"
                                    style={{
                                        display: 'block', textAlign: 'center',
                                        padding: '5px 0',
                                        fontFamily: 'var(--font-body)', fontSize: 11,
                                        fontWeight: 600, letterSpacing: '0.06em',
                                        textTransform: 'uppercase',
                                        color: 'var(--color-pencil)',
                                        textDecoration: 'none',
                                        transition: 'background 0.18s, color 0.18s',
                                    }}
                                    onMouseEnter={e => { e.target.style.background = 'var(--color-ink)'; e.target.style.color = 'var(--color-paper)' }}
                                    onMouseLeave={e => { e.target.style.background = ''; e.target.style.color = 'var(--color-pencil)' }}
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── RIGHT — 2×2 info cards ─────── */}
                    <div style={{
                        flex: '1 1 300px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 20,
                    }}>
                        {infoCards.map((card, i) => (
                            <motion.div
                                key={card.label}
                                initial={{ opacity: 0, y: 20, rotate: card.rotation * -1 }}
                                whileInView={{ opacity: 1, y: 0, rotate: card.rotation }}
                                whileHover={{ y: -4, boxShadow: '6px 6px 0px var(--color-ink)', rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="sketch-card"
                                style={{ padding: 20, cursor: 'default' }}
                            >
                                <span style={{ fontSize: 24, display: 'block', marginBottom: 8 }}>{card.icon}</span>
                                <p style={{
                                    fontFamily: 'var(--font-body)', fontSize: 10,
                                    fontWeight: 700, letterSpacing: '0.1em',
                                    textTransform: 'uppercase', color: 'var(--color-mid-grey)',
                                    marginBottom: 5,
                                }}>
                                    {card.label}
                                </p>
                                <p style={{
                                    fontFamily: 'var(--font-body)', fontSize: 13,
                                    fontWeight: 600, lineHeight: 1.35,
                                    color: card.accent ? 'var(--color-accent)' : 'var(--color-ink)',
                                    display: 'flex', alignItems: 'center', gap: 6,
                                }}>
                                    {card.value}
                                    {card.accent && (
                                        <motion.span
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 1.8, repeat: Infinity }}
                                            style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: 'var(--color-accent)', flexShrink: 0 }}
                                        />
                                    )}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
