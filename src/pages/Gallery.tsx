import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const galleryItems = [
  { image: IMAGES.giWireCoils, title: 'Galvanized Wire Coils', category: 'Products' },
  { image: IMAGES.giWirePackaging, title: 'Vikrant Brand GI Wire Packaging', category: 'Products' },
  { image: IMAGES.wireRodStacked, title: 'Wire Rod Storage', category: 'Products' },
  { image: IMAGES.wireRodCoil, title: 'Wire Rod in Coil', category: 'Products' },
  { image: IMAGES.stayWire, title: 'Stay Wire Coils', category: 'Products' },
  { image: IMAGES.msWire, title: 'Mild Steel (MS) Wire', category: 'Products' },
  { image: IMAGES.hbWire, title: 'High-Tensile (HB) Wire Coils', category: 'Products' },
  { image: IMAGES.barbedWire, title: 'Barbed Wire', category: 'Products' },
  { image: IMAGES.msNails, title: 'MS Nails', category: 'Products' },
  { image: IMAGES.giWeldMesh, title: 'GI Weld Mesh Roll', category: 'Products' },
  { image: IMAGES.weldMesh, title: 'MS Weld Mesh Rolls', category: 'Products' },
  { image: IMAGES.chainLinkMesh, title: 'Chain Link Fencing Mesh', category: 'Products' },
  { image: IMAGES.knottedFencingMesh, title: 'Knotted Fencing Wire Mesh', category: 'Products' },
  { image: IMAGES.giWireFactory, title: 'Production Floor Coils', category: 'Operations' },
  { image: IMAGES.workerInspect, title: 'Quality Inspection', category: 'Operations' },
  { image: IMAGES.factoryInterior, title: 'Manufacturing Floor', category: 'Facility' },
  { image: IMAGES.factoryMachinery, title: 'Industrial Machinery', category: 'Facility' },
  { image: IMAGES.metalCutting, title: 'Metal Cutting', category: 'Operations' },
  { image: IMAGES.warehouseInterior, title: 'Warehouse Interior', category: 'Facility' },
  { image: IMAGES.warehouseSunlit, title: 'Storage Area', category: 'Facility' },
  { image: IMAGES.steelPipesCrane, title: 'Industrial Yard', category: 'Facility' },
  { image: IMAGES.rebarStack, title: 'TMT Bars / Rebar', category: 'Products' },
  { image: IMAGES.constructionRebar, title: 'Construction Application', category: 'Applications' },
];

const categories = ['All', 'Products', 'Facility', 'Operations', 'Applications'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="A visual overview of our products and operations."
        subtitle="Browse images of our steel wire products, manufacturing facility, and application areas."
        image={IMAGES.stackedBeams}
      />

      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Gallery"
            title="Products, facility, and applications."
            subtitle="Filter by category to explore specific areas of our operations."
          />

          {/* Filter */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-graphite-950 text-white'
                    : 'bg-white text-graphite-500 border border-graphite-200 hover:border-graphite-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <GalleryCard key={`${item.title}-${i}`} item={item} index={i} onClick={() => setLightbox(item.image)} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[70] bg-graphite-950/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors" aria-label="Close">
            <X size={32} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[85vh] object-contain" />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Want to see our products in person?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-8">
            Contact us to arrange a facility visit or request product samples.
          </p>
          <Link to="/contact" className="btn-primary">Contact Us <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}

function GalleryCard({ item, index, onClick }: { item: typeof galleryItems[0]; index: number; onClick: () => void }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} group relative aspect-[4/3] overflow-hidden cursor-pointer`}
      onClick={onClick}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-xs text-copper-400 font-semibold uppercase tracking-wider mb-1">{item.category}</p>
        <p className="font-display text-lg font-bold text-white">{item.title}</p>
      </div>
      <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={14} className="text-white -rotate-45" />
      </div>
    </div>
  );
}
