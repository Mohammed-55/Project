import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Package, 
  ShoppingCart, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  DollarSign,
  Plus,
  Eye,
  Edit
} from 'lucide-react';

const DashboardPage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p>Please log in to access your dashboard.</p>
      </div>
    );
  }

  const isSeller = user.user_type === 'seller';

  // Mock data for demonstration
  const sellerStats = {
    totalProducts: 24,
    pendingOrders: 8,
    totalRevenue: 15420,
    newMessages: 5
  };

  const buyerStats = {
    totalOrders: 12,
    pendingOrders: 3,
    totalSpent: 8750,
    savedProducts: 18
  };

  const recentOrders = [
    { id: 'ORD-001', product: 'Industrial Water Pump', quantity: 15, status: 'pending', total: 18750 },
    { id: 'ORD-002', product: 'LED Display Panel', quantity: 8, status: 'confirmed', total: 6800 },
    { id: 'ORD-003', product: 'Safety Helmets', quantity: 200, status: 'shipped', total: 9000 },
    { id: 'ORD-004', product: 'Power Drill Set', quantity: 25, status: 'delivered', total: 8000 }
  ];

  const recentProducts = [
    { id: 1, title: 'Industrial Water Pump', price: 1250, stock: 150, status: 'active' },
    { id: 2, title: 'LED Display Panel', price: 850, stock: 75, status: 'active' },
    { id: 3, title: 'Safety Equipment Kit', price: 45, stock: 500, status: 'active' },
    { id: 4, title: 'Power Tools Set', price: 320, stock: 0, status: 'out_of_stock' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'out_of_stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.contact_person || user.email}
          </h1>
          <p className="text-gray-600 mt-2">
            {isSeller ? 'Manage your products and orders' : 'Track your orders and discover new products'}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {isSeller ? (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Products</p>
                      <p className="text-2xl font-bold text-gray-900">{sellerStats.totalProducts}</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{sellerStats.pendingOrders}</p>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">${sellerStats.totalRevenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">New Messages</p>
                      <p className="text-2xl font-bold text-gray-900">{sellerStats.newMessages}</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{buyerStats.totalOrders}</p>
                    </div>
                    <ShoppingCart className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{buyerStats.pendingOrders}</p>
                    </div>
                    <Package className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Spent</p>
                      <p className="text-2xl font-bold text-gray-900">${buyerStats.totalSpent.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Saved Products</p>
                      <p className="text-2xl font-bold text-gray-900">{buyerStats.savedProducts}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Recent Orders</CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{order.product}</p>
                      <p className="text-sm text-gray-500">
                        Order #{order.id} • Qty: {order.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${order.total.toLocaleString()}</p>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Products (for sellers) or Quick Actions (for buyers) */}
          {isSeller ? (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Your Products</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-500">
                          ${product.price} • Stock: {product.stock}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(product.status)}>
                          {product.status.replace('_', ' ')}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-20 flex flex-col items-center justify-center">
                    <Package className="h-6 w-6 mb-2" />
                    Browse Products
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <Users className="h-6 w-6 mb-2" />
                    Find Suppliers
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <MessageCircle className="h-6 w-6 mb-2" />
                    Messages
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col items-center justify-center">
                    <TrendingUp className="h-6 w-6 mb-2" />
                    Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

