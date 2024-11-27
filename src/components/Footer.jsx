import { BsTwitterX } from "react-icons/bs"
import { CiFacebook } from "react-icons/ci"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <div className='bg-[rgb(29,29,29)] lg:py-12 lg:px-24 p-4 mt-20 text-white'>
        <div className='flex flex-col lg:flex lg:flex-row lg:space-x-8 space-y-6 lg:space-y-0'>
          <div className='space-y-6'>
            <h3 className="font-semibold text-3xl text-white">SuitTrack</h3>
            <p className="text-sm">Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
          </div>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold'>Sign Up For Our Newsletter!</h3>
            <p className='text-sm'>Get notified about updates and be the first to get early access to new Podcast episodes.</p>
            <div className=''>
              <input type="text" placeholder='Your email address' className='py-2 px-4 rounded-l-lg outline-none text-black' />
              <button className='px-4 py-2 bg-purple-500 text-white rounded-r-lg'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="w-full mt-12 bg-[#1D1D1D] py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <table className="w-full">
              <thead className="flex flex-col lg:flex-row w-full justify-between mb-4">
                <tr className="flex flex-col lg:flex-row lg:space-x-8 w-full">
                  <th className="text-left lg:text-center flex-1">Contact Us</th>
                  <th className="text-left lg:text-center flex-1">About Us</th>
                  <th className="text-left lg:text-center flex-1">Privacy Policy</th>
                  <th className="text-left lg:text-center flex-1">Social Links</th>
                </tr>
              </thead>
              <tbody className="flex flex-col lg:flex-row w-full justify-between">
                <tr className="flex flex-col lg:flex-row lg:space-x-8 w-full">
                  <td className="text-left lg:text-center flex-1">support@SuitTrack.com</td>
                  <td className="text-left lg:text-center flex-1">Contact Us</td>
                  <td className="text-left lg:text-center flex-1">Terms & Conditions</td>
                  <td className="flex items-center justify-start lg:justify-center space-x-4 flex-1">
                    <CiFacebook className="text-xl" />
                    <BsTwitterX className="text-xl" />
                    <FaLinkedin className="text-xl" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className='py-6 text-center bg-[#7E53D4] text-white text-sm'>
        © 2024 | SuitTrack
      </div>
    </div>
  )
}
export default Footer