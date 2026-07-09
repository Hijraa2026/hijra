import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const products = [
  { id: 1, name: "Robe Flamboyant", description: "Une robe ample et élégante, parfaite pour le bureau comme pour les sorties. Col montant, manches longues, coupe droite qui couvre parfaitement tout en restant légère.", price: 59, isNew: true, category: "Robes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 2, name: "Ensemble Dune", description: "Un ensemble veste + pantalon large dans un tissu fluide et confortable. Idéal pour une journée au travail ou une sortie en famille.", price: 89, isNew: true, category: "Ensembles", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 3, name: "Robe Lagon", description: "Robe longue aux manches fluides, dans un tissu doux et léger. Simple, élégante, parfaite au quotidien.", price: 45, category: "Robes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 4, name: "Manteau Farah", description: "Manteau long ceinturé, coupe élégante et couvrante. Parfait pour les sorties et les journées au bureau.", price: 110, category: "Vestes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 5, name: "Robe Safa", description: "Robe à coupe droite et col rond, simple et élégante pour tous les jours.", price: 65, category: "Robes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 6, name: "Ensemble Warda", description: "Ensemble pantalon large et tunique assortie, confortable et chic.", price: 95, category: "Ensembles", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 7, name: "Blouse Amira", description: "Blouse à manches longues avec poignets boutonnés, élégante et sobre.", price: 55, category: "Hauts", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 8, name: "Abaya Layla", description: "Abaya oversize casual chic, pour tous les jours.", price: 120, category: "Robes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 9, name: "Robe Zara", description: "Robe col officier sobre et élégante, parfaite pour le travail.", price: 72, category: "Robes", sizes: ["XS", "S", "M", "L", "XL"] },
  { id: 10, name: "Ensemble Hana", description: "Blazer long et pantalon large, look professionnel et couvert.", price: 130, category: "Ensembles", sizes: ["XS", "S", "M", "L", "XL"] },
];

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main style={{ background: "#fff", minHeight: "80vh" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          
          <div style={{ background: "#F4EFE9", aspectRatio: "3/4", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span className="font-playfair" style={{ fontStyle: "italic", fontSize: "12px", color: "#C4A882", letterSpacing: "2px" }}>photo produit</span>
          </div>

          <div>
            {product.isNew && (
              <div style={{ display: "inline-block", background: "#1A0F0A", color: "#fff", fontSize: "9px", padding: "4px 10px", letterSpacing: "2px", marginBottom: "16px" }}>NEW</div>
            )}
            <p style={{ fontSize: "11px", color: "#aaa", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{product.category}</p>
            <h1 className="font-playfair" style={{ fontSize: "32px", fontWeight: 400, color: "#1A0F0A", marginBottom: "16px" }}>{product.name}</h1>
            <p className="font-playfair" style={{ fontSize: "24px", color: "#C4956A", marginBottom: "24px" }}>{product.price},00 €</p>
            
            <div style={{ width: "40px", height: "0.5px", background: "#EAE0D5", marginBottom: "24px" }} />
            
            <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.8, marginBottom: "32px" }}>{product.description}</p>

            <div style={{ marginBottom: "32px" }}>
              <p style={{ fontSize: "11px", color: "#1A0F0A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Taille</p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {product.sizes.map(size => (
                  <button key={size} style={{ border: "0.5px solid #1A0F0A", background: "transparent", padding: "8px 16px", fontSize: "12px", cursor: "pointer", color: "#1A0F0A" }}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button style={{ width: "100%", background: "#1A0F0A", color: "#fff", border: "none", padding: "16px", fontSize: "12px", letterSpacing: "2px", cursor: "pointer", marginBottom: "12px" }}>
              AJOUTER AU PANIER
            </button>

            <div style={{ width: "40px", height: "0.5px", background: "#EAE0D5", margin: "32px 0" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "#888" }}>🚚</span>
                <span style={{ fontSize: "12px", color: "#666" }}>Livraison offerte dès 80€</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "#888" }}>↩️</span>
                <span style={{ fontSize: "12px", color: "#666" }}>Retours gratuits sous 30 jours</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
