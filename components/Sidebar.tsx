"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
      { name: "Strategy Documents", icon: "■", href: null, expandable: true, children: [
        { name: "Vol. 01 — Q2 2026", href: "https://drive.google.com/file/d/1q73dJt8eWTU1YmBl4gD35Sd18DN1kDY6/view?usp=drive_link", external: true },
      ]},
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

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (name: string) => {
    setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
  };

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
        <img src="/avalanche-triangle.svg" alt="Avalanche" width={28} height={28} style={{ objectFit: "contain" }} />
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
          {section.items.map((item: any) => {
            if (item.expandable) {
              const isExpanded = expandedItems[item.name] || false;
              return (
                <div key={item.name}>
                  <div
                    onClick={() => toggleExpand(item.name)}
                    style={{
                      padding: "8px 20px",
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      cursor: "pointer",
                      borderLeft: "2px solid transparent",
                      transition: "all 0.15s ease",
                    }}
                  >
                    <span style={{ fontSize: 12, color: "var(--text-tertiary)", width: 16, textAlign: "center" }}>
                      {item.icon}
                    </span>
                    <span style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 400, flex: 1 }}>
                      {item.name}
                    </span>
                    <span style={{
                      fontSize: 12,
                      color: "var(--text-tertiary)",
                      transition: "transform 0.2s",
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    }}>
                      ▾
                    </span>
                  </div>
                  {isExpanded && item.children?.map((child: any) => (
                    <a
                      key={child.name}
                      href={child.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "6px 20px 6px 48px",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        textDecoration: "none",
                        borderLeft: "2px solid transparent",
                        transition: "all 0.15s ease",
                      }}
                    >
                      <span style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 400 }}>
                        {child.name}
                      </span>
                      <span style={{ fontSize: 10, color: "var(--text-tertiary)" }}>↗</span>
                    </a>
                  ))}
                </div>
              );
            }

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
