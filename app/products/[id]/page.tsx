"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useCart } from "@/contexts/cart-context"
import { Heart, Star, Plus, Minus, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"
import { getProductById, getRelatedProducts } from "@/lib/products-data"

const sampleReviews = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    date: "2024-01-15",
    title: "Exceptional Quality",
    content:
      "This product exceeded my expectations. The quality is outstanding and it's perfect for daily use. Highly recommend!",
  },
  {
    id: "2",
    author: "David K.",
    rating: 5,
    date: "2024-01-10",
    title: "Perfect for Professional Use",
    content: "I use this for work and it's been fantastic. Great quality and very professional looking.",
  },
  {
    id: "3",
    author: "Emma L.",
    rating: 4,
    date: "2024-01-05",
    title: "Great Product",
    content:
      "Love the quality and attention to detail. Minor issue with delivery time but the product itself is excellent.",
  },
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { addItem } = useCart()

  const product = getProductById(params.id)
  const relatedProducts = getRelatedProducts(params.id, 3)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-16">
            <h1 className="font-heading font-bold text-2xl text-[#374151] mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <Button className="bg-[#6366f1] hover:bg-[#5855eb] text-white">Browse All Products</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
        category: product.category,
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-[#374151]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#374151]">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products?category=${product.category.toLowerCase()}`} className="hover:text-[#374151]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#374151]">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-zoom-in"
              />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ease-in-out ${
                    selectedImage === index ? "border-[#6366f1]" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary" className="text-xs">
                  {product.brand}
                </Badge>
                {product.isSale && <Badge className="bg-red-500 text-white text-xs">Sale</Badge>}
                {product.isNew && <Badge className="bg-[#6366f1] text-white text-xs">New</Badge>}
              </div>

              <h1 className="font-heading font-bold text-3xl text-[#374151] mb-4">{product.name}</h1>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading font-bold text-3xl text-[#374151]">${product.price}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <Badge className="bg-red-500 text-white">Save {discountPercentage}%</Badge>
                  </>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={`text-sm ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? `In Stock (${product.stockCount} available)` : "Out of Stock"}
              </span>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                    disabled={quantity >= product.stockCount}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-[#6366f1] hover:bg-[#5855eb] text-white"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={isWishlisted ? "text-red-500 border-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-lg text-[#374151]">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-[#6366f1] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="h-6 w-6 text-[#6366f1] mx-auto mb-2" />
                <div className="text-xs font-medium text-[#374151]">Free Shipping</div>
                <div className="text-xs text-gray-500">On orders $50+</div>
              </div>
              <div className="text-center">
                <Shield className="h-6 w-6 text-[#6366f1] mx-auto mb-2" />
                <div className="text-xs font-medium text-[#374151]">Quality Guarantee</div>
                <div className="text-xs text-gray-500">Premium materials</div>
              </div>
              <div className="text-center">
                <RotateCcw className="h-6 w-6 text-[#6366f1] mx-auto mb-2" />
                <div className="text-xs font-medium text-[#374151]">30-Day Returns</div>
                <div className="text-xs text-gray-500">Easy returns</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="specifications" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>

          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-medium text-[#374151]">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              {sampleReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-[#374151]">{review.author}</span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <h4 className="font-medium text-[#374151] mb-2">{review.title}</h4>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#374151] mb-3">Shipping Information</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free standard shipping on orders over $50</li>
                    <li>• Standard shipping (5-7 business days): $8.99</li>
                    <li>• Express shipping (2-3 business days): $15.99</li>
                    <li>• Overnight shipping: $25.99</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-[#374151] mb-3">Returns & Exchanges</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 30-day return policy for unused items</li>
                    <li>• Free returns on defective products</li>
                    <li>• Return shipping costs apply for non-defective returns</li>
                    <li>• Refunds processed within 5-7 business days</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-heading font-bold text-2xl text-[#374151] mb-8">You Might Also Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
                  <Card className="group cursor-pointer hover-lift">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <img
                          src={relatedProduct.image || "/placeholder.svg"}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-[#374151] mb-2">{relatedProduct.name}</h3>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-lg text-[#374151]">${relatedProduct.price}</span>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs text-gray-600">{relatedProduct.rating}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
