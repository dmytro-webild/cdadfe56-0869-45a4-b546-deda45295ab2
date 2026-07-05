// Created by add_section_from_catalog (ProductRatingCards).

import React from 'react';
import ProductRatingCards from '@/components/sections/product/ProductRatingCards';

export default function ProductRatingCardsSection(): React.JSX.Element {
  return (
    <div data-webild-section="product-rating-cards" data-section="product-rating-cards" id="product-rating-cards">
      <ProductRatingCards
        tag="Meilleures ventes"
        textAnimation="fade-blur"
        primaryButton={{"href":"/products","text":"Voir tous les produits"}}
        products={[{"imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800","price":"140 MAD","rating":4.8,"reviewCount":"1 245","brand":"CeraVe","name":"Hydrating Cleanser"},{"imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800","price":"150 MAD ","brand":"CeraVe","name":"Moisturizing Cream","rating":4.9,"reviewCount":"890"},{"rating":4.7,"reviewCount":"2 100","brand":"Bioderma","name":"Sensibio H2O","price":"140 MAD  ","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"},{"rating":4.8,"reviewCount":"1 560","name":"Anthelios UVMune 400 SPF50+","brand":"La Roche-Posay","price":"180 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"},{"name":"Effaclar Duo+M","brand":"La Roche-Posay","rating":4.6,"reviewCount":"980","price":"150 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"},{"name":"Anaphase+ Shampoo","brand":"Ducray","rating":4.5,"reviewCount":"450","price":"140 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"},{"rating":4.9,"reviewCount":"3 200","name":"Gentle Cleansing Gel","brand":"Mustela","price":"120 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800"},{"price":"200 MAD","imageSrc":"https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800","brand":"Arkopharma","name":"Forcapil Hair & Nails","rating":4.7,"reviewCount":"1 800"}]}
        description="Découvrez les produits les plus appréciés par nos clients."
        title="Meilleures ventes"
      />
    </div>
  );
}
