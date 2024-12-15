import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"

const layout = ({children}) => {
  return (
    <div className='container mx-auto px-5 lg:px-10 bg-lightBackground '>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
export default layout