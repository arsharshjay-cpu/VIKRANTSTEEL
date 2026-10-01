import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageCircle, Phone, ChevronRight, Building2, ShieldCheck,
  Factory, Layers, Cable, HardHat, Sprout, Grid3x3, Wrench, Ruler,
  CircleDot, Minus, Zap, Link as LinkIcon, ShieldAlert, Anchor,
  CircleDashed, Grid2x2,
} from 'lucide-react';
import { COMPANY, PRODUCTS, APPLICATIONS, IMAGES } from '@/data/company';
import { SectionHeading, FeatureCard, StatItem } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof CircleDot> = {
  CircleDot, Minus, Zap, Link: LinkIcon, ShieldAlert, Anchor, CircleDashed,
  Grid3x3, Grid2x2, Layers, Building2, HardHat, ShieldCheck, Sprout, Cable, Factory,
};

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-graphite-950">
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroCoils}
            alt="Steel wire coils at an industrial manufacturing site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-0 grid-pattern" />
        </div>

        <div className="container-x relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <div className="w-10 h-px bg-copper-500" />
              <span className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-400">
                {COMPANY.brand} • EST. {COMPANY.established}
              </span>
            </div>
            <h1 className="animate-fade-up font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Steel Wire Solutions<br />Built for Strength<br />& Reliability
            </h1>
            <p className="animate-fade-up mt-7 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Manufacturing and supplying dependable steel wire products for construction, infrastructure, fencing and industrial requirements.
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Link to="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost-light">
                Get a Quote
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-copper-400 transition-colors text-sm font-medium"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-graphite-950/80 backdrop-blur-sm">
          <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '12+', label: 'Product Categories' },
              { value: '2006', label: 'Established' },
              { value: 'Bhilai', label: 'Chhattisgarh, India' },
              { value: 'B2B', label: 'Manufacturing & Supply' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-2xl lg:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-white/40 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <IntroSection />

      {/* PRODUCT OVERVIEW */}
      <ProductOverview />

      {/* APPLICATIONS */}
      <ApplicationsSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* MANUFACTURING TEASER */}
      <ManufacturingTeaser />

      {/* CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}

function IntroSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="section-label mb-5">About Vikrant Steel</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-graphite-900 leading-tight">
            Two decades of steel wire manufacturing expertise.
          </h2>
          <p className="mt-6 text-lg text-graphite-500 leading-relaxed">
            {COMPANY.name} operates from the Light Industrial Area in Bhilai, Chhattisgarh — one of India's most significant steel-producing regions. Since {COMPANY.established}, we have manufactured and supplied a comprehensive range of steel wire products serving construction, infrastructure, fencing, agriculture, and general industrial requirements.
          </p>
          <p className="mt-4 text-base text-graphite-500 leading-relaxed">
            Our product range spans galvanized wire, mild steel wire, high-tensile wire, fencing mesh, weld mesh, nails, wire rod, and TMT bars — providing a single-source supply solution for procurement managers, contractors, and institutional buyers.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/about" className="btn-primary">
              Learn More <ArrowRight size={16} />
            </Link>
            <Link to="/manufacturing" className="text-sm font-semibold text-graphite-700 hover:text-copper-500 transition-colors flex items-center gap-1">
              Our Manufacturing <ChevronRight size={16} />
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={IMAGES.workerInspect} alt="Worker inspecting steel wire coils" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-graphite-950 text-white p-6 max-w-[260px] hidden md:block">
            <p className="font-display text-5xl font-bold text-copper-500">19</p>
            <p className="text-sm text-white/60 mt-1">Years of manufacturing experience since {COMPANY.established}</p>
          </div>
          <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-copper-400 -z-10" />
        </div>
      </div>
    </section>
  );
}

function ProductOverview() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Product Range"
            title="Twelve categories of steel wire products."
            subtitle="A comprehensive range manufactured to serve diverse industrial, construction, and infrastructure requirements — from galvanized and mild steel wire to fencing mesh, nails, and TMT bars."
          />
          <Link to="/products" className="btn-outline shrink-0">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-graphite-100`}>
          {PRODUCTS.map((product, i) => {
            const Icon = iconMap[product.icon] || CircleDot;
            return (
              <Link
                key={product.id}
                to="/products"
                className="group bg-white p-7 hover:bg-graphite-950 transition-all duration-400 relative"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono text-copper-500 font-semibold">0{i + 1}</span>
                  <Icon size={22} className="text-graphite-300 group-hover:text-copper-400 transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-graphite-900 group-hover:text-white transition-colors mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-graphite-500 group-hover:text-white/50 transition-colors leading-relaxed line-clamp-2">
                  {product.short}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-copper-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApplicationsSection() {
  return (
    <section className="py-24 lg:py-32 bg-graphite-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-14">
          <SectionHeading
            eyebrow="Applications"
            title="Serving diverse industries and sectors."
            subtitle="Our steel wire products are engineered for use across construction, infrastructure, fencing, agriculture, power transmission, and general industrial applications."
            dark
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {APPLICATIONS.map((app, i) => {
            const Icon = iconMap[app.icon] || Building2;
            return (
              <div key={i} className="bg-graphite-950 p-8 group hover:bg-graphite-900 transition-all duration-400">
                <div className="w-12 h-12 border border-copper-500/30 flex items-center justify-center mb-5 group-hover:bg-copper-500 group-hover:border-copper-500 transition-all duration-300">
                  <Icon size={22} className="text-copper-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{app.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{app.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <Link to="/applications" className="inline-flex items-center gap-2 text-copper-400 font-semibold text-sm hover:gap-3 transition-all">
            Explore All Applications <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-100">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Vikrant Steel"
          title="Built on manufacturing discipline and supply reliability."
          subtitle="Procurement managers and contractors choose us for our comprehensive product range, consistent quality, and dependable supply — backed by nearly two decades of operational experience."
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Factory size={22} />}
            title="Integrated Manufacturing"
            description="Wire drawing, galvanizing, and mesh weaving under one roof — ensuring consistent quality and supply chain control across our product range."
          />
          <FeatureCard
            icon={<Layers size={22} />}
            title="Comprehensive Range"
            description="Twelve product categories covering wire, mesh, nails, and TMT bars — a single-source supply solution for multi-product procurement requirements."
          />
          <FeatureCard
            icon={<Ruler size={22} />}
            title="Consistent Specifications"
            description="Products manufactured to controlled dimensional tolerances and surface finish standards, with quality checks at each production stage."
          />
          <FeatureCard
            icon={<Wrench size={22} />}
            title="Industrial Location"
            description="Located in Bhilai's Light Industrial Area — a major steel-producing region — providing access to quality raw materials and efficient logistics."
          />
          <FeatureCard
            icon={<ShieldCheck size={22} />}
            title="B2B Focused"
            description="Structured to serve procurement managers, contractors, distributors, dealers, and institutional buyers with competitive pricing and reliable delivery."
          />
          <FeatureCard
            icon={<HardHat size={22} />}
            title="Established 2006"
            description="Nearly two decades of manufacturing experience in steel wire products, serving construction, infrastructure, and industrial sectors."
          />
        </div>
      </div>
    </section>
  );
}

function ManufacturingTeaser() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.factoryMachinery} alt="Industrial wire manufacturing machinery" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite-950/90" />
        <div className="absolute inset-0 grid-pattern" />
      </div>
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} container-x relative z-10`}>
        <div className="max-w-3xl">
          <div className="section-label mb-5 text-copper-400"><span className="text-white">Manufacturing</span></div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            From wire rod to finished product — a controlled manufacturing process.
          </h2>
          <p className="mt-6 text-lg text-white/60 leading-relaxed">
            Our manufacturing process begins with quality wire rod and moves through drawing, galvanizing, and finishing operations to produce wire and mesh products that meet the requirements of our B2B customers.
          </p>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="12+" label="Product Categories" />
            <StatItem value="06" label="Process Stages" />
            <StatItem value="2006" label="Established" />
            <StatItem value="100%" label="B2B Supply" />
          </div>
          <div className="mt-9">
            <Link to="/manufacturing" className="btn-primary">
              Explore Manufacturing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-24 lg:py-32 bg-ivory-50">
      <div className="container-x">
        <div className="bg-graphite-950 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-30" />
          <div className="absolute top-0 right-0 w-40 h-40 border-l border-b border-copper-500/20" />
          <div className="absolute bottom-0 left-0 w-40 h-40 border-r border-t border-copper-500/20" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-5 text-copper-400"><span className="text-white">Get in touch</span></div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Request a quote for your procurement requirements.
              </h2>
              <p className="mt-5 text-lg text-white/60 leading-relaxed">
                Contact our team to discuss specifications, quantities, and pricing. We supply to procurement managers, contractors, distributors, and institutional buyers.
              </p>
            </div>
            <div className="space-y-4">
              <Link to="/contact" className="btn-primary w-full">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 text-white font-semibold text-sm hover:bg-white hover:text-graphite-900 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp: {COMPANY.contacts.primary.phone}
              </a>
              <a href={`tel:${COMPANY.contacts.primary.phoneRaw}`} className="flex items-center justify-center gap-2 w-full py-3.5 text-white/60 font-medium text-sm hover:text-copper-400 transition-colors">
                <Phone size={16} /> Call: {COMPANY.contacts.primary.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
