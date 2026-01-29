import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export const Mission = () => {
    return (
        <Section variant="clean" className="bg-deep-black py-32 md:py-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight"
                    >
                        Breaking<br />
                        <span className="text-acid-lime">The Mold</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-off-white/80 leading-relaxed font-medium"
                    >
                       
                       {/*  Campus Catalyst isn't just another seminar series. It's a high-voltage platform
                        designed to bridge the gap between academic research and commercial impact.
                        We bring together the region's most innovative minds—founders, investors,
                        and researchers—to shape the future of biotech in Southwest Germany.  */}
                        As a collaboration project between BioLabs Heidelberg, Nucleate, and biobeyond,
                        the Campus Catalyst is a community first event series that highlights the different
                        aspects of the founders journey with Heidelberg's local life science ecosystem as its backdrop.
                        For each event, we invite founders, investors, and researchers to share their insights and anecdotes
                        and give you the opportunity to ask questions and engage in discussions. 
                        
                        For the curious minds that want to go beyond the surface, each chapter of the Campus Catalyst will 
                        feature a unique surprise session that changes with each event.
                        A 1:1 with a founder? A panel discussion? A workshop? You'll have to come and find out!
                        
                        The Campus Catalyst is a space where ideas can be shared, connections can be made, and the biotech ecosystem can be
                        shaped.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-square bg-charcoal border border-graphite rounded-2xl overflow-hidden relative group">
                        {/* This would be a great place for an abstract biotech-themed visual or a photo of the ecosystem */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-acid-lime/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <p className="text-6xl md:text-8xl font-black text-white/5 select-none leading-none">
                                BIOTECH <br /> ENERGY <br /> FUTURE
                            </p>
                        </div>
                        <div className="absolute bottom-8 left-8 border-l-2 border-acid-lime pl-4">
                            <p className="text-sm font-bold uppercase tracking-widest text-acid-lime">Mission Zero</p>
                            <p className="text-xl font-bold">Uniting the Village</p>
                        </div>
                    </div>

                    {/* Decorative overlap element */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-acid-lime rounded-2xl -z-10 transform rotate-12 opacity-50 blur-sm" />
                </motion.div>
            </div>
        </Section>
    );
};
