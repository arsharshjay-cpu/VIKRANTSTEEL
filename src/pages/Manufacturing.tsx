import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Layers, Ruler, Factory, Package, Truck } from 'lucide-react';
import { COMPANY, IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const stages = [
  {
    number: '01',
    title: 'Raw Material Sourcing',
    description: 'Wire rod is sourced as the primary input material. Our location in Bhilai — a major steel-producing region — provides access to quality raw material from established steel producers in the area.',
    icon: Package,
  },
  {
    number: '02',
    title: 'Wire Drawing',
    description: 'Wire rod is drawn through a series of dies to progressively reduce the diameter to the required gauge. This process controls the dimensional accuracy and surface finish of the finished wire.',
    icon: Wrench,
  },
  {
    number: '03',
    title: 'Galvanizing',
    description: 'For galvanized products, drawn wire is processed through either hot-dip or cold-dip galvanizing. Hot-dip immersion in molten zinc produces a thick, metallurgically bonded coating for superior corrosion resistance.',
    icon: Layers,
  },
  {
    number: '04',
    title: 'Mesh Weaving & Welding',
    description: 'Chain link mesh is woven from galvanized wire in a continuous diamond pattern. Weld mesh is produced by resistance-welding transverse and longitudinal wires at each intersection.',
    icon: GridIcon,
  },
  {
    number: '05',
    title: 'Quality Checking',
    description: 'Products are checked at each production stage for dimensional accuracy, surface finish, coating uniformity, and mechanical properties. Non-conforming material is identified and segregated.',
    icon: Ruler,
  },
  {
    number: '06',
    title: 'Packaging & Dispatch',
    description: 'Finished products are packed in coils, rolls, or bundles as appropriate, labeled, and prepared for dispatch to customers, distributors, and dealers.',
    icon: Truck,
  },
];

function GridIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  );
}

export default function Manufacturing() {
  return (
    <div>
      <PageHero
        eyebrow="Manufacturing"
        title="A controlled process from wire rod to finished product."
        subtitle="Our manufacturing operations cover wire drawing, galvanizing, mesh weaving, and finishing — producing a comprehensive range of steel wire products for B2B supply."
        image={IMAGES.factoryMachinery}
      />

      {/* Overview */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-label mb-5">Process Overview</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 leading-tight mb-6">
              Integrated manufacturing under one roof.
            </h2>
            <div className="space-y-4 text-graphite-500 leading-relaxed">
              <p>
                Our manufacturing facility in Bhilai's Light Industrial Area houses wire drawing, galvanizing, and mesh weaving operations. This integration allows us to control quality at each stage of the production process — from raw material inspection through to finished product dispatch.
              </p>
              <p>
                The process begins with wire rod sourced from steel producers in the Bhilai region. The rod is drawn down to the required diameter, galvanized where applicable, and then processed into finished products — including wire coils, mesh rolls, nails, and bundled TMT bars.
              </p>
              <p>
                Our location in one of India's key steel-producing regions gives us a material advantage: direct access to quality wire rod, efficient logistics, and the ability to maintain consistent supply for our customers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={IMAGES.factoryInterior} alt="Factory interior" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8">
              <img src={IMAGES.metalCutting} alt="Metal cutting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Process stages */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Process Stages"
            title="Six stages from raw material to dispatch."
            subtitle="Each stage is controlled and monitored to ensure consistent product quality and supply reliability."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <ProcessCard key={i} number={stage.number} title={stage.title} description={stage.description} icon={<Icon size={22} />} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <img src={IMAGES.moltenMetal} alt="Molten metal in steel production" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-graphite-950/70" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-x">
            <p className="font-display text-2xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
              Located in Bhilai — one of India's most significant steel-producing regions.
            </p>
          </div>
        </div>
      </section>

      {/* Location advantage */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Location Advantage"
            title="Material proximity and logistics efficiency."
            subtitle="Our position in Bhilai's Light Industrial Area provides direct access to raw materials and efficient distribution to customers across the region."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <LocationCard
              icon={<Factory size={22} />}
              title="Raw Material Access"
              description="Direct access to wire rod from major steel producers in the Bhilai region, ensuring consistent quality and supply."
            />
            <LocationCard
              icon={<Truck size={22} />}
              title="Logistics & Distribution"
              description="Light Industrial Area location provides efficient road and rail connectivity for dispatch to customers, distributors, and dealers."
            />
            <LocationCard
              icon={<Package size={22} />}
              title="B2B Supply Structure"
              description="Operations structured to serve procurement managers, contractors, distributors, and institutional buyers with competitive pricing."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
              Want to visit our facility?
            </h2>
            <p className="text-white/60">Contact us to arrange a visit or discuss your supply requirements.</p>
          </div>
          <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: React.ReactNode }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} relative border border-graphite-100 bg-ivory-50 p-8 hover:border-copper-300 hover:shadow-xl transition-all duration-300 group`}>
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center group-hover:bg-copper-500 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <span className="font-display text-4xl font-bold text-graphite-100 group-hover:text-copper-100 transition-colors">{number}</span>
      </div>
      <h3 className="font-display text-lg font-semibold text-graphite-900 mb-3">{title}</h3>
      <p className="text-sm text-graphite-500 leading-relaxed">{description}</p>
    </div>
  );
}

function LocationCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} bg-white border border-graphite-100 p-8 hover:border-copper-300 hover:shadow-xl transition-all duration-300`}>
      <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center mb-5">{icon}</div>
      <h3 className="font-display text-lg font-semibold text-graphite-900 mb-3">{title}</h3>
      <p className="text-sm text-graphite-500 leading-relaxed">{description}</p>
    </div>
  );
}
