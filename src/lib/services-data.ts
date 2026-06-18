import financialImg from "@/assets/svc-financial.jpg";
import utilityImg from "@/assets/svc-utility.jpg";
import travelImg from "@/assets/svc-travel.jpg";
import insuranceImg from "@/assets/svc-insurance.jpg";
import governmentImg from "@/assets/svc-government.jpg";
import merchantImg from "@/assets/svc-merchant.jpg";
import {
  Banknote,
  Smartphone,
  Train,
  ShieldCheck,
  FileText,
  Store,
  Send,
  Wallet,
  Landmark,
  ArrowDownUp,
  HandCoins,
  BookOpen,
  Zap,
  Tv,
  CreditCard,
  Wifi,
  PlayCircle,
  Sun,
  Bus,
  Bike,
  Car,
  HeartPulse,
  Activity,
  Hospital,
  IdCard,
  Coins,
  Gift,
  Building2,
  QrCode,
  ScanLine,
  NotebookPen,
  type LucideIcon,
} from "lucide-react";

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  accent: string; // tailwind color class for icon bg
  items: { icon: LucideIcon; name: string; desc: string }[];
};

export const SERVICES: ServiceCategory[] = [
  {
    slug: "financial",
    title: "Financial Services",
    tagline: "Move money the modern way",
    description:
      "Secure, instant money transfers, UPI, wallet top-ups, cash withdrawal & deposit, loan assistance, and complete account services — all in one trusted hub.",
    image: financialImg,
    icon: Banknote,
    accent: "bg-brand/10 text-brand",
    items: [
      {
        icon: Send,
        name: "Money Transfer",
        desc: "Instant domestic transfers to any bank account in India.",
      },
      {
        icon: Smartphone,
        name: "UPI Services",
        desc: "Send and receive payments instantly via UPI.",
      },
      {
        icon: Wallet,
        name: "Wallet Top-Up",
        desc: "Quick wallet recharges for seamless transactions.",
      },
      {
        icon: Landmark,
        name: "Bank Settlement",
        desc: "Fast settlement for retailers and partners.",
      },
      {
        icon: ArrowDownUp,
        name: "Cash Withdrawal & Deposit",
        desc: "AEPS-powered banking at your doorstep.",
      },
      {
        icon: HandCoins,
        name: "Loan Services",
        desc: "Personal & business loan assistance through trusted partners.",
      },
      {
        icon: BookOpen,
        name: "Bank Account Services",
        desc: "Account opening and account management support.",
      },
      {
        icon: NotebookPen,
        name: "My Ledger",
        desc: "Track transactions and statements digitally.",
      },
    ],
  },
  {
    slug: "utility",
    title: "Utility & Bill Payments",
    tagline: "Every bill, one tap away",
    description:
      "Recharge mobiles & DTH, pay electricity, broadband, LIC premiums, credit card and OTT bills through secure BBPS-enabled channels.",
    image: utilityImg,
    icon: Smartphone,
    accent: "bg-midnight/10 text-midnight",
    items: [
      {
        icon: Smartphone,
        name: "Mobile Recharge",
        desc: "Prepaid recharge for all major operators.",
      },
      { icon: Tv, name: "DTH Recharge", desc: "All leading DTH service providers supported." },
      { icon: Zap, name: "Electricity Bill", desc: "Pay bills via BBPS-enabled secure channel." },
      { icon: CreditCard, name: "Credit Card Bill", desc: "Timely, secure credit card payments." },
      { icon: ShieldCheck, name: "LIC Premium", desc: "Pay LIC premiums in seconds." },
      { icon: Wifi, name: "Broadband & Wi-Fi", desc: "Convenient internet payments." },
      {
        icon: PlayCircle,
        name: "OTT Subscriptions",
        desc: "Renew popular OTT platforms instantly.",
      },
      { icon: Sun, name: "Solar Connection", desc: "Assistance for solar energy connections." },
    ],
  },
  {
    slug: "travel",
    title: "Travel Services",
    tagline: "Book journeys with ease",
    description:
      "Authorized IRCTC railway and bus ticket booking with real-time availability across India — confirmed seats in minutes.",
    image: travelImg,
    icon: Train,
    accent: "bg-midnight/40 text-white",
    items: [
      { icon: Train, name: "Railway Ticket Booking", desc: "Authorized IRCTC ticketing services." },
      { icon: Bus, name: "Bus Ticket Booking", desc: "Easy reservations on major routes." },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance Services",
    tagline: "Protection for what matters",
    description:
      "Comprehensive insurance for two-wheelers, cars, health, accidents and hospital cash — guidance from trusted partners.",
    image: insuranceImg,
    icon: ShieldCheck,
    accent: "bg-emerald/15 text-emerald",
    items: [
      { icon: Bike, name: "Two-Wheeler Insurance", desc: "Comprehensive & third-party plans." },
      { icon: Car, name: "Four-Wheeler Insurance", desc: "Cars and commercial vehicle cover." },
      { icon: HeartPulse, name: "Health Insurance", desc: "Affordable family health plans." },
      {
        icon: Activity,
        name: "Personal Accident",
        desc: "Protection against accidental injuries.",
      },
      { icon: Hospital, name: "Hospital Cash", desc: "Daily cash during hospitalization." },
    ],
  },
  {
    slug: "government",
    title: "Government & Digital",
    tagline: "Digital India, made simple",
    description:
      "PAN card services, Digi Gold, e-gift cards and Bank CSP registration — convenient access to essential digital services.",
    image: governmentImg,
    icon: FileText,
    accent: "bg-brand/10 text-brand",
    items: [
      { icon: IdCard, name: "PAN Card Services", desc: "New PAN, corrections & updates." },
      { icon: Coins, name: "Digi Gold", desc: "Buy, save and manage digital gold." },
      { icon: Gift, name: "E-Gift Cards", desc: "Digital gift card purchase & redemption." },
      { icon: Building2, name: "Bank CSP Registration", desc: "Become a Customer Service Point." },
    ],
  },
  {
    slug: "merchant",
    title: "Merchant Solutions",
    tagline: "Accept payments anywhere",
    description:
      "QR codes, M-POS card acceptance and Digital Khata — everything a modern Indian retailer needs to grow.",
    image: merchantImg,
    icon: Store,
    accent: "bg-white/20 text-white",
    items: [
      { icon: QrCode, name: "QR Code Payments", desc: "Accept payments via secure QR." },
      { icon: ScanLine, name: "M-POS Solutions", desc: "Card acceptance on mobile POS." },
      { icon: NotebookPen, name: "Digital Khata", desc: "Maintain credit records digitally." },
    ],
  },
];
