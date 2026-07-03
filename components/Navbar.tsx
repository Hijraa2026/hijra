"use client";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div style={{ background: "#1A0F0A", padding: "7px", textAlign: "center", fontSize: "10px", color: "#C4956A", letterSpacing: "3px" }}>
        LIVRAISON OFFERTE DÈS 80€ &nbsp;·&nbsp; RETOURS 30 JOURS &nbsp;·&nbsp; PAIEMENT SÉCURISÉ
      </div>

      <nav style={{ background: "#fff", borderBottom: "0.5px solid #f0ebe5", height: "68px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: "0 28px", position: "sticky", top: 0, zIndex: 50 }}>

        <div className="hidden md:flex gap-5 text-xs" style={{ color: "#666", letterSpacing: "1.5px", textTransform: "uppercase" }}>
          <a href="#" style={{ color: "#1A0F0A", borderBottom: "0.5px solid #1A0F0A", paddingBottom: "1px" }}>Nouveautés</a>
          <a href="#" className="hover:text-[#1A0F0A] transition-colors">Collections</a>
          <a href="#" className="hover:text-[#1A0F0A] transition-colors">Robes</a>
          <a href="#" className="hover:text-[#1A0F0A] transition-colors">Hauts</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={18} color="#1A0F0A" /> : <Menu size={18} color="#1A0F0A" />}
        </button>

        <div style={{ textAlign: "center" }}>
          <div className="font-playfair" style={{ fontSize: "22px", letterSpacing: "10px", color: "#1A0F0A", lineHeight: 1 }}>HIJRA</div>
          <div className="font-playfair italic" style={{ fontSize: "9px", letterSpacing: "4px", color: "#aaa", marginTop: "2px" }}>modest fashion</div>
        </div>

        <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "flex-end", color: "#1A0F0A" }}>
          <button className="hover:opacity-60 transition-opacity"><Search size={17} /></button>
          <button className="hover:opacity-60 transition-opacity"><Heart size={17} /></button>
          <button className="hover:opacity-60 transition-opacity" style={{ position: "relative" }}>
            <ShoppingBag size={17} />
            <span style={{ position: "absolute", top: "-6px", right: "-6px", background: "#1A0F0A", color: "#fff", fontSize: "8px", width: "14px", height: "14px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>0</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{ background: "#fff", borderBottom: "0.5px solid #f0ebe5", padding: "20px 28px", display: "flex", flexDirection: "column", gap: "16px", position: "sticky", top: "75px", zIndex: 40 }}>
          <a href="#" style={{ fontSize: "11px", color: "#1A0F0A", letterSpacing: "2px", textTransform: "uppercase" }}>Nouveautés</a>
          <a href="#" style={{ fontSize: "11px", color: "#666", letterSpacing: "2px", textTransform: "uppercase" }}>Collections</a>
          <a href="#" style={{ fontSize: "11px", color: "#666", letterSpacing: "2px", textTransform: "uppercase" }}>Robes</a>
          <a href="#" style={{ fontSize: "11px", color: "#666", letterSpacing: "2px", textTransform: "uppercase" }}>Hauts</a>
        </div>
      )}
    </>
  );
}
