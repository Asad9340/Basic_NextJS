import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-[1130px] mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-400">BlogSite</h2>
          <p className="mt-2 text-sm text-gray-300">
            Your daily source of tech articles and updates.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400">
                About
              </Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-indigo-400">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm text-gray-300">Email: contact@blogsite.com</p>
          <p className="text-sm text-gray-300">Location: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} BlogSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
