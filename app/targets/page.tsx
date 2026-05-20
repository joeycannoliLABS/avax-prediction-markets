"use client";

import { useState } from "react";
import { migrationTargets } from "@/lib/data";
import { PageHeader, SectionLabel, FitBar, TierBadge, NewBadge, Card } from "@/components/UI";

export default function TargetsPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [sortBy, setSortBy] = useState<"fit" | "alpha">("fit");

  const filtered = migrationTargets
    .filter((p) => filter === "All" || p.tier === filter)
    .filter((p) => !showNewOnly || p.isNew)
    .sort((a, b) => (sortBy === "fit" ? b.avaxFit - a.avaxFit : a.name.localeCompare(b.name)));

  const btnStyle = (active: boolean, color?: string) => ({
    background: active ? (color ? `${color}22` : "rgba(255,255,255,0.1)") : "transparent",
    border: `1px solid ${active ? (color || "rgba(255,255,255,0.2)") : "var(--border)"}`,
    color: active ? (color || "var(--text-primary)") : "var(--text-secondary)",
    padding: "6px 14px",
    borderRadius: 6,
    cursor: "pointer",
    fontFamily: "monospace",
    fontSize: 12,
    letterSpacing: 0.5,
  });

  return (
    <>
      <PageHeader
        title="Migration Targets"
        badge="PM BD"
        subtitle="Prediction Market BD lens: strategy, product positioning, competitive dynamics, distribution, partnership structure. Chain economics are supplementary."
      />

      <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
        {["All", "Tier 1", "Tier 2", "Tier 3"].map((t) => (
          <button key={t} onClick={() => setFilter(t)} style={btnStyle(filter === t)}>
            {t}
          </button>
        ))}
        <div style={{ width: 1, height: 24, background: "var(--border)", margin: "0 4px" }} />
        <button onClick={() => setShowNewOnly(!showNewOnly)} style={btnStyle(showNewOnly, "#00E676")}>
          New targets only
        </button>
        <button onClick={() => setSortBy(sortBy === "fit" ? "alpha" : "fit")} style={btnStyle(false)}>
          {sortBy === "fit" ? "Fit ↓" : "A→Z"}
        </button>
      </div>

      <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "monospace", marginBottom: 14 }}>
        {filtered.length} platform{filtered.length !== 1 ? "s" : ""} ·{" "}
        {migrationTargets.filter((p) => p.isNew).length} new · sorted by{" "}
        {sortBy === "fit" ? "Avalanche fit" : "name"}
      </div>

      {filtered.map((p, i) => (
        <div
          key={p.name}
          onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
          style={{
            background: expandedIdx === i ? "rgba(255,255,255,0.06)" : "var(--bg-card)",
            border: `1px solid ${expandedIdx === i ? p.tierColor + "44" : "var(--border)"}`,
            borderRadius: 10,
            padding: "18px 22px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <span style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</span>
              <TierBadge tier={p.tier} color={p.tierColor} />
              {p.isNew && <NewBadge />}
              <span style={{ color: "var(--text-tertiary)", fontSize: 12, fontFamily: "monospace" }}>{p.status}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ textAlign: "right" as const }}>
                <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "monospace", letterSpacing: 1, marginBottom: 2 }}>
                  AVAX FIT
                </div>
                <FitBar value={p.avaxFit} />
              </div>
              <span
                style={{
                  color: "var(--text-tertiary)",
                  fontSize: 18,
                  transition: "transform 0.2s",
                  transform: expandedIdx === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ▾
              </span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 20, marginTop: 10, flexWrap: "wrap" }}>
            {[
              { label: "Chain", value: p.chain },
              { label: "Type", value: p.type },
              { label: "Volume", value: p.volume },
              { label: "Raised", value: p.raised },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: 9, color: "var(--text-tertiary)", fontFamily: "monospace", letterSpacing: 1, marginBottom: 2 }}>
                  {s.label.toUpperCase()}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>{s.value}</div>
              </div>
            ))}
          </div>

          {expandedIdx === i && (
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <DetailBlock title="WHAT'S BROKEN FOR THEM" content={p.pain} color="#E53935" icon="◆" />
                <DetailBlock title="HOW TO PITCH" content={p.pitch} color="#00E676" icon="→" />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                <DetailBlock title="PM STRATEGY & COMPETITIVE NOTES" content={p.pmNotes} color="#FDD835" icon="◎" />
                <DetailBlock title="CHAIN / INFRA (SUPPLEMENTARY)" content={p.chainNotes} color="rgba(255,255,255,0.35)" icon="⬡" />
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 6, padding: "10px 14px" }}>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "var(--text-tertiary)", letterSpacing: 1 }}>
                  URGENCY{" "}
                </span>
                <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{p.urgency}</span>
              </div>
            </div>
          )}
        </div>
      ))}

      <div
        style={{
          marginTop: 32,
          padding: "20px 22px",
          background: "rgba(253,216,53,0.06)",
          border: "1px solid rgba(253,216,53,0.15)",
          borderRadius: 10,
        }}
      >
        <div style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: 1.5, color: "#FDD835", marginBottom: 8, fontWeight: 700 }}>
          ◎ STRATEGIC READS
        </div>
        <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-secondary)" }}>
          <strong style={{ color: "var(--text-primary)" }}>The category-defining swing:</strong> Limitless remains the
          #1 target. Their IPO narrative, growth trajectory, and workload profile align with Avalanche better than any
          other partner on the board.
          <br />
          <br />
          <strong style={{ color: "var(--text-primary)" }}>The new high-upside play:</strong> XO Market. User-generated
          prediction markets are potentially the next evolution of the category. They just raised, they&apos;re
          chain-flexible, and their model benefits from ecosystem density Avalanche already has.
          <br />
          <br />
          <strong style={{ color: "var(--text-primary)" }}>The ecosystem multiplier:</strong> Azuro. One win here means
          multiple sports frontends, not one.
          <br />
          <br />
          <strong style={{ color: "var(--text-primary)" }}>The timing catalyst:</strong> World Cup 2026 is the single
          largest volume event for sports prediction markets this year. Pitch conversations need to land before the
          volume does.
        </div>
      </div>
    </>
  );
}

function DetailBlock({ title, content, color, icon }: { title: string; content: string; color: string; icon: string }) {
  return (
    <div>
      <div style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: 1.5, color, marginBottom: 6, fontWeight: 700 }}>
        {icon} {title}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.65, color: "var(--text-secondary)" }}>{content}</div>
    </div>
  );
}
