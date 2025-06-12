"use client"
import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import SocialLinks from "@/shared/ui/social-media-block";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4 text-white">

        <a href="#home" className="font-yellowtail text-2xl font-bold font-montserrat">
          Carkenstein
        </a>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto w-full">
          <ul className="flex space-x-8 text-lg font-medium">
            <li><a href="#home" className="hover:text-blue-700 rounded px-4 py-2">Home</a></li>
            <li><a href="#tokenomics" className="hover:text-blue-700 rounded px-4 py-2">Tokenomics</a></li>
            <li><a href="#team" className="hover:text-blue-700 rounded px-4 py-2">Team</a></li>
          </ul>
          <SocialLinks />
          <ul className="flex ml-auto space-x-4">
            <li>
              <a
                href="#launch"
                className="border border-blue-500 rounded px-6 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                Launch App
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </nav>
    </header>
  )
}
