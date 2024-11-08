import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-600 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="mt-2 text-xs md:text-sm">
          © {new Date().getFullYear()} BitLinks-Shortener. All Rights Reserved.
        </p>
        <p className="text-sm md:text-base">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/Skyy-Banerjee"
            target="_blank"
            className="font-bold underline hover:text-purple-300">
            Soumadip Banerjee👨🏻‍💻
          </Link>
        </p>
      </div>
    </footer>
  );
}
