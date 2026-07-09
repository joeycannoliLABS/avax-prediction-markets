"use client";

import { SectionLabel } from "@/components/UI";

interface Platform {
  rank: number;
  name: string;
  monthlyVolume: string;
  chain: string;
  chainColor: string;
  type: string;
  website: string;
  category: "On-Chain" | "Regulated" | "TradFi";
  note: string;
}

const platforms: Platform[] = [
  {
    rank: 1,
    name: "Kalshi",
    monthlyVolume: "$31.5B",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://kalshi.com",
    category: "Regulated",
    note: "Dominant by volume. $22B valuation. 87% jump in June from World Cup. $832M on World Cup winner market alone.",
  },
  {
    rank: 2,
    name: "Polymarket (International)",
    monthlyVolume: "$10.26B",
    chain: "Polygon",
    chainColor: "#7B3FE4",
    type: "Hybrid CLOB (on-chain settlement)",
    website: "https://polymarket.com",
    category: "On-Chain",
    note: "Largest on-chain PM globally. Record June volume. World Cup winner market at $3.4B+ cumulative. VP Eng: traction 'massively outpaced' Polygon.",
  },
  {
    rank: 3,
    name: "Polymarket US",
    monthlyVolume: "$3.04B",
    chain: "Polygon (CFTC-regulated)",
    chainColor: "#7B3FE4",
    type: "Regulated CLOB",
    website: "https://polymarket.com",
    category: "Regulated",
    note: "CFTC-regulated US entity (QCX LLC). Sports-only for now. 0.10% flat taker fee. Steady upward trend since launch.",
  },
  {
    rank: 4,
    name: "Rothera",
    monthlyVolume: "$2B+",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://rothera.com",
    category: "Regulated",
    note: "Susquehanna (SIG) + Robinhood JV. Launched June 2026. Already 7% US market share per Bank of America.",
  },
  {
    rank: 5,
    name: "Limitless",
    monthlyVolume: "$1.6B+",
    chain: "Base",
    chainColor: "#0052FF",
    type: "Native CLOB",
    website: "https://limitless.exchange",
    category: "On-Chain",
    note: "Ava Labs #1 target. Pioneered 15/30/60-min markets. DCM filing, Nasdaq listing planned. $3.5B+ total volume.",
  },
  {
    rank: 6,
    name: "Predict.fun",
    monthlyVolume: "$614M",
    chain: "BSC, Blast",
    chainColor: "#F0B90B",
    type: "Native (yield-optimized)",
    website: "https://predict.fun",
    category: "On-Chain",
    note: "Official Binance prediction provider. $5B+ cumulative. Idle capital earns yield. Backed by YZi Labs + Susquehanna. Acquired Probable.",
  },
  {
    rank: 7,
    name: "Robinhood Predictions",
    monthlyVolume: "Wrapper",
    chain: "Off-chain (via Kalshi/Rothera)",
    chainColor: "#78909C",
    type: "Distribution Wrapper",
    website: "https://robinhood.com",
    category: "TradFi",
    note: ">50% of Kalshi volume. 'Fastest growing business in the company's history.' Now routing some contracts to Rothera.",
  },
  {
    rank: 8,
    name: "DraftKings Predictions",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain (CFTC via Railbird)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://draftkings.com",
    category: "TradFi",
    note: "Acquired Railbird Technologies (CFTC-registered). Expanding nationwide. Blending sportsbook and prediction market.",
  },
  {
    rank: 9,
    name: "FanDuel Predicts",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain (CME Group JV)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://fanduel.com",
    category: "TradFi",
    note: "FanDuel + CME Group. Live in all 50 states (sports contracts in 18). Massive existing user base for cross-sell.",
  },
  {
    rank: 10,
    name: "OG (Crypto.com)",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain (CFTC via CDNA)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://og.xyz",
    category: "TradFi",
    note: "Launched Feb 2026. Social features: leaderboards, posts, comments. Parlays across markets. Just launched in New York.",
  },
  {
    rank: 11,
    name: "Fanatics Markets",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://fanaticsmarkets.com",
    category: "TradFi",
    note: "Pricing by Crypto.com. Co-branded World Cup hub with ADI Predictstreet in 23 US states.",
  },
  {
    rank: 12,
    name: "ADI Predictstreet",
    monthlyVolume: "Not disclosed",
    chain: "ADI Chain",
    chainColor: "#FFD700",
    type: "Native (Chainlink oracles)",
    website: "https://adipredictstreet.com",
    category: "On-Chain",
    note: "Official FIFA World Cup 2026 partner. Licensed in Gibraltar. DAZN partnership. Chainlink Runtime Environment.",
  },
  {
    rank: 13,
    name: "SX Bet",
    monthlyVolume: "~$100M est.",
    chain: "SX Chain (Arbitrum Orbit)",
    chainColor: "#28A0F0",
    type: "Native Order Book",
    website: "https://sx.bet",
    category: "On-Chain",
    note: "$1.2B cumulative. 0% fee on singles, 5% on parlay profit. Own app-chain. 40+ sports leagues. Non-custodial.",
  },
  {
    rank: 14,
    name: "XO Market",
    monthlyVolume: "~$30M est.",
    chain: "Undisclosed (EVM)",
    chainColor: "#90A4AE",
    type: "Native AMM (Bonding Curve)",
    website: "https://xo.market",
    category: "On-Chain",
    note: "Ava Labs active pursuit. 'YouTube of PMs.' 30K+ users, 600+ markets. $6M seed (20VC, Coinbase Ventures). XO Vaults coming.",
  },
  {
    rank: 15,
    name: "Overtime Markets",
    monthlyVolume: "~$5M est.",
    chain: "Multi-chain (OP, Arb, Base +3)",
    chainColor: "#FF0420",
    type: "Native AMM",
    website: "https://overtimemarkets.xyz",
    category: "On-Chain",
    note: "Decentralized sportsbook. LP-as-house (106% return on Arb LP). 18K+ users. Fragmented across 6+ chains.",
  },
  {
    rank: 16,
    name: "Azuro Protocol",
    monthlyVolume: "Protocol layer",
    chain: "Polygon, Gnosis, Linea",
    chainColor: "#7B3FE4",
    type: "Infrastructure (Liquidity tree)",
    website: "https://azuro.org",
    category: "On-Chain",
    note: "Not a frontend — powers multiple sports dApps. AZUR token. One integration = multiple frontends.",
  },
  {
    rank: 17,
    name: "Hedgehog Markets",
    monthlyVolume: "~$2M est.",
    chain: "Solana",
    chainColor: "#14F195",
    type: "Native AMM + P2P",
    website: "https://hedgehog.markets",
    category: "On-Chain",
    note: "Fully on-chain. Building own optimistic oracle. Permissionless market creation.",
  },
  {
    rank: 18,
    name: "Drift Predict",
    monthlyVolume: "~$5M est.",
    chain: "Solana",
    chainColor: "#14F195",
    type: "Native (Perps-style)",
    website: "https://drift.trade/predict",
    category: "On-Chain",
    note: "Built on Drift derivatives stack. Hybrid prediction + perps. PM as feature on derivatives platform.",
  },
  {
    rank: 19,
    name: "PRDT Finance",
    monthlyVolume: "~$10M est.",
    chain: "Multi-chain (incl. Avalanche)",
    chainColor: "#E53935",
    type: "Native (Cross-chain binary)",
    website: "https://prdt.finance",
    category: "On-Chain",
    note: "Already on Avalanche. 5-30 min rounds. 80% revenue to stakers. $200M+ paid out since 2021.",
  },
  {
    rank: 20,
    name: "ProphetX",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain (NJ-licensed)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://prophetx.com",
    category: "Regulated",
    note: "Sports-only. Licensed in NJ, expanding. Sharp NBA/NFL/MLB pricing. No bet limiting.",
  },
  {
    rank: 21,
    name: "Novig",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain (CFTC-regulated)",
    chainColor: "#78909C",
    type: "Centralized Exchange",
    website: "https://novig.com",
    category: "Regulated",
    note: "Sports-focused. Clean, focused product for sports traders. No unrelated markets.",
  },
  {
    rank: 22,
    name: "Gemini Predictions",
    monthlyVolume: "Not disclosed",
    chain: "Off-chain",
    chainColor: "#78909C",
    type: "Peer-to-peer",
    website: "https://gemini.com",
    category: "TradFi",
    note: "Sports-focused. Beginner-friendly. Backed by Gemini exchange infrastructure.",
  },
];

