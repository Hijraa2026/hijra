import { Truck, RefreshCw, Lock } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div style={{ background: "#F7F3EF", padding: "36px 28px", textAlign: "center" }}>
        <p className="font-playfair" style={{ fontSize: "18px", fontWeight: 400, color: "#1A0F0A", marginBottom: "4px" }}>
          5% de réduction
        </p>
        <p className="font-playfair" style={{ fontStyle: "italic", fontSize: "13px", color: "#888", marginBottom: "20px" }}>
          sur votre première commande
        </p>
        <div style={{ display: "flex", maxWidth: "340px", margin: "0 auto" }}>
          <input type="email" placeholder="Votre adresse e-mail"
            style={{ flex: 1, padding: "12px 16px", border: "0.5px solid #ddd", borderRight: "none", background: "#fff", fontSize: "12px", outline: "none", fontFamily: "Inter, sans-serif" }} />
          <button style={{ background: "#1A0F0A", color: "#fff", border: "none", padding: "12px 18px", fontSize: "10px", letterSpacing: "2px", cursor: "pointer" }}>
            S'INSCRIRE
          </button>
        </div>
      </div>

      <div style={{ background: "#1A0F0A", padding: "24px 28px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <Truck size={20} color="#C4956A" />
          <p style={{ fontSize: "10px", color: "#C4956A", marginTop: "6px", letterSpacing: "2px" }}>LIVRAISON OFFERTE</p>
          <p className="font-playfair" style={{ fontStyle: "italic", fontSize: "10px", color: "#6B5545", marginTop: "2px" }}>dès 80 €</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <RefreshCw size={20} color="#C4956A" />
          <p style={{ fontSize: "10px", color: "#C4956A", marginTop: "6px", letterSpacing: "2px" }}>RETOURS 30 JOURS</p>
          <p className="font-playfair" style={{ fontStyle: "italic", fontSize: "10px", color: "#6B5545", marginTop: "2px" }}>gratuits</p>
        </div>
        <div style={{ textAlign: "center" }}>
          <Lock size={20} color="#C4956A" />
          <p style={{ fontSize: "10px", color: "#C4956A", marginTop: "6px", letterSpacing: "2px" }}>PAIEMENT SÉCURISÉ</p>
          <p className="font-playfair" style={{ fontStyle: "italic", fontSize: "10px", color: "#6B5545", marginTop: "2px" }}>Stripe</p>
        </div>
      </div>

      <footer style={{ background: "#1A0F0A", borderTop: "0.5px solid #2C1A0E", padding: "20px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <div className="font-playfair" style={{ fontSize: "14px", letterSpacing: "8px", color: "#EDE3D8" }}>HIJRA</div>
        <div style={{ display: "flex", gap: "20px", fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase" }}>
          <a href="#" style={{ color: "#C4956A", textDecoration: "none" }}>Instagram</a>
          <a href="#" style={{ color: "#C4956A", textDecoration: "none" }}>TikTok</a>
          <a href="#" style={{ color: "#6B5545", textDecoration: "none" }}>FAQ</a>
          <a href="#" style={{ color: "#6B5545", textDecoration: "none" }}>Contact</a>
        </div>
        <div className="font-playfair" style={{ fontStyle: "italic", fontSize: "10px", color: "#6B5545" }}>© 2025 · modest fashion</div>
      </footer>
    </>
  );
}
