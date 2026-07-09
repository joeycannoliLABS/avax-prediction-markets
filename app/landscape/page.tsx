"use client";

import { SectionLabel, Card } from "@/components/UI";

interface Platform {
  rank: number;
  name: string;
  volume: string;
  volumeNote: string;
  chain: string;
  chainColor: string;
  type: string;
  website: string;
  category: string;
  note: string;
}

const platforms: Platform[] = [
  {
    rank: 1,
    name: "Kalshi",
    volume: "$31.5B",
    volumeNote: "June 2026",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://kalshi.com",
    category: "Regulated",
    note: "Dominant by volume. $22B valuation. 87% jump in June from World Cup. $832M on World Cup winner market alone. Robinhood routes through Kalshi infrastructure.",
  },
  {
    rank: 2,
    name: "Polymarket (International)",
    volume: "$10.26B",
    volumeNote: "June 2026",
    chain: "Polygon",
    chainColor: "#7B3FE4",
    type: "Hybrid CLOB (on-chain settlement)",
    website: "https://polymarket.com",
    category: "On-Chain",
    note: "Largest on-chain PM globally. Record June volume reversed April-May decline. VP Eng has said traction 'massively outpaced' Polygon infrastructure. World Cup winner market at $3.4B+ cumulative.",
  },
  {
    rank: 3,
    name: "Polymarket US",
    volume: "$3.04B",
    volumeNote: "June 2026",
    chain: "Polygon (CFTC-regulated)",
    chainColor: "#7B3FE4",
    type: "Regulated CLOB",
    website: "https://polymarket.com",
    category: "Regulated",
    note: "Separate CFTC-regulated US entity (QCX LLC). Sports-only for now. Steady upward trend since launch. 0.10% flat taker fee.",
  },
  {
    rank: 4,
    name: "Rothera",
    volume: "$2B+",
    volumeNote: "June 2026 (launch month)",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://rothera.com",
    category: "Regulated",
    note: "Joint venture between Susquehanna (SIG) and Robinhood. Launched June 2026. Already 7% US market share per Bank of America. Robinhood routes certain World Cup contracts here.",
  },
  {
    rank: 5,
    name: "Limitless",
    volume: "$1.6B+",
    volumeNote: "Monthly (Apr 2026)",
    chain: "Base",
    chainColor: "#0052FF",
    type: "Native CLOB",
    website: "https://limitless.exchange",
    category: "On-Chain",
    note: "Ava Labs #1 target. Fastest-growing PM by run rate. Pioneered 15/30/60-min markets. DCM filing, Nasdaq listing planned. $3.5B+ total volume.",
  },
  {
    rank: 6,
    name: "Robinhood Predictions",
    volume: "Wrapper",
    volumeNote: "Routes via Kalshi/Rothera",
    chain: "Off-chain (wrapper)",
    chainColor: "#78909C",
    type: "Distribution Wrapper",
    website: "https://robinhood.com",
    category: "TradFi",
    note: ">50% of Kalshi volume. 'Fastest growing business in the company's history.' Now routing some contracts to Rothera (SIG JV). Massive retail distribution.",
  },
  {
    rank: 7,
    name: "DraftKings Predictions",
    volume: "Growing",
    volumeNote: "Launched late 2025",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://draftkings.com",
    category: "TradFi",
    note: "Acquired Railbird Technologies (CFTC-registered). Expanding nationwide. Blending sportsbook and prediction market in one app.",
  },
  {
    rank: 8,
    name: "FanDuel Predicts",
    volume: "Growing",
    volumeNote: "Launched Jan 2026",
    chain: "Off-chain (CME Group partnership)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://fanduel.com",
    category: "TradFi",
    note: "FanDuel + CME Group partnership. Live in all 50 states (sports contracts in 18). Massive existing sportsbook user base for cross-sell.",
  },
  {
    rank: 9,
    name: "OG (Crypto.com)",
    volume: "Growing",
    volumeNote: "Launched Feb 2026",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://og.xyz",
    category: "TradFi",
    note: "Powered by Crypto.com Derivatives North America (CDNA). Social features: leaderboards, posts, comments. Parlays across markets. Just launched in New York.",
  },
  {
    rank: 10,
    name: "Fanatics Markets",
    volume: "Growing",
    volumeNote: "Launched Dec 2025",
    chain: "Off-chain",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://fanaticsmarkets.com",
    category: "TradFi",
    note: "Pricing by Crypto.com. Co-branded World Cup hub with ADI Predictstreet in 23 US states. Trade match incentives up to $75.",
  },
  {
    rank: 11,
    name: "ADI Predictstreet",
    volume: "New",
    volumeNote: "Launched Jun 2026",
    chain: "ADI Chain",
    chainColor: "#FFD700",
    type: "Native (Chainlink oracles)",
    website: "https://adipredictstreet.com",
    category: "On-Chain",
    note: "Official FIFA World Cup 2026 prediction market partner. Licensed in Gibraltar. DAZN partnership for embedded predictions in live streaming. Chainlink Runtime Environment.",
  },
  {
    rank: 12,
    name: "Predict.fun",
    volume: "$60.3M",
    volumeNote: "Weekly (Mar 2026)",
    chain: "Blast",
    chainColor: "#FCFC03",
    type: "Native (yield-optimized)",
    website: "https://predict.fun",
    category: "On-Chain",
    note: "DeFi-native with yield on idle capital while waiting for resolution. Binance integration in development. Capital-efficient model addresses Polymarket's biggest weakness.",
  },
  {
    rank: 13,
    name: "SX Bet",
    volume: "Growing",
    volumeNote: "Own app-chain",
    chain: "SX Chain (Arbitrum Orbit)",
    chainColor: "#28A0F0",
    type: "Native Order Book",
    website: "https://sx.bet",
    category: "On-Chain",
    note: "0.5% vig vs. industry 5-7%. Own app-chain shows technical maturity. Cross-chain rollout planned. Arbitrum ecosystem under pressure ($131M net outflows).",
  },
  {
    rank: 14,
    name: "Overtime Markets",
    volume: "$27M+",
    volumeNote: "Cumulative wagered",
    chain: "Multi-chain (OP, Arb, Base +3)",
    chainColor: "#FF0420",
    type: "Native AMM",
    website: "https://overtimemarkets.xyz",
    category: "On-Chain",
    note: "Decentralized sportsbook. LP-as-house model (106% returns on Arbitrum LP). 18K+ users. Chainlink feeds. Fragmented across 6+ chains.",
  },
  {
    rank: 15,
    name: "Azuro Protocol",
    volume: "Multi-dApp",
    volumeNote: "Protocol layer",
    chain: "Polygon, Gnosis, Linea",
    chainColor: "#7B3FE4",
    type: "Infrastructure (Liquidity tree)",
    website: "https://azuro.org",
    category: "On-Chain",
    note: "Not a frontend — protocol layer powering multiple sports betting dApps. AZUR token live. One integration = multiple frontends. Force multiplier.",
  },
  {
    rank: 16,
    name: "Hedgehog Markets",
    volume: "Growing",
    volumeNote: "On Solana",
    chain: "Solana",
    chainColor: "#14F195",
    type: "Native AMM + P2P",
    website: "https://hedgehog.markets",
    category: "On-Chain",
    note: "Pooled liquidity, fully on-chain. Building own optimistic oracle. Permissionless market creation.",
  },
  {
    rank: 17,
    name: "Drift Predict",
    volume: "Growing",
    volumeNote: "On Solana",
    chain: "Solana",
    chainColor: "#14F195",
    type: "Native (Perps-style)",
    website: "https://drift.trade/predict",
    category: "On-Chain",
    note: "Built on Drift's derivatives stack. Hybrid prediction + perps. Near-instant settlement. PM as a feature on a derivatives platform.",
  },
  {
    rank: 18,
    name: "PRDT Finance",
    volume: "$200M+",
    volumeNote: "Paid out since 2021",
    chain: "Multi-chain (incl. Avalanche)",
    chainColor: "#E53935",
    type: "Native (Cross-chain binary)",
    website: "https://prdt.finance",
    category: "On-Chain",
    note: "Already on Avalanche. 5-30 min crypto price rounds. 80% of revenue to PRDT stakers daily. One of the longest-running DeFi prediction platforms.",
  },
  {
    rank: 19,
    name: "XO Market",
    volume: "$150M+",
    volumeNote: "Since Nov 2025 beta",
    chain: "Undisclosed (EVM)",
    chainColor: "#90A4AE",
    type: "Native AMM (Bonding Curve)",
    website: "https://xo.market",
    category: "On-Chain",
    note: "Ava Labs active pursuit. 'YouTube of PMs' — permissionless user-generated. 30K+ users, 600+ markets. $6M seed from 20VC, Coinbase Ventures. XO Vaults coming.",
  },
  {
    rank: 20,
    name: "ProphetX",
    volume: "Growing",
    volumeNote: "Sports-only",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://prophetx.com",
    category: "Regulated",
    note: "Sports-only prediction market. Clean interface. $20 bonus for new users. Growing but smaller than Kalshi/Polymarket.",
  },
  {
    rank: 21,
    name: "Novig",
    volume: "Growing",
    volumeNote: "Sports-only",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://novig.com",
    category: "Regulated",
    note: "Sports-focused prediction market. No unrelated markets to navigate. Clean, focused product for sports traders.",
  },
  {
    rank: 22,
    name: "Gemini Predictions",
    volume: "New",
    volumeNote: "Recently launched",
    chain: "Off-chain",
    chainColor: "#78909C",
    type: "Peer-to-peer",
    website: "https://gemini.com",
    category: "TradFi",
    note: "Peer-to-peer prediction platform. Sports-focused. Beginner-friendly. Backed by Gemini's crypto exchange infrastructure.",
  },
];

