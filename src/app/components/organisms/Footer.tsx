import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-footer text-CaramelExtraLight py-14">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-md-2 px-4">
        <div>
          <h4 className="mb-4">HELP</h4>
          <nav>
            <ul>
              <li>
                <Link href="#faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#payments" className="hover:underline">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="#terms" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#support" className="hover:underline">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#copyright" className="hover:underline">
                  Copyright
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="mb-4">SERVICES</h4>
          <nav>
            <ul>
              <li>
                <Link href="#heritage" className="hover:underline">
                  Heritage & Taxation
                </Link>
              </li>
              <li>
                <Link href="#estates" className="hover:underline">
                  Estates, Appraisals & Valuations
                </Link>
              </li>
              <li>
                <Link href="#buy-sell" className="hover:underline">
                  Buy & Sell
                </Link>
              </li>
              <li>
                <Link href="#restitution" className="hover:underline">
                  Restitution
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="mb-4">ABOUT</h4>
          <nav>
            <ul>
              <li>
                <Link href="#who-we-are" className="hover:underline">
                  Who we are
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:underline">
                  Location
                </Link>
              </li>
              <li>
                <Link href="#career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:underline">
                  Contacts
                </Link>
              </li>
              <li>
                <Link href="#social-responsibility" className="hover:underline">
                  Social Responsibility
                </Link>
              </li>
              <li>
                <Link href="#sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h4 className="mb-4">SOCIAL</h4>
          <p className="text-sm font-extralight">&copy; {currentYear} BlackSquare LTDA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
