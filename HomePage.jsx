import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Shield, Users, TrendingUp, Star, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const featuredCategories = [
    { name: 'Electronics', image: '/api/placeholder/200/150', count: '10,000+' },
    { name: 'Machinery', image: '/api/placeholder/200/150', count: '5,000+' },
    { name: 'Textiles', image: '/api/placeholder/200/150', count: '8,000+' },
    { name: 'Chemicals', image: '/api/placeholder/200/150', count: '3,000+' },
    { name: 'Food & Beverage', image: '/api/placeholder/200/150', count: '6,000+' },
    { name: 'Construction', image: '/api/placeholder/200/150', count: '4,000+' },
  ];

  const trendingProducts = [
    { name: 'Industrial Pumps', price: '$1,200', moq: '10 units', supplier: 'TechCorp Ltd' },
    { name: 'LED Displays', price: '$850', moq: '5 units', supplier: 'DisplayTech' },
    { name: 'Safety Equipment', price: '$45', moq: '100 units', supplier: 'SafetyFirst' },
    { name: 'Power Tools', price: '$320', moq: '20 units', supplier: 'ToolMaster' },
  ];

  const verifiedSuppliers = [
    { name: 'Global Manufacturing Co.', location: 'China', rating: 4.8, products: 1200 },
    { name: 'European Tech Solutions', location: 'Germany', rating: 4.9, products: 850 },
    { name: 'American Industrial Inc.', location: 'USA', rating: 4.7, products: 950 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Global B2B Wholesale Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Connect with verified suppliers worldwide. Source quality products at wholesale prices.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
              <input
                type="text"
                placeholder="Search for products, suppliers, or categories..."
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg text-gray-900 focus:ring-2 focus:ring-orange-500"
              />
              <Button className="absolute right-2 top-2 bg-orange-500 hover:bg-orange-600">
                Search
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 text-blue-100">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Secure Payments</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>50,000+ Suppliers</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              <span>1M+ Products</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredCategories.map((category, index) => (
              <Link key={index} to={`/products?category=${category.name}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="w-full h-24 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">{category.name}</span>
                    </div>
                    <h3 className="font-semibold text-sm">{category.name}</h3>
                    <p className="text-xs text-gray-500">{category.count} products</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Product Image</span>
                  </div>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-lg font-bold text-blue-600 mb-1">{product.price}</p>
                  <p className="text-sm text-gray-500 mb-2">MOQ: {product.moq}</p>
                  <p className="text-sm text-gray-600">{product.supplier}</p>
                  <Button className="w-full mt-3" variant="outline" size="sm">
                    Contact Supplier
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Suppliers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Verified Suppliers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedSuppliers.map((supplier, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{supplier.name}</h3>
                      <p className="text-sm text-gray-500">{supplier.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">{supplier.products} products</span>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of businesses already using WholesaleHub to grow their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register?type=buyer">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start as Buyer
              </Button>
            </Link>
            <Link to="/register?type=seller">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Become a Supplier
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

