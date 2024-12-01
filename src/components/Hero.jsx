import { FaArrowRightLong } from "react-icons/fa6"

const Hero = () => {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center bg-[#00000026] bg-blend-multiply rounded-3xl px-32 pt-40" style={{ backgroundImage: "url(https://i.postimg.cc/9X9JZgWH/interior-design-neoclassical-style-with-furnishings-decor-1.jpg)" }}>
        <h6 className="text-center text-4xl text-white font-bold max-w-xl mx-auto uppercase">Indulge Your Wanderlust: Book Your Stay</h6>
        <div className="bg-[#00000099] m-10 p-4">
          <form className="flex justify-center border-2 border-[#bd9966] rounded-tl-3xl rounded-br-3xl relative p-8 m-10" action="">
            <input type="text" defaultValue="Where you want to go?..." className="rounded-l-3xl bg-[#f9fafb80] border-x-2 text-black py-3 pl-8" />
            <input type="text" defaultValue="Add dates" className="text-black bg-[#f9fafb80] py-3 pl-8" />
            <input type="text" defaultValue="Guests" className="rounded-r-3xl bg-[#f9fafb80] border-x-2 text-black py-3 pl-8" />
            <button className="absolute right-[50px] top-1/3 bg-[#bd9966] hover:bg-[#bd996680] text-white rounded-3xl flex items-center gap-2 p-2">Search <FaArrowRightLong /></button>
          </form>
        </div>
        <div className="flex gap-8 text-white mt-10 py-8 px-4 bg-[#00000099] w-1/2">
          <div>
            <h6 className="text-3xl">300+</h6>
            <p>Destination</p>
          </div>
          <div>
            <h6 className="text-3xl">20,000+</h6>
            <p>Happy Customer</p>
          </div>
          <div>
            <h6 className="text-3xl">100+</h6>
            <p>Experienced Guide</p>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Hero;
