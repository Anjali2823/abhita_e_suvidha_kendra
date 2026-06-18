import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Users,
  Zap,
  Headset,
  Headphones,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhita e Suvidha Kendra" },
      {
        name: "description",
        content:
          "Get in touch with Abhita Finance Advisor Pvt. Ltd. — we're here to help with every service, every day.",
      },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  {
    icon: MapPin,
    t: "Visit us",
    lines: [
      "Office No. 1206, 12th Floor,",
      "International Trade Center, Sector 14,",
      "Kharghar, Navi Mumbai – 410210",
    ],
    color: "bg-brand/10 text-brand",
  },
  {
    icon: Phone,
    t: "Call us",
    lines: ["+91 70660 29237", "Mon–Sat, 10:00 AM – 6:00 PM"],
    color: "bg-midnight/10 text-midnight",
  },
  {
    icon: Mail,
    t: "Email us",
    lines: ["abhitafinanceit@gmail.com"],
    color: "bg-emerald/15 text-emerald",
  },
  {
    icon: Clock,
    t: "Working hours",
    lines: ["Monday – Saturday", "10:00 AM – 6:00 PM IST"],
    color: "bg-gold/20 text-gold",
  },
];

const STATS = [
  {
    icon: ShieldCheck,
    t: "Trusted Across India",
    d: "Serving customers in 25+ states",
    color: "text-brand",
  },
  { icon: Users, t: "1000+ Partners", d: "Strong retailer network", color: "text-midnight" },
  { icon: Zap, t: "Fast & Secure", d: "Secure transactions, always", color: "text-gold" },
  { icon: Headset, t: "24/7 Support", d: "We're here to help you anytime", color: "text-emerald" },
];

function ContactPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section - THEME COMPLIANT */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand/20 blur-3xl animate-blob" />
        <div
          className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-midnight/25 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 pt-10 pb-16">
          <Reveal>
            <span className="inline-block rounded-full bg-brand/10 border border-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Contact us
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance max-w-3xl">
              Let's build digital convenience,{" "}
              <span className="gradient-text-brand">together.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a question, want to partner with us or need support?
              <br />
              Our team is just a call or email away.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.8fr]">
            {/* Left Side: Vertical list of cards */}
            <div className="flex flex-col gap-5">
              {INFO.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.05}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-soft hover-lift flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${c.color}`}
                    >
                      <c.icon size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-extrabold text-foreground mb-1">
                        {c.t}
                      </h3>
                      <div className="space-y-0.5 text-sm text-muted-foreground">
                        {c.lines.map((l) => (
                          <div key={l}>{l}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Right Side: Map with floating stats */}
            <Reveal delay={0.2} className="h-[550px] lg:h-full">
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-soft border border-border bg-card">
                <a
                  href="https://maps.google.com/?q=International+Trade+Center,+Sector+14,+Kharghar,+Navi+Mumbai,+410210"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-xl bg-card px-4 py-2.5 text-sm font-bold text-brand shadow-soft hover:bg-muted transition-colors border border-border"
                >
                  Open in Maps
                  <ExternalLink size={16} />
                </a>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-muted/10">
                  <MapPin size={32} className="text-muted-foreground mb-4 opacity-50" />
                  <p className="text-sm font-medium text-muted-foreground">
                    Map could not be loaded.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 max-w-sm">
                    If you have strict privacy settings enabled, please use the 'Open in Maps'
                    button above to view our location.
                  </p>
                </div>
                <iframe
                  title="Abhita office map"
                  src="https://www.google.com/maps?q=International+Trade+Center,+Sector+14,+Kharghar,+Navi+Mumbai,+410210&output=embed"
                  className="absolute inset-0 z-10 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />

                {/* Floating Stats Banner at Bottom */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/95 backdrop-blur-md shadow-soft border border-border p-6">
                  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                    {STATS.map((s) => (
                      <div key={s.t} className="flex gap-3 items-start">
                        <s.icon className={`shrink-0 mt-0.5 ${s.color}`} size={20} />
                        <div>
                          <div className="text-sm font-bold text-foreground">{s.t}</div>
                          <div className="text-xs text-muted-foreground mt-1 leading-snug">
                            {s.d}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <Reveal delay={0.3}>
          <div className="relative mt-12 overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl gradient-brand p-8 sm:p-12 text-white shadow-brand hover-lift">
            <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-gold/20 blur-2xl" />

            <div className="relative flex items-center gap-6">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 backdrop-blur border border-white/20 text-white">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold">Need immediate assistance?</h3>
                <p className="text-white/85 mt-2 max-w-md">
                  Our support team is ready to help you with anything you need.
                </p>
              </div>
            </div>

            <div className="relative flex gap-4 shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
              <a
                href="tel:+917066029237"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-brand shadow-soft hover:scale-105 transition-transform"
              >
                <Phone size={18} />
                Call Now
              </a>
              <a
                href="mailto:abhitafinanceit@gmail.com"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/30 px-6 py-3.5 text-sm font-bold text-white backdrop-blur hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
