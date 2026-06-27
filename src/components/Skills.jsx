import { useState } from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
    {
        icon: '☁️',
        label: 'Cloud & DevOps',
        skills: ['AWS EC2', 'S3', 'RDS', 'Docker', 'GitHub Actions', 'Nginx', 'CI/CD', 'CloudFront', 'Route 53', 'CloudWatch', 'ALB', 'Auto Scaling'],
    },
    {
        icon: '⚛️',
        label: 'Full Stack',
        skills: ['React.js', 'Node.js', 'Express.js', 'Java', 'Spring MVC', 'MongoDB', 'MySQL', 'Firebase', 'REST APIs'],
    },
    {
        icon: '🛠️',
        label: 'Tools & Infra',
        skills: ['Linux (Ubuntu)', 'Git / GitHub', 'VS Code', 'IntelliJ IDEA', 'Claude / AI', 'IAM', 'VPC', 'SSL/TLS', 'Bash Scripting'],
    },
]

const archNodes = [
    { id: 'user', x: 14,  y: 95,  label: 'User',       icon: '👤', desc: 'Client Browser' },
    { id: 'r53',  x: 108, y: 182, label: 'Route 53',   icon: '🌐', desc: 'DNS Routing' },
    { id: 'cf',   x: 128, y: 95,  label: 'CloudFront', icon: '🌍', desc: 'CDN / Cache' },
    { id: 'alb',  x: 244, y: 95,  label: 'ALB',        icon: '⚖️', desc: 'Load Balancer' },
    { id: 'iam',  x: 244, y: 182, label: 'IAM + MFA',  icon: '🔒', desc: 'Access Control' },
    { id: 'ec2a', x: 362, y: 55,  label: 'EC2+Docker', icon: '🐳', desc: 'App Container A' },
    { id: 'ec2b', x: 362, y: 136, label: 'EC2+Docker', icon: '🐳', desc: 'App Container B' },
    { id: 'rds',  x: 480, y: 95,  label: 'RDS',        icon: '🗄️', desc: 'Managed DB' },
    { id: 'cw',   x: 480, y: 182, label: 'CloudWatch', icon: '📊', desc: 'Monitoring + SNS' },
]
const archEdges = [
    ['user','cf'], ['cf','alb'], ['r53','cf'],
    ['alb','ec2a'], ['alb','ec2b'],
    ['ec2a','rds'], ['ec2b','rds'],
    ['iam','alb'], ['ec2a','cw'],
]
function getCenter(id) {
    const n = archNodes.find(x => x.id === id)
    return n ? { x: n.x + 34, y: n.y + 20 } : { x: 0, y: 0 }
}

export default function Skills() {
    const [hovered, setHovered] = useState(null)

    return (
        <section id="skills" style={{ padding: '80px 0' }}>
            <div className="inner">
                {/* Heading */}
                <div className="section-header">
                    <p className="section-label">What I work with</p>
                    <h2 className="section-heading">Skills & Stack</h2>
                    <div style={{ width: 60, height: 2, background: 'var(--color-ink)', marginTop: 8 }} />
                </div>

                {/* Architecture diagram — preserved from before */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ marginBottom: 48 }}
                >
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-mid-grey)', marginBottom: 12 }}>
                        ✎ How I typically architect a deployment — hover nodes to explore
                    </p>

                    <div
                        className="sketch-card"
                        style={{ padding: '20px 16px 14px', overflow: 'auto', background: 'var(--color-paper-dark)', position: 'relative' }}
                    >
                        {/* Tape on diagram */}
                        <div style={{
                            position: 'absolute', top: -10, left: 32,
                            width: 64, height: 22, background: 'var(--color-tape)',
                            border: '1px solid rgba(0,0,0,0.07)', transform: 'rotate(-1.5deg)',
                        }} />

                        <svg viewBox="0 0 580 228" style={{ width: '100%', minWidth: 450, height: 'auto', display: 'block' }}>
                            {/* Ruled lines background */}
                            {Array.from({ length: 8 }).map((_, i) => (
                                <line key={i} x1="0" y1={i * 30 + 6} x2="580" y2={i * 30 + 6}
                                    stroke="var(--color-light-grey)" strokeWidth="0.5" opacity="0.6" />
                            ))}

                            {/* Dashed edges */}
                            {archEdges.map(([a, b]) => {
                                const f = getCenter(a), t = getCenter(b)
                                return (
                                    <motion.line key={`${a}-${b}`}
                                        x1={f.x} y1={f.y} x2={t.x} y2={t.y}
                                        stroke="var(--color-light-grey)" strokeWidth="1.5" strokeDasharray="5 4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 }}
                                    />
                                )
                            })}

                            {/* Nodes — sketch rect style */}
                            {archNodes.map((node, i) => {
                                const isHov = hovered === node.id
                                return (
                                    <g key={node.id} transform={`translate(${node.x},${node.y})`}
                                        style={{ cursor: 'pointer' }}
                                        onMouseEnter={() => setHovered(node.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <motion.rect x={0} y={0} width={68} height={38} rx={4}
                                            fill={isHov ? 'var(--color-ink)' : 'var(--color-paper)'}
                                            stroke="var(--color-ink)"
                                            strokeWidth={isHov ? 2 : 1.5}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: i * 0.05 }}
                                            style={{ transition: 'fill 0.18s ease' }}
                                        />
                                        {/* sketch shadow */}
                                        {!isHov && (
                                            <rect x={2} y={2} width={68} height={38} rx={4}
                                                fill="none" stroke="var(--color-ink)" strokeWidth="0.5" opacity="0.15"
                                                transform="translate(2,2)"
                                            />
                                        )}
                                        <text x={34} y={15} textAnchor="middle" fontSize={14}
                                            fill={isHov ? 'var(--color-paper)' : 'var(--color-ink)'}>
                                            {node.icon}
                                        </text>
                                        <text x={34} y={30} textAnchor="middle"
                                            fontFamily="var(--font-body)" fontSize={6.5}
                                            fill={isHov ? '#ccc' : 'var(--color-pencil)'} fontWeight="600">
                                            {node.label}
                                        </text>

                                        {isHov && (
                                            <g>
                                                <rect x={-10} y={-28} width={88} height={22} rx={3}
                                                    fill="var(--color-ink)" />
                                                <text x={34} y={-13} textAnchor="middle"
                                                    fontFamily="var(--font-body)" fontSize={7.5}
                                                    fill="var(--color-paper)" fontWeight="600">
                                                    {node.desc}
                                                </text>
                                            </g>
                                        )}
                                    </g>
                                )
                            })}
                        </svg>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-mid-grey)', textAlign: 'right', marginTop: 6 }}>
                            hover nodes ↑
                        </p>
                    </div>
                </motion.div>

                {/* 3-column skill grid with doodle-tag pills */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="sketch-card"
                            style={{ padding: 22, background: 'var(--color-paper)' }}
                        >
                            {/* Group header */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                                <span style={{ fontSize: 22 }}>{group.icon}</span>
                                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--color-ink)' }}>
                                    {group.label}
                                </span>
                            </div>
                            {/* Doodle pills */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                {group.skills.map(skill => (
                                    <span key={skill} className="doodle-tag" style={{ fontSize: '0.85rem', padding: '3px 11px' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
