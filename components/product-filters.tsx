"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  rating: number;
  inStock: boolean;
}

interface ProductFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

const categories = [
  { id: "notebooks", name: "Notebooks", count: 4 },
  { id: "pens", name: "Pens & Pencils", count: 3 },
  { id: "accessories", name: "Desk Accessories", count: 2 },
  { id: "art-supplies", name: "Art Supplies", count: 0 },
  { id: "planners", name: "Planners", count: 0 },
];

const brands = [
  { id: "deli", name: "Deli", count: 4 },
  { id: "u-grade", name: "U-Grade", count: 2 },
  { id: "pilot", name: "Pilot", count: 2 },
  { id: "stabilo", name: "STABILO", count: 1 },
];

export function ProductFilters({
  filters,
  onFiltersChange,
}: ProductFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilters = (updates: Partial<FilterState>) => {
    onFiltersChange({ ...filters, ...updates });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRange: [5000, 100000],
      brands: [],
      rating: 0,
      inStock: false,
    });
  };

  const activeFiltersCount =
    filters.categories.length +
    filters.brands.length +
    (filters.rating > 0 ? 1 : 0) +
    (filters.inStock ? 1 : 0);

  return (
    <div className="space-y-6">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full justify-between"
        >
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </Button>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {category}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() =>
                  updateFilters({
                    categories: filters.categories.filter(
                      (c) => c !== category
                    ),
                  })
                }
              />
            </Badge>
          ))}
          {filters.brands.map((brand) => (
            <Badge
              key={brand}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {brand}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() =>
                  updateFilters({
                    brands: filters.brands.filter((b) => b !== brand),
                  })
                }
              />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            Clear all
          </Button>
        </div>
      )}

      {/* Filter Panel */}
      <div className={`space-y-6 ${isOpen ? "block" : "hidden lg:block"}`}>
        {/* Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFilters({
                          categories: [...filters.categories, category.id],
                        });
                      } else {
                        updateFilters({
                          categories: filters.categories.filter(
                            (c) => c !== category.id
                          ),
                        });
                      }
                    }}
                  />
                  <label
                    htmlFor={category.id}
                    className="text-sm cursor-pointer"
                  >
                    {category.name}
                  </label>
                </div>
                <span className="text-xs text-gray-500">
                  ({category.count})
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Price Range */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Price Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) =>
                updateFilters({ priceRange: value as [number, number] })
              }
              max={100000}
              min={5000}
              step={10}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{filters.priceRange[0].toLocaleString()} MMK</span>
              <span>{filters.priceRange[1].toLocaleString()} MMK</span>
            </div>
          </CardContent>
        </Card>

        {/* Brands */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Brands</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={brand.id}
                    checked={filters.brands.includes(brand.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        updateFilters({
                          brands: [...filters.brands, brand.id],
                        });
                      } else {
                        updateFilters({
                          brands: filters.brands.filter((b) => b !== brand.id),
                        });
                      }
                    }}
                  />
                  <label htmlFor={brand.id} className="text-sm cursor-pointer">
                    {brand.name}
                  </label>
                </div>
                <span className="text-xs text-gray-500">({brand.count})</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Rating */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Minimum Rating
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={filters.rating === rating}
                  onCheckedChange={(checked) => {
                    updateFilters({ rating: checked ? rating : 0 });
                  }}
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="text-sm cursor-pointer flex items-center"
                >
                  {rating}+ Stars
                </label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Stock Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Availability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="in-stock"
                checked={filters.inStock}
                onCheckedChange={(checked) =>
                  updateFilters({ inStock: !!checked })
                }
              />
              <label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </label>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
