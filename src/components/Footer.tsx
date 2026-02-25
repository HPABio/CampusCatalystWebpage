import { Section } from './ui/Section';
import { Instagram, Linkedin, Mail } from 'lucide-react';
import logo from '../assets/CampusCatalyst Design - Vol 1/PR Material/Campus-Catalys_LogoLight.png';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import nucleateLogo from '../assets/CorporateDesign/partners_nucleate.png';
import biolabsLogo from '../assets/CorporateDesign/partners_biolabs.png';
import biobeyondLogo from '../assets/CorporateDesign/partners_biobeyond.png';

const PARTNERS = [
    {
        name: "Nucleate",
        logo: nucleateLogo,
        links: {
            linkedin: "https://www.linkedin.com/company/nucleategermany/",
            instagram: "https://www.instagram.com/nucleate.germany/",
            twitter: "https://x.com/NucleateGermany"
        }
    },
    {
        name: "BioLabs",
        logo: biolabsLogo,
        links: {
            linkedin: "https://www.linkedin.com/company/biolabs-heidelberg/",
            instagram: "https://www.instagram.com/biolabsheidelberg/",
            twitter: "https://x.com/BiolabsHD"
        }
    },
    {
        name: "biobeyond",
        logo: biobeyondLogo,
        links: {
            linkedin: "https://www.linkedin.com/company/biobeyond/",
            instagram: "https://biobeyond.eu",
            twitter: "https://biobeyond.eu"
        }
    }
];

const XIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={className}
        fill="currentColor"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </svg>
);

const SocialCircleGroup = ({ icon, type }: { icon: React.ReactNode, type: 'linkedin' | 'instagram' | 'twitter' }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="p-2 border border-graphite rounded-full text-off-white hover:text-acid-lime hover:border-acid-lime transition-all cursor-pointer z-10 bg-deep-black">
                {icon}
            </div>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full pt-2 flex flex-col gap-2 items-center z-20"
                    >
                        {PARTNERS.map((partner, idx) => (
                            <motion.a
                                key={partner.name}
                                href={partner.links[type]}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0, y: -20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20,
                                    delay: idx * 0.05
                                }}
                                className="w-8 h-8 rounded-full border border-graphite bg-charcoal flex items-center justify-center overflow-hidden hover:border-acid-lime transition-colors group"
                                title={`${partner.name} ${type}`}
                            >
                                <img
                                    src={partner.logo.src}
                                    alt={partner.name}
                                    className="w-5 h-5 object-contain grayscale group-hover:grayscale-0 transition-all"
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deep-black pt-24 pb-12">
            <Section variant="clean" className="py-0 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <img src={logo.src} alt="Campus Catalyst" className="h-12 mb-6" />
                        <p className="text-off-white/60 text-sm leading-relaxed mb-8">
                            An event series by Nucleate and regional partners to supercharge
                            the life science ecosystem in Southwest Germany.
                        </p>
                        <div className="flex gap-4">
                            <SocialCircleGroup icon={<Linkedin className="w-5 h-5" />} type="linkedin" />
                            <SocialCircleGroup icon={<Instagram className="w-5 h-5" />} type="instagram" />
                            <SocialCircleGroup icon={<XIcon className="w-5 h-5" />} type="twitter" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-acid-lime mb-6">Series Journey</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#timeline" className="text-off-white/60 hover:text-acid-lime transition-colors">CAM/CAT Vol 1: Ecosystem Launch</a></li>
                            <li><a href="#timeline" className="text-off-white/60 hover:text-acid-lime transition-colors">CAM/CAT Vol 2: Shedding New Light On IDEAS</a></li>
                            <li><a href="#timeline" className="text-off-white/60 hover:text-acid-lime transition-colors">CAM/CAT Vol 3: Translation Build</a></li>
                            <li><a href="#timeline" className="text-off-white/60 hover:text-acid-lime transition-colors">CAM/CAT Vol 4: Scaling Growth</a></li>
                            <li><a href="#timeline" className="text-off-white/60 hover:text-acid-lime transition-colors">CAM/CAT Vol 5: Big Splash</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-acid-lime mb-6">Project</h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="/about" className="text-off-white/60 hover:text-acid-lime transition-colors">About Us</a></li>
                            <li><a href="/partners" className="text-off-white/60 hover:text-acid-lime transition-colors">Partners</a></li>
                            <li><a href="/speakers" className="text-off-white/60 hover:text-acid-lime transition-colors">Speakers</a></li>
                            <li><a href="/attend" className="text-off-white/60 hover:text-acid-lime transition-colors">Attend</a></li>
                        </ul>
                    </div>

                    <div id="newsletter">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-acid-lime mb-6">Stay Voltage</h4>
                        <p className="text-off-white/60 text-sm mb-6">Subscribe to our high-energy newsletter for updates.</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="email@example.com"
                                className="bg-charcoal border border-graphite rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-acid-lime transition-colors"
                            />
                            <button className="bg-acid-lime text-deep-black p-2 rounded-lg hover:glow-lime group transition-all">
                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Bottom Bar */}
            <Section variant="clean" className="py-0 border-t border-graphite mt-12 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-off-white/40">
                    <p>&copy; {currentYear} Campus Catalyst Event Series</p>
                    <div className="flex gap-8">
                        <a href="/imprint" className="hover:text-acid-lime transition-colors">Imprint</a>
                        <a href="/imprint" className="hover:text-acid-lime transition-colors">Privacy Policy</a>
                        <a href="/code-of-conduct" className="hover:text-acid-lime transition-colors">Code of Conduct</a>
                    </div>
                </div>
            </Section>
        </footer>
    );
};
