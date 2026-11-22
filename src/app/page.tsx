import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import ShadeFilter from "@/components/fabrics";
import FeatureShowcase from "@/components/Romobooks";
import RoomInspirations from "@/components/ProductCategory";
//import FabricEdit from "@/components/FabricEdit";
import ColorVibrancy from "@/components/RomoProjects";
import BrandPromise from "@/components/BrandPromise"; // <-- Naya Clean Promise Section
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <ShadeFilter />
        <FeatureShowcase />
        <RoomInspirations />
       
        <ColorVibrancy />
        <BrandPromise /> {/* <-- Yahan shamil karein */}
      </main>
      <Footer />
    </>
  );
}