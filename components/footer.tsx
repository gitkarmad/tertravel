import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-bhutan-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Ter Travel</h3>
                <p className="text-sm text-gray-400">in Bhutan</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for authentic Bhutanese experiences. Discover the Last Shangri-La with local
              expertise and personalized service.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white p-2">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/travel-info" className="text-gray-400 hover:text-white transition-colors">
                  Travel Information
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tour Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tours?category=cultural" className="text-gray-400 hover:text-white transition-colors">
                  Cultural Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=trekking" className="text-gray-400 hover:text-white transition-colors">
                  Trekking & Nature
                </Link>
              </li>
              <li>
                <Link href="/tours?category=spiritual" className="text-gray-400 hover:text-white transition-colors">
                  Spiritual Journeys
                </Link>
              </li>
              <li>
                <Link href="/tours?category=festival" className="text-gray-400 hover:text-white transition-colors">
                  Festival Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=luxury" className="text-gray-400 hover:text-white transition-colors">
                  Luxury Escapes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-saffron mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Thimphu, Bhutan</p>
                  <p className="text-gray-400">Post Box 123</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-saffron" />
                <p className="text-gray-400">+975 17123456</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-saffron" />
                <p className="text-gray-400">info@tertravelinbhutan.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-saffron" />
                <p className="text-gray-400">WhatsApp: +975 17123456</p>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button className="bg-saffron hover:bg-saffron/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Ter Travel in Bhutan. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
