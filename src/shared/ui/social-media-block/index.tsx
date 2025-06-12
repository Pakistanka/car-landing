// components/SocialLinks.tsx
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <FaFacebookF size={20} />,
    className: "hover:text-blue-500 active:text-blue-300",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <FaInstagram size={20} />,
    className: "hover:text-pink-500 active:text-pink-300",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <FaTwitter size={20} />,
    className: "hover:text-blue-400 active:text-blue-200",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    icon: <FaYoutube size={20} />,
    className: "hover:text-red-500 active:text-red-300",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 mx-[10px]" id="socials">
      {socialLinks.map(({ href, label, icon, className }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition text-gray-400 ${className}`}
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
