import Link from 'next/link'
import SocialLinks from "@/shared/ui/social-media-block";

export default function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full`}>
      <ul className="flex flex-col text-lg font-medium mt-4 space-y-2 bg-gray-900 p-4 rounded shadow-lg">
        <li>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 px-4 rounded hover:bg-green-600 active:bg-green-700"
          >
              Home
          </Link>
        </li>
        <li>
          <Link href="/venue" onClick={() => setIsOpen(false)} className="block py-2 px-4 rounded hover:bg-green-600">
              Venue
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 px-4 rounded hover:bg-green-600">
              About
          </Link>
        </li>
        <li>
          <SocialLinks />
        </li>
        <li>
          <Link href="/tickets" onClick={() => setIsOpen(false)}
              className="block py-2 px-6 border border-green-500 rounded text-green-500 hover:bg-green-500 hover:text-white transition">
              Launch App
          </Link>
        </li>
      </ul>
    </div>
  )
}
