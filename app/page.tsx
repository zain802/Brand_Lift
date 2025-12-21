import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BusinessMonitorSection from "@/components/BusinessMonitorSection";
import RevenueSection from "@/components/RevenueSection";
import SuccessStatsSection from "@/components/SuccessStatsSection";
import PricingSection from "@/components/PricingSection";
import DownloadAppSection from "@/components/DownloadAppSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <BusinessMonitorSection />
      <RevenueSection />
      <SuccessStatsSection />
      <PricingSection />
      <DownloadAppSection />
      <TestimonialsSection />
      <LatestNewsSection />
      <ContactSection />
    </main>
  );
}