import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#home"
  },
  {
    "name": "Brands",
    "href": "#brands"
  },
  {
    "name": "Products",
    "href": "#products"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="KIKO BEAUTY"
      ctaButton={{
        text: "Visit Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="KIKO BEAUTY"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "Brands",
              href: "#brands",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 Kiko Beauty Marrakesh. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/cosmetic-product-container-with-art-nouveau-inspired-sun-relief-background_23-2151420654.jpg"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
