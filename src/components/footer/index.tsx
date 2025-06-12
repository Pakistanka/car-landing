import SocialLinks from "@/shared/ui/social-media-block";

export default function Footer() {
  return (
    <footer className="text-gray-400 py-10 px-6 bg-black text-center text-sm font-montserrat">
      <div className="container mx-auto flex flex-row flex-wrap justify-center items-center space-x-6 text-center">
        <SocialLinks />

        <p>&copy; {new Date().getFullYear()}All rights reserved.</p>
        <p>
          <a href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="underline hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
