import { motion } from 'framer-motion'
import { dishes } from '../content'
import { FadeUp } from './Bits'

const tilts = ['-rotate-2', 'rotate-1', '-rotate-1']

export default function Dishes() {
  return (
    <section id="dishes" className="bg-creme px-5 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <span className="inline-block rounded-full bg-flame px-4 py-2 font-mono text-[10px] font-bold tracking-[0.2em] text-creme uppercase">
            {dishes.label}
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="display mt-6 max-w-3xl text-4xl text-plum md:text-6xl">
            {dishes.headline}
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {dishes.items.map((dish, i) => (
            <FadeUp key={dish.name} delay={0.12 * i}>
              <motion.article
                whileHover={{ y: -10, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className={`group relative rounded-3xl bg-white p-3 shadow-lg ${tilts[i % tilts.length]}`}
              >
                {dish.badge && (
                  <span className="absolute -top-3 -right-2 z-10 rotate-6 rounded-full bg-mango px-3 py-1.5 font-mono text-[10px] font-bold tracking-widest text-plum uppercase shadow">
                    {dish.badge}
                  </span>
                )}

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="flex items-start justify-between gap-3 px-2 pt-4 pb-2">
                  <div>
                    <h3 className="display text-2xl text-plum">{dish.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-plum/70">{dish.desc}</p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full bg-plum px-3 py-1.5 font-mono text-xs font-bold text-mango">
                    {dish.price}
                  </span>
                </div>
              </motion.article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
