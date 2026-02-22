"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [openMobileNavbar, setOpenMobileNavbar] = useState(false);
  return (
    <header className="bg-gray-100 px-6 lg:px-10 py-4 sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/"><Image src="/logo.png" priority  width={150} height={50} alt="Website Logo" className="w-24 lg:w-36 object-contain" /></Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <Link href="#" className={`hover:text-orange-500 font-semibold ${activeLink === "home" ? "text-orange-500" : ""} transition tracking-wide`} onClick={() => setActiveLink("home")}>Home</Link>
          <Link href="#" className={`hover:text-orange-500 font-semibold ${activeLink === "menu" ? "text-orange-500" : ""} transition tracking-wide`} onClick={() => setActiveLink("menu")}>Menu</Link>
          <Link href="#" className={`hover:text-orange-500 font-semibold ${activeLink === "orders" ? "text-orange-500" : ""} transition tracking-wide`} onClick={() => setActiveLink("orders")}>Orders</Link>
          <Link href="#" className={`hover:text-orange-500 font-semibold ${activeLink === "contact" ? "text-orange-500" : ""} transition tracking-wide`} onClick={() => setActiveLink("contact")}>Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-16">

          {/* Search */}
          <div className="hidden lg:flex items-center bg-white rounded-lg overflow-hidden border h-9">
            <input type="text" placeholder="Search..." className="px-3 h-full outline-none text-sm" />
            <button aria-label="Search" className="bg-orange-500 px-3 h-full flex items-center justify-center" >
              <Image src="/search_icon.png" width={18} height={18} alt="Search Icon"/>
            </button>
          </div>

          {/* icons */}
            <div className="flex items-center gap-5">
                <Link href="/cart" className="flex items-center gap-2 hover:text-orange-500 transition">
                    <Image src="/cart_icon.png" width={20} height={20} alt="Cart" />
                    <span className="hidden sm:block">Cart</span>
                </Link>

                <Link href="/login" className="flex items-center gap-2 hover:text-orange-500 transition">
                    <Image src="/profile_icon.png" width={18} height={18} alt="Profile" />
                    <span className="hidden sm:block">Login</span>
                </Link>
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button><Image src="/menu.png" width={25} height={25} alt="menu.png"  onClick={() => setOpenMobileNavbar(true)} /></button>
        </div>
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[rgba(0,0,0,0.5)] text-lg font-medium backdrop-blur transition duration-300 md:hidden ${openMobileNavbar ? "translate-x-0" : "translate-x-full"}`} >
        <button onClick={() => setOpenMobileNavbar(false)} className="rounded-md p-2 text-whiten absolute top-1 right-4" >
          <IoClose color="white" size={30} />
        </button>
        

        {/* <div className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full"><FaWhatsapp size={25} /> WhatsApp Now </div> */}
      </div>

      </div>
    </header>
  );
};

export default Navbar;
