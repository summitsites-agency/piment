import { marqueeItems } from '../content'

/* The red ticker band. The list is printed twice inside a strip
   that slides left by half its own width forever = seamless loop.
   (The loop math lives in index.css under "MARQUEE".) */
export default function Marquee() {
  const Row = () => (
    <div className="flex shrink-0 items-center">
      {marqueeItems.map((item) => (
        <span
          key={item}
          className="flex items-center font-mono text-sm font-bold tracking-[0.25em] whitespace-nowrap text-creme uppercase md:text-base"
        >
          <span className="px-6">{item}</span>
          <span className="text-mango">★</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee-paused overflow-hidden bg-flame py-4" aria-hidden="true">
      <div className="animate-marquee flex w-max" style={{ '--marquee-duration': '26s' }}>
        <Row />
        <Row />
      </div>
    </div>
  )
}
