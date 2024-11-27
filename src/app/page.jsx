import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FeaturedSection from "@/components/FeaturedSection";
import { Review } from "@/components/Review";
import Faq from "@/components/faq/Faq";

export default function Home() {
  return (
    <>
      <div className='bg-lightBackground text-white  max-w-7xl mx-auto px-5 lg:px-10'>
        <Navbar />
        <Hero />
        <FeaturedSection/>
        <Services />
        <Review />
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
