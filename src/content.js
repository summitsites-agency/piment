/* ============================================================
   CONTENT.JS — the only file you need to touch for a new client.
   Every word, price, photo and video on the site lives here.
   ============================================================ */

export const brand = {
  name: 'Piment',
  tag: 'Restaurant + Bar',
  city: 'Mile End, Montréal',
  since: '2019',
}

export const nav = [
  { label: 'La maison', href: '#story' },
  { label: 'Plats', href: '#dishes' },
  { label: 'Menu', href: '#menu' },
  { label: 'Nous trouver', href: '#visit' },
]

export const hero = {
  eyebrow: 'RESTAURANT + BAR — MILE END, MONTRÉAL',
  // Each array item becomes one giant line of the headline
  headline: ['EAT', 'LOUD.'],
  sub: "Fire-kissed comfort food, natural wine, and zero quiet nights. Walk-ins welcome — the kitchen's open late.",
  ctaPrimary: { label: 'Réserver une table', href: '#visit' },
  ctaSecondary: { label: 'Voir le menu', href: '#menu' },

  /* HERO VIDEO — free 4K clip from Pexels (free for commercial use, no credit needed).
     To use the client's own video: drop their file in /public (e.g. /public/hero.mp4)
     and change the first src below to "/hero.mp4".
     The browser tries each source in order, so extras act as backups. */
  video: {
    poster:
      'https://images.pexels.com/videos/8626672/pexels-photo-8626672.jpeg?auto=compress&w=1600',
    sources: [
      'https://videos.pexels.com/video-files/8626672/8626672-uhd_2560_1440_25fps.mp4',
      'https://www.pexels.com/download/video/8626672/',
    ],
  },
}

export const marqueeItems = [
  'OUVERT TARD',
  'BRUNCH SAM + DIM',
  'VINS NATURE',
  'TERRASSE CHAUFFÉE',
  'HAPPY HOUR 4–7',
  'WALK-INS BIENVENUS',
]

export const story = {
  label: 'NOTRE HISTOIRE',
  // This paragraph lights up word-by-word as you scroll
  text: `Piment started as a Tuesday-night pop-up in a borrowed Mile End kitchen — three friends, one cast-iron pan, and a line down Saint-Laurent. Six years later the pan got bigger, but the idea never changed: loud flavours, local farms, plates made for sharing.`,
  photos: [
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
      alt: 'Warm restaurant dining room at night',
      caption: 'la salle, 20h14',
    },
    {
      src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop',
      alt: 'Bar seats and warm lights',
      caption: 'le bar',
    },
  ],
}

export const dishes = {
  label: 'LES INCONTOURNABLES',
  headline: 'Three plates people cross the city for.',
  items: [
    {
      name: 'Poulet Piment',
      desc: 'Half chicken, burnt-honey chili glaze, fresh herbs, grilled lemon.',
      price: '$24',
      badge: 'SIGNATURE',
      img: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Crevettes Feu Doux',
      desc: 'Charcoal shrimp, charred lime, mango-habanero salsa.',
      price: '$19',
      badge: null,
      img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000&auto=format&fit=crop',
    },
    {
      name: 'Gnocchi Rouge',
      desc: 'Crispy gnocchi, vodka-chili cream, basil, a snowfall of parmesan.',
      price: '$21',
      badge: 'VEGGIE',
      img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=1000&auto=format&fit=crop',
    },
  ],
}

export const market = {
  headline: ['Fresh from the market.', 'Every. Single. Morning.'],
  sub: 'We shop Jean-Talon at 7am and write the menu at 9. If it isn’t in season, it isn’t on the plate.',
  points: ['Local farms first', 'Everything made in-house', 'Menu changes with the seasons'],
}

export const menuReceipt = {
  label: 'LE MENU',
  headline: 'Short menu. No filler.',
  sub: 'A dozen plates, done properly. Snacks for the table, mains for you, dessert because you deserve it.',
  cta: { label: 'Menu complet (PDF)', href: '#' },
  receipt: {
    title: 'PIMENT ★ MTL',
    sections: [
      {
        name: 'POUR LA TABLE',
        items: [
          ['Pain + beurre de miso', '6'],
          ['Olives brûlées', '7'],
          ['Croquettes de maïs', '11'],
        ],
      },
      {
        name: 'PLATS',
        items: [
          ['Poulet Piment', '24'],
          ['Crevettes Feu Doux', '19'],
          ['Gnocchi Rouge', '21'],
          ['Bavette + frites', '29'],
        ],
      },
      {
        name: 'DESSERTS',
        items: [
          ['Tarte au citron brûlé', '9'],
          ['Soft-serve érable', '7'],
        ],
      },
    ],
    footer: 'MERCI — À DEMAIN',
  },
}

export const gallery = {
  rowA: [
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=900&auto=format&fit=crop',
  ],
  rowB: [
    'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=900&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=900&auto=format&fit=crop',
  ],
}

export const visit = {
  headline: 'Venez faim.',
  subline: '(Come hungry.)',
  hours: [
    ['MAR — JEU', '17h — 23h'],
    ['VEN — SAM', '17h — 01h'],
    ['BRUNCH S+D', '10h — 14h'],
    ['LUNDI', 'fermé'],
  ],
  address: ['5612 Boul. Saint-Laurent', 'Montréal, QC H2T 1S8'],
  phone: '(514) 555-0192',
  directionsHref: 'https://maps.google.com/?q=5612+Boul+Saint-Laurent+Montreal',
  instagram: '@piment.mtl',
  cta: { label: 'Réserver une table', href: 'tel:+15145550192' },
}

export const footer = {
  links: [
    { label: 'Instagram', href: '#' },
    { label: 'Réserver', href: '#visit' },
    { label: 'Carrières', href: '#' },
    { label: 'Cartes cadeaux', href: '#' },
  ],
  credit: 'Site by Summit Sites',
}
