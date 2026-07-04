import { ArrowUpRight, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import useProducts from "@/hooks/useProducts";

export default function ProductsPage() {
  return (
    <>
      <div data-webild-section="ProductMediaCards"><section aria-label="Products section" className="py-20"><div className="w-content-width mx-auto flex justify-center"><Loader2 className="size-8 animate-spin text-foreground" strokeWidth={1.5} /></div></section></div>
    </>
  );
}
