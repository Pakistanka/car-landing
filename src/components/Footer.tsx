export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 px-6 mt-20 text-center text-sm font-montserrat">
      <p>
        &copy; {new Date().getFullYear()} Vintage Autohaus. All rights reserved.
      </p>
      <p className="mt-2">
        <a href="/privacy" className="underline hover:text-white">
          Privacy Policy
        </a>{' '}
        |{' '}
        <a href="/terms" className="underline hover:text-white">
          Terms of Service
        </a>
      </p>
    </footer>
  )
}
