import { motion } from 'framer-motion'

const featuredProjects = [
    {
        id: 'workshop',
        title: 'Auto Workshop Service Management',
        tagline: 'From job card to invoice — fully digital',
        description: 'Complete workshop management system built for a real client. Tracks job cards, service history, billing, and technician assignments. Deployed live on AWS with automated CI/CD.',
        liveUrl: 'https://www.n3servicebook.in/',
        liveDomain: 'n3servicebook.in',
        impact: [
            { icon: '📋', stat: '100%',  label: 'Paper-free job tracking' },
            { icon: '🚀', stat: 'Auto',  label: 'CI/CD on every push' },
            { icon: '🗄️', stat: 'RDS',   label: 'Managed DB + backups' },
        ],
        techStack: ['React.js', 'Node.js', 'RDS MySQL', 'AWS EC2', 'Docker', 'GitHub Actions', 'Nginx', 'Route 53'],
        features: ['Job card creation & tracking', 'Service history per vehicle', 'Billing & invoicing', 'Technician assignment'],
        rotation: -0.5,
    },
    {
        id: 'gym',
        title: 'Gym Management System',
        tagline: '80% fewer manual follow-ups with automated renewals',
        description: 'Gym operations platform handling memberships, payments, financial reporting, and automated renewal notifications via node-cron. Live and running for a client.',
        liveUrl: 'https://www.n3fitbook.in/',
        liveDomain: 'n3fitbook.in',
        impact: [
            { icon: '🔔', stat: '80%',    label: 'Fewer manual follow-ups' },
            { icon: '💰', stat: 'Live',   label: 'Financial reporting' },
            { icon: '⏰', stat: 'cron',   label: 'Automated reminders' },
        ],
        techStack: ['React.js', 'Express.js', 'MongoDB', 'Firebase', 'node-cron', 'AWS EC2', 'Docker', 'Nginx'],
        features: ['Membership tracking & renewal', 'Automated SMS/email alerts', 'Revenue & financial reports', 'Member portal'],
        rotation: 0.6,
    },
]

const otherProjects = [
    {
        title: 'CRM & Business Automation',
        description: 'Lead tracking, follow-up scheduling, and pipeline management CRM. Full AWS deployment end-to-end.',
        tags: ['React', 'Node.js', 'MongoDB', 'AWS EC2', 'Docker'],
        icon: '📊',
    },
    {
        title: 'CI/CD Pipeline Setup on AWS',
        description: 'Automated deployment pipelines across multiple client projects — 60% faster release cycle via GitHub Webhooks.',
        tags: ['Docker', 'GitHub Actions', 'AWS EC2', 'Bash'],
        icon: '⚙️',
    },
    {
        title: 'Self-hosted Geocoding Service',
        description: 'Docker-based Nominatim geocoder in-house for GPS tracking — eliminated all third-party API costs.',
        tags: ['Docker', 'Nominatim', 'OpenStreetMap', 'Nginx'],
        icon: '📍',
    },
    {
        title: 'AWS VPC & Security Architecture',
        description: 'Production VPC with subnets, NAT gateway, IAM MFA, ALB. CloudFront cut load times by 45%.',
        tags: ['AWS VPC', 'IAM', 'ALB', 'Auto Scaling', 'CloudFront'],
        icon: '🔒',
    },
]

function FeaturedCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotate: project.rotation * -1 }}
            whileInView={{ opacity: 1, y: 0, rotate: project.rotation }}
            whileHover={{ y: -4, rotate: 0, boxShadow: '8px 8px 0px var(--color-ink)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="sketch-card"
            style={{ background: 'var(--color-paper)', overflow: 'hidden', padding: 0 }}
        >
            {/* Torn top edge */}
            <div
                className="torn-top"
                style={{ height: 12, background: 'var(--color-paper-dark)', marginBottom: -1 }}
            />

            {/* Tape strip */}
            <div style={{
                position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
                width: 72, height: 22, background: 'var(--color-tape)',
                border: '1px solid rgba(0,0,0,0.07)',
            }} />

            <div style={{ padding: 28, position: 'relative' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                            <span style={{
                                fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
                                letterSpacing: '0.1em', textTransform: 'uppercase',
                                background: 'var(--color-ink)', color: 'var(--color-paper)',
                                padding: '2px 10px',
                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                            }}>N3 GlobalTech</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-mid-grey)' }}>
                                <motion.span
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: 'var(--color-accent)' }}
                                />
                                Live
                            </span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-ink)', marginBottom: 4 }}>
                            {project.title}
                        </h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-mid-grey)' }}>
                            {project.tagline}
                        </p>
                    </div>

                    {/* Visit Live Site — sketch button */}
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: -2, y: -2, boxShadow: '6px 6px 0px var(--color-ink)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: 4, padding: '12px 18px',
                            border: '2px solid var(--color-ink)',
                            borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                            background: 'var(--color-ink)', color: 'var(--color-paper)',
                            textDecoration: 'none', minWidth: 128, flexShrink: 0,
                            boxShadow: '4px 4px 0px var(--color-pencil)',
                            transition: 'all 0.18s ease',
                        }}
                    >
                        <span style={{ fontSize: 20 }}>🌐</span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                            Visit Live Site
                        </span>
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, opacity: 0.75 }}>
                            {project.liveDomain}
                        </span>
                    </motion.a>
                </div>

                {/* Impact stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, marginBottom: 20 }}>
                    {project.impact.map(imp => (
                        <div
                            key={imp.label}
                            style={{
                                textAlign: 'center', padding: '12px 8px',
                                background: 'var(--color-paper-dark)',
                                border: '1.5px solid var(--color-light-grey)',
                                borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                            }}
                        >
                            <div style={{ fontSize: 18, marginBottom: 4 }}>{imp.icon}</div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--color-ink)' }}>{imp.stat}</div>
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--color-mid-grey)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 2 }}>{imp.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--color-pencil)', marginBottom: 12 }}>
                            {project.description}
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            {project.features.map(f => (
                                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 7, fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-pencil)' }}>
                                    <span style={{ color: 'var(--color-accent)', marginTop: 1 }}>✓</span> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: 10 }}>Tech Stack</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                            {project.techStack.map(tech => (
                                <span key={tech} className="doodle-tag" style={{ fontSize: '0.88rem', padding: '3px 10px' }}>{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="projects" style={{ padding: '80px 0' }}>
            <div className="inner">
                {/* Heading */}
                <div className="section-header">
                    <p className="section-label">What I've built</p>
                    <h2 className="section-heading">Projects</h2>
                    <div style={{ width: 60, height: 2, background: 'var(--color-ink)', marginTop: 8 }} />
                </div>

                {/* Featured label */}
                <p style={{
                    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700,
                    color: 'var(--color-accent)', marginBottom: 24, letterSpacing: '0.02em',
                }}>
                    ★ Featured — Live Products
                </p>

                {/* 80px gap between featured cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 80, marginBottom: 64, position: 'relative' }}>
                    {featuredProjects.map((project, i) => (
                        <FeaturedCard key={project.id} project={project} index={i} />
                    ))}
                </div>

                {/* Other projects */}
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-mid-grey)', marginBottom: 20 }}>
                    Other Work
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
                    {otherProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            className="sketch-card"
                            style={{ padding: 22, display: 'flex', flexDirection: 'column', background: 'var(--color-paper)' }}
                        >
                            <span style={{ fontSize: 28, marginBottom: 12 }}>{project.icon}</span>
                            <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 8 }}>
                                {project.title}
                            </h3>
                            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, lineHeight: 1.6, color: 'var(--color-pencil)', marginBottom: 16, flex: 1 }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="doodle-tag" style={{ fontSize: '0.82rem', padding: '2px 9px' }}>{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
