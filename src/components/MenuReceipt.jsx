import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { menuReceipt } from '../content'
import { FadeUp, MagneticButton } from './Bits'

/* The menu, printed like the receipt you'd get at the till.
   Restaurants live on receipts — so the menu borrows their look:
   mono font, dotted price leaders, a thank-you line, a fake barcode. */
export default function MenuReceipt() {
  const { receipt } = menuReceipt

  return (
    <section id="menu" className="bg-creme px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
        {/* Left: intro */}
        <div>
          <FadeUp>
            <span className="inline-block rounded-full bg-plum px-4 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-mango uppercase">
              {menuReceipt.label}
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="display mt-6 text-4xl text-plum md:text-6xl">{menuReceipt.headline}</h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-5 max-w-md text-lg text-plum/70">{menuReceipt.sub}</p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <MagneticButton
              href={menuReceipt.cta.href}
              className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-full bg-flame px-7 py-4 font-mono text-xs font-bold tracking-widest text-creme uppercase"
            >
              {menuReceipt.cta.label} <ArrowUpRight size={16} />
            </MagneticButton>
          </FadeUp>
        </div>

        {/* Right: the receipt itself */}
        <FadeUp delay={0.15}>
          <motion.div
            initial={{ rotate: 3 }}
            whileHover={{ rotate: 0 }}
            transition={{ type: 'spring', stiffness: 180, damping: 16 }}
            className="mx-auto w-full max-w-sm bg-white px-7 py-8 font-mono text-sm text-plum shadow-2xl"
            style={{ boxShadow: '0 25px 60px -15px rgba(33,16,31,0.35)' }}
          >
            <p className="text-center text-lg font-bold tracking-[0.3em]">{receipt.title}</p>
            <p className="mt-1 text-center text-[10px] tracking-widest text-plum/50">
              {new Date().toLocaleDateString('fr-CA')} — TABLE 12
            </p>
            <div className="my-4 border-t-2 border-dashed border-plum/25" />

            {receipt.sections.map((section) => (
              <div key={section.name} className="mb-5">
                <p className="mb-2 text-[11px] font-bold tracking-[0.25em] text-flame">
                  {section.name}
                </p>
                {section.items.map(([item, price]) => (
                  <div key={item} className="flex items-baseline gap-2 py-1">
                    <span>{item}</span>
                    {/* the dotted line between name and price */}
                    <span className="flex-1 border-b-2 border-dotted border-plum/25" />
                    <span className="font-bold">{price}</span>
                  </div>
                ))}
              </div>
            ))}

            <div className="my-4 border-t-2 border-dashed border-plum/25" />
            {/* fake barcode: a row of random-width black stripes */}
            <div className="flex h-10 items-stretch justify-center gap-[2px]" aria-hidden="true">
              {[3, 1, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1].map((w, i) => (
                <span key={i} className="bg-plum" style={{ width: w }} />
              ))}
            </div>
            <p className="mt-3 text-center text-[11px] font-bold tracking-[0.3em]">
              {receipt.footer}
            </p>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
