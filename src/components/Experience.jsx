import { motion } from 'framer-motion'

const experiences = [
    {
        period: 'Mar 2025 — Present',
        company: 'N3 GlobalTech',
        role: 'Co-Founder & Developer / DevOps',
        type: 'Startup · Full Stack + Cloud',
        current: true,
        bullets: [
            'Deployed 5+ client web apps on AWS EC2 end-to-end — server setup, Docker, Nginx, SSL, and Route 53 to production go-live',
            'Built CI/CD pipelines with GitHub Actions — automated build-test-deploy on every push, zero manual deployment steps',
            'Delivered full-stack products: auto workshop CRM, gym management, and business automation for real paying clients',
        ],
        tags: ['AWS EC2', 'Docker', 'GitHub Actions', 'React.js', 'Node.js', 'RDS', 'Nginx', 'Route 53'],
        rotation: -0.4,
    },
    {
        period: 'Feb 2025 — Mar 2025',
        company: 'Mercydaz International Ltd',
        role: 'Software Engineer',
        type: 'Full-Time',
        current: false,
        bullets: [
            'Built RESTful APIs in Java Spring for hotel management; managed GPS device backend with real-time data sync',
            'Self-hosted Docker Nominatim geocoding service in-house — eliminated all third-party API costs',
            'Migrated legacy Java 8 codebase to Java LTS and redeployed on updated Tomcat servers',
        ],
        tags: ['Java', 'Spring MVC', 'Docker', 'REST APIs', 'Nominatim', 'Tomcat'],
        rotation: 0.5,
    },
    {
        period: 'Jul 2024 — Feb 2025',
        company: 'Bsoft Technologies',
        role: 'DevOps Engineer',
        type: 'Full-Time',
        current: false,
        bullets: [
            'Cut release time by 60% — built CI/CD pipelines with Docker + GitHub Actions with GitHub webhooks for auto EC2 deploy',
            'Designed AWS VPC with public/private subnets, NAT gateway, bastion host; IAM roles with MFA and least-privilege access',
            'S3 + CloudFront CDN cut page loads by 45%; CloudWatch + SNS set up for infrastructure monitoring and alerts',
        ],
        tags: ['AWS VPC', 'IAM', 'ALB', 'Auto Scaling', 'CloudFront', 'S3', 'CloudWatch', 'Bash'],
        rotation: -0.6,
    },
]

const educations = [
    { icon: '🎓', degree: 'B.Tech — Information Technology', school: 'APJ Abdul Kalam Technological University, Kerala', period: '2020 – 2024', result: 'CGPA 7.38 / 10' },
    { icon: '📚', degree: 'Higher Secondary Education (Science)', school: 'Directorate of Higher Secondary Education, Kerala', period: '2018 – 2020', result: '92%' },
]

export default function Experience() {
    return (
        <section id="experience" style={{ padding: '80px 0' }}>
            <div className="inner">
                {/* Heading */}
                <div className="section-header">
                    <p className="section-label">My career</p>
                    <h2 className="section-heading">Experience</h2>
                    <div style={{ width: 60, height: 2, background: 'var(--color-ink)', marginTop: 8 }} />
                </div>

                {/* Vertical timeline — static, all 3 roles visible */}
                <div className="timeline">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            {/* Green dot */}
                            <div
                                className="timeline-dot"
                                style={exp.current ? {
                                    background:  'var(--color-accent)',
                                    boxShadow:   '0 0 0 1.5px var(--color-accent), 0 0 10px rgba(34,197,94,0.4)',
                                } : {
                                    background:  'var(--color-ink)',
                                    boxShadow:   '0 0 0 1.5px var(--color-ink)',
                                }}
                            />

                            {/* Date + company label */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, paddingLeft: 8, flexWrap: 'wrap' }}>
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-mid-grey)' }}>
                                    {exp.period}
                                </span>
                                {exp.current && (
                                    <span style={{
                                        fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 700,
                                        letterSpacing: '0.1em', textTransform: 'uppercase',
                                        background: 'var(--color-accent)', color: '#fff',
                                        padding: '2px 10px',
                                        borderRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
                                    }}>
                                        Current
                                    </span>
                                )}
                            </div>

                            {/* Sketch card */}
                            <motion.div
                                whileHover={{ y: -3, boxShadow: '6px 6px 0px var(--color-ink)', rotate: 0 }}
                                className="sketch-card"
                                style={{
                                    marginLeft: 8, padding: 24,
                                    background: 'var(--color-paper)',
                                    rotate: exp.rotation,
                                    borderLeft: exp.current ? '4px solid var(--color-accent)' : undefined,
                                }}
                            >
                                {/* Role + company */}
                                <div style={{ marginBottom: 14 }}>
                                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 17, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 4 }}>
                                        {exp.role}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-pencil)' }}>
                                            {exp.company}
                                        </span>
                                        <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-mid-grey)', borderLeft: '1px solid var(--color-light-grey)', paddingLeft: 8 }}>
                                            {exp.type}
                                        </span>
                                    </div>
                                </div>

                                {/* Bullets */}
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16, listStyle: 'none' }}>
                                    {exp.bullets.map((b, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--color-pencil)' }}>
                                            <span style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2, fontSize: 13 }}>→</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                {/* Doodle tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="doodle-tag" style={{ fontSize: '0.82rem', padding: '2px 10px' }}>{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Education */}
                <div style={{ marginTop: 64 }}>
                    <h3 className="text-center lg:text-left font-bold text-2xl text-[var(--color-ink)] mb-6">Education</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
                        {educations.map((edu, i) => (
                            <motion.div
                                key={edu.degree}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="sketch-card"
                                style={{ padding: 22, background: 'var(--color-paper)' }}
                            >
                                <span style={{ fontSize: 24, marginBottom: 10, display: 'block' }}>{edu.icon}</span>
                                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 6 }}>{edu.degree}</h4>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-pencil)', marginBottom: 14, lineHeight: 1.5 }}>{edu.school}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 6 }}>
                                    <span className="sketch-border" style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, padding: '3px 14px', background: 'var(--color-ink)', color: 'var(--color-paper)' }}>
                                        {edu.result}
                                    </span>
                                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-mid-grey)' }}>{edu.period}</span>
                                </div>
                            </motion.div>
                        ))}
                        {/* NPTEL cert */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.16 }}
                            className="sketch-card"
                            style={{ padding: 22, display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--color-paper)' }}
                        >
                            <span style={{ fontSize: 24, flexShrink: 0 }}>🏅</span>
                            <div>
                                <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-ink)', marginBottom: 5 }}>Problem Solving Through Programming In C</h4>
                                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-mid-grey)' }}>NPTEL Certification · Jul – Oct 2022</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
