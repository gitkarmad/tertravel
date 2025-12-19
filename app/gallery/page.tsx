"use client"

import Link from "next/link"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos", count: 48 },
    { id: "landscapes", name: "Landscapes", count: 15 },
    { id: "culture", name: "Culture & Festivals", count: 12 },
    { id: "architecture", name: "Architecture", count: 8 },
    { id: "people", name: "Local Life", count: 7 },
    { id: "wildlife", name: "Wildlife", count: 6 },
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Tiger's Nest Monastery",
      category: "architecture",
      description: "The iconic Paro Taktsang monastery perched on a cliff face",
    },
    {
      id: 2,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Traditional Festival Dance",
      category: "culture",
      description: "Masked dancers performing at a traditional Bhutanese festival",
    },
    {
      id: 3,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Himalayan Sunrise",
      category: "landscapes",
      description: "Golden sunrise over the majestic Himalayan peaks",
    },
    {
      id: 4,
      type: "video",
      src: "/placeholder.svg?height=400&width=600",
      title: "Cultural Performance",
      category: "culture",
      description: "Traditional Bhutanese music and dance performance",
    },
    {
      id: 5,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Punakha Dzong",
      category: "architecture",
      description: "The magnificent Punakha Dzong at the confluence of two rivers",
    },
    {
      id: 6,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Local Family",
      category: "people",
      description: "A warm Bhutanese family in traditional dress",
    },
    {
      id: 7,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Blue Poppy",
      category: "wildlife",
      description: "Bhutan's national flower blooming in alpine meadows",
    },
    {
      id: 8,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Weekend Market",
      category: "people",
      description: "Vibrant colors at Thimphu weekend market",
    },
    {
      id: 9,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Prayer Flags",
      category: "culture",
      description: "Colorful prayer flags fluttering in the mountain breeze",
    },
    {
      id: 10,
      type: "video",
      src: "/placeholder.svg?height=400&width=600",
      title: "Trekking Adventure",
      category: "landscapes",
      description: "Trekking through pristine Bhutanese wilderness",
    },
    {
      id: 11,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Takin - National Animal",
      category: "wildlife",
      description: "Bhutan's unique national animal in its natural habitat",
    },
    {
      id: 12,
      type: "image",
      src: "/placeholder.svg?height=400&width=600",
      title: "Traditional Village",
      category: "architecture",
      description: "Traditional Bhutanese architecture in a mountain village",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

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
          <h1 className="text-5xl font-bold mb-6">Photo & Video Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Immerse yourself in the visual splendor of Bhutan through our collection of stunning photographs and videos
            showcasing the kingdom's natural beauty, rich culture, and warm people.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-forest-green hover:bg-forest-green/90"
                    : "border-forest-green text-forest-green hover:bg-forest-green hover:text-white"
                }
              >
                {category.name}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {item.type === "video" && (
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-forest-green ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-white/90">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <div className="relative">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Video Highlights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience Bhutan in motion through our curated video collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Festival Celebrations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-forest-green hover:bg-white">
                    <Play className="h-6 w-6 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Festival Celebrations</h3>
                <p className="text-gray-600 text-sm">
                  Experience the vibrant colors and ancient traditions of Bhutanese festivals
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Trekking Adventures"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-forest-green hover:bg-white">
                    <Play className="h-6 w-6 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Trekking Adventures</h3>
                <p className="text-gray-600 text-sm">
                  Journey through pristine Himalayan landscapes and untouched wilderness
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Cultural Heritage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-forest-green hover:bg-white">
                    <Play className="h-6 w-6 mr-2" />
                    Play Video
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Cultural Heritage</h3>
                <p className="text-gray-600 text-sm">
                  Discover ancient monasteries, dzongs, and the spiritual heart of Bhutan
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Own Memories?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            These images are just a glimpse of what awaits you in Bhutan. Let us help you create your own collection of
            unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-saffron hover:bg-saffron/90 text-white px-8 py-3">
              <Link href="/tours">Explore Tours</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-forest-green px-8 py-3 bg-transparent"
            >
              <Link href="/contact">Plan Your Trip</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
