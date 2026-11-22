import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import { Categories, Shades, Story, Warehouses, Process } from "@/components/Sections";
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <Shades />
        <Story />
        <Warehouses />
        <Process />
      </main>
      <Footer />
    </>
  );
}
