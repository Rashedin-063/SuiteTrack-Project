"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useSession } from "next-auth/react"
import Link from "next/link"

const Navbar = () => {
  const session = useSession()

  const {data : user, isLoading} = useQuery({
    queryKey : ['user', session?.data?.user?.email],
    queryFn : async () => {
      const {data} = await axios.get(`http://localhost:3000/api/me/${session?.data?.user?.email}`)
      return data;
    }
  })

  console.log(user);
  return (
    <header className="p-4  text-lightPrimary">
      <div className="container flex justify-between h-16 mx-auto">
        <Link href="/"  rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
          <h2 className="text-2xl lg:text-3xl font-bold">Suite<span className="text-lightSecondary">Track</span></h2>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600">Link</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Home</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">About</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Blog</a>
          </li>
          <li className="flex">
            <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">Contact</a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link href={'/login'} className="self-center px-8 py-3 rounded">Sign in</Link>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Sign up</button>
        </div>
        <button className="p-4 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}
export default Navbar