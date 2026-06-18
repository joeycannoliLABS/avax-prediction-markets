"use client";

import { ecosystemProducts, categoryStats } from "@/lib/data";
import { StatCard, SectionLabel, Card, StatusDot, Tag } from "@/components/UI";
import Link from "next/link";

export default function Home() {
  const targetHighlights = [
    {
      name: "Limitless",
      tier: "Tier 1",
      tierColor: "#E53935",
      metric: "$1.6B+/mo",
      metricLabel: "Monthly volume",
      status: "Active Pursuit",
      note: "#1 target. DCM filing, Nasdaq listing. Migration alongside IPO narrative.",
    },
    {
      name: "XO Market",
      tier: "Tier 1",
      tierColor: "#E53935",
      metric: "$150M+",
      metricLabel: "Since Nov beta",
      status: "New Target",
      note: "YouTube of PMs. Permissionless, user-generated. $6M seed. Chain-flexible.",
    },
    {
      name: "Overtime Markets",
      tier: "Tier 2",
      tierColor: "#FB8C00",
      metric: "$27M+",
      metricLabel: "Wagered",
      status: "New Target",
      note: "Decentralized sportsbook. LP-as-house. Fragmented across 6+ chains.",
    },
    {
      name: "Azuro Protocol",
      tier: "Tier 2",
      tierColor: "#FB8C00",
      metric: "Multi-dApp",
      metricLabel: "Protocol layer",
      status: "Warm",
      note: "Sports betting infra. One win = multiple frontends. Force multiplier.",
    },
  ];

  return (
    <>
      {/* Header with Avalanche logo */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8, flexWrap: "wrap" }}>
       
          <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0, color: "var(--text-primary)" }}>
            Prediction Markets
          </h1>
          <span
            style={{
              background: "var(--avax-red)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 12px",
              borderRadius: 4,
              letterSpacing: 0.5,
            }}
          >
            INTERNAL
          </span>
        </div>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6, maxWidth: 640 }}>
          Avalanche prediction market ecosystem — what&apos;s live, what&apos;s building, and what we&apos;re pursuing. Updated Q2 2026.
        </p>
      </div>

      {/* Stats - 3 columns */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 36 }}>
        {categoryStats.map((s) => (
          <StatCard key={s.label} label={s.label} value={s.value} />
        ))}
      </div>

      {/* Ecosystem products */}
      <SectionLabel>ON AVALANCHE</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
        {ecosystemProducts.map((p) => {
          const inner = (
            <Card key={p.name} hover>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                {p.logoUrl ? (
                  <img
                    src={p.logoUrl}
                    alt={p.name}
                    width={36}
                    height={36}
                    style={{ borderRadius: 8, background: p.iconBg, objectFit: "contain" }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                ) : null}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: p.iconBg,
                    display: p.logoUrl ? "none" : "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: p.iconColor,
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>{p.name}</span>
                <span style={{ display: "flex", alignItems: "center", fontSize: 11, color: p.statusColor }}>
                  <StatusDot color={p.statusColor} />
                  {p.status}
                </span>
                {p.href && (
                  <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>↗</span>
                )}
              </div>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: "0 0 10px", lineHeight: 1.5 }}>
                {p.description}
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <Tag>{p.type}</Tag>
                <Tag>{p.chain}</Tag>
              </div>
            </Card>
          );

          if (p.href) {
            return (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                {inner}
              </a>
            );
          }
          return <div key={p.name}>{inner}</div>;
        })}
      </div>

      {/* Target highlights */}
      <SectionLabel>PRIORITY TARGETS</SectionLabel>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 36 }}>
        {targetHighlights.map((t) => (
          <Card key={t.name} hover>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)" }}>{t.name}</span>
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "2px 8px",
                    borderRadius: 4,
                    background: t.tierColor,
                    color: "#fff",
                    letterSpacing: 0.3,
                  }}
                >
                  {t.tier}
                </span>
              </div>
              <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{t.status}</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 10 }}>
              <span style={{ fontSize: 24, fontWeight: 700, color: "var(--text-primary)" }}>{t.metric}</span>
              <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{t.metricLabel}</span>
            </div>
            <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>{t.note}</p>
          </Card>
        ))}
      </div>

      {/* Getting started */}
      <SectionLabel>GETTING STARTED</SectionLabel>
      <Card>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0, lineHeight: 1.75 }}>
          Use the sidebar to navigate between the ecosystem overview, migration targets, and strategy docs. The{" "}
          <Link href="/targets" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            Migration Targets
          </Link>{" "}
          dashboard contains all active and prospective partners ranked by Avalanche fit. The{" "}
          <Link href="/strategy" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            Vol. 01
          </Link>{" "}
          strategy doc is the internal playbook for Q2 2026 — read it first. Check the{" "}
          <Link href="/primer" style={{ color: "var(--text-primary)", fontWeight: 600 }}>
            PM Primer
          </Link>{" "}
          for category mechanics, competitive landscape, and vocabulary.
        </p>
      </Card>
    </>
  );
}
