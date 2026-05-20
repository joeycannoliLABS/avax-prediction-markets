"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    label: "OVERVIEW",
    items: [
      { name: "Ecosystem Map", icon: "◎", href: "/" },
      { name: "Migration Targets", icon: "→", href: "/targets" },
      { name: "Competitive Landscape", icon: "◆", href: "/landscape" },
    ],
  },
  {
    label: "STRATEGY",
    items: [
      { name: "Vol. 01 — Q2 2026", icon: "■", href: "/strategy" },
      { name: "L1 vs C-Chain Pitch", icon: "⬡", href: "/l1-pitch" },
      { name: "Ownership Playbook", icon: "▣", href: "/ownership" },
    ],
  },
  {
    label: "RESOURCES",
    items: [
      { name: "PM Primer", icon: "▤", href: "/primer" },
    ],
  },
];

const AvaxTriangle = () => (
  <svg width="28" height="28" viewBox="0 0 255 230" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M171.8 167.3H222.2C229.4 167.3 233 167.3 234.8 165.7C236.9 163.8 237 161.4 235.8 159L185.4 69.4C183.3 65.7 180 59.4 176.8 59.4C173.6 59.4 170.3 65.7 168.2 69.4L156.7 89.9L156.6 90.1C154.2 94.4 152.9 96.7 152.2 99.1C151.4 101.8 151.4 104.7 152.2 107.4C152.9 109.8 154.3 112.2 156.8 116.5L171.6 142.8L171.7 143C174.2 147.3 175.5 149.6 176.1 152C176.9 154.7 176.9 157.6 176.1 160.3C175.5 162.6 174.1 165 171.8 167.3Z" fill="#E84142"/>
    <path d="M118.3 167.3H33.4C26.2 167.3 22.6 167.3 20.8 165.7C18.7 163.8 18.6 161.4 19.8 159L72.3 65.4C74.4 61.7 77.7 55.4 80.9 55.4C84.1 55.4 87.4 61.7 89.5 65.4L118.5 116.5L118.7 116.9C121.1 121.2 122.4 123.5 123.1 125.9C123.9 128.6 123.9 131.5 123.1 134.2C122.4 136.6 121 139 118.5 143.3L118.3 143.7L118.3 167.3Z" fill="#E84142"/>
  </svg>
);

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: 260,
        minWidth: 260,
        borderRight: "1px solid var(--border)",
        padding: "24px 0",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-sidebar)",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        overflowY: "auto",
        zIndex: 10,
      }}
    >
      <Link href="/" style={{ padding: "0 20px 24px", display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
        <AvaxTriangle />
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>Prediction Markets</div>
        </div>
      </Link>

      {sections.map((section) => (
        <div key={section.label} style={{ marginBottom: 8 }}>
          <div
            style={{
              padding: "8px 20px",
              fontSize: 11,
              fontWeight: 600,
              color: "var(--avax-red)",
              letterSpacing: 1.5,
            }}
          >
            {section.label}
          </div>
          {section.items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  padding: "8px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: active ? "rgba(255,255,255,0.06)" : "transparent",
                  borderLeft: active ? "2px solid var(--avax-red)" : "2px solid transparent",
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
              >
                <span style={{ fontSize: 12, color: "var(--text-tertiary)", width: 16, textAlign: "center" }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: 13,
                    color: active ? "var(--text-primary)" : "var(--text-secondary)",
                    fontWeight: active ? 500 : 400,
                  }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      ))}

      <div style={{ flex: 1 }} />
      <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)" }}>
        <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Avalanche Ecosystem Growth</div>
        <div style={{ fontSize: 11, marginTop: 4 }}>
          <span style={{ color: "var(--avax-red)" }}>AVAX</span>
          <span style={{ color: "var(--text-tertiary)", marginLeft: 6 }}>Business Development</span>
        </div>
      </div>
    </aside>
  );
}
