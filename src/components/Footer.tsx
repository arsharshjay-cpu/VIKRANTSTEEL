import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { COMPANY, NAV_LINKS, PRODUCTS } from '@/data/company';

export default function Footer() {
  return (
    <footer className="bg-graphite-950 text-white">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="container-x py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2">Ready to source?</p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold">
              Get a quote for your next project.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary">Get a Quote</Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm tracking-wide hover:bg-white hover:text-graphite-900 transition-all"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-block mb-5" aria-label={`${COMPANY.name} Home`}>
            <img
              src={COMPANY.logo}
              alt={`${COMPANY.name} - ${COMPANY.brand}`}
              className="h-8 md:h-9 w-auto object-contain hover:brightness-110 transition-all"
            />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Manufacturing and supplying dependable steel wire products for construction, infrastructure, fencing and industrial requirements since {COMPANY.established}.
          </p>
          <div className="space-y-3 text-sm text-white/60">
            <a href={`tel:${COMPANY.contacts.primary.phoneRaw}`} className="flex items-start gap-3 hover:text-copper-400 transition-colors">
              <Phone size={15} className="mt-0.5 text-copper-400" />
              <div>
                <p className="text-white/80">{COMPANY.contacts.primary.name}</p>
                <p>{COMPANY.contacts.primary.phone}</p>
              </div>
            </a>
            <a href={`tel:${COMPANY.contacts.secondary.phoneRaw}`} className="flex items-start gap-3 hover:text-copper-400 transition-colors">
              <Phone size={15} className="mt-0.5 text-copper-400" />
              <div>
                <p className="text-white/80">{COMPANY.contacts.secondary.name}</p>
                <p>{COMPANY.contacts.secondary.phone}</p>
              </div>
            </a>
            <a href={`mailto:${COMPANY.contacts.email}`} className="flex items-start gap-3 hover:text-copper-400 transition-colors">
              <Mail size={15} className="mt-0.5 text-copper-400" />
              <span>{COMPANY.contacts.email}</span>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-400 mb-5">Navigate</p>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-white/60 hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-400 mb-5">Products</p>
          <ul className="space-y-2.5">
            {PRODUCTS.slice(0, 8).map((p) => (
              <li key={p.id}>
                <Link to="/products" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1 group">
                  {p.name}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-ultra-wide text-copper-400 mb-5">Location</p>
          <div className="text-sm text-white/60 space-y-2">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 text-copper-400 flex-shrink-0" />
              <div>
                <p>{COMPANY.address.line1}</p>
                <p>{COMPANY.address.city}, {COMPANY.address.state}</p>
                <p>{COMPANY.address.pincode}, {COMPANY.address.country}</p>
              </div>
            </div>
            <div className="pt-3 border-t border-white/10">
              <p className="text-white/40 text-xs">GSTIN</p>
              <p className="text-white/80 font-mono text-xs">{COMPANY.gstin}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>{COMPANY.brand} • Established {COMPANY.established} • {COMPANY.address.city}, {COMPANY.address.state}</p>
        </div>
      </div>
    </footer>
  );
}
