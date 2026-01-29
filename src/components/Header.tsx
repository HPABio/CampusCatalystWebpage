import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/CampusCatalyst Design - Vol 1/PR Material/Campus-Catalys_LogoLight.png';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Events', href: '/events' },
        { name: 'Speakers', href: '/speakers' },
        { name: 'About', href: '/about' },
        { name: 'Partners', href: '/partners' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'py-4 bg-deep-black/80 backdrop-blur-xl border-b border-graphite' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="/" className="group block">
                    <img
                        src={logo.src}
                        alt="Campus Catalyst"
                        className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-widest text-off-white/70 hover:text-acid-lime transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="https://luma.com/7o4axiip"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-acid-lime text-deep-black rounded-full font-black uppercase tracking-tight text-xs hover:scale-105 transition-transform"
                    >
                        Register
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-acid-lime p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-deep-black border-b border-graphite md:hidden"
                    >
                        <nav className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-black uppercase tracking-tight text-off-white hover:text-acid-lime"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://luma.com/7o4axiip"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center px-6 py-4 bg-acid-lime text-deep-black rounded-xl font-black uppercase tracking-tight"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Register Now
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
