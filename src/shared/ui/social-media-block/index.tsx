import { FaTwitter, FaYoutube, FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://discord.com/invite/your-server",
    label: "Discord",
    icon: <FaDiscord size={20} />,
    className: "hover:text-indigo-500 active:text-indigo-300",
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

