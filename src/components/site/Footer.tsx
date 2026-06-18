import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logoUrl from "@/assets/abhita-logo.jpeg";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-midnight text-white/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-xl bg-white p-0.5">
              <img src={logoUrl} alt="Abhita logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="font-display text-base font-extrabold text-white whitespace-nowrap">
                Abhita e Suvidha Kendra
              </div>
              <div className="text-[10px] font-semibold tracking-wider text-gold uppercase">
                Abhita Finance Advisor Pvt. Ltd.
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Powered by Abhita Finance Advisor Pvt. Ltd. Your trusted partner for digital, financial
            & utility services across India.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-brand transition-colors"
                aria-label="social"
              >
                <Icon size={16} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Why Us", "/why-us"],
              ["Contact", "/contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link to={h} className="text-white/65 hover:text-gold transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li>Money Transfer & UPI</li>
            <li>Bill & Utility Payments</li>
            <li>Travel Bookings</li>
            <li>Insurance Plans</li>
            <li>PAN & Government Services</li>
            <li>Merchant Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" /> Office No. 1206, 12th
              Floor, International Trade Center, Sector 14, Kharghar, Navi Mumbai – 410210
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 text-gold" /> +91 70660 29237
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 text-gold" /> abhitafinanceit@gmail.com
            </li>
            <li>
              <a
                href="https://portal.abhitaesuvidhakendra.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-lg gradient-brand px-4 py-2 text-sm font-bold text-white shadow-brand transition-transform hover:-translate-y-0.5"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} Abhita Finance Advisor Pvt. Ltd. All rights reserved.
          </span>
          <span>Empowering Digital India.</span>
        </div>
      </div>
    </footer>
  );
}
