import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';
import { ArrowRight } from 'lucide-react';

import NicoleHecht from '../assets/CampusCatalyst Design - Vol 1/PR Material/Nicole Hecht - HeadShot - BioRN.png';
import HeinzHaenel from '../assets/CampusCatalyst Design - Vol 1/PR Material/Heinz Haenel - Portrait - Oxy5.png';
import EdwardHolson from '../assets/CampusCatalyst Design - Vol 1/PR Material/Edward Holson - Anavo - Portrait.webp';
import KseniaBurka from '../assets/CampusCatalyst Design - Vol 1/PR Material/Ksenia Burka - Reactosome - Portrait.png';
import JohannaMichielin from '../assets/CampusCatalyst Design - Vol 1/PR Material/Johanna Michielin - BioLabs - Portrait.avif';
import AnnKristin from '../assets/CampusCatalyst Design - Vol 1/PR Material/Ann-Kristin Mueller_edited.png';
import AlexanderPattberg from '../assets/CampusCatalyst Design - Vol 1/PR Material/Alexander Pattberg.png';

const speakers = [
    {
        name: "Dr. Nicole Hecht",
        role: "BioRN",
        image: NicoleHecht.src,
        vol: 1,
        pattern: "dots"
    },
    {
        name: "Prof. Heinz Hänel",
        role: "Oxy5 / ex-Sanofi",
        image: HeinzHaenel.src,
        vol: 1,
        pattern: "grid"
    },
    {
        name: "Edward Holson",
        role: "Anavo Therapeutics, CSO",
        image: EdwardHolson.src,
        vol: 1,
        pattern: "lines"
    },
    {
        name: "Alexander Pattberg",
        role: "Nucleate",
        image: AlexanderPattberg.src,
        vol: 1,
        pattern: "cross"
    },
    {
        name: "Ksenia Burka",
        role: "Reactosome",
        image: KseniaBurka.src,
        vol: 1,
        pattern: "dots"
    },
    {
        name: "Johanna Michielin",
        role: "BioLabs",
        image: JohannaMichielin.src,
        vol: 1,
        pattern: "grid"
    },
    {
        name: "Ann-Kristin Müller",
        role: "Managing Director, BioLabs",
        image: AnnKristin.src,
        vol: 1,
        pattern: "lines"
    }
];

const getPattern = (type: string, color: string = '#8FFF2B') => {
    switch (type) {
        case 'dots':
            return {
                backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
                backgroundSize: '16px 16px'
            };
        case 'lines':
            return {
                backgroundImage: `repeating-linear-gradient(45deg, ${color} 0, ${color} 1px, transparent 0, transparent 12px)`,
            };
        case 'cross':
            return {
                backgroundImage: `
                    linear-gradient(45deg, ${color} 1px, transparent 1px),
                    linear-gradient(-45deg, ${color} 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            };
        case 'grid':
        default:
            return {
                backgroundImage: `
                    linear-gradient(to right, ${color} 1px, transparent 1px),
                    linear-gradient(to bottom, ${color} 1px, transparent 1px)
                `,
                backgroundSize: '24px 24px'
            };
    }
};

export const SpeakerCarousel = () => {
    return (
        <Section variant="textured" className="bg-charcoal/50">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <Badge variant="solid" className="mb-4">Speakers</Badge>
                    <h2 className="text-4xl md:text-6xl font-black uppercase">Industry <span className="text-acid-lime">Heavyweights</span></h2>
                </div>
                <button
                    className="flex items-center gap-2 font-bold uppercase tracking-widest text-acid-lime hover:gap-4 transition-all pb-2 border-b border-acid-lime"
                    onClick={() => window.location.href = '/speakers'}
                >
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
                            <div className="aspect-[4/5] bg-deep-black rounded-2xl overflow-hidden mb-6 border border-graphite transition-all duration-500 group-hover:border-acid-lime relative">
                                {/* Pattern Background */}
                                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-25 transition-opacity"
                                    style={getPattern(speaker.pattern)}
                                />

                                {/* Glow behind the speaker */}
                                <div
                                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'radial-gradient(circle at center, rgba(143, 255, 43, 0.15) 0%, transparent 70%)' }}
                                />

                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="relative z-10 w-full h-full object-contain object-bottom scale-110 group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-acid-lime/5 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
                            </div>

                            {/* Speaker Info */}
                            <div className="transition-all duration-300 transform group-hover:-translate-y-2">
                                <h3 className="text-2xl font-black uppercase">{speaker.name}</h3>
                                <p className="text-acid-lime font-bold uppercase tracking-widest text-sm">{speaker.role}</p>
                            </div>

                            {/* Corner Tag */}
                            <div className="absolute top-4 right-4 bg-acid-lime text-deep-black text-[10px] font-black px-2 py-1 rounded-full transform rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                                VOL {speaker.vol}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
