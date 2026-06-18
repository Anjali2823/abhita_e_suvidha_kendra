import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Abhita e Suvidha Kendra" },
      {
        name: "description",
        content:
          "Financial, utility, travel, insurance, government and merchant services — all in one secure digital platform.",
      },
      { property: "og:title", content: "Our Services" },
      {
        property: "og:description",
        content: "50+ digital services for individuals, retailers and businesses across India.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-midnight/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our services"
            title="Comprehensive digital & financial solutions"
            subtitle="A wide range of financial, utility, travel, insurance and government services — designed for convenience, security and accessibility across India."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="group flex items-center gap-1.5 rounded-full border border-border bg-card px-5 py-2 text-xs font-bold text-foreground shadow-sm transition-all hover:gradient-brand hover:text-white hover:border-transparent hover:shadow-brand"
              >
                <s.icon size={13} className="transition-transform group-hover:scale-110" />
                {s.title}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      {SERVICES.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-24 py-16 ${idx % 2 === 1 ? "bg-surface" : ""}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`grid gap-10 lg:grid-cols-12 lg:items-center ${idx % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <Reveal className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl ring-1 ring-border shadow-soft">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                  <div
                    className={`absolute top-4 left-4 grid h-12 w-12 place-items-center rounded-xl backdrop-blur-md ${s.accent}`}
                  >
                    <s.icon size={22} />
                  </div>
                </div>
              </Reveal>

              <div className="lg:col-span-7">
                <Reveal>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand">
                    {s.tagline}
                  </span>
                </Reveal>
                <Reveal delay={0.05}>
                  <h2 className="mt-2 font-display text-3xl font-extrabold text-foreground sm:text-4xl">
                    {s.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {s.items.map((it, i) => (
                    <Reveal key={it.name} delay={0.1 + i * 0.04}>
                      <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card p-4 hover-lift">
                        <div
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${s.accent}`}
                        >
                          <it.icon size={20} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display text-sm font-extrabold text-foreground">
                              {it.name}
                            </h4>
                            <CheckCircle2 size={14} className="text-emerald" />
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                            {it.desc}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
