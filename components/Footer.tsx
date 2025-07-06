import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-center py-12 px-6 text-sm text-gray-500">
      <p className="mb-4">Want to build something dumb, smart, or both? Hit me up.</p>
      <div className="flex justify-center space-x-6 text-xl">
        <a href="https://github.com/YOURHANDLE" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/YOURHANDLE" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:you@example.com">📧</a>
      </div>
    </footer>
  );
} 