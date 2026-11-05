import { ImageResponse } from "next/og";
import { profile } from "@/config/profile";

export const alt = `${profile.fullName}, ${profile.jobTitle} at ${profile.company}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#071C3B", color: "white", position: "relative", overflow: "hidden", fontFamily: "Arial, sans-serif" }}>
        <div style={{ position: "absolute", width: 580, height: 580, border: "1px solid rgba(57,148,209,.28)", borderRadius: "50%", right: -140, top: -280 }} />
        <div style={{ position: "absolute", width: 360, height: 360, border: "1px solid rgba(57,148,209,.22)", borderRadius: "50%", right: 10, top: -135 }} />
        <div style={{ display: "flex", flexDirection: "column", padding: "68px 78px", width: "100%", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 66, height: 66, background: "#1763A6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 23, borderRadius: 12 }}>FS</div>
            <div style={{ fontSize: 30, fontWeight: 700 }}>{profile.company}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#79BEE8", fontSize: 22, textTransform: "uppercase", letterSpacing: 6, marginBottom: 20 }}>{profile.jobTitle}</div>
            <div style={{ fontSize: 80, lineHeight: 1, fontWeight: 700, letterSpacing: -3 }}>{profile.fullName}</div>
            <div style={{ marginTop: 26, fontSize: 25, color: "#D5E5F2" }}>{profile.facility}</div>
          </div>
        </div>
        <div style={{ width: 14, height: "100%", background: "#3994D1" }} />
      </div>
    ),
    size,
  );
}
