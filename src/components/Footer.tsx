import { Section } from './ui/Section';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '../assets/CampusCatalyst Design - Vol 1/PR Material/Campus-Catalys_LogoLight.png';

import { useState } from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);

            const res = await fetch('/api/register', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setStatus('success');
                setName('');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                            <a href="#" className="p-2 border border-graphite rounded-full text-off-white hover:text-acid-lime hover:border-acid-lime transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-graphite rounded-full text-off-white hover:text-acid-lime hover:border-acid-lime transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 border border-graphite rounded-full text-off-white hover:text-acid-lime hover:border-acid-lime transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
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
                        <h4 className="text-xs font-bold uppercase tracking-widest text-acid-lime mb-6">Stay Engaged</h4>
                        <p className="text-off-white/60 text-sm mb-6">Subscribe to our high-energy newsletter for updates.</p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            {status === 'success' ? (
                                <div className="text-acid-lime text-sm font-medium p-4 border border-acid-lime/20 rounded-lg bg-acid-lime/5">
                                    Thanks for signing up! Check your inbox.
                                </div>
                            ) : (
                                <>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Your Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        disabled={status === 'loading'}
                                        className="bg-charcoal border border-graphite rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-acid-lime transition-colors disabled:opacity-50"
                                    />
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            required
                                            placeholder="email@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={status === 'loading'}
                                            className="bg-charcoal border border-graphite rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-acid-lime transition-colors disabled:opacity-50"
                                        />
                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="bg-acid-lime text-deep-black p-2 rounded-lg hover:glow-lime group transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            {status === 'loading' ? (
                                                <div className="w-5 h-5 border-2 border-deep-black border-t-transparent rounded-full animate-spin" />
                                            ) : (
                                                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            )}
                                        </button>
                                    </div>
                                    {status === 'error' && <p className="text-red-500 text-xs mt-1">Something went wrong. Please try again.</p>}
                                </>
                            )}
                        </form>
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
