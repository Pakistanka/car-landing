"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

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

        <Link href="/" className="font-yellowtail text-2xl font-bold font-montserrat">
          Vintage Autohaus
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:w-auto w-full">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:bg-green-600 active:bg-green-700 rounded px-4 py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/venue" className="hover:bg-green-600 rounded px-4 py-2">
                Venue
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:bg-green-600 rounded px-4 py-2">
                About
              </Link>
            </li>
          </ul>
          <ul className="flex ml-auto space-x-4">
            <li>
              <Link href="/tickets" className="border border-green-500 rounded px-6 py-2 text-green-500 hover:bg-green-500 hover:text-white transition">
                Launch App
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </nav>
    </header>
  )
}
