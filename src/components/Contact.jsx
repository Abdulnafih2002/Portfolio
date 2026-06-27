import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const quickActions = [
    { icon: '📧', label: 'Email Me',        sub: 'mailtomenafih@gmail.com', href: 'mailto:mailtomenafih@gmail.com', primary: true },
    { icon: '💼', label: 'LinkedIn',        sub: 'abdulnafih01',            href: 'https://www.linkedin.com/in/abdulnafih01' },
    { icon: '💻', label: 'GitHub',          sub: 'Abdulnafih2002',          href: 'https://github.com/Abdulnafih2002' },
    { icon: '📞', label: 'Call / WhatsApp', sub: '+91-7736866862',          href: 'tel:+917736866862' },
]

export default function Contact() {
    const [form, setForm]    = useState({ name: '', email: '', message: '' })
    const [submitted, setSub] = useState(false)

    const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    const onSubmit = e => {
        e.preventDefault()
        const sub  = encodeURIComponent(`Portfolio Enquiry from ${form.name}`)
        const body = encodeURIComponent(`Hi Abdul,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
        window.open(`mailto:mailtomenafih@gmail.com?subject=${sub}&body=${body}`)
        setSub(true)
        setTimeout(() => setSub(false), 3000)
        setForm({ name: '', email: '', message: '' })
    }

    const inputBase = {
        width: '100%',
        background: 'var(--color-paper-dark)',
        border: '2px solid var(--color-ink)',
        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
        padding: '10px 16px',
        fontFamily: 'var(--font-body)',
        fontSize: '14px',
        color: 'var(--color-ink)',
        outline: 'none',
    }

    return (
        <section id="contact" style={{ padding: '80px 0' }}>
            <div className="inner">
                {/* Heading */}
                <div className="section-header">
                    <p className="section-label">Get in touch</p>
                    <h2 className="section-heading">Let's Talk</h2>
                    <div style={{ width: 60, height: 2, background: 'var(--color-ink)', marginTop: 8 }} />
                </div>

                {/* Availability card */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="sketch-card flex flex-col sm:flex-row items-center text-center sm:text-left gap-5"
                    style={{ marginBottom: 28, padding: 24, background: 'var(--color-paper)', width: '100%' }}
                >
                    <div style={{ position: 'relative', flexShrink: 0 }}>
                        <motion.div
                            animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--color-accent)' }}
                        />
                        <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--color-accent)', position: 'relative', zIndex: 1 }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 2 }}>
                            Open to Opportunities
                        </p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-pencil)' }}>
                            Available for DevOps · Cloud · Full Stack roles — remote or on-site in Kerala
                        </p>
                    </div>
                </motion.div>

                {/* Quick action buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 16, marginBottom: 44 }}>
                    {quickActions.map((a, i) => (
                        <motion.a
                            key={a.label}
                            href={a.href}
                            target={a.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4, x: -2, boxShadow: '6px 6px 0px var(--color-ink)' }}
                            whileTap={{ scale: 0.97 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.07 }}
                            className="sketch-border"
                            style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center',
                                gap: 6, padding: '16px 12px',
                                textDecoration: 'none',
                                background: a.primary ? 'var(--color-ink)' : 'var(--color-paper)',
                                color: a.primary ? 'var(--color-paper)' : 'var(--color-ink)',
                                boxShadow: '4px 4px 0px var(--color-ink)',
                                transition: 'box-shadow 0.18s ease, transform 0.18s ease',
                            }}
                        >
                            <span style={{ fontSize: 24 }}>{a.icon}</span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                {a.label}
                            </span>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, opacity: 0.65, textAlign: 'center', lineHeight: 1.3 }}>
                                {a.sub}
                            </span>
                        </motion.a>
                    ))}
                </div>

                {/* Letter-style form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sketch-border"
                    style={{ padding: '32px', boxShadow: '4px 4px 0px var(--color-ink)', background: 'var(--color-paper)', position: 'relative', overflow: 'hidden' }}
                >
                    {/* Ruled lines in form */}
                    <div style={{
                        position: 'absolute', inset: 0, pointerEvents: 'none',
                        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, var(--color-light-grey) 31px, var(--color-light-grey) 32px)',
                        backgroundPosition: '0 18px', opacity: 0.35,
                    }} />

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-pencil)', marginBottom: 20, position: 'relative', zIndex: 1 }}>
                        Or write me a note — I reply fast ✎
                    </p>

                    <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative', zIndex: 1 }}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', display: 'block', marginBottom: 6 }}>Name</label>
                                <input type="text" name="name" value={form.name} onChange={onChange} required
                                    placeholder="Your Name" style={inputBase} />
                            </div>
                            <div>
                                <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', display: 'block', marginBottom: 6 }}>Email</label>
                                <input type="email" name="email" value={form.email} onChange={onChange} required
                                    placeholder="you@company.com" style={inputBase} />
                            </div>
                        </div>
                        <div>
                            <label style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', display: 'block', marginBottom: 6 }}>Message</label>
                            <textarea name="message" value={form.message} onChange={onChange} required rows={4}
                                placeholder="Hi Abdul, I'd like to discuss..."
                                style={{ ...inputBase, resize: 'none' }} />
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.button
                                key={submitted ? 'sent' : 'send'}
                                type="submit"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                whileHover={{ x: -2, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn-primary self-center sm:self-start"
                                style={{
                                    background: submitted ? 'var(--color-accent)' : 'var(--color-ink)',
                                    borderColor: submitted ? 'var(--color-accent)' : 'var(--color-ink)',
                                }}
                            >
                                {submitted ? '✓ Opening email app...' : 'Send Note →'}
                            </motion.button>
                        </AnimatePresence>
                    </form>

                    <div style={{ position: 'absolute', bottom: 12, right: 16, fontSize: 32, opacity: 0.12, fontFamily: 'var(--font-body)' }}>✎</div>
                </motion.div>
            </div>
        </section>
    )
}
