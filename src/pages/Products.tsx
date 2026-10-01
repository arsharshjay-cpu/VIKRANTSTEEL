import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, MessageCircle, ChevronDown,
  CircleDot, Minus, Zap, Link as LinkIcon, ShieldAlert, Anchor,
  CircleDashed, Grid3x3, Grid2x2, Layers,
} from 'lucide-react';
import { COMPANY, PRODUCTS, IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

const iconMap: Record<string, typeof CircleDot> = {
  CircleDot, Minus, Zap, Link: LinkIcon, ShieldAlert, Anchor, CircleDashed,
  Grid3x3, Grid2x2, Layers,
};

const productImages: Record<string, string> = {
  'gi-wire-hot-dip': IMAGES.giWireHotDip,
  'gi-wire-cold-dip': IMAGES.giWireColdDip,
  'ms-wire': IMAGES.msWire,
  'hb-wire': IMAGES.hbWire,
  'stay-wire': IMAGES.stayWire,
  'barbed-wire': IMAGES.barbedWire,
  'ms-nails': IMAGES.msNails,
  'wire-rod': IMAGES.wireRod,
  'chain-link-mesh': IMAGES.chainLinkMesh,
  'knotted-fencing-mesh': IMAGES.knottedFencingMesh,
  'weld-mesh': IMAGES.giWeldMesh,
  'tmt-bars': IMAGES.rebarStack,
};

export default function Products() {
  const [openId, setOpenId] = useState<string | null>(PRODUCTS[0].id);

  return (
    <div>
      <PageHero
        eyebrow="Products"
        title="A comprehensive range of steel wire products."
        subtitle="Twelve product categories manufactured and supplied for construction, infrastructure, fencing, agriculture, and general industrial applications."
        image={IMAGES.wireMeshPattern}
      />

      {/* Product grid */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Catalogue"
            title="Browse our twelve product categories."
            subtitle="Each product is manufactured to serve specific industrial applications. Click any product to view detailed specifications and typical use cases."
          />

          <div className="mt-14 space-y-4">
            {PRODUCTS.map((product, i) => {
              const Icon = iconMap[product.icon] || CircleDot;
              const isOpen = openId === product.id;
              const image = productImages[product.id] || IMAGES.wireCoilRoll;
              return (
                <ProductAccordion
                  key={product.id}
                  product={product}
                  index={i}
                  icon={<Icon size={22} />}
                  image={image}
                  isOpen={isOpen}
                  onToggle={() => setOpenId(isOpen ? null : product.id)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Need specifications or pricing?
              </h2>
              <p className="text-white/60">Contact our team for detailed product specifications and quotes.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm hover:bg-white hover:text-graphite-900 transition-all"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProductAccordion({
  product, index, icon, image, isOpen, onToggle,
}: {
  product: typeof PRODUCTS[0];
  index: number;
  icon: React.ReactNode;
  image: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} border border-graphite-100 bg-white overflow-hidden transition-all duration-300 ${
        isOpen ? 'shadow-xl' : 'hover:border-graphite-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 p-6 lg:p-8 text-left"
      >
        <span className="font-mono text-sm text-copper-500 font-semibold shrink-0 w-10">
          0{index + 1}
        </span>
        <div className="w-14 h-14 bg-graphite-900 text-copper-400 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg lg:text-xl font-bold text-graphite-900">{product.name}</h3>
          <p className="text-sm text-graphite-500 mt-1 line-clamp-1">{product.short}</p>
        </div>
        <div className={`shrink-0 w-10 h-10 border border-graphite-200 flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-copper-500 border-copper-500 text-white rotate-180' : 'text-graphite-400'
        }`}>
          <ChevronDown size={18} />
        </div>
      </button>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-0 border-t border-graphite-100">
          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img src={image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-8 lg:p-10">
            <p className="text-graphite-500 leading-relaxed">{product.description}</p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-500 mb-3">Typical Applications</p>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app) => (
                  <span key={app} className="px-3 py-1.5 bg-ivory-100 text-graphite-600 text-xs font-medium border border-graphite-100">
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-500 hover:gap-3 transition-all">
              Enquire about this product <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
