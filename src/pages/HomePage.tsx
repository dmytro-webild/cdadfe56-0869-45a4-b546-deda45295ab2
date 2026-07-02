import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import HeroSplitVerticalMarqueeTall from '@/components/sections/hero/HeroSplitVerticalMarqueeTall';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="home" data-section="home">
    <SectionErrorBoundary name="home">
          <HeroSplitVerticalMarqueeTall
      tag="Kiko Beauty Marrakech"
      title="Votre Partenaire Beauté Parapharmacie de Confiance"
      description="Découvrez des dermo-cosmétiques premium au cœur de Marrakech. Des conseils d'experts et des marques de renommée mondiale comme La Roche-Posay, Avène et Caudalie."
      primaryButton={{
        text: "Explorer les Produits",
        href: "#products",
      }}
      secondaryButton={{
        text: "Nous Rendre Visite",
        href: "#contact",
      }}
      leftItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-having-peeling-with-gloves-turkish-hamam_140725-1694.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-bottles-with-dispensers-liquid-soap_169016-23454.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/life-style_1122-1803.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/spa-composition-with-hygiene-items-top-view_169016-29208.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-glass-metal-salt-pepper-shaker-set-table_140725-12894.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-aesthetic-cosmetic-product-with-fresh-background_23-2151382913.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Notre Engagement"
      quote="Kiko Beauty apporte les meilleurs soins parapharmaceutiques du monde à votre porte à Marrakech. Notre mission est de combiner des conseils dermatologiques experts avec les solutions de soins de la peau les plus efficaces, sûres et luxueuses disponibles aujourd'hui."
      author="L'équipe Kiko Beauty"
      role="Experts Dermo-Cosmétiques"
      imageSrc="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="brands" data-section="brands">
    <SectionErrorBoundary name="brands">
          <FeaturesRevealCards
      tag="Nos Marques Sélectionnées"
      title="Partenaires Dermatologiques de Classe Mondiale"
      description="Nous sélectionnons uniquement les marques dermo-cosmétiques de la plus haute qualité pour garantir à votre peau les soins professionnels qu'elle mérite."
      items={[
        {
          title: "La Roche-Posay",
          description: "Soins recommandés par les dermatologues pour les peaux sensibles.",
          imageSrc: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
        },
        {
          title: "Avène",
          description: "Soothing care based on the power of thermal spring water.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-globe_23-2148916423.jpg",
        },
        {
          title: "Caudalie",
          description: "Soins naturels à base de vigne alliant science et beauté.",
          imageSrc: "https://images.unsplash.com/photo-1615397323744-c161467eb0f4?auto=format&fit=crop&q=80&w=800",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Notre Catalogue"
      title="Essentiels de Soin Sélectionnés"
      description="Parcourez notre sélection de produits de beauté haute performance et de soins dermo-cosmétiques."
      items={[
        {
          title: "La Roche-Posay Effaclar",
          description: "Soin anti-imperfections pour une peau nette.",
          imageSrc: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800",
        },
        {
          title: "Age Control",
          description: "Rejuvenate naturally.",
          imageSrc: "http://img.b2bpic.net/free-photo/candles-essential-oil-bottle-rhassoul-clay-la-stone-himalayan-rock-salt-tray-against-black-concrete-backdrop_23-2148087673.jpg",
        },
        {
          title: "Cleansing Gel",
          description: "Pure clarity.",
          imageSrc: "http://img.b2bpic.net/free-photo/luxury-cream-jar-with-golden-lid-spatula_9975-133794.jpg",
        },
        {
          title: "Night Repair",
          description: "Wake refreshed.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-refillable-reusable-container_23-2150936088.jpg",
        },
        {
          title: "Sun Protection",
          description: "Guard your health.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-working-photography-studio_23-2150254643.jpg",
        },
        {
          title: "Brightening Serum",
          description: "Radiance revealed.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053850.jpg",
        },
        {
          title: "Hand Recovery",
          description: "Soften daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-serum-bottles-with-creme_23-2148549097.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Ils nous font confiance"
      title="Ce que disent nos clients"
      description="Rejoignez notre communauté de passionnés de soins de la peau satisfaits à Marrakech."
      testimonials={[
        {
          name: "Amira S.",
          role: "Cliente",
          quote: "Les conseils d'experts que j'ai reçus ici ont complètement transformé ma peau.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-working-pharmaceutical-industry_23-2151684864.jpg",
        },
        {
          name: "Fatima Z.",
          role: "Client",
          quote: "Best selection of authentic La Roche-Posay and Caudalie products.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-using-mobile-phone-while-resting-home_1163-3832.jpg",
        },
        {
          name: "Yassine M.",
          role: "Client",
          quote: "Fast, professional, and knowledgeable. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-smiling-while-taking-some-facial-cream-isolated-white-background-with_1258-133044.jpg",
        },
        {
          name: "Laila K.",
          role: "Client",
          quote: "A beautiful shop with genuinely helpful staff.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/skin-care-after-effect-smiling-young-woman-with-healthy-hydrated-moisturized-natural-skin-touching-face-near-jawline-look-pleased-cosmetic-treatment-from-acne-blemishes-pure-pores_176420-45111.jpg",
        },
        {
          name: "Hicham A.",
          role: "Client",
          quote: "My go-to place for all my dermo-cosmetic needs in Marrakesh.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-girl-shopping-bags_23-2148225697.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Besoin d'aide ?"
      title="Questions Fréquemment Posées"
      description="Vous avez des questions ? Nous sommes là pour vous guider."
      items={[
        {
          question: "Où êtes-vous situés ?",
          answer: "Nous sommes idéalement situés au centre-ville de Marrakech.",
        },
        {
          question: "Are your products authentic?",
          answer: "Yes, we source directly from official authorized distributors.",
        },
        {
          question: "Do you provide skin consultations?",
          answer: "Yes, our team is trained to offer personalized dermo-cosmetic advice.",
        },
        {
          question: "Do you carry specific brands?",
          answer: "We stock La Roche-Posay, Avène, Caudalie, SVR, and many more.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visitez Kiko Beauty"
      text="Prêt à revitaliser votre peau ? Passez à notre boutique aujourd'hui pour une consultation personnalisée."
      primaryButton={{
        text: "Obtenir l'itinéraire",
        href: "#",
      }}
      secondaryButton={{
        text: "Nous envoyer un message",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
