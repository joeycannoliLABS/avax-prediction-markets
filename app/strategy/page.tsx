import { PageHeader } from "@/components/UI";
export default function Page() {
  return (
    <>
      <PageHeader title="Vol. 01 — Q2 2026" badge="COMING SOON" subtitle="Internal playbook for Q2 2026. What is live, what is building, what is missing." />
      <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, padding: "40px 28px", textAlign: "center" }}>
        <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.2 }}>◎</div>
        <p style={{ fontSize: 14, color: "var(--text-secondary)", maxWidth: 400, margin: "0 auto", lineHeight: 1.6 }}>This section is under construction.</p>
      </div>
    </>
  );
}
