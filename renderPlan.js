const path        = require("path");
const getDuration = require("./util/getDuration");

/**
 * Build a highlight plan.
 * If filename is supplied, split the real video into 3 equal chunks (≤8 s each).
 * If no filename, fall back to the original hard-coded demo clips.
 */
async function generateRenderPlan({ filename, stylePreset = "cinematic" } = {}) {
  // ---------- no uploaded file: return the old canned plan ----------
  if (!filename) {
    return {
      stylePreset,
      clips: [
        { start: 12, end: 20, label: "dunk" },
        { start: 45, end: 52, label: "three-pointer" },
        { start: 87, end: 94, label: "fast break" }
      ]
    };
  }

  // ---------- file present: build a duration-based stub ----------
  const filePath = path.join(__dirname, "uploads", filename);
  const duration = await getDuration(filePath);           // seconds (float)

  const third = duration / 3;
  return {
    stylePreset,
    clips: [
      { start: 0,          end: Math.min(8, third),                 label: "segment-1" },
      { start: third,      end: Math.min(third + 8, 2 * third),     label: "segment-2" },
      { start: 2 * third,  end: Math.min(2 * third + 8, duration),  label: "segment-3" }
    ]
  };
}

module.exports = generateRenderPlan;

