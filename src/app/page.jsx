import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FeaturedSection from "@/components/FeaturedSection";

export default function Home() {
  return (
    <>
      <div className='bg-lightBackground text-white space-y-16 lg:space-y-28 max-w-7xl mx-auto px-5 lg:px-10'>
        <Navbar />
        <Hero />
        <FeaturedSection/>
        <Services />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
