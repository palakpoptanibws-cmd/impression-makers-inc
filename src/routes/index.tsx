import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero.jpg.asset.json";
import banglesAsset from "@/assets/bangles.jpg.asset.json";
import templeAsset from "@/assets/temple.jpg.asset.json";
import earringsAsset from "@/assets/earrings.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jewellergy — Timeless Beauty. Every You." },
      {
        name: "description",
        content:
          "Premium fashion jewelry crafted for every occasion. Necklace sets, bangles and earrings with affordable luxury and PAN India delivery.",
      },
      { property: "og:title", content: "Jewellergy — Timeless Beauty. Every You." },
      {
        property: "og:description",
        content:
          "Premium fashion jewelry crafted for every occasion. Affordable luxury, delivered PAN India.",
      },
    ],
  }),
  component: Index,
});

const collections = [
  {
    name: "Temple Heritage",
    note: "Antique gold · Ruby & emerald",
    image: templeAsset.url,
    price: "From ₹2,499",
  },
  {
    name: "Circle of Radiance",
    note: "Filigree bangles · Set of four",
    image: banglesAsset.url,
    price: "From ₹1,899",
  },
  {
    name: "Timeless Brilliance",
    note: "Crystal necklace & drops",
    image: earringsAsset.url,
    price: "From ₹1,299",
  },
];

const promises = [
  { title: "Premium Quality", body: "Anti-tarnish plating, hand-finished and quality checked." },
  { title: "Timeless Designs", body: "Silhouettes drawn from heritage craft, made for today." },
  { title: "PAN India Delivery", body: "Carefully packed and shipped to every pincode." },
  { title: "Affordable Luxury", body: "The glow of fine jewelry, without the fine-jewelry price." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl tracking-[0.38em] text-foreground">
            JEWELLERGY
          </a>
          <nav className="hidden gap-10 eyebrow text-muted-foreground md:flex">
            <a href="#collections" className="hover:text-foreground">
              Collections
            </a>
            <a href="#craft" className="hover:text-foreground">
              The Craft
            </a>
            <a href="#promise" className="hover:text-foreground">
              Promise
            </a>
          </nav>
          <a
            href="https://www.instagram.com/jewellergy"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-gold px-5 py-2.5"
          >
            Shop on Instagram
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28">
            <div className="reveal-up">
              <p className="eyebrow text-primary">Premium Fashion Jewelry</p>
              <h1 className="mt-6 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Timeless beauty.
                <span className="block italic text-gold">Every you.</span>
              </h1>
              <div className="rule-gold my-8 w-40" />
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Jewellergy is where elegance meets affordability — premium fashion jewelry that adds
                sparkle to every occasion, without the luxury price tag.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#collections" className="btn-gold px-9 py-4">
                  Explore the collection
                </a>
                <a href="#craft" className="btn-outline-gold px-9 py-4">
                  Our story
                </a>
              </div>
              <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["11", "Signature drops"],
                  ["100+", "Happy sparkles"],
                  ["PAN", "India delivery"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl text-foreground">{k}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-full bg-accent/50 blur-3xl" />
              <img
                src={heroAsset.url}
                alt="Gold and crystal necklace with matching drop earrings on cream silk"
                width={1600}
                height={1200}
                className="w-full rounded-sm object-cover shadow-luxe"
              />
              <div className="absolute -bottom-8 left-6 hidden bg-espresso px-8 py-6 text-espresso-foreground sm:block">
                <p className="eyebrow text-gold-light">Made to make</p>
                <p className="mt-2 font-display text-2xl italic">every moment shine</p>
              </div>
            </div>
          </div>

          {/* Marquee */}
          <div className="overflow-hidden border-y border-border bg-secondary/60 py-4">
            <div className="marquee-track flex w-max gap-14 whitespace-nowrap eyebrow text-muted-foreground">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex gap-14">
                  {[
                    "Premium Quality",
                    "Timeless Designs",
                    "PAN India Delivery",
                    "Affordable Luxury",
                    "Anti-Tarnish Finish",
                    "Gift Ready Packaging",
                  ].map((t) => (
                    <span key={t} className="flex items-center gap-14">
                      {t} <span className="text-primary">✦</span>
                    </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Collections */}
        <section id="collections" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-primary">The Collections</p>
              <h2 className="mt-4 text-4xl tracking-tight sm:text-5xl">Built to be noticed</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Three edits, one philosophy — heirloom detail rendered in wearable, everyday luxury.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {collections.map((c) => (
              <article key={c.name} className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={1008}
                    height={1264}
                    className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <span className="text-xs tracking-[0.15em] text-primary">{c.price}</span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Craft */}
        <section id="craft" className="bg-espresso text-espresso-foreground">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:py-32">
            <div>
              <p className="eyebrow text-gold-light">Where luxury meets grace</p>
              <h2 className="mt-6 text-4xl leading-tight tracking-tight sm:text-5xl">
                Every piece begins as a
                <span className="italic text-gold-light"> detail</span>, not a product.
              </h2>
            </div>
            <div className="space-y-6 text-sm leading-relaxed text-espresso-foreground/70">
              <p>
                We study the ornaments that families keep for generations — the weight of a temple
                pendant, the rhythm of a filigree bangle, the way light travels along a row of
                stones — and translate them into pieces you can wear on an ordinary Tuesday.
              </p>
              <p>
                Each design is finished by hand, plated to resist tarnish, and inspected before it
                is wrapped. Nothing leaves us unless we would gift it ourselves.
              </p>
              <div className="rule-gold" />
              <p className="font-display text-2xl italic text-espresso-foreground">
                “Thank you for being here. This is just the beginning.”
              </p>
            </div>
          </div>
        </section>

        {/* Promise */}
        <section id="promise" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <p className="eyebrow text-center text-primary">The Jewellergy Promise</p>
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <span className="font-display text-3xl text-primary">✦</span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <h2 className="text-4xl tracking-tight sm:text-5xl">Own the moment.</h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              New drops land first on Instagram. Follow along, or write to us for a personal
              styling recommendation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/jewellergy"
                target="_blank"
                rel="noreferrer"
                className="btn-gold px-9 py-4"
              >
                Follow @jewellergy
              </a>
              <a href="mailto:hello@jewellergy.in" className="btn-outline-gold px-9 py-4">
                Write to us
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center">
          <p className="font-display text-lg tracking-[0.38em]">JEWELLERGY</p>
          <p className="eyebrow text-muted-foreground">Timeless beauty · Every you</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jewellergy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
