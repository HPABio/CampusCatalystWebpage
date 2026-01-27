import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Zap, Users, Lightbulb, TrendingUp } from 'lucide-react';

const reasons = [
    {
        icon: <Zap className="w-8 h-8 text-acid-lime" />,
        title: "High-Voltage Insights",
        description: "Learn from pioneers who have successfully turned scientific breakthroughs into scalable biotech ventures.",
    },
    {
        icon: <Users className="w-8 h-8 text-acid-lime" />,
        title: "The Ecosystem Hub",
        description: "Connect directly with decision-makers, VCs, and the next generation of life science founders.",
    },
    {
        icon: <Lightbulb className="w-8 h-8 text-acid-lime" />,
        title: "New Opportunities",
        description: "Discovery collaboration paths, funding rounds, and partnerships you won't find anywhere else.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-acid-lime" />,
        title: "Shape the Future",
        description: "Be an active part of building Southwest Germany into a global biotech powerhouse.",
    },
];

export const Features = () => {
    return (
        <Section variant="clean" className="py-24 md:py-32">
            <div className="mb-16">
                <Badge variant="outline" className="mb-4">Value Proposition</Badge>
                <h2 className="text-4xl md:text-6xl font-black uppercase">Why <span className="text-acid-lime text-glow-lime">Attend?</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group hover:bg-graphite/40 border-graphite transition-all">
                            <div className="mb-6 p-4 bg-deep-black rounded-xl w-fit group-hover:scale-110 transition-transform">
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-black uppercase mb-4">{reason.title}</h3>
                            <p className="text-off-white/70 leading-relaxed font-medium">
                                {reason.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
