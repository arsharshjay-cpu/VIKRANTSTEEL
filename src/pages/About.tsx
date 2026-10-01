import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Factory, Building2, Target, Eye, Users } from 'lucide-react';
import { COMPANY, IMAGES } from '@/data/company';
import { PageHero, SectionHeading, StatItem } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Us"
        title="A steel wire manufacturer built on discipline and reliability."
        subtitle="Established in 2006 in Bhilai, Chhattisgarh — serving construction, infrastructure, fencing, and industrial sectors with a comprehensive range of steel wire products."
        image={IMAGES.heroCoilsClose}
      />

      {/* Company overview */}
      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="section-label mb-5">Company Overview</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 leading-tight mb-6">
              {COMPANY.name} — {COMPANY.brand}
            </h2>
            <div className="space-y-5 text-lg text-graphite-500 leading-relaxed">
              <p>
                {COMPANY.name} is a steel wire manufacturing and supply company based in the Light Industrial Area of Bhilai, Chhattisgarh. Established in {COMPANY.established}, the company has built its operations around the production and supply of dependable steel wire products for B2B customers across construction, infrastructure, fencing, agriculture, and general industrial sectors.
              </p>
              <p>
                Bhilai is one of India's most significant steel-producing regions, and our location provides direct access to quality raw materials — particularly wire rod — from major steel producers in the area. This proximity to raw material sources allows us to maintain consistent supply and competitive pricing for our customers.
              </p>
              <p>
                Our product range spans twelve categories, including galvanized wire (hot-dip and cold-dip), mild steel wire, high-tensile wire, stay wire, barbed wire, MS nails, wire rod, chain link mesh, knotted fencing mesh, weld mesh, and TMT bars. This comprehensive range allows procurement managers and contractors to source multiple products from a single supplier.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={IMAGES.warehouseInterior} alt="Industrial warehouse interior" className="w-full h-full object-cover" />
            </div>
            <div className="bg-graphite-950 p-8 text-white">
              <div className="mb-6 pb-6 border-b border-white/10">
                <img
                  src={COMPANY.logo}
                  alt={`${COMPANY.name} - ${COMPANY.brand}`}
                  className="h-8 md:h-9 w-auto object-contain"
                />
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-copper-400 mt-1" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-400 mb-2">Registered Address</p>
                  <p className="text-white/80 leading-relaxed">
                    {COMPANY.address.line1}<br />
                    {COMPANY.address.city}, {COMPANY.address.state} — {COMPANY.address.pincode}<br />
                    {COMPANY.address.country}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/40 uppercase tracking-wider">GSTIN</p>
                    <p className="text-white/80 font-mono text-sm mt-1">{COMPANY.gstin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white border-y border-graphite-100">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-10">
          <StatItem value="2006" label="Year Established" />
          <StatItem value="12+" label="Product Categories" />
          <StatItem value="Bhilai" label="Chhattisgarh, India" />
          <StatItem value="100%" label="B2B Focused" />
        </div>
      </section>

      {/* Mission / Vision */}
      <MissionVision />

      {/* Contacts */}
      <section className="py-24 lg:py-32 bg-ivory-100">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="Direct contact for procurement and enquiries."
            subtitle="Our team is available to discuss specifications, quantities, pricing, and delivery schedules. Reach out directly for a prompt response."
            align="center"
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ContactCard
              name={COMPANY.contacts.primary.name}
              phone={COMPANY.contacts.primary.phone}
              phoneRaw={COMPANY.contacts.primary.phoneRaw}
              tag="Primary Contact"
            />
            <ContactCard
              name={COMPANY.contacts.secondary.name}
              phone={COMPANY.contacts.secondary.phone}
              phoneRaw={COMPANY.contacts.secondary.phoneRaw}
              tag="Secondary Contact"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-graphite-950">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
            Explore our complete product range.
          </h2>
          <Link to="/products" className="btn-primary">
            View Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function MissionVision() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} container-x grid md:grid-cols-2 gap-px bg-graphite-100`}>
        <div className="bg-white p-10 lg:p-14">
          <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center mb-6">
            <Target size={22} />
          </div>
          <h3 className="font-display text-2xl font-bold text-graphite-900 mb-4">Our Approach</h3>
          <p className="text-graphite-500 leading-relaxed">
            To manufacture and supply steel wire products that meet the requirements of our B2B customers — procurement managers, contractors, distributors, and institutional buyers — through a combination of controlled manufacturing processes, consistent product quality, and dependable supply. We focus on building long-term supply relationships rather than one-time transactions.
          </p>
        </div>
        <div className="bg-white p-10 lg:p-14">
          <div className="w-12 h-12 bg-graphite-900 text-copper-400 flex items-center justify-center mb-6">
            <Eye size={22} />
          </div>
          <h3 className="font-display text-2xl font-bold text-graphite-900 mb-4">Our Focus</h3>
          <p className="text-graphite-500 leading-relaxed">
            To be a trusted single-source supplier for steel wire products across our market, recognized for our comprehensive product range, manufacturing discipline, and supply reliability. We aim to grow our distribution and dealer network while maintaining the quality standards that our customers depend on.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ name, phone, phoneRaw, tag }: { name: string; phone: string; phoneRaw: string; tag: string }) {
  return (
    <div className="bg-white border border-graphite-100 p-8 hover:border-copper-300 hover:shadow-xl transition-all duration-300">
      <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-500 mb-3">{tag}</p>
      <h3 className="font-display text-xl font-bold text-graphite-900 mb-3">{name}</h3>
      <a href={`tel:${phoneRaw}`} className="flex items-center gap-2 text-graphite-600 hover:text-copper-500 transition-colors">
        <span className="w-8 h-8 bg-graphite-100 flex items-center justify-center">
          <PhoneIcon />
        </span>
        {phone}
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
