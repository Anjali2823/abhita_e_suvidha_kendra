import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import heroImg from "@/assets/hero-shop.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Ticker } from "@/components/site/Ticker";
import { SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhita e Suvidha Kendra — Digital, Financial & Utility Services" },
      {
        name: "description",
        content:
          "One platform for money transfer, UPI, bill payments, travel, insurance, PAN and merchant services across India.",
      },
      { property: "og:title", content: "Abhita e Suvidha Kendra" },
      {
        property: "og:description",
        content: "Trusted digital & financial services across India — secure, fast, reliable.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Abhita e Suvidha Kendra",
          legalName: "Abhita Finance Advisor Pvt. Ltd.",
          url: "https://abhitaesuvidha.com",
          description: "Digital, financial, utility, travel and insurance services across India.",
        }),
      },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { v: "50+", l: "Services Offered" },
  { v: "10K+", l: "Daily Transactions" },
  { v: "1000+", l: "Partner Retailers" },
  { v: "100%", l: "Secure Platform" },
];

const WHY = [
  {
    icon: ShieldCheck,
    t: "Secure & Reliable",
    d: "Bank-grade encryption protecting every transaction.",
  },
  { icon: Zap, t: "Fast Processing", d: "Real-time confirmations and instant settlements." },
  { icon: Users, t: "One Platform", d: "50+ services unified in a single digital hub." },
  {
    icon: Sparkles,
    t: "Easy to Use",
    d: "A clean digital interface anyone can master in minutes.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-midnight/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" /> Trusted
                across India
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl text-balance">
                One platform for{" "}
                <span className="gradient-text-brand">Digital, Financial & Utility</span> services
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Abhita e Suvidha Kendra — powered by Abhita Finance Advisor Pvt. Ltd. — brings money
                transfer, bill payments, travel, insurance and government services together in one
                secure, easy-to-use platform.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
                >
                  Explore Services{" "}
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:bg-muted"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                      {s.v}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative h-full min-h-[400px] lg:min-h-full">
            <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-lg-brand ring-1 ring-border">
              <img
                src={heroImg}
                alt="Indian shopkeeper accepting digital payment"
                className="h-full w-full object-cover"
                width={1600}
                height={1100}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/45 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute top-1/2 -right-4 hidden rounded-2xl bg-card p-4 shadow-lg ring-1 ring-border sm:flex items-center gap-3 animate-float"
              style={{ animationDelay: "1.5s" }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-full bg-red-500/15 text-red-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-red-600/80">
                  Monthly Income
                </div>
                <div className="font-display text-xl font-extrabold text-foreground">₹50,000+</div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <Ticker />

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Comprehensive services, one trusted platform"
          subtitle="From money movement to insurance and government services — everything you need to run your digital life or retail business."
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to="/services"
                hash={s.slug}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-card hover-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1200}
                    height={900}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl backdrop-blur-md ${s.accent}`}
                  >
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand">
                    {s.tagline}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-bold text-brand">
                    Learn more{" "}
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why choose us"
            title="Built for trust, designed for speed"
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl gradient-brand text-white shadow-brand">
                    <w.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
                    {w.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl gradient-brand px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -top-20 -left-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
            <h2 className="relative font-display text-3xl font-extrabold sm:text-4xl md:text-5xl text-balance">
              Start your digital journey with Abhita today
            </h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-white/85">
              Join thousands of customers and retailers who trust us for secure, fast, and reliable
              financial services every day.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand hover:scale-105 transition-transform"
              >
                Get in touch
              </Link>
              <Link
                to="/services"
                className="rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur hover:bg-white/20"
              >
                Browse services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
