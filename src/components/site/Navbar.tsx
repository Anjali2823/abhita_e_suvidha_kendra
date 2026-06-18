import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/abhita-logo.jpeg";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-us", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 overflow-hidden rounded-xl ring-1 ring-border bg-white shadow-sm transition-transform group-hover:scale-105">
            <img src={logoUrl} alt="Abhita logo" className="h-full w-full object-contain p-0.5" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-extrabold text-foreground whitespace-nowrap">
              Abhita e Suvidha Kendra
            </div>
            <div className="text-[9px] font-medium tracking-wider text-muted-foreground/70 uppercase">
              Abhita Finance Advisor Pvt. Ltd.
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                  active
                    ? "bg-brand/10 text-brand shadow-sm"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://portal.abhitaesuvidhakendra.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center rounded-lg gradient-brand px-4 py-2 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
          >
            Sign Up
          </a>
          <button
            className="md:hidden rounded-lg p-2 text-foreground hover:bg-muted"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href="https://portal.abhitaesuvidhakendra.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg gradient-brand px-4 py-2.5 text-center text-sm font-bold text-white"
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
