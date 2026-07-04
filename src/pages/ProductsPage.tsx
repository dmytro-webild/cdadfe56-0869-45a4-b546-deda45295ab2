import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import HeroBrand from "@/components/sections/hero/HeroBrand";
import ProductMediaCards from "@/components/sections/product/ProductMediaCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function ProductsPage() {
  const productsList = [
    {
      name: "CeraVe Hydrating Cleanser",
      price: "150 MAD",
      imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View CeraVe Hydrating Cleanser")
    },
    {
      name: "CeraVe Moisturizing Cream",
      price: "180 MAD",
      imageSrc: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View CeraVe Moisturizing Cream")
    },
    {
      name: "Bioderma Sensibio H2O",
      price: "130 MAD",
      imageSrc: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View Bioderma Sensibio H2O")
    },
    {
      name: "La Roche-Posay Anthelios UVMune 400 SPF50+",
      price: "220 MAD",
      imageSrc: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View La Roche-Posay Anthelios")
    },
    {
      name: "La Roche-Posay Effaclar Duo+M",
      price: "190 MAD",
      imageSrc: "https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View La Roche-Posay Effaclar")
    },
    {
      name: "Ducray Anaphase+ Shampoo",
      price: "160 MAD",
      imageSrc: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View Ducray Anaphase+")
    },
    {
      name: "Mustela Gentle Cleansing Gel",
      price: "110 MAD",
      imageSrc: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View Mustela Gentle Cleansing Gel")
    },
    {
      name: "Arkopharma Forcapil Hair & Nails",
      price: "250 MAD",
      imageSrc: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
      onClick: () => console.log("View Arkopharma Forcapil")
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="PharmaCare"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Contact Us", href: "/contact" }}
      />
      
      <main>
        <HeroBrand
          brand="Our Products"
          description="Discover our curated selection of premium dermatological and skincare products, trusted by professionals."
          primaryButton={{ text: "View Catalog", href: "#catalog" }}
          secondaryButton={{ text: "Learn More", href: "/about" }}
          textAnimation="fade-blur"
        />

        <div id="catalog" className="py-12">
          <ProductMediaCards
            tag="Dermatology & Care"
            title="Essential Skincare & Health"
            description="Explore our top-rated products with current market prices in MAD."
            products={productsList}
            textAnimation="slide-up"
          />
        </div>
      </main>

      <FooterSimple
        brand="PharmaCare"
        columns={[
          {
            title: "Categories",
            items: [
              { label: "Skincare", href: "#" },
              { label: "Haircare", href: "#" },
              { label: "Supplements", href: "#" }
            ]
          }
        ]}
        copyright="© 2024 PharmaCare. All rights reserved."
        links={[
          { label: "Terms of Service", href: "#" },
          { label: "Privacy Policy", href: "#" }
        ]}
      />
    </div>
  );
}