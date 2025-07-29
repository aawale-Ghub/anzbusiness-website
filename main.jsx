// src/App.jsx
import React, { useState, useEffect } from "react";
import { 
  Smartphone, Laptop, Watch, ShoppingCart, 
  Headphones, Printer, CreditCard, 
  PhoneCall, Gift, Box, Users, MapPin, 
  Clock, Star, ChevronRight, Menu, X 
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Smartphone,
      title: "Mobile Phone Services",
      description: "Sales, repairs, and servicing for all mobile phones. We also activate new SIM cards and handle monthly bill payments for Freedom Mobile, Chatr, Lucky Mobile, and Public Mobile.",
      items: ["Phone Sales", "Repairs & Service", "SIM Activation", "Bill Payments"]
    },
    {
      icon: Laptop,
      title: "Computer & Laptop Services",
      description: "Professional repair and servicing for computers and laptops. We also offer accessories and technical support.",
      items: ["Laptop Sales", "Repairs", "Accessories", "Technical Support"]
    },
    {
      icon: Box,
      title: "Android TV Box",
      description: "Sales and professional service for Android TV Boxes. Enjoy your favorite entertainment with our quality products and support.",
      items: ["TV Box Sales", "Installation", "Troubleshooting", "Maintenance"]
    },
    {
      icon: Printer,
      title: "Printing & Office Services",
      description: "Complete office solutions including photocopy, printing, scanning, and email services for all your business and personal needs.",
      items: ["Photocopy", "Printing", "Scanning", "Email Services"]
    },
    {
      icon: CreditCard,
      title: "Mobile Money Transfer",
      services: ["Taaj Services", "AMAL Express", "Ria"]
    },
    {
      icon: PhoneCall,
      title: "Long Distance Call Cards",
      services: ["Boss Revolution", "Oye", "Raza", "Hello Bolo"]
    }
  ];

  const products = [
    {
      category: "Fashion & Accessories",
      items: [
        "Abaya", "Hijabs", "Qamis", "Perfumes", 
        "Adar", "Uunsi", "Gold Necklaces", 
        "Complete Gold Sets", "Watches"
      ],
      icon: Gift
    }
  ];

  const testimonials = [
    {
      name: "Amina Hassan",
      comment: "ANZ Business Center has been my go-to place for mobile services. Their team is professional, quick, and always helpful. I also love their fashion collection!",
      rating: 5
    },
    {
      name: "Mohamed Ali",
      comment: "Excellent service for my laptop repair. They fixed everything in one day and at a reasonable price. The money transfer service is also very convenient.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      comment: "I've been shopping for Abayas here for years. The quality is amazing and the staff is so friendly. They also helped me with my mobile bill payments.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <ShoppingCart className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ANZ BUSINESS CENTER</h1>
                <p className="text-sm text-gray-600">Wireless and Electronics</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t py-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Services</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Products</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors px-4">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors px-4">Contact</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ANZ BUSINESS CENTER
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Your one-stop destination for wireless, electronics, fashion, and essential services in the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Explore Services
                </a>
                <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <Smartphone className="h-12 w-12 mb-4 text-yellow-300" />
                <h3 className="text-lg font-semibold mb-2">Mobile Services</h3>
                <p className="text-sm text-blue-100">Sales, repairs, and SIM activation</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <Gift className="h-12 w-12 mb-4 text-pink-300" />
                <h3 className="text-lg font-semibold mb-2">Fashion</h3>
                <p className="text-sm text-blue-100">Abayas, Hijabs, Gold & more</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <CreditCard className="h-12 w-12 mb-4 text-green-300" />
                <h3 className="text-lg font-semibold mb-2">Money Transfer</h3>
                <p className="text-sm text-blue-100">Taaj, AMAL, Ria services</p>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-lg backdrop-blur-sm">
                <Printer className="h-12 w-12 mb-4 text-cyan-300" />
                <h3 className="text-lg font-semibold mb-2">Office Services</h3>
                <p className="text-sm text-blue-100">Printing, scanning, copying</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of services to meet all your wireless, electronic, and daily needs under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg transition-all duration-500 ${
                    activeService === index ? 'transform scale-105 shadow-xl' : 'hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.items && (
                    <ul className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-gray-700">
                          <ChevronRight className="h-4 w-4 text-blue-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.services && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Available Services:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.services.map((serviceName, serviceIndex) => (
                          <span key={serviceIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {serviceName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                    <p className="text-gray-600">Our certified professionals ensure quality service and repairs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Trusted</h4>
                    <p className="text-gray-600">Serving our community with honesty and reliability for years.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Service</h4>
                    <p className="text-gray-600">Fast turnaround times for repairs and service requests.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4 mt-1">
                    <ShoppingCart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">One-Stop Shop</h4>
                    <p className="text-gray-600">Everything you need in one convenient location.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover our wide selection of high-quality fashion and electronics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <product.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">{product.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {product.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="text-gray-800 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Electronics Products */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Electronics</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-800 font-medium">Mobile Phones</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-800 font-medium">Computers & Laptops</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-800 font-medium">Accessories</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-gray-800 font-medium">Android TV Boxes</p>
                </div>
              </div>
            </div>

            {/* Featured Product */}
            <div className="lg:col-span-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Special Offer!</h3>
              <p className="text-lg mb-6">
                Buy any mobile phone and get a free protective case + screen protector. 
                Plus, enjoy 10% off on any fashion item with your electronics purchase.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  Free Case & Screen Protector
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  10% Off Fashion Items
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  Expert Setup Included
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About ANZ BUSINESS CENTER
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ANZ BUSINESS CENTER has been serving our community with excellence in wireless, electronics, and fashion for over a decade. 
                We pride ourselves on providing high-quality products and exceptional customer service.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our mission is to be your trusted partner for all your technology, communication, and fashion needs. 
                We combine technical expertise with cultural understanding to serve our diverse community.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Years of Service</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">123 Main Street, Your City, Province</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help with all your wireless, electronics, and fashion needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Store</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">123 Main Street, Your City, Province, Postal Code</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneCall className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Headphones className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-900">Customer Service</p>
                      <p className="text-gray-600">Available during store hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="mb-6">
                  Call us directly or visit our store for immediate assistance with your wireless, electronics, or fashion needs.
                </p>
                <a 
                  href="tel:5551234567"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Call Now: (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ANZ BUSINESS CENTER</h3>
                  <p className="text-blue-200">Wireless and Electronics</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Your trusted one-stop destination for wireless services, electronics, fashion, and community essentials. 
                We're committed to providing exceptional service and quality products to our valued customers.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Mobile Phone Sales & Repair</li>
                <li>Computer & Laptop Services</li>
                <li>Android TV Box Sales</li>
                <li>Money Transfer Services</li>
                <li>Long Distance Call Cards</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Fashion & Accessories</li>
                <li>Abayas & Hijabs</li>
                <li>Perfumes & Adar</li>
                <li>Gold Jewelry</li>
                <li>Watches</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} ANZ BUSINESS CENTER. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;