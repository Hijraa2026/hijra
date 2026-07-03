"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  isNew?: boolean;
};

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div style={{ position: "relative", background: "#F4EFE9", aspectRatio: "3/4", marginBottom: "10px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {product.image ? (
          <img src={product.image} alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <span className="font-playfair" style={{ fontStyle: "italic", fontSize: "10px", color: "#C4A882", letterSpacing: "2px" }}>photo</span>
        )}
        {product.isNew && (
          <div style={{ position: "absolute", top: "8px", left: "8px", background: "#1A0F0A", color: "#fff", fontSize: "8px", padding: "3px 7px", letterSpacing: "1px" }}>NEW</div>
        )}
        <button
          onClick={() => setLiked(!liked)}
          className="group-hover:opacity-100"
          style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(255,255,255,0.9)", border: "none", width: "28px", height: "28px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", opacity: 0, transition: "opacity 0.2s" }}>
          <Heart size={12} fill={liked ? "#1A0F0A" : "none"} color="#1A0F0A" />
        </button>
      </div>
      <p style={{ fontSize: "12px", color: "#1A0F0A", marginBottom: "3px" }}>{product.name}</p>
      <p style={{ fontSize: "11px", color: "#C4956A", fontWeight: 500 }}>{product.price},00 €</p>
    </div>
  );
}
