import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HardHat, ShieldCheck, Sprout, Cable, Factory } from 'lucide-react';
import { COMPANY, IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const applications = [
  {
    title: 'Construction',
    icon: Building2,
    description: 'Our TMT bars, HB wire, MS wire, and weld mesh serve as essential inputs for reinforced concrete construction across residential, commercial, and infrastructure projects. Binding wire, nails, and mesh products support daily construction operations.',
    products: ['TMT Bars', 'HB Wire', 'MS Wire', 'Weld Mesh', 'MS Nails'],
    image: IMAGES.rebarStack,
  },
  {
    title: 'Infrastructure',
    icon: HardHat,
    description: 'Roads, bridges, railways, power transmission, and public utility installations require dependable steel wire products. Our stay wire, galvanized wire, and mesh products are used in structural support, reinforcement, and boundary applications.',
    products: ['Stay Wire', 'GI Wire — Hot Dip', 'Chain Link Mesh', 'Weld Mesh'],
    image: IMAGES.steelPipesCrane,
  },
  {
    title: 'Fencing & Security',
    icon: ShieldCheck,
    description: 'Perimeter security for industrial sites, agricultural land, railway boundaries, and restricted-access areas. Our barbed wire, chain link mesh, and knotted fencing mesh provide effective, durable boundary protection.',
    products: ['Barbed Wire', 'Chain Link Mesh', 'Knotted Fencing Mesh', 'GI Wire — Hot Dip'],
    image: IMAGES.barbedWireFence,
  },
  {
    title: 'Agriculture',
    icon: Sprout,
    description: 'Farm boundaries, animal enclosures, vineyard trellising, and crop support rely on galvanized wire and fencing mesh. Our products provide long-lasting performance in outdoor, weather-exposed environments.',
    products: ['GI Wire — Hot Dip', 'Chain Link Mesh', 'Barbed Wire', 'MS Wire'],
    image: IMAGES.barbedWireClose,
  },
  {
    title: 'Power & Telecom',
    icon: Cable,
    description: 'Utility pole support, transmission tower guy lines, and telecom infrastructure installations require high-tensile galvanized stay wire. Our products deliver reliable load distribution and corrosion resistance for outdoor infrastructure.',
    products: ['Stay Wire', 'GI Wire — Hot Dip', 'HB Wire'],
    image: IMAGES.cableReels,
  },
  {
    title: 'General Industrial',
    icon: Factory,
    description: 'Wire rod, MS wire, and weld mesh serve as inputs for fastener manufacturing, machine guards, safety screens, shelving, and general fabrication. Our products support a wide range of downstream manufacturing and industrial applications.',
    products: ['Wire Rod', 'MS Wire', 'Weld Mesh', 'MS Nails'],
    image: IMAGES.warehouseSunlit,
  },
];

export default function Applications() {
  return (
    <div>
      <PageHero
        eyebrow="Applications"
        title="Steel wire products engineered for real-world use."
        subtitle="From reinforced concrete to perimeter security, power transmission to agricultural fencing — our products serve diverse industries and sectors."
        image={IMAGES.constructionRebar}
      />

      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industry Applications"
            title="Where our products are used."
            subtitle="Each application area demands specific product characteristics — from corrosion resistance and tensile strength to dimensional accuracy and coating uniformity."
          />

          <div className="mt-14 space-y-6">
            {applications.map((app, i) => (
              <ApplicationRow key={i} app={app} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Discuss your application requirements.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Our team can help you identify the right products for your specific use case, environment, and performance requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm hover:bg-white hover:text-graphite-900 transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ApplicationRow({ app, index }: { app: typeof applications[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = app.icon;
  const isReversed = index % 2 === 1;
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-0 border border-graphite-100 bg-white overflow-hidden`}
    >
      <div className={`aspect-[16/10] lg:aspect-auto overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
        <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8 lg:p-12 flex flex-col justify-center">
        <div className="flex items-center gap-4 mb-5">
          <span className="font-mono text-sm text-copper-500 font-semibold">0{index + 1}</span>
          <div className="w-10 h-10 bg-graphite-900 text-copper-400 flex items-center justify-center">
            <Icon size={18} />
          </div>
        </div>
        <h3 className="font-display text-2xl lg:text-3xl font-bold text-graphite-900 mb-4">{app.title}</h3>
        <p className="text-graphite-500 leading-relaxed mb-6">{app.description}</p>
        <div>
          <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-500 mb-3">Relevant Products</p>
          <div className="flex flex-wrap gap-2">
            {app.products.map((p) => (
              <span key={p} className="px-3 py-1.5 bg-ivory-100 text-graphite-600 text-xs font-medium border border-graphite-100">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
