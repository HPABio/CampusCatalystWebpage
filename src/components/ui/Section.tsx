import { cn } from './Button';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    variant?: 'clean' | 'textured' | 'diagonal';
    containerSize?: 'default' | 'narrow' | 'wide';
}

export const Section = ({
    children,
    id,
    className,
    variant = 'clean',
    containerSize = 'default'
}: SectionProps) => {
    const containers = {
        default: 'max-w-7xl',
        narrow: 'max-w-4xl',
        wide: 'max-w-[1440px]',
    };

    const variants = {
        clean: 'bg-deep-black',
        textured: 'bg-deep-black relative overflow-hidden before:absolute before:inset-0 before:bg-[url("/src/assets/noise.png")] before:opacity-5 before:pointer-events-none',
        diagonal: 'bg-deep-black clip-path-diagonal py-32',
    };

    return (
        <section
            id={id}
            className={cn(
                'relative py-20 md:py-32 outline-none',
                variants[variant],
                className
            )}
        >
            <div className={cn(
                'mx-auto px-6 md:px-12',
                containers[containerSize]
            )}>
                {children}
            </div>
        </section>
    );
};
