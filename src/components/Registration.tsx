import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';

export const Registration = () => {
    return (
        <Section variant="clean" className="py-0">
            <div className="bg-acid-lime rounded-2xl md:rounded-[40px] px-8 py-20 md:p-24 text-deep-black relative overflow-hidden group">
                <div className="relative z-10 flex flex-col items-center text-center">
                    <Badge variant="solid" className="bg-deep-black text-acid-lime mb-6">Act Fast</Badge>
                    <h2 className="text-5xl md:text-8xl font-black uppercase mb-8 tracking-tighter max-w-4xl">
                        Don’t let the ecosystem <br />
                        <span className="italic">outscale</span> you.
                    </h2>
                    <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl opacity-80">
                        Join the inaugural edition of Campus Catalyst.
                        Seats are limited to ensure high-voltage networking.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Button className="bg-deep-black text-acid-lime hover:scale-105 transition-transform" size="lg">
                            SECURE YOUR SPOT
                        </Button>
                        <Button variant="outline" className="border-deep-black text-deep-black hover:bg-deep-black hover:text-acid-lime" size="lg">
                            NEWSLETTER SIGNUP
                        </Button>
                    </div>
                </div>

                {/* Dynamic visual elements */}
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        rotate: [0, 3, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-10 right-10 opacity-20 hidden md:block"
                >
                    <p className="text-[200px] leading-none font-black select-none">CC I</p>
                </motion.div>

                <div className="absolute inset-0 bg-[url('/src/assets/noise.png')] opacity-10 pointer-events-none" />
            </div>
        </Section>
    );
};
