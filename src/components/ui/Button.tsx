import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'outline' | 'sticker';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-acid-lime text-deep-black hover:glow-lime',
        outline: 'border border-graphite text-off-white hover:border-acid-lime hover:text-acid-lime',
        sticker: 'bg-acid-lime text-deep-black diagonal-slash px-8 transform -rotate-1 hover:rotate-0 transition-transform duration-200',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base font-bold',
        lg: 'px-10 py-4 text-lg font-extrabold',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-pill transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-acid-lime/50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};
