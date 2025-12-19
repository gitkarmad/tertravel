import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Phone, Mail, MessageCircle } from "lucide-react"

export default function HomePage() {
  const featuredTours = [
    {
      id: 1,
      title: "Cultural Heritage Tour",
      duration: "7 Days",
      price: "$1,200 - $1,800",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Paro Taktsang", "Punakha Dzong", "Thimphu Sightseeing"],
      category: "Cultural",
    },
    {
      id: 2,
      title: "Himalayan Trekking Adventure",
      duration: "10 Days",
      price: "$1,800 - $2,500",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Druk Path Trek", "Mountain Views", "Alpine Lakes"],
      category: "Trekking",
    },
    {
      id: 3,
      title: "Spiritual Journey",
      duration: "5 Days",
      price: "$900 - $1,400",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Meditation Sessions", "Monastery Visits", "Spiritual Guidance"],
      category: "Spiritual",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "🇺🇸 USA",
      rating: 5,
      text: "Ter Travel made our Bhutan trip absolutely magical. The cultural insights and personalized service were exceptional!",
    },
    {
      name: "Hiroshi Tanaka",
      country: "🇯🇵 Japan",
      rating: 5,
      text: "Professional, knowledgeable guides and perfectly organized itinerary. Bhutan's beauty exceeded all expectations.",
    },
    {
      name: "Emma Wilson",
      country: "🇬🇧 UK",
      rating: 5,
      text: "The spiritual journey tour was life-changing. Ter Travel's attention to detail and local expertise was outstanding.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">Discover Hidden Treasures</h1>
          <p className="text-xl md:text-2xl mb-4 text-shadow">with Ter Travel in Bhutan</p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">
            Experience the Last Shangri-La through authentic cultural journeys, spiritual adventures, and breathtaking
            Himalayan landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3 text-lg">
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg bg-transparent"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-forest-green text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold">Ready to explore Bhutan?</p>
              <p className="text-sm opacity-90">Contact us for personalized travel planning</p>
            </div>
            <div className="flex gap-4">
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
              <Button variant="secondary" size="sm" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tour Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully crafted experiences that showcase the best of Bhutan's culture, nature, and spirituality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-64 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-saffron text-white">{tour.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      2-12 people
                    </div>
                  </div>
                  <ul className="text-sm text-gray-600 mb-4 space-y-1">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-forest-green" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-forest-green">{tour.price}</span>
                    <Button asChild className="bg-bhutan-red hover:bg-bhutan-red/90">
                      <Link href={`/tours/${tour.id}`}>View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white bg-transparent"
            >
              <Link href="/tours">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ter Travel?</h2>
            <p className="text-xl text-gray-600">Your trusted partner for authentic Bhutanese experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
              <p className="text-gray-600">Born and raised in Bhutan, we know every hidden gem and cultural nuance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-forest-green" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Service</h3>
              <p className="text-gray-600">Tailored itineraries designed around your interests and preferences</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bhutan-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-bhutan-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainable Tourism</h3>
              <p className="text-gray-600">
                Committed to preserving Bhutan's environment and supporting local communities
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-saffron" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your journey in Bhutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued guests</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white bg-transparent"
            >
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Bhutanese Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us create an unforgettable journey tailored just for you. Contact us today to start planning your dream
            trip to the Land of the Thunder Dragon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-forest-green px-8 py-3 bg-transparent"
            >
              <Link href="/travel-info">Travel Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
