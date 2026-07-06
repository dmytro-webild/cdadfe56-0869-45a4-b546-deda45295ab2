import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import ProductMediaCards from "@/components/sections/product/ProductMediaCards";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="DermoCare"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "View Cart", href: "/cart" }}
      />

      <main className="flex-grow">
        <HeroBrand
          brand="Our Collection"
          description="Discover our curated selection of premium dermatological skincare and haircare products, trusted by professionals."
          primaryButton={{ text: "Shop Now", href: "#catalog" }}
          secondaryButton={{ text: "Skin Quiz", href: "/quiz" }}
          textAnimation="fade-blur"
        />

        <div id="catalog" className="py-12">
          <ProductMediaCards
            tag="Pharmacy"
            title="Top Rated Products"
            description="Explore our best-selling treatments and daily essentials."
            textAnimation="slide-up"
            products={[
              {
                name: "CeraVe Hydrating Cleanser",
                price: "150 MAD",
                imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
              },
              {
                name: "CeraVe Moisturizing Cream",
                price: "180 MAD",
                imageSrc: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&q=80"
              },
              {
                name: "Bioderma Sensibio H2O",
                price: "120 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
              },
              {
                name: "La Roche-Posay Anthelios UVMune 400 SPF50+",
                price: "200 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228720-192b61ccb8dc?w=800&q=80"
              },
              {
                name: "La Roche-Posay Effaclar Duo+M",
                price: "170 MAD",
                imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
              },
              {
                name: "Ducray Anaphase+ Shampoo",
                price: "160 MAD",
                imageSrc: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800&q=80"
              },
              {
                name: "Mustela Gentle Cleansing Gel",
                price: "110 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80"
              },
              {
                name: "Arkopharma Forcapil Hair & Nails",
                price: "250 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228720-192b61ccb8dc?w=800&q=80"
              }
            ]}
          />
        </div>
      </main>

      <FooterMinimal
        brand="DermoCare"
        copyright="© 2024 DermoCare Morocco. All rights reserved."
      />
    </div>
  );
}