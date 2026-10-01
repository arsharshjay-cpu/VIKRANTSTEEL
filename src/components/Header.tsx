import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/data/company';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const goQuote = () => navigate('/contact');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-graphite-950/95 backdrop-blur-md shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="border-b border-white/10">
          <div className="container-x flex items-center justify-between h-16 text-white/60 text-xs">
            <span className="hidden md:flex items-center gap-2">
              <span className="w-1 h-1 bg-copper-400 rounded-full" />
              {COMPANY.address.line1}, {COMPANY.address.city}, {COMPANY.address.state} — {COMPANY.address.pincode}
            </span>
            <div className="flex items-center gap-6 ml-auto">
              <a href={`tel:${COMPANY.contacts.primary.phoneRaw}`} className="flex items-center gap-2 hover:text-copper-400 transition-colors">
                <Phone size={12} />
                {COMPANY.contacts.primary.phone}
              </a>
              <a href={`mailto:${COMPANY.contacts.email}`} className="hidden sm:flex items-center gap-2 hover:text-copper-400 transition-colors">
                {COMPANY.contacts.email}
              </a>
            </div>
          </div>
        </div>

        <div className="container-x flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group" aria-label={`${COMPANY.name} Home`}>
            <img
              src={COMPANY.logo}
              alt={`${COMPANY.name} - ${COMPANY.brand}`}
              className="h-10 sm:h-11 w-auto object-contain transition-all duration-300 group-hover:brightness-110"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-white/70 hover:text-white ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <button onClick={goQuote} className="btn-primary !py-2.5">
              Get a Quote
            </button>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-400 ${
          mobileOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-graphite-950/95 backdrop-blur-lg" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-graphite-950 border-l border-white/10 transition-transform duration-400 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <img
                src={COMPANY.logo}
                alt={`${COMPANY.name} - ${COMPANY.brand}`}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="text-white p-2" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center justify-between py-3.5 border-b border-white/5 text-base font-medium transition-colors ${
                  isActive(link.path) ? 'text-copper-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 space-y-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 text-white font-semibold text-sm"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <button onClick={goQuote} className="btn-primary w-full">
              Get a Quote
            </button>
            <div className="pt-4 space-y-2 text-sm text-white/50">
              <a href={`tel:${COMPANY.contacts.primary.phoneRaw}`} className="flex items-center gap-2 hover:text-copper-400">
                <Phone size={14} /> {COMPANY.contacts.primary.phone}
              </a>
              <p>{COMPANY.contacts.primary.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
