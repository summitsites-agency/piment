import { MapPin, Phone, Instagram } from 'lucide-react'
import { visit, footer, brand } from '../content'
import { FadeUp, MagneticButton } from './Bits'

export function Visit() {
  return (
    <section id="visit" className="bg-mango px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <h2 className="display text-6xl text-plum md:text-8xl">
            {visit.headline}
            <span className="display-italic ml-4 text-3xl text-flame md:text-5xl">
              {visit.subline}
            </span>
          </h2>
        </FadeUp>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {/* Hours */}
          <FadeUp delay={0.1}>
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.25em] text-plum/60 uppercase">
              Heures
            </p>
            <ul className="space-y-2 font-mono text-sm text-plum">
              {visit.hours.map(([day, time]) => (
                <li key={day} className="flex items-baseline gap-2">
                  <span className="font-bold">{day}</span>
                  <span className="flex-1 border-b border-dotted border-plum/40" />
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Address */}
          <FadeUp delay={0.2}>
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.25em] text-plum/60 uppercase">
              Adresse
            </p>
            <p className="display text-2xl text-plum">
              {visit.address[0]}
              <br />
              {visit.address[1]}
            </p>
            <a
              href={visit.directionsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-plum uppercase underline underline-offset-4 hover:text-flame"
            >
              <MapPin size={14} /> Itinéraire
            </a>
          </FadeUp>

          {/* Contact */}
          <FadeUp delay={0.3}>
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.25em] text-plum/60 uppercase">
              Contact
            </p>
            <a
              href={`tel:${visit.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 font-mono text-sm text-plum hover:text-flame"
            >
              <Phone size={14} /> {visit.phone}
            </a>
            <a href="#" className="mt-2 flex items-center gap-2 font-mono text-sm text-plum hover:text-flame">
              <Instagram size={14} /> {visit.instagram}
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.35}>
          <div className="mt-16 flex justify-center">
            <MagneticButton
              href={visit.cta.href}
              strength={0.35}
              className="inline-block cursor-pointer rounded-full bg-flame px-12 py-6 font-mono text-sm font-bold tracking-[0.2em] text-creme uppercase shadow-xl md:px-16 md:py-7 md:text-base"
            >
              {visit.cta.label} →
            </MagneticButton>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-plum px-5 pt-20 pb-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <p className="max-w-xs text-sm text-creme/60">
            {brand.tag}, {brand.city}. Loud flavours since {brand.since}.
          </p>
          <ul className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-widest text-creme/80 uppercase hover:text-mango"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Giant hollow wordmark, stretched across the page */}
        <p
          className="display text-stroke-creme mt-16 text-center leading-none select-none"
          style={{ fontSize: 'clamp(5rem, 21vw, 20rem)' }}
          aria-hidden="true"
        >
          {brand.name.toUpperCase()}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-creme/15 pt-6">
          <p className="font-mono text-[10px] tracking-widest text-creme/50 uppercase">
            © {new Date().getFullYear()} {brand.name} — tous droits réservés
          </p>
          <p className="font-mono text-[10px] tracking-widest text-creme/50 uppercase">
            {footer.credit.before}{' '}
            <a
              href={footer.credit.href}
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 transition-colors hover:text-creme"
            >
              {footer.credit.studio}
            </a>{' '}
            {footer.credit.after} 🌶️
          </p>
        </div>
      </div>
    </footer>
  )
}
