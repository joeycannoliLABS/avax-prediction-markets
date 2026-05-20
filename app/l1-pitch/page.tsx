import { PageHeader } from "@/components/UI";
export default function Page() {
  return (
    <>
      <PageHeader title="L1 vs C-Chain Pitch" badge="COMING SOON" subtitle="When to pitch C-Chain vs L1. The two-week offer. Technical specs and positioning." />
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "40px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.2 }}>◎</div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 }}>This section is under construction.</p>
      </div>
    </>
  );
}
