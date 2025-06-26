import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Shield, MessageCircle, Phone, Mail } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();

  // Mock product data for demonstration
  const product = {
    id: 1,
    title: 'Industrial Water Pump - High Efficiency Model XP-2000',
    description: 'Professional grade industrial water pump designed for heavy-duty applications. Features corrosion-resistant materials, energy-efficient motor, and reliable performance in demanding environments.',
    price: 1250.00,
    min_order_quantity: 10,
    max_order_quantity: 500,
    unit: 'piece',
    stock_quantity: 150,
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300', '/api/placeholder/400/300'],
    specifications: {
      'Flow Rate': '500 L/min',
      'Head': '50 meters',
      'Power': '5.5 kW',
      'Material': 'Stainless Steel',
      'Inlet/Outlet': '4 inch',
      'Weight': '85 kg'
    },
    seller: {
      id: 1,
      company_name: 'HydroTech Industries Ltd.',
      contact_person: 'John Smith',
      phone: '+86-138-0013-8000',
      email: 'sales@hydrotech.com',
      address: 'Industrial Zone, Guangzhou, China',
      verification_status: 'verified',
      rating: 4.8,
      total_reviews: 156,
      years_in_business: 12
    },
    category: 'Industrial Equipment',
    created_at: '2025-01-15'
  };

  const pricingTiers = [
    { quantity: '10-49 pieces', price: 1250.00 },
    { quantity: '50-99 pieces', price: 1180.00 },
    { quantity: '100-199 pieces', price: 1120.00 },
    { quantity: '200+ pieces', price: 1050.00 }
  ];

  const similarProducts = [
    { id: 2, title: 'Centrifugal Pump CP-1500', price: 980.00, supplier: 'PumpTech Co.' },
    { id: 3, title: 'Submersible Pump SP-3000', price: 1450.00, supplier: 'AquaFlow Ltd.' },
    { id: 4, title: 'Booster Pump BP-800', price: 750.00, supplier: 'FlowMaster Inc.' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Product Images */}
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Main Product Image</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {product.images.slice(0, 3).map((_, index) => (
                        <div key={index} className="w-full h-20 bg-gray-200 rounded border cursor-pointer hover:border-blue-500">
                          <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                            Image {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h1>
                      <div className="flex items-center space-x-2 mb-4">
                        <Badge variant="secondary">{product.category}</Badge>
                        <Badge variant="outline">In Stock</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm text-gray-500">Price Range:</span>
                        <p className="text-2xl font-bold text-blue-600">${product.price.toFixed(2)} - $1,050.00</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-500">Minimum Order:</span>
                        <p className="font-semibold">{product.min_order_quantity} {product.unit}</p>
                      </div>
                      
                      <div>
                        <span className="text-sm text-gray-500">Available Stock:</span>
                        <p className="font-semibold">{product.stock_quantity} {product.unit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Tiers */}
            <Card>
              <CardHeader>
                <CardTitle>Volume Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Quantity</th>
                        <th className="text-left py-2">Unit Price</th>
                        <th className="text-left py-2">Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((tier, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-2">{tier.quantity}</td>
                          <td className="py-2 font-semibold">${tier.price.toFixed(2)}</td>
                          <td className="py-2 text-green-600">
                            {index > 0 && (
                              <span className="text-sm">
                                Save ${((pricingTiers[0].price - tier.price) * 10).toFixed(0)}+
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Product Description */}
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">{key}:</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Supplier Info and Actions */}
          <div className="space-y-6">
            {/* Supplier Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 text-green-500 mr-2" />
                  Verified Supplier
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{product.seller.company_name}</h3>
                  <p className="text-sm text-gray-600">{product.seller.contact_person}</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.seller.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">{product.seller.rating}</span>
                  <span className="text-sm text-gray-500">({product.seller.total_reviews} reviews)</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{product.seller.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{product.seller.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{product.seller.email}</span>
                  </div>
                </div>
                
                <div className="pt-4 space-y-2">
                  <Button className="w-full">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact Supplier
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Supplier Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Trade Assurance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Trade Assurance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    <span>Secure payment protection</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    <span>Quality guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 text-green-500 mr-2" />
                    <span>On-time delivery protection</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Products */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {similarProducts.map((similar) => (
                    <div key={similar.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <div className="w-12 h-12 bg-gray-200 rounded flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{similar.title}</p>
                        <p className="text-sm text-gray-500">{similar.supplier}</p>
                        <p className="text-sm font-semibold text-blue-600">${similar.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

