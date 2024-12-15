import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeaturedSection from "@/components/FeaturedSection";
import { Review } from "@/components/Review";
import Faq from "@/components/Faq";
import Offer from "@/components/Offer";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";

export default function Home() {
  return (
    <>
          <Hero />
          <Offer />
          <Rooms />
          <Amenities />
          <FeaturedSection />
          <Review />
          <Faq /> 
    </>
  );
}
