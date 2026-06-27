import { motion } from 'framer-motion'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer style={{ borderTop: '1px solid var(--color-border)', padding: '32px 24px', width: '100%' }}>
            <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-between gap-6 w-full max-w-[900px] mx-auto">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start">
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 17, fontWeight: 700, color: 'var(--color-ink)' }}>
                        nafih.
                    </span>
                    <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--color-muted)', marginTop: 2 }}>
                        DevOps Engineer · Kannur, Kerala
                    </p>
                </div>

                {/* Links */}
                <div className="flex justify-center items-center gap-5">
                    {[
                        { label: 'GitHub',   href: 'https://github.com/Abdulnafih2002' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulnafih01' },
                        { label: 'Email',    href: 'mailto:mailtomenafih@gmail.com' },
                    ].map(link => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className="pencil-hover"
                            style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 500, color: 'var(--color-muted)', textDecoration: 'none', letterSpacing: '0.04em' }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p style={{ fontFamily: 'var(--font-ui)', fontSize: 12, color: 'var(--color-muted)' }} className="text-center md:text-right">
                    © {year} Abdul Nafih
                </p>
            </div>
        </footer>
    )
}
