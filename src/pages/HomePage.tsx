// AUTO-GENERATED shell by per-section-migrate.
// Section bodies live in the sibling sections/ folder (one file per section).
// Edit those section files directly. Non-block content (wrappers,
// non-inlinable sections) is preserved inline; extracted section blocks
// become component refs.

import React from 'react';
import HomeSection from './HomePage/sections/Home';
import AboutSection from './HomePage/sections/About';
import BrandsSection from './HomePage/sections/Brands';
import ProductsSection from './HomePage/sections/Products';
import TestimonialsSection from './HomePage/sections/Testimonials';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';


import ProductRatingCardsSection from './HomePage/sections/ProductRatingCards';export default function HomePage(): React.JSX.Element {
  return (
<>
  <HomeSection />

  <AboutSection />

  <BrandsSection />

  <ProductsSection />
      <ProductRatingCardsSection />

  <TestimonialsSection />

  <FaqSection />

  <ContactSection />
    </>
  );
}
