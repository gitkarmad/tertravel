import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, Globe, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Tenzin Wangchuk",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Born in Thimphu, Tenzin has over 15 years of experience in Bhutanese tourism. His passion for sharing Bhutan's culture and natural beauty drives our mission.",
      specialties: ["Cultural Tours", "Government Relations", "Sustainable Tourism"],
    },
    {
      name: "Pema Lhamo",
      role: "Tour Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With a background in hospitality and deep knowledge of Bhutanese traditions, Pema ensures every tour is authentic and memorable.",
      specialties: ["Festival Tours", "Cultural Experiences", "Guest Relations"],
    },
    {
      name: "Karma Dorji",
      role: "Trekking Guide & Safety Expert",
      image: "/placeholder.svg?height=300&width=300",
      bio: "A certified mountain guide with extensive knowledge of Bhutan's trekking routes and wilderness areas. Safety and adventure go hand in hand with Karma.",
      specialties: ["High Altitude Trekking", "Wilderness Safety", "Mountain Photography"],
    },
  ]

  const values = [
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in sharing the real Bhutan - its people, traditions, and untouched natural beauty.",
    },
    {
      icon: Globe,
      title: "Sustainable Tourism",
      description:
        "Following Bhutan's philosophy of Gross National Happiness, we prioritize environmental and cultural preservation.",
    },
    {
      icon: Users,
      title: "Personal Connection",
      description:
        "Every guest becomes part of our extended family. We create lasting relationships beyond just tours.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "From planning to execution, we maintain the highest standards in every aspect of your journey.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-green to-forest-green/80 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Ter Travel</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Born from a deep love for Bhutan and a desire to share its magic with the world, Ter Travel has been
            creating authentic Bhutanese experiences since 2010.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              15+ Years Experience
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              500+ Happy Travelers
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              100% Local Expertise
            </Badge>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ter Travel was founded with a simple yet profound vision: to share the authentic beauty and wisdom of
                  Bhutan with travelers seeking more than just a vacation. Our name "Ter" means "treasure" in Dzongkha,
                  reflecting our belief that Bhutan itself is a treasure waiting to be discovered.
                </p>
                <p>
                  What started as a small family business has grown into one of Bhutan's most trusted travel agencies,
                  but we've never lost sight of our core values: authenticity, sustainability, and genuine care for our
                  guests and our homeland.
                </p>
                <p>
                  Every tour we design is infused with local knowledge passed down through generations, combined with
                  modern comfort and safety standards. We don't just show you Bhutan; we help you experience it as we do
                  - with reverence, joy, and deep appreciation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img src="/placeholder.svg?height=500&width=600" alt="Our Story" className="rounded-lg shadow-xl" />
              <div className="absolute -bottom-6 -right-6 bg-saffron text-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by Bhutan's philosophy of Gross National Happiness, our values shape every experience we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-forest-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our passionate team of local experts brings decades of combined experience and genuine love for Bhutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-forest-green font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Ter Travel?</h2>
            <p className="text-xl max-w-2xl mx-auto">
              We're not just a travel agency - we're your gateway to the heart and soul of Bhutan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Born & Raised in Bhutan</h3>
              <p className="text-white/90">
                Our deep-rooted connection to Bhutan means we know every hidden gem, cultural nuance, and local secret.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Experiences</h3>
              <p className="text-white/90">
                No two travelers are alike. We craft each journey to match your interests, pace, and dreams.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Exceptional Service</h3>
              <p className="text-white/90">
                From your first inquiry to your final farewell, we're dedicated to exceeding your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Discover Bhutan?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our local expertise and passion for Bhutan create an unforgettable journey tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-forest-green hover:bg-forest-green/90 px-8 py-3">
              <Link href="/tours">Explore Our Tours</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
