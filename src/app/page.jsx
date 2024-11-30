import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FeaturedSection from "@/components/FeaturedSection";
import { Review } from "@/components/Review";
import Faq from "@/components/Faq";
import Offer from "@/components/Offer";
import RoomSection from "@/components/RoomSection";

export default function Home() {
  return (
    <>

      <div className='bg-lightBackground '>
        <div className=' max-w-7xl mx-auto px-5 lg:px-10'>
          <Navbar />
          <Hero />
          <Offer />
          <RoomSection />
          <FeaturedSection />
          <Review />
          <Faq />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
