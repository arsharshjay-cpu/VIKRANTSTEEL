import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, User, Building2 } from 'lucide-react';
import { COMPANY, PRODUCTS, IMAGES } from '@/data/company';
import { PageHero, SectionHeading } from '@/components/SectionComponents';
import { useReveal } from '@/hooks/useReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', product: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get in touch for quotes and enquiries."
        subtitle="Contact our team for product specifications, pricing, and supply requirements. We serve procurement managers, contractors, distributors, dealers, and institutional buyers."
        image={IMAGES.heroCoils}
      />

      <section className="py-24 lg:py-32 bg-ivory-50">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-graphite-950 border border-white/10">
                <img
                  src={COMPANY.logo}
                  alt={`${COMPANY.name} - ${COMPANY.brand}`}
                  className="h-9 w-auto object-contain mb-3"
                />
                <p className="text-xs text-white/50">
                  Direct factory sales, B2B wholesale supply, and institutional procurement from Bhilai.
                </p>
              </div>

              <div>
                <div className="section-label mb-5">Reach Us</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite-900 leading-tight mb-5">
                  Let's discuss your requirements.
                </h2>
                <p className="text-graphite-500 leading-relaxed">
                  Whether you need a quote for a specific product, want to discuss a bulk supply arrangement, or are looking to become a distributor — our team is ready to help.
                </p>
              </div>

              <div className="space-y-4">
                <ContactInfoCard
                  icon={<User size={18} />}
                  label="Primary Contact"
                  name={COMPANY.contacts.primary.name}
                  value={COMPANY.contacts.primary.phone}
                  href={`tel:${COMPANY.contacts.primary.phoneRaw}`}
                />
                <ContactInfoCard
                  icon={<User size={18} />}
                  label="Secondary Contact"
                  name={COMPANY.contacts.secondary.name}
                  value={COMPANY.contacts.secondary.phone}
                  href={`tel:${COMPANY.contacts.secondary.phoneRaw}`}
                />
                <ContactInfoCard
                  icon={<Mail size={18} />}
                  label="Email"
                  name={COMPANY.contacts.email}
                  value="Send us an email"
                  href={`mailto:${COMPANY.contacts.email}`}
                />
                <ContactInfoCard
                  icon={<MapPin size={18} />}
                  label="Address"
                  name={`${COMPANY.address.line1}, ${COMPANY.address.city}`}
                  value={`${COMPANY.address.state} — ${COMPANY.address.pincode}, ${COMPANY.address.country}`}
                />
              </div>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-graphite-950 text-white font-semibold text-sm hover:bg-copper-500 transition-all duration-300"
              >
                <MessageCircle size={18} /> WhatsApp: {COMPANY.contacts.primary.phone}
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-graphite-100 p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-16 h-16 bg-copper-500 text-white flex items-center justify-center mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-graphite-900 mb-3">Thank you for your enquiry.</h3>
                    <p className="text-graphite-500 max-w-md">
                      Your message has been received. Our team will get back to you shortly. For urgent enquiries, please call {COMPANY.contacts.primary.phone}.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }); }}
                      className="mt-8 text-sm font-semibold text-copper-500 hover:text-copper-600 transition-colors"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-copper-500 text-white flex items-center justify-center">
                        <Send size={18} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-graphite-900">Request a Quote</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Full Name *</label>
                          <input type="text" name="name" required value={form.name} onChange={handleChange} className="input-field" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Company</label>
                          <input type="text" name="company" value={form.company} onChange={handleChange} className="input-field" placeholder="Company name" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Email *</label>
                          <input type="email" name="email" required value={form.email} onChange={handleChange} className="input-field" placeholder="you@company.com" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Phone *</label>
                          <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="input-field" placeholder="+91 ..." />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Product of Interest</label>
                        <select name="product" value={form.product} onChange={handleChange} className="input-field">
                          <option value="">Select a product category</option>
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.name}>{p.name}</option>
                          ))}
                          <option value="Multiple Products">Multiple Products</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-graphite-600 mb-2">Message *</label>
                        <textarea name="message" required value={form.message} onChange={handleChange} rows={5} className="input-field resize-none" placeholder="Describe your requirements — product specifications, quantities, delivery location, timeline..." />
                      </div>
                      <button type="submit" className="btn-primary w-full">
                        Send Enquiry <Send size={16} />
                      </button>
                      <p className="text-xs text-graphite-400 text-center">
                        We typically respond within one business day. For urgent enquiries, call {COMPANY.contacts.primary.phone}.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <MapSection />
    </div>
  );
}

function ContactInfoCard({ icon, label, name, value, href }: { icon: React.ReactNode; label: string; name: string; value: string; href?: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const content = (
    <div className="flex items-start gap-4 p-5 bg-white border border-graphite-100 hover:border-copper-300 transition-colors">
    {/* */}
      <div className="w-10 h-10 bg-graphite-900 text-copper-400 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-copper-500 mb-1">{label}</p>
        <p className="font-semibold text-graphite-900 text-sm">{name}</p>
        <p className="text-sm text-graphite-500">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a ref={ref as unknown as React.RefObject<HTMLAnchorElement>} href={href} className={`reveal ${visible ? 'visible' : ''} block`}>{content}</a>
  ) : (
    <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>{content}</div>
  );
}

function MapSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent('94-A, Light Industrial Area, Bhilai, Chhattisgarh 490026, India')}&output=embed`;
  return (
    <section className="bg-white border-t border-graphite-100">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''} container-x py-16`}>
        <div className="flex items-center gap-3 mb-6">
          <Building2 size={20} className="text-copper-500" />
          <h3 className="font-display text-xl font-bold text-graphite-900">Find Us</h3>
        </div>
        <div className="aspect-[16/7] overflow-hidden border border-graphite-100">
          <iframe
            src={mapSrc}
            title="VIKRANT STEEL location"
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-copper-500 mb-1">Address</p>
            <p className="text-graphite-600">{COMPANY.address.line1}, {COMPANY.address.city}, {COMPANY.address.state} — {COMPANY.address.pincode}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-copper-500 mb-1">GSTIN</p>
            <p className="text-graphite-600 font-mono">{COMPANY.gstin}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-copper-500 mb-1">Established</p>
            <p className="text-graphite-600">{COMPANY.established} • {COMPANY.address.city}, {COMPANY.address.state}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
