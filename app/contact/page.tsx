"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MapPin, Phone, Mail, MessageCircle, Clock, CalendarIcon, Send } from "lucide-react"
import { format } from "date-fns"

export default function ContactPage() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    tourType: "",
    groupSize: "",
    duration: "",
    budget: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { ...formData, preferredDate: date })
    alert("Thank you for your inquiry! We will get back to you within 24 hours.")
  }

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
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to embark on your Bhutanese adventure? Get in touch with our local experts to start planning your
            perfect journey to the Land of the Thunder Dragon.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    Our friendly team is here to help you plan the perfect Bhutanese experience. Contact us through any
                    of the methods below.
                  </p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                          <p className="text-gray-600">
                            Norzin Lam, Thimphu
                            <br />
                            Post Box 123
                            <br />
                            Bhutan
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                          <p className="text-gray-600">
                            Office: +975 2 123456
                            <br />
                            Mobile: +975 17123456
                            <br />
                            Emergency: +975 17654321
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                          <p className="text-gray-600">
                            General: info@tertravelinbhutan.com
                            <br />
                            Bookings: bookings@tertravelinbhutan.com
                            <br />
                            Support: support@tertravelinbhutan.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                          <p className="text-gray-600 mb-2">+975 17123456</p>
                          <Button size="sm" className="bg-green-500 hover:bg-green-600">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Chat on WhatsApp
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-forest-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-forest-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM
                            <br />
                            Saturday: 9:00 AM - 4:00 PM
                            <br />
                            Sunday: Closed
                            <br />
                            <span className="text-sm text-forest-green">24/7 Emergency Support</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Plan Your Bhutan Trip</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized itinerary and
                    quote.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Country *</Label>
                        <Input
                          id="country"
                          value={formData.country}
                          onChange={(e) => handleInputChange("country", e.target.value)}
                          placeholder="Your country"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Tour Type *</Label>
                        <Select
                          value={formData.tourType}
                          onValueChange={(value) => handleInputChange("tourType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select tour type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cultural">Cultural Tours</SelectItem>
                            <SelectItem value="trekking">Trekking & Nature</SelectItem>
                            <SelectItem value="spiritual">Spiritual Journeys</SelectItem>
                            <SelectItem value="festival">Festival Tours</SelectItem>
                            <SelectItem value="luxury">Luxury Escapes</SelectItem>
                            <SelectItem value="custom">Custom Tour</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Group Size *</Label>
                        <Select
                          value={formData.groupSize}
                          onValueChange={(value) => handleInputChange("groupSize", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Number of travelers" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">Solo Traveler</SelectItem>
                            <SelectItem value="2">2 People</SelectItem>
                            <SelectItem value="3-4">3-4 People</SelectItem>
                            <SelectItem value="5-8">5-8 People</SelectItem>
                            <SelectItem value="9+">9+ People</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Preferred Duration</Label>
                        <Select
                          value={formData.duration}
                          onValueChange={(value) => handleInputChange("duration", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Trip duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="3-5">3-5 Days</SelectItem>
                            <SelectItem value="6-8">6-8 Days</SelectItem>
                            <SelectItem value="9-12">9-12 Days</SelectItem>
                            <SelectItem value="13+">13+ Days</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Budget Range (per person)</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                            <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                            <SelectItem value="3000-5000">$3,000 - $5,000</SelectItem>
                            <SelectItem value="5000+">$5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label>Preferred Travel Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-transparent"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your interests, special requirements, or any questions you have..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-forest-green hover:bg-forest-green/90">
                      <Send className="h-5 w-5 mr-2" />
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Thimphu, we're always happy to meet you in person
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-forest-green mx-auto mb-4" />
              <p className="text-gray-600">Interactive map would be embedded here</p>
              <p className="text-sm text-gray-500">Norzin Lam, Thimphu, Bhutan</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about traveling to Bhutan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">
                  We recommend booking at least 2-3 months in advance, especially for peak seasons (March-May and
                  September-November) and festival tours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Do you provide visa assistance?</h3>
                <p className="text-gray-600">
                  Yes! We handle all visa formalities for you. Just provide us with your passport details and we'll take
                  care of the rest.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">What's included in your packages?</h3>
                <p className="text-gray-600">
                  Our packages typically include accommodation, meals, transportation, guide services, and entrance
                  fees. International flights are usually separate.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">Can you customize tours?</h3>
                <p className="text-gray-600">
                  We specialize in creating personalized itineraries based on your interests, budget, and schedule.
                  Every tour can be customized.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
