import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FeaturedSection from "@/components/FeaturedSection";
import Facilities from "@/components/Facilities";

export default function Home() {
  return (
    <>

      <div className='bg-lightBackground '>
        <div className=' max-w-7xl mx-auto px-5 lg:px-10'>
          <Navbar />
          <Hero />
     <Facilities/>
          <FeaturedSection />
          <Services />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
