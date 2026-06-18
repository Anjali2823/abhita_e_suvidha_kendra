import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, HeartHandshake, Award, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhita e Suvidha Kendra" },
      {
        name: "description",
        content:
          "Learn about Abhita Finance Advisor Pvt. Ltd. — empowering digital India with accessible financial and utility services.",
      },
      { property: "og:title", content: "About Abhita e Suvidha Kendra" },
      {
        property: "og:description",
        content: "Empowering digital India through accessible, secure financial services.",
      },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: Target,
    t: "Our Mission",
    d: "Deliver innovative, secure and customer-centric solutions that simplify everyday transactions for everyone, anywhere in India.",
  },
  {
    icon: Eye,
    t: "Our Vision",
    d: "Empower individuals, retailers and businesses through reliable digital services that fuel financial inclusion and growth.",
  },
  {
    icon: HeartHandshake,
    t: "Our Promise",
    d: "Trust, transparency and a partnership-first approach in everything we build and serve.",
  },
  {
    icon: Award,
    t: "Our Standard",
    d: "Bank-grade security paired with a delightful, easy-to-use digital experience across all devices.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-midnight/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              About us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance max-w-3xl">
              Empowering India with <span className="gradient-text-brand">digital convenience</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Abhita e Suvidha Kendra is a comprehensive digital service platform operated under
              Abhita Finance Advisor Pvt. Ltd. We are dedicated to providing convenient, secure and
              reliable financial, utility, travel, insurance and digital services to individuals,
              retailers and businesses across India.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl ring-1 ring-border shadow-soft">
            <img
              src={aboutImg}
              alt="Abhita team collaborating"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={1000}
            />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-extrabold text-foreground sm:text-4xl">
              Built on trust. Designed for India.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We believe essential services should be simple, secure and within reach. From kirana
              store owners in small towns to families in metro cities, our platform makes daily
              financial and utility transactions fast, reliable and inclusive.
            </p>
          </Reveal>
          <ul className="mt-6 space-y-3">
            {[
              "Secure & reliable transactions across every service",
              "One platform unifying 50+ digital services",
              "Real-time support and a nationwide partner network",
              "Customer-first design that anyone can use",
            ].map((t, i) => (
              <Reveal key={t} delay={0.08 + i * 0.04}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald" size={20} />
                  <span className="text-foreground/85">{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="What drives us" title="Values that shape every service" center />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-extrabold text-foreground">
                    {v.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center">
            <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
              Your trusted partner for digital & financial services
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Let's build a more connected, financially empowered India — together.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/services"
                className="rounded-xl gradient-brand px-5 py-3 text-sm font-bold text-white shadow-brand"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-bold text-foreground hover:bg-muted"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
