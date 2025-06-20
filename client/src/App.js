import { useState } from "react";

export default function App() {
  const [file, setFile]       = useState(null);     // selected video
  const [plan, setPlan]       = useState(null);     // render-plan JSON
  const [loading, setLoading] = useState(false);    // UI spinner

  // ───────────────────────────────────────────
  async function handleUpload() {
    if (!file) return alert("Choose a video first!");
    setLoading(true);

    try {
      /* ---------- 1. upload video ---------- */
      const fd = new FormData();
      fd.append("video", file);

      const upRes = await fetch("/api/uploadVideo", {
        method: "POST",
        body: fd
      });
      const { filename } = await upRes.json();

      /* ---------- 2. ask for plan ---------- */
      const planRes = await fetch("/api/renderPlan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename, stylePreset: "hype" })
      });
      const data = await planRes.json();
      setPlan(data.plan);

    } catch (err) {
      console.error(err);
      alert("Upload or render-plan failed – check backend.");
    } finally {
      setLoading(false);
    }
  }

  // ───────────────────────────────────────────
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>Highlight Reel Demo</h1>

      <input
        type="file"
        accept="video/mp4"
        onChange={(e) => setFile(e.target.files[0] || null)}
        style={{ marginRight: 12 }}
      />
      <button onClick={handleUpload} disabled={loading || !file}>
        {loading ? "Working…" : "Create Plan"}
      </button>

      {/* ---------- pretty-print the plan ---------- */}
      {plan && (
        <pre
          style={{
            background: "#111",
            color: "#7CFC00",
            padding: 16,
            marginTop: 24,
            overflowX: "auto"
          }}
        >
          {JSON.stringify(plan, null, 2)}
        </pre>
      )}
    </div>
  );
}

