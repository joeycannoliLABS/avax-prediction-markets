import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "Prediction Markets — Avalanche BD",
  description: "Internal portal for Avalanche Prediction Market BD team",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          <Sidebar />
          <main
            style={{
              flex: 1,
              marginLeft: 260,
              padding: "40px 48px",
              maxWidth: 1020,
              overflow: "auto",
            }}
          >
            {children}
            <footer
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 32,
                paddingBottom: 24,
                marginTop: 48,
                borderTop: "1px solid var(--border)",
              }}
            >
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Avalanche Ecosystem Growth</span>
              <span style={{ fontSize: 12 }}>
                <span style={{ color: "var(--avax-red)" }}>AVAX</span>
                <span style={{ color: "var(--text-tertiary)", marginLeft: 6 }}>Prediction Markets BD</span>
              </span>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
