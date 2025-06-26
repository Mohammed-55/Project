import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Grid, List } from 'lucide-react';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, [currentPage, sortBy, sortOrder, searchTerm]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: currentPage,
        per_page: 20,
        sort_by: sortBy,
        sort_order: sortOrder,
        ...(searchTerm && { search: searchTerm })
      });

      const response = await fetch(`http://localhost:5001/api/products/?${params}`);
      const data = await response.json();

      if (response.ok) {
        setProducts(data.products);
        setTotalPages(data.pages);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
    fetchProducts();
  };

  // Mock data for demonstration since backend might not be fully working
  const mockProducts = [
    {
      id: 1,
      title: 'Industrial Water Pump',
      price: 1250.00,
      min_order_quantity: 10,
      unit: 'piece',
      seller: { company_name: 'HydroTech Industries' },
      images: []
    },
    {
      id: 2,
      title: 'LED Display Panel',
      price: 850.00,
      min_order_quantity: 5,
      unit: 'piece',
      seller: { company_name: 'DisplayTech Solutions' },
      images: []
    },
    {
      id: 3,
      title: 'Safety Helmets',
      price: 45.00,
      min_order_quantity: 100,
      unit: 'piece',
      seller: { company_name: 'SafetyFirst Equipment' },
      images: []
    },
    {
      id: 4,
      title: 'Power Drill Set',
      price: 320.00,
      min_order_quantity: 20,
      unit: 'set',
      seller: { company_name: 'ToolMaster Corp' },
      images: []
    },
    {
      id: 5,
      title: 'Stainless Steel Pipes',
      price: 125.00,
      min_order_quantity: 50,
      unit: 'meter',
      seller: { company_name: 'MetalWorks Ltd' },
      images: []
    },
    {
      id: 6,
      title: 'Electronic Components Kit',
      price: 75.00,
      min_order_quantity: 25,
      unit: 'kit',
      seller: { company_name: 'ElectroSupply Co' },
      images: []
    }
  ];

  const displayProducts = products.length > 0 ? products : mockProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
          
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </form>
            
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="created_at">Date Added</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="title">Name</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Order" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desc">Descending</SelectItem>
                  <SelectItem value="asc">Ascending</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {loading ? (
          <div className="text-center py-12">
            <p>Loading products...</p>
          </div>
        ) : (
          <>
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-4'
            }>
              {displayProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className={viewMode === 'grid' ? 'p-4' : 'p-4 flex items-center space-x-4'}>
                    <div className={viewMode === 'grid' ? 'w-full' : 'flex-shrink-0'}>
                      <div className={`bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm ${
                        viewMode === 'grid' ? 'w-full h-40 mb-4' : 'w-20 h-20'
                      }`}>
                        Product Image
                      </div>
                    </div>
                    
                    <div className={viewMode === 'grid' ? 'w-full' : 'flex-1'}>
                      <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                      <p className="text-lg font-bold text-blue-600 mb-1">
                        ${product.price?.toFixed(2) || '0.00'}
                      </p>
                      <p className="text-sm text-gray-500 mb-2">
                        MOQ: {product.min_order_quantity} {product.unit}
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {product.seller?.company_name || 'Unknown Supplier'}
                      </p>
                      <Button size="sm" className="w-full">
                        Contact Supplier
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    const page = i + 1;
                    return (
                      <Button
                        key={page}
                        variant={currentPage === page ? 'default' : 'outline'}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    );
                  })}
                  
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

