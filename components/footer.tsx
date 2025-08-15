import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                PaperCraft
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bringing you the things you need to get things done
            </p>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900">
                  PaperCraft Myanmar Co., Ltd
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                <div>
                  <p>No. 123, Pyay Road, Kamayut Township,</p>
                  <p>Yangon 11041, Myanmar</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <p>Tel: +95 1 234 5678</p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <p>Mobile: +95 9 123 456 789</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <p>info@papercraftmyanmar.com</p>
              </div>
              <div className="pt-2">
                <p className="text-xs">Business License: MIC-12345678</p>
                <p className="text-xs">Tax ID: 987654321</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <div>
                  <p>Mon - Fri: 9 am - 6 pm</p>
                </div>
              </div>
              <p className="ml-6">Saturday: 10 am - 4 pm</p>
              <p className="ml-6">Closed on Sundays</p>
              <p className="ml-6">Closed on public holidays</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                About us
              </Link>
              <Link
                href="/blog"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Blog
              </Link>
              <Link
                href="/sitemap"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Sitemap
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Enquiries
              </Link>
              <Link
                href="/shop"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Shopping Online
              </Link>
              <Link
                href="/returns"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Returns & Exchange
              </Link>
              <Link
                href="/loyalty"
                className="block text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Loyalty Programme
              </Link>
            </div>
          </div>

          {/* Payment & Procurement Options */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-gray-900 font-semibold mb-4">
                Payment Options
              </h3>
              <div className="space-y-3">
                {/* Credit Cards */}
                <div className="flex flex-wrap gap-2">
                  <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    VISA
                  </div>
                  <div className="w-10 h-6 bg-red-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    MC
                  </div>
                  <div className="w-10 h-6 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                    AMEX
                  </div>
                  <div className="w-10 h-6 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                    CB
                  </div>
                </div>
                {/* Digital Payments */}
                <div className="flex flex-wrap gap-2 items-center">
                  <div className="px-2 py-1 bg-blue-600 rounded text-white text-xs font-medium">
                    PayPal
                  </div>
                  <div className="px-2 py-1 bg-gray-800 rounded text-white text-xs font-medium">
                    GPay
                  </div>
                  <div className="px-2 py-1 bg-black rounded text-white text-xs font-medium">
                    APay
                  </div>
                </div>
                <div className="text-xs text-green-600 flex items-center space-x-1">
                  <span>💳</span>
                  <span>Credit Terms Available</span>
                </div>
                <div className="text-xs text-green-600 flex items-center space-x-1">
                  <span>📧</span>
                  <span>E-invoicing Available</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold mb-4">
                Procurement Options
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="px-2 py-1 bg-orange-500 rounded text-white text-xs font-medium">
                    Vendors@Gov
                  </div>
                  <div className="px-2 py-1 bg-blue-600 rounded text-white text-xs font-medium">
                    GeBIZ
                  </div>
                </div>
                <div className="px-2 py-1 bg-yellow-500 rounded text-white text-xs font-medium inline-block">
                  SAP Ariba
                </div>
                <div className="flex flex-wrap gap-2">
                  <div className="px-2 py-1 bg-blue-500 rounded text-white text-xs font-medium">
                    Coupa
                  </div>
                  <div className="px-2 py-1 bg-gray-700 rounded text-white text-xs font-medium">
                    TenderBoard
                  </div>
                </div>
                <div className="px-2 py-1 bg-red-600 rounded text-white text-xs font-medium inline-block">
                  SESAMI
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 PaperCraft Myanmar Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
