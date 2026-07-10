import { gallery } from '../content'

/* Two rivers of photos flowing in opposite directions.
   Same seamless-loop trick as the text marquee. Hover to pause. */
function PhotoRow({ images, reverse = false }) {
  const Row = () => (
    <div className="flex shrink-0 gap-4 pr-4">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          className={`h-52 w-72 shrink-0 rounded-2xl object-cover md:h-72 md:w-96 ${
            i % 2 === 0 ? 'rotate-1' : '-rotate-1'
          }`}
        />
      ))}
    </div>
  )

  return (
    <div className="marquee-paused overflow-hidden">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ '--marquee-duration': '48s' }}
      >
        <Row />
        <Row />
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section className="space-y-4 bg-creme pb-24 md:pb-36" aria-label="Photo gallery">
      <PhotoRow images={gallery.rowA} />
      <PhotoRow images={gallery.rowB} reverse />
    </section>
  )
}
