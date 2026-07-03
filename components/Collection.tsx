import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Robe Flamboyant", description: "Col montant - coupe ample", price: 59, isNew: true },
  { id: 2, name: "Ensemble Dune", description: "Veste + pantalon large", price: 89, isNew: true },
  { id: 3, name: "Robe Lagon", description: "Manches longues - fluide", price: 45 },
  { id: 4, name: "Manteau Farah", description: "Long - ceinturé - chic", price: 110 },
  { id: 5, name: "Robe Safa", description: "Coupe droite - col rond", price: 65 },
  { id: 6, name: "Ensemble Warda", description: "Pantalon + tunique", price: 95 },
  { id: 7, name: "Blouse Amira", description: "Poignets boutonnés - élégant", price: 55 },
  { id: 8, name: "Abaya Layla", description: "Oversize - casual chic", price: 120 },
  { id: 9, name: "Robe Zara", description: "Col officier - sobre", price: 72 },
  { id: 10, name: "Ensemble Hana", description: "Blazer long + large", price: 130 },
];

const categories = [
  { name: "Robes" },
  { name: "Hauts" },
  { name: "Vestes" },
  { name: "Ensembles" },
];

export default function Collection() {
  return (
    <main style={{ background: "#fff" }}>

      <section id="collection" style={{ padding: "44px 28px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="font-playfair" style={{ fontSize: "20px", fontWeight: 400, color: "#1A0F0A" }}>
            Nos <em>meilleures ventes</em>
          </h2>
          <a href="#" style={{ fontSize: "10px", color: "#888", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "0.5px solid #ccc", paddingBottom: "1px", textDecoration: "none" }}>Voir tout</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {products.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section style={{ padding: "0 28px 44px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "18px" }}>
          <h2 className="font-playfair" style={{ fontSize: "20px", fontWeight: 400, color: "#1A0F0A" }}>
            Nos <em>collections</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
          {categories.map(cat => (
            <div key={cat.name} style={{ cursor: "pointer", position: "relative" }}>
              <div style={{ background: "#F0E8DE", aspectRatio: "1", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <span style={{ fontSize: "10px", color: "#C4A882", letterSpacing: "2px" }}>photo</span>
                <div style={{ position: "absolute", inset: 0, background: "rgba(26,15,10,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ fontSize: "12px", color: "#fff", letterSpacing: "3px", textTransform: "uppercase", fontWeight: 500 }}>{cat.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 28px 44px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "24px" }}>
          <h2 className="font-playfair" style={{ fontSize: "20px", fontWeight: 400, color: "#1A0F0A" }}>
            Tous nos <em>articles</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
          {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

    </main>
  );
}

