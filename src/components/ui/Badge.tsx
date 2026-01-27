import { cn } from './Button';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'outline' | 'solid';
    className?: string;
}

export const Badge = ({ children, variant = 'outline', className }: BadgeProps) => {
    const variants = {
        outline: 'border border-acid-lime/30 text-acid-lime',
        solid: 'bg-acid-lime text-deep-black',
    };

    return (
        <span className={cn(
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-widest',
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
};
