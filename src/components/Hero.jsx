import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const lines = [
    { prompt: '$ whoami', output: 'Abdul Nafih — DevOps Engineer & Full Stack Developer' },
    { prompt: '$ cat location.txt', output: 'Kannur, Kerala, India 📍' },
    { prompt: '$ cat company.txt', output: 'Co-Founder @ N3 GlobalTech 🚀' },
    { prompt: '$ ls stack/', output: 'AWS/  Docker/  GitHub-Actions/  React/  Node.js/  Nginx/' },
    { prompt: '$ cat metrics.txt', output: '5+ clients  |  3 live products  |  60% faster deploys' },
    { prompt: '$ cat status.txt', output: '✅ Open to opportunities — hire me!' },
]

function TerminalLine({ prompt, output, startDelay, speed = 28 }) {
    const [promptText, setPromptText] = useState('')
    const [outputText, setOutputText] = useState('')
    const [showOutput, setShowOutput] = useState(false)
    const [cursor, setCursor] = useState(true)

    useEffect(() => {
        const blink = setInterval(() => setCursor(c => !c), 530)
        return () => clearInterval(blink)
    }, [])

    useEffect(() => {
        let i = 0
        const t0 = setTimeout(() => {
            const iv = setInterval(() => {
                if (i < prompt.length) { setPromptText(prompt.slice(0, ++i)) }
                else { clearInterval(iv); setTimeout(() => setShowOutput(true), 200) }
            }, speed)
            return () => clearInterval(iv)
        }, startDelay)
        return () => clearTimeout(t0)
    }, [])

    useEffect(() => {
        if (!showOutput) return
        let j = 0
        const iv = setInterval(() => {
            if (j < output.length) { setOutputText(output.slice(0, ++j)) }
            else clearInterval(iv)
        }, speed - 6)
        return () => clearInterval(iv)
    }, [showOutput])

    if (!promptText && !outputText) return null

    return (
        <div style={{ marginBottom: 12 }}>
            <div style={{ color: '#7dd87a', fontFamily: 'monospace', fontSize: 13 }}>
                {promptText}
                {promptText.length < prompt.length && cursor && <span>▋</span>}
            </div>
            {outputText && (
                <div style={{ color: '#c9c5be', fontFamily: 'monospace', fontSize: 13, paddingLeft: 14, marginTop: 2 }}>
                    {outputText}
                    {outputText.length < output.length && cursor && <span>▋</span>}
                </div>
            )}
        </div>
    )
}

export default function Hero() {
    const [ready, setReady] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => { const t = setTimeout(() => setReady(true), 200); return () => clearTimeout(t) }, [])

    useEffect(() => {
        if (!ready) return
        let n = 0
        const iv = setInterval(() => { n++; setCount(n); if (n >= 10) clearInterval(iv) }, 55)
        return () => clearInterval(iv)
    }, [ready])

    const delays = lines.reduce((acc, l, i) => {
        const prev = acc[i - 1] ?? 400
        const prevDur = ((lines[i - 1]?.prompt.length ?? 0) + (lines[i - 1]?.output.length ?? 0)) * 28 + 400
        return [...acc, prev + prevDur]
    }, [400])

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '100px 24px 64px',
                opacity: ready ? 1 : 0,
                transition: 'opacity 0.6s ease',
                position: 'relative',
            }}
        >
            <div
                className="inner--wide"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 56,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* ── LEFT ─────────────────────── */}
                <div className="animate-fade-up flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-auto" style={{ maxWidth: 440 }}>
                    {/* Label */}
                    <p className="section-label" style={{ marginBottom: 18 }}>
                        DevOps · Cloud · Full Stack
                    </p>

                    {/* Name in Permanent Marker — only element using hero font */}
                    <h1
                        style={{
                            fontFamily: 'var(--font-sketch)',
                            fontSize: 'clamp(44px, 8vw, 80px)',
                            lineHeight: 1.05,
                            color: 'var(--color-ink)',
                            marginBottom: 36,
                            position: 'relative',
                        }}
                    >
                        Abdul<br />
                        <span style={{ position: 'relative', display: 'inline-block' }}>
                            Nafih
                            <svg
                                viewBox="0 0 230 12"
                                style={{ position: 'absolute', bottom: -3, left: 0, width: '100%' }}
                            >
                                <path
                                    d="M2 8 Q 45 2, 90 7 Q 135 12, 175 5 Q 205 1, 228 4"
                                    fill="none"
                                    stroke="var(--color-ink)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray="240"
                                    style={{ animation: 'scribble-draw 1.4s ease 0.8s forwards', strokeDashoffset: 240 }}
                                />
                            </svg>
                        </span>
                    </h1>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: ready ? 1 : 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center lg:justify-start gap-8 mb-9 flex-wrap w-full"
                    >
                        {[
                            { val: '5+', lbl: 'Clients' },
                            { val: '3', lbl: 'Live Apps' },
                            { val: `${count}+`, lbl: 'Deploys' },
                        ].map(s => (
                            <div key={s.lbl}>
                                <div className="stat-value">{s.val}</div>
                                <div className="stat-label">{s.lbl}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 10 }}
                        transition={{ delay: 0.6 }}
                        className="flex justify-center lg:justify-start gap-3.5 flex-wrap w-full"
                    >
                        <a href="#projects" className="btn-primary">See My Work</a>
                        <a href="#contact" className="btn-outline">Hire Me</a>
                    </motion.div>
                </div>

                {/* ── RIGHT — Terminal ─────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: 1 }}
                    animate={{ opacity: ready ? 1 : 0, y: ready ? 0 : 30, rotate: ready ? -0.5 : 1 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="w-full max-w-lg lg:flex-1"
                    style={{ position: 'relative' }}
                >
                    {/* Tape strip on terminal */}
                    <div style={{
                        position: 'absolute', top: -10, left: 28,
                        width: 60, height: 22,
                        background: 'var(--color-tape)',
                        border: '1px solid rgba(0,0,0,0.07)',
                        transform: 'rotate(-1.5deg)',
                        zIndex: 10,
                    }} />

                    <div style={{
                        border: '2px solid var(--color-ink)',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        background: '#1a1a1a',
                        boxShadow: '6px 6px 0px var(--color-ink)',
                    }}>
                        {/* Title bar */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 7,
                            padding: '12px 16px',
                            background: '#242424',
                            borderBottom: '1px solid #333',
                        }}>
                            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
                            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
                            <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
                            <span style={{ marginLeft: 'auto', fontFamily: 'monospace', fontSize: 11, color: '#666' }}>
                                nafih@portfolio ~ bash
                            </span>
                        </div>
                        {/* Body */}
                        <div style={{ padding: '20px 20px 28px', minHeight: 290 }}>
                            {ready && lines.map((line, i) => (
                                <TerminalLine key={i} prompt={line.prompt} output={line.output} startDelay={delays[i]} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll hint */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: ready ? 0.6 : 0 }}
                transition={{ delay: 2 }}
                className="hidden lg:flex"
                style={{
                    position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
                    flexDirection: 'column', alignItems: 'center', gap: 6,
                    textDecoration: 'none', color: 'var(--color-mid-grey)',
                }}
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                        Scroll
                    </span>
                    <div style={{ textAlign: 'center', marginTop: 4 }}>↓</div>
                </motion.div>
            </motion.a>
        </section>
    )
}
