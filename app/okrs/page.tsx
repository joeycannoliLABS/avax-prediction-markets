import { PageHeader } from "@/components/UI";
export default function Page() {
  return (
    <>
      <PageHeader title="OKR Scoreboard" badge="COMING SOON" subtitle="2026 company-wide OKRs that prediction markets feed into." />
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "40px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.2 }}>◎</div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 }}>This section is under construction.</p>
      </div>
    </>
  );
}
