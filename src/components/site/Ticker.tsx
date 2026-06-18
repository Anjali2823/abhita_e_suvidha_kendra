const ITEMS = [
  "UPI Transfers",
  "BBPS Bills",
  "IRCTC Booking",
  "AEPS Cash",
  "Digi Gold",
  "PAN Services",
  "Health Insurance",
  "Mobile Recharge",
  "Bank CSP",
  "M-POS",
  "QR Payments",
  "DTH Recharge",
  "LIC Premium",
  "OTT Subscriptions",
];

export function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground"
          >
            <span className="mr-10 text-brand">✦</span>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