const categoryColors: Record<string, string> = {
  "On-Chain": "#00E676",
  "Regulated": "#42A5F5",
  "TradFi": "#FB8C00",
};

export default function LandscapePage() {
  return (
    <>
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0, color: "var(--text-primary)" }}>
            Competitive Landscape
          </h1>
          <span style={{
            background: "var(--avax-red)", color: "#fff", fontSize: 11, fontWeight: 600,
            padding: "3px 12px", borderRadius: 4, letterSpacing: 0.5,
          }}>
            INTERNAL
          </span>
        </div>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6, maxWidth: 640 }}>
          Every prediction market platform ranked by volume. June 2026 was a record month — Kalshi and Polymarket combined for $44.8B driven by the FIFA World Cup.
        </p>
      </div>

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 36 }}>
        {[
          { label: "Combined June volume", value: "$44.8B" },
          { label: "Kalshi June volume", value: "$31.5B" },
          { label: "Polymarket June volume", value: "$10.26B" },
          { label: "Platforms tracked", value: String(platforms.length) },
        ].map((s) => (
          <div key={s.label} style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: 8, padding: "16px 18px",
          }}>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div key={cat} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, display: "inline-block" }} />
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{cat}</span>
          </div>
        ))}
      </div>

      <SectionLabel>ALL PLATFORMS BY VOLUME</SectionLabel>

      {/* Platform list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {platforms.map((p: Platform) => (
          <a
            key={p.name}
            href={p.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "18px 22px",
                transition: "border-color 0.15s ease",
                cursor: "pointer",
              }}
              onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
              onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Top row: rank, name, volume, chain */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{
                    fontSize: 14, fontWeight: 700, color: "var(--text-tertiary)",
                    fontFamily: "monospace", width: 28, textAlign: "right",
                  }}>
                    {p.rank}
                  </span>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</span>
                      <span style={{
                        width: 7, height: 7, borderRadius: "50%",
                        background: categoryColors[p.category] || "#78909C",
                        display: "inline-block",
                      }} />
                      <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>↗</span>
                    </div>
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{p.type}</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)" }}>{p.volume}</div>
                    <div style={{ fontSize: 10, color: "var(--text-tertiary)" }}>{p.volumeNote}</div>
                  </div>
                  <span style={{
                    fontSize: 10, padding: "3px 10px", borderRadius: 4,
                    background: `${p.chainColor}18`, border: `1px solid ${p.chainColor}33`,
                    color: p.chainColor, whiteSpace: "nowrap",
                  }}>
                    {p.chain}
                  </span>
                </div>
              </div>

              {/* Note */}
              <div style={{ marginTop: 10, paddingLeft: 42 }}>
                <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                  {p.note}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom context card */}
      <div style={{
        marginTop: 32, padding: "20px 22px",
        background: "rgba(229,57,53,0.06)", border: "1px solid rgba(229,57,53,0.15)",
        borderRadius: 10,
      }}>
        <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1.5, color: "#E53935", marginBottom: 8, fontWeight: 700 }}>
          KEY CONTEXT FOR BD CONVERSATIONS
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
          <strong style={{ color: "var(--text-primary)" }}>The World Cup effect:</strong> June 2026 was the biggest month
          in prediction market history. Combined Kalshi + Polymarket volume hit $44.8B, up 75% from May. Kalshi maintained
          daily volume above $1B throughout the tournament. Prediction market apps captured 78.5% of betting app downloads
          in June, up from 6% a year earlier.
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>The TradFi invasion is real:</strong> DraftKings, FanDuel, Fanatics,
          OG (Crypto.com), Gemini, and Rothera (Robinhood/SIG) all launched prediction products in the last 8 months. The
          category is validated — the fight is now over distribution and chain economics.
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>On-chain vs. off-chain:</strong> Most volume is off-chain (Kalshi, Robinhood,
          DraftKings, FanDuel). Polymarket is the dominant on-chain player. The on-chain opportunity is in the platforms that need
          dedicated infrastructure, composability, and permissionless innovation — that is where Avalanche competes.
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>Where Avalanche fits:</strong> PRDT Finance is already deployed on Avalanche.
          Limitless and XO Market are active pursuits. The ecosystem has 7 PM products live or building. No other chain has that
          density of dedicated prediction market products.
        </div>
      </div>
    </>
  );
}
