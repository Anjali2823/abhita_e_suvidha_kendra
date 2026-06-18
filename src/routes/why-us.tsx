import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Zap, Layers, Smile, Network, Headset } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Abhita e Suvidha Kendra" },
      {
        name: "description",
        content:
          "Secure, fast and nationwide — discover why thousands of customers and retailers trust Abhita e Suvidha Kendra.",
      },
      { property: "og:title", content: "Why Choose Abhita e Suvidha Kendra" },
      {
        property: "og:description",
        content:
          "Trusted by thousands across India for secure, fast and inclusive digital services.",
      },
    ],
  }),
  component: WhyUsPage,
});

const REASONS = [
  {
    icon: ShieldCheck,
    t: "Secure & Trusted Platform",
    d: "End-to-end encryption and compliant infrastructure for every transaction.",
  },
  {
    icon: Layers,
    t: "Multiple Services, One Roof",
    d: "From UPI to insurance, everything you need is unified in one platform.",
  },
  {
    icon: Zap,
    t: "Fast & Hassle-Free",
    d: "Real-time confirmations and instant processing across services.",
  },
  {
    icon: Network,
    t: "Nationwide Service Network",
    d: "A growing retailer network reaching every corner of India.",
  },
  {
    icon: Smile,
    t: "Easy Digital Access",
    d: "Clean, intuitive interface — accessible to every user.",
  },
  { icon: Headset, t: "Dedicated Customer Support", d: "Real human support whenever you need it." },
];

function WhyUsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-midnight/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose us"
            title="The trusted partner for digital India"
            subtitle="Built for individuals, retailers and businesses — we combine bank-grade security with a beautifully simple experience."
            center
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.05}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand/30">
                {/* Subtle gradient glow on hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-brand/5 via-transparent to-transparent rounded-2xl" />
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand via-brand/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />

                <div className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-brand text-white shadow-brand transition-transform duration-300 group-hover:scale-110">
                  <r.icon size={24} />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-extrabold text-foreground group-hover:text-brand transition-colors duration-200">
                  {r.t}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-3">
            {[
              { v: "50+", l: "Services" },
              { v: "10,000+", l: "Daily Transactions" },
              { v: "99.9%", l: "Platform Uptime" },
            ].map((s) => (
              <Reveal key={s.l}>
                <div className="text-center">
                  <div className="font-display text-4xl font-extrabold gradient-text-brand sm:text-5xl">
                    {s.v}
                  </div>
                  <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-balance">
            Get ready to start earning with us!
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-muted-foreground">
            Reach out — our team will get you onboarded in no time.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-xl gradient-brand px-6 py-3 text-sm font-bold text-white shadow-brand"
          >
            Contact us
          </Link>
        </Reveal>
      </section>
    </>
  );
}
