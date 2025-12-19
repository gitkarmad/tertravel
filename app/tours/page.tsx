"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Users, MapPin, Star, Search, Filter } from "lucide-react"

export default function ToursPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("all")

  const tours = [
    {
      id: 1,
      title: "Cultural Heritage Discovery",
      category: "Cultural",
      duration: "7 Days",
      price: "$1,200 - $1,800",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 45,
      highlights: [
        "Paro Taktsang (Tiger's Nest)",
        "Punakha Dzong",
        "Thimphu Weekend Market",
        "Traditional Arts School",
      ],
      description:
        "Immerse yourself in Bhutan's rich cultural heritage with visits to ancient dzongs, monasteries, and traditional craft centers.",
    },
    {
      id: 2,
      title: "Himalayan Trekking Adventure",
      category: "Trekking",
      duration: "10 Days",
      price: "$1,800 - $2,500",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.8,
      reviews: 32,
      highlights: ["Druk Path Trek", "Jangothang Base Camp", "Alpine Lakes", "Rhododendron Forests"],
      description:
        "Challenge yourself with breathtaking treks through pristine Himalayan landscapes and experience Bhutan's untouched wilderness.",
    },
    {
      id: 3,
      title: "Spiritual Journey & Meditation",
      category: "Spiritual",
      duration: "5 Days",
      price: "$900 - $1,400",
      image: "/placeholder.svg?height=300&width=400",
      rating: 5.0,
      reviews: 28,
      highlights: ["Meditation Sessions", "Monastery Stays", "Buddhist Philosophy", "Prayer Flag Ceremony"],
      description:
        "Find inner peace through guided meditation, monastery visits, and spiritual teachings from Buddhist masters.",
    },
    {
      id: 4,
      title: "Festival Celebration Tour",
      category: "Festival",
      duration: "6 Days",
      price: "$1,100 - $1,600",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 38,
      highlights: ["Paro Tsechu Festival", "Traditional Dances", "Local Celebrations", "Cultural Performances"],
      description:
        "Experience the vibrant colors and ancient traditions of Bhutanese festivals with masked dances and religious ceremonies.",
    },
    {
      id: 5,
      title: "Luxury Bhutan Experience",
      category: "Luxury",
      duration: "8 Days",
      price: "$3,500 - $5,000",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.9,
      reviews: 22,
      highlights: ["5-Star Accommodations", "Private Guides", "Helicopter Tours", "Spa Treatments"],
      description:
        "Indulge in the finest Bhutanese hospitality with luxury accommodations, private tours, and exclusive experiences.",
    },
    {
      id: 6,
      title: "Nature & Wildlife Safari",
      category: "Nature",
      duration: "9 Days",
      price: "$1,500 - $2,200",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.7,
      reviews: 19,
      highlights: ["Royal Manas National Park", "Bird Watching", "Wildlife Photography", "Nature Walks"],
      description:
        "Discover Bhutan's incredible biodiversity with wildlife safaris, bird watching, and nature photography opportunities.",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Cultural", label: "Cultural Tours" },
    { value: "Trekking", label: "Trekking & Nature" },
    { value: "Spiritual", label: "Spiritual Journeys" },
    { value: "Festival", label: "Festival Tours" },
    { value: "Luxury", label: "Luxury Escapes" },
    { value: "Nature", label: "Nature & Wildlife" },
  ]

  const durations = [
    { value: "all", label: "Any Duration" },
    { value: "short", label: "1-5 Days" },
    { value: "medium", label: "6-10 Days" },
    { value: "long", label: "11+ Days" },
  ]

  const filteredTours = tours.filter((tour) => {
    const matchesSearch =
      tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || tour.category === selectedCategory
    const matchesDuration =
      selectedDuration === "all" ||
      (selectedDuration === "short" && Number.parseInt(tour.duration) <= 5) ||
      (selectedDuration === "medium" && Number.parseInt(tour.duration) >= 6 && Number.parseInt(tour.duration) <= 10) ||
      (selectedDuration === "long" && Number.parseInt(tour.duration) >= 11)

    return matchesSearch && matchesCategory && matchesDuration
  })

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
          <h1 className="text-5xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover Bhutan through our carefully crafted tour packages, each designed to showcase the unique beauty,
            culture, and spirituality of the Last Shangri-La.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="h-5 w-5" />
              <span className="font-semibold">Filter Tours:</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map((duration) => (
                    <SelectItem key={duration.value} value={duration.value}>
                      {duration.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {filteredTours.length} of {tours.length} tours
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-64 object-cover" />
                  <Badge className="absolute top-4 left-4 bg-saffron text-white">{tour.category}</Badge>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">{tour.rating}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{tour.description}</p>

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

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Highlights:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <MapPin className="h-3 w-3 text-forest-green flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                      {tour.highlights.length > 3 && (
                        <li className="text-forest-green text-xs">+{tour.highlights.length - 3} more highlights</li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-forest-green">{tour.price}</span>
                    <div className="text-sm text-gray-500">{tour.reviews} reviews</div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1 bg-forest-green hover:bg-forest-green/90">
                      <Link href={`/tours/${tour.id}`}>View Details</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white bg-transparent"
                    >
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tours found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("all")
                  setSelectedDuration("all")
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We specialize in creating custom itineraries tailored to your interests, budget, and schedule. Let us design
            the perfect Bhutanese adventure just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3">
              <Link href="/contact">Request Custom Tour</Link>
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
