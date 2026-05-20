"use client";

import { useState, useEffect } from "react";

interface Product {
  name: string;
  status: string;
  statusColor: string;
  logo: string | null;
  fallbackIcon: string;
  fallbackBg: string;
  fallbackColor: string;
  category: string;
  chain: string;
  description: string;
  detail: string;
  href: string | null;
}

const products: Product[] = [
  {
    name: "100s (Hundreds)",
    status: "Building",
    statusColor: "#FB8C00",
    logo: null,
    fallbackIcon: "⚡",
    fallbackBg: "#1a2744",
    fallbackColor: "#42A5F5",
    category: "Native CLOB",
    chain: "Avalanche",
    description: "First unified exchange and clearinghouse for real-time event risk. CLOB-style matching, instant stablecoin settlement.",
    detail: "1% fees on volume plus 1% on winnings. Event Intelligence (EI) data feed and PIX Probability Index. B2B distribution through Cube Exchange Telegram mini-app. Founded by Rob Levy (ex-CBOE DPMM). GTM end Q2 / early Q3 2026.",
    href: null,
  },
  {
    name: "Verdict (VDEX)",
    status: "Building",
    statusColor: "#FB8C00",
    logo: "/logo-verdict.jpg",
    fallbackIcon: "∞",
    fallbackBg: "#2d1a3e",
    fallbackColor: "#AB47BC",
    category: "Wrapper / Perps",
    chain: "Avalanche",
    description: "World's first perpetual prediction markets. Always-on markets with leverage, funding, and professional risk controls.",
    detail: "Inherits Polymarket liquidity, delivers perp-style trading. Gasless, omnichain, sub-millisecond fills, no KYC. GTM end Q2 / early Q3 2026.",
    href: null,
  },
  {
    name: "m3lee",
    status: "Live",
    statusColor: "#00E676",
    logo: "/logo-m3lee.jpg",
    fallbackIcon: "▶",
    fallbackBg: "#1a3329",
    fallbackColor: "#00E676",
    category: "Native Consumer",
    chain: "Avalanche C-Chain",
    description: "Creator-driven live-stream prediction platform. Creators spin up markets in real time during their own livestreams.",
    detail: "The creator is the frontend, their audience is the market. Targets the broader consumer segment the category needs to reach mainstream scale.",
    href: "https://m3lee.com/explore",
  },
  {
    name: "tennis.fun",
    status: "Live",
    statusColor: "#00E676",
    logo: "/logo-tennis.jpg",
    fallbackIcon: "●",
    fallbackBg: "#2d331a",
    fallbackColor: "#C6FF00",
    category: "Native Sports",
    chain: "Avalanche C-Chain",
    description: "Standalone tennis fantasy + prediction. Single-vertical sports product.",
    detail: "Combines fantasy league mechanics with prediction market economics, focused exclusively on tennis. Live on Avalanche C-Chain.",
    href: "https://protennis.fun/",
  },
  {
    name: "Predictfully",
    status: "Live + Building",
    statusColor: "#00E676",
    logo: "/logo-predictfully.jpg",
    fallbackIcon: "◇",
    fallbackBg: "#1a2d33",
    fallbackColor: "#26C6DA",
    category: "Native + White-label",
    chain: "Avalanche C-Chain",
    description: "Live prediction market. Building a white-label service for Q3 that lets anyone spin up their own market.",
    detail: "The white-label angle broadens prediction markets on Avalanche from a handful of products to potentially many small operators running their own venues.",
    href: "https://www.predictfully.com/",
  },
  {
    name: "Core x Polymarket",
    status: "Building",
    statusColor: "#FB8C00",
    logo: "/logo-core-polymarket.jpg",
    fallbackIcon: "⟁",
    fallbackBg: "#33201a",
    fallbackColor: "#FF7043",
    category: "Wrapper / Distribution",
    chain: "Avalanche",
    description: "Builder Program integration. Core Wallet plugs into the largest prediction-market order book on-chain with rev-share.",
    detail: "Builder codes attribute volume to Core, earning a share of Polymarket trading fees. Builder Program has routed $50M+ in volume through third-party apps.",
    href: null,
  },
  {
    name: "The Arena",
    status: "Live",
    statusColor: "#00E676",
    logo: "/logo-arena.jpg",
    fallbackIcon: "△",
    fallbackBg: "#331a27",
    fallbackColor: "#EC407A",
    category: "SocialFi / Distribution",
    chain: "Avalanche C-Chain",
    description: "SocialFi distribution surface. 200K+ users, $100M+ in cumulative volume.",
    detail: "ARENA token. The most credible existing social distribution surface on Avalanche for consumer-facing prediction products.",
    href: null,
  },
];

