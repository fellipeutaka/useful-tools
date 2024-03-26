import { unstable_setRequestLocale } from "next-intl/server";
import type { PageParams } from "~/@types/metadata";
import { FeatureSection } from "~/components/home/feature-section";
import { HeroSection } from "~/components/home/hero-section";
import { StarsSection } from "~/components/home/stars-section";
import { getStaticParams } from "~/lib/i18n";

export function generateStaticParams() {
  return getStaticParams();
}

export default function Page({ params }: PageParams) {
  unstable_setRequestLocale(params.locale);

  return (
    <main className="fade-in slide-in-from-bottom-8 container grid animate-duration-1000 animate-in items-center">
      <HeroSection />
      <FeatureSection />
      <StarsSection />
    </main>
  );
}
