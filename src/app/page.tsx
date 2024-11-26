
import Hero from "@/components/Hero";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Services from "@/components/ui/Services";

export default function Home() {
  return (
    <div className="bg-indigo-900 text-white space-y-16 lg:space-y-28">
      <Navbar/>
      <Hero />
      <Services />
      <Footer />
   </div>
 )
}
