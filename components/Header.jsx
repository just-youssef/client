"use client"

import Link from "next/link"
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl py-3 px-3 sm:px-5 mx-auto">
        <h1 className="flex font-bold text-xl sm:text-2xl">
          <Link href="/">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </Link>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-slate-100 p-2 rounded-md border-[1px] border-slate-400"
        >
          <input
            type="text"
            placeholder="Search.."
            className="bg-transparent focus:outline-none w-28 sm:w-64 lg:w-96 max-sm:text-sm"
          />
          <button type="submit" className="active:bg-slate-300 p-1 rounded-full"><FaSearch className="text-slate-600"/></button>
        </form>

        <div className="flex gap-4">
          <Link href="/"><span className="text-slate-700 hover:underline max-sm:hidden">Home</span></Link>
          <Link href="/about"><span className="text-slate-700 hover:underline max-sm:hidden">About</span></Link>
          <Link href="/signin"><span className="text-slate-700 hover:underline">SignIn</span></Link>
        </div>
      </div>
    </header>
  )
}

export default Header