import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Solutions from "@/components/Solutions";
import Technology from "@/components/Technology";
import Scanner from "@/components/Scanner";
import Steps from "@/components/Steps";
import Business from "@/components/Business";
import Stats from "@/components/Stats";
import CaseStudy from "@/components/CaseStudy";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-full flex-col">
        <Hero />
        <Trust />
        <Solutions />
        <Technology />
        <Scanner />
        <Steps />
        <Business />
        <Stats />
        <CaseStudy />
        <CTA />
      </main>
      <Footer />
    </>
  );
}