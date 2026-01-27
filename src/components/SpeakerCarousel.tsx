import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { ArrowRight } from 'lucide-react';

const speakers = [
    {
        name: "Dr. Nicole Hecht",
        role: "BioRN",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Prof. Heinz Hänel",
        role: "Oxy5 / ex-Sanofi",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Edward Holson",
        role: "Anavo Therapeutics, CSO",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Ksenia Burka",
        role: "Reactosome",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    },
    {
        name: "Johanna Michielin",
        role: "BioLabs",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    },
];

export const SpeakerCarousel = () => {
    return (
        <Section variant="textured" className="bg-charcoal/50">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <Badge variant="solid" className="mb-4">Speakers</Badge>
                    <h2 className="text-4xl md:text-6xl font-black uppercase">Industry <span className="text-acid-lime">Heavyweights</span></h2>
                </div>
                <button className="flex items-center gap-2 font-bold uppercase tracking-widest text-acid-lime hover:gap-4 transition-all pb-2 border-b border-acid-lime">
                    View All Speakers <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            <div className="flex overflow-x-auto pb-12 gap-8 scrollbar-hide no-scrollbar snap-x">
                {speakers.map((speaker, index) => (
                    <motion.div
                        key={speaker.name}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="snap-center flex-shrink-0 w-72 lg:w-80"
                    >
                        <div className="group relative">
                            {/* Image Container */}
                            <div className="aspect-[4/5] bg-deep-black rounded-2xl overflow-hidden mb-6 border border-graphite transition-all duration-500 group-hover:border-acid-lime grayscale group-hover:grayscale-0">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-acid-lime/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Speaker Info */}
                            <div className="transition-all duration-300 transform group-hover:-translate-y-2">
                                <h3 className="text-2xl font-black uppercase">{speaker.name}</h3>
                                <p className="text-acid-lime font-bold uppercase tracking-widest text-sm">{speaker.role}</p>
                            </div>

                            {/* Corner Tag */}
                            <div className="absolute top-4 right-4 bg-acid-lime text-deep-black text-[10px] font-bold px-2 py-0.5 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                FEATURED
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
