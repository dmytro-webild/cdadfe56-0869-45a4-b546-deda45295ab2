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
      tag="Kiko Beauty Marrakesh"
      title="Your Trusted Pharmacy Beauty Partner"
      description="Discover premium dermo-cosmetics in the heart of Marrakesh. Expert advice and world-renowned brands like La Roche-Posay, Avène, and Caudalie."
      primaryButton={{
        text: "Explore Products",
        href: "#products",
      }}
      secondaryButton={{
        text: "Visit Us",
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
      tag="Our Commitment"
      quote="Kiko Beauty brings the world's finest parapharmaceutical care to your doorstep in Marrakesh. Our mission is to combine expert dermatological guidance with the most effective, safe, and luxurious skincare solutions available today."
      author="The Kiko Beauty Team"
      role="Dermo-Cosmetic Experts"
      imageSrc="http://img.b2bpic.net/free-photo/smiley-woman-shopping-organic-products_23-2148672828.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="brands" data-section="brands">
    <SectionErrorBoundary name="brands">
          <FeaturesRevealCards
      tag="Our Curated Brands"
      title="World-Class Dermatological Partners"
      description="We handpick only the highest standard dermo-cosmetic brands to ensure your skin receives the professional care it truly deserves."
      items={[
        {
          title: "La Roche-Posay",
          description: "Dermatologist-recommended skincare for sensitive skin.",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-product-with-color-year-tones-3d-packaging_23-2151510169.jpg",
        },
        {
          title: "Avène",
          description: "Soothing care based on the power of thermal spring water.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-globe_23-2148916423.jpg",
        },
        {
          title: "Caudalie",
          description: "Natural, vine-based skincare combining science and beauty.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-skin-regeneration-products_23-2151242177.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesImageBento
      tag="Our Catalog"
      title="Selected Skincare Essentials"
      description="Browse our curated selection of high-performance beauty and medical-grade skincare products."
      items={[
        {
          title: "Daily Moisturizer",
          description: "Hydrate deeply.",
          imageSrc: "http://img.b2bpic.net/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420624.jpg",
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
      tag="Trusted by Many"
      title="What Our Clients Say"
      description="Join our community of satisfied skincare enthusiasts in Marrakesh."
      testimonials={[
        {
          name: "Amira S.",
          role: "Client",
          quote: "The expert advice I received here changed my skin journey completely.",
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
      tag="Need Help?"
      title="Frequently Asked Questions"
      description="Have questions? We're here to provide guidance."
      items={[
        {
          question: "Where are you located?",
          answer: "We are located conveniently in Marrakesh city center.",
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
      tag="Visit Kiko Beauty"
      text="Ready to revitalize your skin? Stop by our boutique today for a personal consultation."
      primaryButton={{
        text: "Get Directions",
        href: "#",
      }}
      secondaryButton={{
        text: "Message Us",
        href: "#",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
