import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {Review} from "@/components/Review"
import Services from "@/components/Services";
import Faq from "@/components/faq/Faq";
export default function Home() {
  return (
    <div className="bg-[#E2E1DF] text-white space-y-16 lg:space-y-28">
      <Navbar/>
      <Hero />
      <Services />
     <Review />
      <Faq />
      <Footer />
   </div>
 )
}
