import { Link } from 'react-router-dom';
import { ArrowRight, Download, FileText, MessageCircle, Phone } from 'lucide-react';
import { COMPANY, PRODUCTS, IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

export default function Catalogue() {
  return (
    <div>
      <PageHero
        eyebrow="Catalogue"
        title="Browse our complete product catalogue."
        subtitle="A comprehensive overview of our twelve product categories with descriptions and typical applications. Contact us for detailed specifications and pricing."
        image={IMAGES.wireCoilRoll}
      />

      {/* Catalogue list */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Catalogue"
            title="Twelve categories. One reliable source."
            subtitle="Each entry below provides a summary of the product and its typical applications. For detailed specifications, tolerances, and pricing, please request a quote."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {PRODUCTS.map((product, i) => (
              <CatalogueCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Download / request CTA */}
      <section className="py-20 bg-white border-y border-graphite-100">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-5">Detailed Specifications</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 leading-tight mb-5">
                Request a detailed product datasheet.
              </h2>
              <p className="text-graphite-500 leading-relaxed mb-6">
                For detailed product specifications, dimensional tolerances, coating standards, and pricing, contact our team. We provide product information tailored to your procurement requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">Request Datasheet <ArrowRight size={16} /></Link>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-graphite-300 text-graphite-700 font-semibold text-sm hover:border-graphite-700 hover:bg-graphite-700 hover:text-white transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
            <div className="bg-graphite-950 p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-30" />
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                  <img
                    src={COMPANY.logo}
                    alt={`${COMPANY.name} - ${COMPANY.brand}`}
                    className="h-10 w-auto object-contain self-start"
                  />
                  <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
                    <FileText size={16} className="text-copper-400" />
                    <span>Official Product Catalogue</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {PRODUCTS.map((p) => (
                    <li key={p.id} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="w-1 h-1 bg-copper-400 rounded-full" />
                      {p.name}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-copper-400 font-semibold text-sm hover:gap-3 transition-all">
                  <Download size={16} /> Request Full Catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-16 bg-graphite-950">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Phone size={24} className="text-copper-400" />
            <div>
              <p className="text-white/60 text-sm">Speak directly with our team</p>
              <a href={`tel:${COMPANY.contacts.primary.phoneRaw}`} className="font-display text-xl font-bold text-white hover:text-copper-400 transition-colors">
                {COMPANY.contacts.primary.phone}
              </a>
            </div>
          </div>
          <Link to="/contact" className="btn-primary">Get a Quote <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  );
}

function CatalogueCard({ product, index }: { product: typeof PRODUCTS[0]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''} bg-white border border-graphite-100 p-8 hover:border-copper-300 hover:shadow-xl transition-all duration-300`}>
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-sm text-copper-500 font-semibold">CAT / 0{index + 1}</span>
        <span className="text-xs text-graphite-300 uppercase tracking-wider">Category</span>
      </div>
      <h3 className="font-display text-xl font-bold text-graphite-900 mb-3">{product.name}</h3>
      <p className="text-sm text-graphite-500 leading-relaxed mb-5">{product.short}</p>
      <div className="pt-5 border-t border-graphite-100">
        <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-500 mb-2.5">Applications</p>
        <div className="flex flex-wrap gap-2">
          {product.applications.slice(0, 4).map((app) => (
            <span key={app} className="px-2.5 py-1 bg-ivory-100 text-graphite-600 text-xs font-medium border border-graphite-100">
              {app}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
