import { FaMapMarkerAlt } from "react-icons/fa"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoBed } from "react-icons/io5"
import { MdOutlineDateRange } from "react-icons/md"

const Hero = () => {
  return (
    <div className="relative">
      <div className="bg-no-repeat bg-cover bg-center bg-[#30333866] bg-blend-multiply rounded-3xl p-32" style={{ backgroundImage: "url(https://i.postimg.cc/bN3Vp9XS/img2.jpg)" }}>
        <h6 className="text-center text-7xl font-thin max-w-4xl mx-auto">Where every journey become an adventure</h6>
        <form className="flex justify-center relative py-10" action="">
          <p className="absolute top-14 left-[140px] text-black"><FaMapMarkerAlt /></p>
          <input type="text" placeholder="Where you want to go?..." className="rounded-l-3xl text-black py-3 pl-8" />
          <p className="absolute top-14 left-[365px] text-black"><MdOutlineDateRange /></p>
          <input type="text" placeholder="Add dates" className="text-black py-3 pl-8" />
          <p className="absolute top-14 left-[590px] text-black"><IoBed /></p>
          <input type="text" placeholder="Guests" className="rounded-r-3xl text-black py-3 pl-8" />
          <button className="absolute right-[150px] top-11 bg-black rounded-3xl flex items-center gap-2 p-2">Search <FaArrowRightLong /></button>
        </form>
      </div>
      <div className="flex gap-8 absolute top-[450px] left-12">
        <div>
          <h6 className="text-3xl">300+</h6>
          <p>Destination</p>
        </div>
        <div>
          <h6 className="text-3xl">20,000+</h6>
          <p>Happy Customers</p>
        </div>
        <div>
          <h6 className="text-3xl">100+</h6>
          <p>Experienced Guide</p>
        </div>
      </div>
    </div>
  )
}
export default Hero
