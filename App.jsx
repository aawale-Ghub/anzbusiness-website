import React, { useState, useEffect } from "react";
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