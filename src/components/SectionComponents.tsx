import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = 'left', dark = false }: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl`}
    >
      {eyebrow && (
        <div className={`section-label mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${dark ? 'text-white' : 'text-graphite-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${dark ? 'text-white/60' : 'text-graphite-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      <div className="container-x relative z-10 pb-16 pt-32">
        <div className="animate-fade-up">
          <div className="section-label mb-5 text-copper-400">
            <span className="text-white">{eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-lg text-white/60 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

interface StatProps {
  value: string;
  label: string;
}

export function StatItem({ value, label }: StatProps) {
  return (
    <div>
      <p className="font-display text-4xl lg:text-5xl font-bold text-copper-500">{value}</p>
      <p className="mt-2 text-sm text-graphite-500 uppercase tracking-wider font-medium">{label}</p>
    </div>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} card-industrial p-8 group`}
    >
      <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center mb-5 group-hover:bg-copper-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold text-graphite-900 mb-2">{title}</h3>
      <p className="text-sm text-graphite-500 leading-relaxed">{description}</p>
    </div>
  );
}