const categoryColors: Record<string, string> = {
  "On-Chain": "#00E676",
  "Regulated": "#42A5F5",
  "TradFi": "#FB8C00",
};

const onChainCount = platforms.filter((p: Platform) => p.category === "On-Chain").length;
const regulatedCount = platforms.filter((p: Platform) => p.category === "Regulated").length;
const tradFiCount = platforms.filter((p: Platform) => p.category === "TradFi").length;

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

      {/* Top stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 36 }}>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>Est. lifetime volume (all platforms)</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>$200B+</div>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>Combined monthly (Jun 2026)</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>$50B+</div>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>Platforms tracked</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>{platforms.length}</div>
        </div>
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8, padding: "16px 18px" }}>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>By category</div>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00E676", display: "inline-block" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{onChainCount}</span>
              <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>On-Chain</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#42A5F5", display: "inline-block" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{regulatedCount}</span>
              <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>Reg</span>
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FB8C00", display: "inline-block" }} />
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{tradFiCount}</span>
              <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>TradFi</span>
            </span>
          </div>
        </div>
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
              }}
              onMouseOver={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
              onMouseOut={(e: React.MouseEvent<HTMLDivElement>) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Left: rank, name, type, note */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                  <span style={{
                    fontSize: 14, fontWeight: 700, color: "var(--text-tertiary)",
                    fontFamily: "monospace", width: 24, textAlign: "right", flexShrink: 0,
                  }}>
                    {p.rank}
                  </span>
                  <span style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</span>
                  <span style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: categoryColors[p.category],
                    display: "inline-block", flexShrink: 0,
                  }} />
                  <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>↗</span>
                </div>
                <div style={{ paddingLeft: 34, marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>{p.type}</span>
                </div>
                <div style={{ paddingLeft: 34 }}>
                  <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>
                    {p.note}
                  </p>
                </div>
              </div>

              {/* Right: volume + chain tag */}
              <div style={{ textAlign: "right", flexShrink: 0, minWidth: 140 }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: "var(--text-primary)", marginBottom: 6 }}>
                  {p.monthlyVolume}
                </div>
                <span style={{
                  fontSize: 10, padding: "3px 10px", borderRadius: 4,
                  background: p.chainColor + "18", border: "1px solid " + p.chainColor + "33",
                  color: p.chainColor, whiteSpace: "nowrap", display: "inline-block",
                }}>
                  {p.chain}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom context */}
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
          in prediction market history. Combined Kalshi + Polymarket volume hit $44.8B, up 75% from May. Prediction market
          apps captured 78.5% of betting app downloads, up from 6% a year earlier. Traditional sportsbooks lost users during
          the World Cup while prediction markets gained them.
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>The TradFi invasion:</strong> 13+ federally regulated platforms
          are now live in the US. DraftKings, FanDuel, Fanatics, OG (Crypto.com), Gemini, and Rothera (Robinhood/SIG) all
          launched in the last 8 months. The pitch to every on-chain target: &quot;Your edge is being on-chain, permissionless,
          and composable. Avalanche makes that edge as sharp as possible.&quot;
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>On-chain vs. off-chain:</strong> Most volume is off-chain (Kalshi,
          Robinhood, DraftKings, FanDuel). Polymarket dominates on-chain. The opportunity for Avalanche is in platforms that
          need dedicated infrastructure, composability, and permissionless innovation.
          <br /><br />
          <strong style={{ color: "var(--text-primary)" }}>Where Avalanche fits:</strong> PRDT Finance is already deployed.
          Limitless and XO Market are active pursuits. The ecosystem has 7 PM products live or building. No other chain has
          that density of dedicated prediction market products.
        </div>
      </div>
    </>
  );
}
