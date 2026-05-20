"use client";

export function StatusDot({ color }: { color: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: color,
        marginRight: 6,
        flexShrink: 0,
      }}
    />
  );
}

export function TierBadge({ tier, color }: { tier: string; color: string }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 600,
        padding: "2px 8px",
        borderRadius: 4,
        background: color,
        color: "#fff",
        letterSpacing: 0.3,
      }}
    >
      {tier}
    </span>
  );
}

export function NewBadge() {
  return (
    <span
      style={{
        background: "rgba(0,230,118,0.15)",
        color: "#00E676",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 10,
        letterSpacing: 1,
        fontWeight: 700,
      }}
    >
      NEW
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        fontSize: 10,
        padding: "2px 8px",
        borderRadius: 4,
        background: "rgba(255,255,255,0.04)",
        color: "var(--text-tertiary)",
        border: "1px solid var(--border)",
      }}
    >
      {children}
    </span>
  );
}

export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "16px 18px",
      }}
    >
      <div style={{ fontSize: 11, color: "var(--text-tertiary)", letterSpacing: 0.3, marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontSize: 22, fontWeight: 600, color: "var(--text-primary)" }}>{value}</div>
    </div>
  );
}

export function FitBar({ value }: { value: number }) {
  const color = value >= 80 ? "#E53935" : value >= 60 ? "#FB8C00" : value >= 40 ? "#FDD835" : "#90A4AE";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 120,
          height: 8,
          background: "rgba(255,255,255,0.08)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: color,
            borderRadius: 4,
            transition: "width 0.6s ease",
          }}
        />
      </div>
      <span style={{ fontFamily: "monospace", fontSize: 13, color }}>{value}</span>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        color: "var(--avax-red)",
        letterSpacing: 1.5,
        marginBottom: 16,
      }}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 8 }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, margin: 0, color: "var(--text-primary)" }}>{title}</h1>
        {badge && (
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
            {badge}
          </span>
        )}
      </div>
      <p style={{ fontSize: 15, color: "var(--text-secondary)", margin: 0, lineHeight: 1.6, maxWidth: 640 }}>
        {subtitle}
      </p>
    </div>
  );
}

export function Card({
  children,
  hover,
  style,
}: {
  children: React.ReactNode;
  hover?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "20px 22px",
        cursor: hover ? "pointer" : "default",
        transition: "border-color 0.15s ease",
        ...style,
      }}
      onMouseOver={(e) => {
        if (hover) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.15)";
      }}
      onMouseOut={(e) => {
        if (hover) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
      }}
    >
      {children}
    </div>
  );
}
