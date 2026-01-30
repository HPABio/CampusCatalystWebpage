import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Badge } from './ui/Badge';

const events = [
    {
        step: "01",
        theme: "Ecosystem Launch",
        title: "Catalyst Vol 1",
        date: "OCT 2024",
        status: "Complete",
        description: "The big kickoff. Founder/investor collaboration and panel-led synergy.",
        link: "/recap/vol1",
    },
    {
        step: "02",
        theme: "Shedding New Light On IDEAS",
        title: "Catalyst Vol 2",
        date: "26 February 2026",
        status: "Next Up",
        description: "In collaboration with Nikon. A full day of microscopy training followed by idea sharing and networking.",
        link: "/events/vol2",
    },
    {
        step: "03",
        theme: "Translation Build",
        title: "Catalyst Vol 3",
        date: "SUMMER 2026",
        status: "Planning",
        description: "Preclinical paths and early company building partnerships.",
    },
    {
        step: "04",
        theme: "Scaling Growth",
        title: "Catalyst Vol 4",
        date: "FALL 2026",
        status: "Scheduled",
        description: "Financing and VC expectations. Moving from startup to growth.",
    },
    {
        step: "05",
        theme: "Big Splash",
        title: "Catalyst Vol 5",
        date: "WINTER 2026",
        status: "Flagship",
        description: "The grand finale. Expanded seats, top-tier speakers, and ecosystem pull.",
    },
];

export const Timeline = () => {
    return (
        <Section variant="clean" className="bg-deep-black" id="timeline">
            <div className="mb-16 md:mb-24">
                <Badge variant="solid" className="mb-4 font-silkscreen">The Road Ahead</Badge>
                <h2 className="text-4xl md:text-6xl font-black uppercase">Series <span className="text-acid-lime">Journey</span></h2>
            </div>

            <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-graphite md:-translate-x-1/2" />

                <div className="space-y-12 md:space-y-24">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.step}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Marker */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-acid-lime glow-lime -translate-x-1/2 top-2 z-10" />

                            <div className="flex-1 pl-16 md:pl-0 w-full md:w-auto">
                                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                                    <span className="text-7xl md:text-8xl font-black text-graphite mb-2 leading-none">
                                        {event.step}
                                    </span>
                                    <div className={`p-8 bg-charcoal border border-graphite rounded-2xl w-full max-w-md transition-all ${event.link ? 'hover:border-acid-lime cursor-pointer group' : ''} ${index % 2 === 0 ? '' : 'text-left'
                                        }`}
                                        onClick={() => event.link && (window.location.href = event.link)}
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <p className="text-acid-lime font-bold uppercase tracking-widest text-xs">{event.theme}</p>
                                            <Badge variant="outline" className="text-[10px] py-0">{event.status}</Badge>
                                        </div>
                                        <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-acid-lime transition-colors">
                                            {event.title}
                                            {event.link && <span className="ml-2 text-acid-lime opacity-0 group-hover:opacity-100 transition-opacity">→</span>}
                                        </h3>
                                        <p className="text-off-white/60 text-sm mb-4">{event.date}</p>
                                        <p className="text-off-white/80">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};
