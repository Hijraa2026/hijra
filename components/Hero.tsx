export default function Hero() {
  return (
    <>
      <section style={{ position: "relative", height: "480px", background: "#E8E0D6", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", opacity: 0.3 }}>
          <span style={{ fontSize: "11px", color: "#7A6555", letterSpacing: "3px" }}>GRANDE PHOTO PLEINE LARGEUR</span>
        </div>
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ background: "rgba(255,255,255,0.96)", padding: "24px 28px", maxWidth: "300px" }}>
            <p className="font-playfair italic" style={{ fontSize: "10px", color: "#C4956A", letterSpacing: "4px", marginBottom: "10px" }}>Collection 2025</p>
            <h1 className="font-playfair" style={{ fontSize: "28px", fontWeight: 400, color: "#1A0F0A", lineHeight: 1.25, marginBottom: "14px" }}>
              Pudique.<br />Féminine.<br />Élégante.
            </h1>
            <p style={{ fontSize: "12px", color: "#888", lineHeight: 1.6, marginBottom: "18px" }}>
              Des pièces pensées pour allier pudeur, élégance et modernité.
            </p>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <a href="#collection" style={{ background: "#1A0F0A", color: "#fff", padding: "11px 22px", fontSize: "10px", letterSpacing: "2px", textDecoration: "none" }}>
                DÉCOUVRIR
              </a>
              <span style={{ fontSize: "11px", color: "#888" }}>10 pièces →</span>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.92)", padding: "10px 14px", textAlign: "right" }}>
            <p style={{ fontSize: "9px", color: "#aaa", marginBottom: "2px", letterSpacing: "1px" }}>NOUVEAUTÉ</p>
            <p className="font-playfair" style={{ fontSize: "12px", color: "#1A0F0A" }}>Robe Linéa</p>
            <p style={{ fontSize: "11px", color: "#C4956A", fontWeight: 500 }}>59 €</p>
          </div>
        </div>
      </section>
    </>
  );
}
