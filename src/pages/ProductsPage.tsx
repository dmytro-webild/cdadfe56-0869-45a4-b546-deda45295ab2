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
        ctaButton={{ text: "Contact Us", href: "/contact" }}
      />

      <main className="flex-grow">
        <HeroBrand
          brand="DermoCare"
          description="Discover our curated selection of top-tier dermatological skincare and haircare products, trusted by professionals worldwide."
          primaryButton={{ text: "View Catalog", href: "#catalog" }}
          secondaryButton={{ text: "Learn More", href: "/about" }}
          textAnimation="fade-blur"
        />

        <div id="catalog">
          <ProductMediaCards
            tag="Our Selection"
            title="Premium Pharmacy Essentials"
            description="Explore our best-selling products for your daily routine, featuring trusted brands at competitive market prices."
            textAnimation="slide-up"
            products={[
              {
                name: "CeraVe Hydrating Cleanser",
                price: "150 MAD",
                imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "CeraVe Moisturizing Cream",
                price: "200 MAD",
                imageSrc: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Bioderma Sensibio H2O",
                price: "120 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "La Roche-Posay Anthelios UVMune 400 SPF50+",
                price: "220 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556228720-192b61ccb8ca?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "La Roche-Posay Effaclar Duo+M",
                price: "180 MAD",
                imageSrc: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Ducray Anaphase+ Shampoo",
                price: "160 MAD",
                imageSrc: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Mustela Gentle Cleansing Gel",
                price: "100 MAD",
                imageSrc: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Arkopharma Forcapil Hair & Nails",
                price: "250 MAD",
                imageSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
              }
            ]}
          />
        </div>
      </main>

      <FooterMinimal
        brand="DermoCare"
        copyright="© 2024 DermoCare. All rights reserved."
      />
    </div>
  );
}