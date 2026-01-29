import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Section } from './ui/Section';
import logo from '../assets/CampusCatalyst Design - Vol 1/PR Material/Campus-Catalys_LogoLight.png';

export const Hero = () => {
    return (
        <Section variant="textured" className="pt-32 pb-48 md:pt-48 md:pb-64 overflow-hidden">
            <div className="flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <Badge variant="outline" className="text-sm py-1 px-4 border-acid-lime/50">
                        Building Biotech
                    </Badge>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-8"
                >
                    <img
                        src={logo.src}
                        alt="The Campus Catalyst"
                        className="h-32 md:h-48 lg:h-64 object-contain filter drop-shadow-[0_0_30px_rgba(143,255,43,0.3)] mx-auto"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-off-white/70 max-w-2xl font-medium mb-12"
                >
                    {/* Supercharging the life science ecosystem in Southwest Germany. */}
                    An unconventional event series about building the biotech ecosystem in Southwest Germany.
                    {/* Breaking the mold of traditional scientific events. */}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6"
                >
                    <Button variant="sticker" size="lg" onClick={() => window.open('https://luma.com/7o4axiip', '_blank')}>
                        REGISTER FOR CAM/CAT VOL 2
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}>
                        VIEW TIMELINE
                    </Button>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-24 -right-24 w-96 h-96 bg-acid-lime/10 blur-[120px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    rotate: [0, -5, 0],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute -bottom-24 -left-24 w-96 h-96 bg-acid-lime/5 blur-[100px] rounded-full pointer-events-none"
            />
        </Section>
    );
};
