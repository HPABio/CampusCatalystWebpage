import { motion } from 'framer-motion';
import { cn } from './Button';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className, hoverEffect = true }: CardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { y: -5, borderColor: 'var(--color-acid-lime)' } : {}}
            className={cn(
                'bg-charcoal border border-graphite rounded-2xl p-6 transition-colors duration-300',
                className
            )}
        >
            {children}
        </motion.div>
    );
};
