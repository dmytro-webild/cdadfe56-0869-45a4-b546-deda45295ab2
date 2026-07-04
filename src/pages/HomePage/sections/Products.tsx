// Created by add_section_from_catalog (ProductRatingCards).

import React from 'react';
import ProductRatingCards from '@/components/sections/product/ProductRatingCards';

export default function ProductsSection(): React.JSX.Element {
  return (
    <div data-webild-section="products" data-section="products" id="products">
      <ProductRatingCards
        title="Meilleures ventes"
        description="Découvrez les produits les plus appréciés par nos clients."
        tag="Meilleures ventes"
        products={[{"price":"150 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800","name":"Hydrating Cleanser","rating":4.8,"brand":"CeraVe","reviewCount":"1 245"},{"rating":4.9,"brand":"CeraVe","reviewCount":"890","imageSrc":"https://images.unsplash.com/photo-1611077544795-c9902633095f?auto=format&fit=crop&q=80&w=800","name":"Moisturizing Cream","price":"180 MAD"},{"brand":"Bioderma","reviewCount":"2 100","rating":4.7,"price":"130 MAD","imageSrc":"https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=800","name":"Sensibio H2O"},{"brand":"La Roche-Posay","reviewCount":"1 560","rating":4.8,"price":"200 MAD","imageSrc":"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800","name":"Anthelios UVMune 400 SPF50+"},{"name":"Effaclar Duo+M","imageSrc":"https://images.unsplash.com/photo-1556228720-1c27bef75b02?auto=format&fit=crop&q=80&w=800","price":"170 MAD","reviewCount":"980","brand":"La Roche-Posay","rating":4.6},{"rating":4.5,"brand":"Ducray","reviewCount":"450","price":"160 MAD","imageSrc":"https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=800","name":"Anaphase+ Shampoo"},{"name":"Gentle Cleansing Gel","imageSrc":"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&q=80&w=800","price":"100 MAD","reviewCount":"3 200","brand":"Mustela","rating":4.9},{"rating":4.7,"reviewCount":"1 800","brand":"Arkopharma","name":"Forcapil Hair & Nails","imageSrc":"https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800","price":"250 MAD"}]}
        primaryButton={{"href":"/products","text":"Voir tous les produits"}}
        textAnimation="fade-blur"
      />
    </div>
  );
}
