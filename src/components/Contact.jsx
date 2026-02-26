import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormState({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
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
                        Get in Touch
                    </h2>
                    <div className="w-24 h-0.5 bg-[var(--color-ink)]" />
                </motion.div>

                {/* Letter-style container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sketch-border bg-[var(--color-paper)] p-8 sm:p-12 relative"
                    style={{ boxShadow: '4px 4px 0px var(--color-ink)' }}
                >
                    {/* Ruled lines background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 27px,
                var(--color-light-grey) 27px,
                var(--color-light-grey) 28px
              )`,
                            backgroundPosition: '0 16px',
                            opacity: 0.5,
                        }}
                    />

                    {/* Greeting */}
                    <p
                        className="text-xl mb-8 relative z-10 text-[var(--color-pencil)]"
                        style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.4rem' }}
                    >
                        Dear visitor, I'd love to hear from you. Drop me a note below and I'll get back to you soon.
                    </p>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm uppercase tracking-widest mb-2 text-[var(--color-pencil)]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formState.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b-2 border-[var(--color-ink)] py-2 px-1 text-lg focus:outline-none focus:border-[var(--color-pencil)] transition-colors"
                                style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.2rem' }}
                                placeholder="Jane Doe"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm uppercase tracking-widest mb-2 text-[var(--color-pencil)]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-b-2 border-[var(--color-ink)] py-2 px-1 text-lg focus:outline-none focus:border-[var(--color-pencil)] transition-colors"
                                style={{ fontFamily: 'var(--font-handwrite)', fontSize: '1.2rem' }}
                                placeholder="jane@example.com"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm uppercase tracking-widest mb-2 text-[var(--color-pencil)]"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-transparent border-2 border-[var(--color-ink)] py-3 px-3 text-lg focus:outline-none focus:border-[var(--color-pencil)] transition-colors resize-none"
                                style={{
                                    fontFamily: 'var(--font-handwrite)',
                                    fontSize: '1.2rem',
                                    borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                }}
                                placeholder="Write your message here..."
                            />
                        </div>

                        {/* Submit */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, x: -2, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="sketch-border bg-[var(--color-ink)] text-[var(--color-paper)] px-10 py-3 text-sm uppercase tracking-[0.2em] cursor-pointer transition-shadow hover:shadow-[4px_4px_0px_var(--color-pencil)]"
                            style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                        >
                            {submitted ? '✓ Sent!' : 'Send Note'}
                        </motion.button>
                    </form>

                    {/* Decorative pen */}
                    <div className="absolute -bottom-3 -right-3 text-3xl opacity-20 select-none" style={{ fontFamily: 'var(--font-sketch)' }}>
                        ✎
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