export default function ConstellationMap() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((prev: number) => (prev + 0.15) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const cx = 400;
  const cy = 400;
  const radius = 260;
  const nodeSize = 50;

  const getPosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotation) * (Math.PI / 180);
    return {
      x: cx + radius * Math.cos(angle) - nodeSize / 2,
      y: cy + radius * Math.sin(angle) - nodeSize / 2,
    };
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0D1117", color: "#E6EDF3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.75)", zIndex: 100,
            display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
          }}
        >
          <div onClick={(e: React.MouseEvent) => e.stopPropagation()} style={{
            background: "#161B22", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 16, padding: "32px 36px", maxWidth: 520, width: "100%",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                {selected.logo ? (
                  <img src={selected.logo} alt={selected.name} width={48} height={48} style={{ borderRadius: 12, objectFit: "cover" }} />
                ) : (
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: selected.fallbackBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: selected.fallbackColor }}>
                    {selected.fallbackIcon}
                  </div>
                )}
                <div>
                  <div style={{ fontSize: 20, fontWeight: 600 }}>{selected.name}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: selected.statusColor, display: "inline-block" }} />
                    <span style={{ fontSize: 12, color: selected.statusColor }}>{selected.status}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, width: 36, height: 36, cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: 18,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>✕</button>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>{selected.description}</p>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>{selected.detail}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {[selected.category, selected.chain].map((tag: string) => (
                <span key={tag} style={{ fontSize: 11, padding: "4px 12px", borderRadius: 6, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>{tag}</span>
              ))}
            </div>
            {selected.href && (
              <a href={selected.href} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#E53935", color: "#fff", padding: "10px 20px",
                borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: "none",
              }}>Visit {selected.name} ↗</a>
            )}
          </div>
        </div>
      )}

      <div style={{ padding: "40px 48px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0 }}>Ecosystem Map</h1>
          <span style={{ background: "#00E676", color: "#000", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 4 }}>
            {products.filter((p: Product) => p.status.includes("Live")).length} LIVE
          </span>
          <span style={{ background: "#FB8C00", color: "#000", fontSize: 11, fontWeight: 600, padding: "3px 12px", borderRadius: 4 }}>
            {products.filter((p: Product) => p.status.includes("Building")).length} BUILDING
          </span>
        </div>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 24px", maxWidth: 500 }}>
          Prediction market products live or building on Avalanche. Click any node for details.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", padding: "0 48px 48px" }}>
        <svg viewBox="0 0 800 800" width="100%" style={{ maxWidth: 700, maxHeight: 700 }}>
          <defs>
            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E53935" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E53935" stopOpacity="0" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {products.map((p: Product, i: number) => p.logo && (
              <clipPath key={i} id={`clip-${i}`}>
                <circle cx={nodeSize / 2} cy={nodeSize / 2} r={nodeSize / 2 - 2} />
              </clipPath>
            ))}
          </defs>

          <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(229,57,53,0.08)" strokeWidth="1" strokeDasharray="4,6" />
          <circle cx={cx} cy={cy} r={radius - 40} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
          <circle cx={cx} cy={cy} r={radius + 40} fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

          <circle cx={cx} cy={cy} r={120} fill="url(#centerGlow)" />

          {products.map((p: Product, i: number) => {
            const pos = getPosition(i, products.length);
            return (
              <line
                key={`line-${i}`}
                x1={cx} y1={cy}
                x2={pos.x + nodeSize / 2} y2={pos.y + nodeSize / 2}
                stroke={p.statusColor}
                strokeOpacity="0.12"
                strokeWidth="1"
              />
            );
          })}

          <g>
            <circle cx={cx} cy={cy} r={42} fill="#161B22" stroke="#E53935" strokeWidth="2" />
            <image href="/avalanche-triangle.svg" x={cx - 24} y={cy - 24} width="48" height="48" />
          </g>

          {products.map((p: Product, i: number) => {
            const pos = getPosition(i, products.length);
            return (
              <g
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(p)}
              >
                <circle
                  cx={pos.x + nodeSize / 2}
                  cy={pos.y + nodeSize / 2}
                  r={nodeSize / 2 + 3}
                  fill="none"
                  stroke={p.statusColor}
                  strokeWidth="2"
                  strokeOpacity="0.5"
                  filter="url(#glow)"
                />
                <circle
                  cx={pos.x + nodeSize / 2}
                  cy={pos.y + nodeSize / 2}
                  r={nodeSize / 2}
                  fill="#161B22"
                />
                {p.logo ? (
                  <image
                    href={p.logo}
                    x={pos.x + 2}
                    y={pos.y + 2}
                    width={nodeSize - 4}
                    height={nodeSize - 4}
                    clipPath={`url(#clip-${i})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                ) : (
                  <text
                    x={pos.x + nodeSize / 2}
                    y={pos.y + nodeSize / 2 + 6}
                    textAnchor="middle"
                    fontSize="18"
                    fill={p.fallbackColor}
                  >
                    {p.fallbackIcon}
                  </text>
                )}
                <text
                  x={pos.x + nodeSize / 2}
                  y={pos.y + nodeSize + 16}
                  textAnchor="middle"
                  fontSize="11"
                  fill="rgba(255,255,255,0.6)"
                  fontFamily="-apple-system, sans-serif"
                >
                  {p.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
