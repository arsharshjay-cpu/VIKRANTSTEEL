import { Link } from 'react-router-dom';
import { ArrowRight, Ruler, Layers, ShieldCheck, CheckCircle2, Wrench, Package } from 'lucide-react';
import { IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const qualityAreas = [
  {
    title: 'Dimensional Accuracy',
    description: 'Wire diameter, mesh aperture, and product dimensions are monitored against specified tolerances at each production stage to ensure consistency.',
    icon: Ruler,
  },
  {
    title: 'Surface & Coating',
    description: 'Surface finish, zinc coating uniformity, and coating adhesion are checked to ensure corrosion resistance performance in end-use environments.',
    icon: Layers,
  },
  {
    title: 'Material Properties',
    description: 'Tensile strength, ductility, and other mechanical properties are verified to ensure products meet the performance requirements of their intended applications.',
    icon: ShieldCheck,
  },
  {
    title: 'Process Control',
    description: 'Production parameters — drawing speed, galvanizing temperature, welding current — are monitored and controlled to maintain consistent output quality.',
    icon: Wrench,
  },
];

const checkpoints = [
  { stage: 'Incoming', item: 'Wire rod inspection', desc: 'Raw material chemistry, diameter, and surface condition verified before acceptance.' },
  { stage: 'Drawing', item: 'Diameter & surface', desc: 'Drawn wire checked for diameter accuracy and surface defects at each die pass.' },
  { stage: 'Galvanizing', item: 'Coating uniformity', desc: 'Zinc coating weight, adhesion, and uniformity checked on galvanized products.' },
  { stage: 'Mesh', item: 'Aperture & weld', desc: 'Mesh aperture size, weld integrity, and roll dimensions verified.' },
  { stage: 'Final', item: 'Pack & label', desc: 'Finished products inspected, packed, and labeled with product identification before dispatch.' },
];

export default function Quality() {
  return (
    <div>
      <PageHero
        eyebrow="Quality"
        title="Quality built into every stage of production."
        subtitle="Consistent product quality is the foundation of our supply relationships. We monitor and control quality at every stage of the manufacturing process."
        image={IMAGES.metalCuttingMachine}
      />

      {/* Quality approach */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="Consistent quality through process control."
            subtitle="Quality is not an afterthought or a final inspection — it is built into the manufacturing process itself. From raw material inspection to finished product dispatch, each stage has defined quality checks."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {qualityAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <QualityCard key={i} icon={<Icon size={22} />} title={area.title} description={area.description} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Checkpoints */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Quality Checkpoints"
            title="Inspection at every production stage."
            subtitle="Our quality control process follows the product through each stage of manufacturing — from incoming raw material to finished product dispatch."
          />
          <div className="mt-14 max-w-4xl">
            {checkpoints.map((cp, i) => (
              <CheckpointRow key={i} index={i} {...cp} />
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <img src={IMAGES.galvanizedSurface} alt="Galvanized steel surface texture" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite-950/80" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x">
            <p className="font-display text-2xl md:text-3xl font-bold text-white max-w-2xl leading-tight">
              Every product is checked before it leaves our facility.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Commitment"
            title="What our customers can expect."
            subtitle="We are committed to providing products that meet the specifications and performance requirements of our B2B customers."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <CommitmentItem
              icon={<CheckCircle2 size={20} />}
              title="Consistent Specifications"
              description="Products manufactured to controlled dimensional tolerances and surface finish standards, batch after batch."
            />
            <CommitmentItem
              icon={<Package size={20} />}
              title="Reliable Supply"
              description="Dependable production and dispatch schedules to keep your projects and procurement plans on track."
            />
            <CommitmentItem
              icon={<ShieldCheck size={20} />}
              title="B2B Support"
              description="Direct access to our team for specifications, documentation, and supply coordination throughout the relationship."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Questions about our quality process?
          </h2>
          <Link to="/contact" className="btn-primary">Get in Touch <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}

function QualityCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} bg-white border border-graphite-100 p-8 hover:border-copper-300 hover:shadow-xl transition-all duration-300 group`}>
      <div className="flex items-start gap-5">
        <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center shrink-0 group-hover:bg-copper-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-graphite-900 mb-2">{title}</h3>
          <p className="text-sm text-graphite-500 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

function CheckpointRow({ index, stage, item, desc }: { index: number; stage: string; item: string; desc: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} flex items-start gap-6 py-6 border-b border-graphite-100 last:border-0`}>
      <span className="font-mono text-sm text-copper-500 font-semibold shrink-0 w-10 pt-1">0{index + 1}</span>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-500">{stage}</span>
          <span className="w-8 h-px bg-graphite-200" />
          <span className="font-display text-base font-semibold text-graphite-900">{item}</span>
        </div>
        <p className="text-sm text-graphite-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function CommitmentItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} bg-white border border-graphite-100 p-8`}>
      <div className="w-10 h-10 bg-copper-500 text-white flex items-center justify-center mb-5">{icon}</div>
      <h3 className="font-display text-lg font-semibold text-graphite-900 mb-2">{title}</h3>
      <p className="text-sm text-graphite-500 leading-relaxed">{description}</p>
    </div>
  );
}
