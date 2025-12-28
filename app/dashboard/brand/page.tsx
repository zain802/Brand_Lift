"use client";
import React, { useState } from 'react';
import BrandList from '@/components/dashboard/BrandList';
import BrandForm from '@/components/dashboard/BrandForm';

interface BrandLocation {
  type: string;
  coordinates: [number, number];
  text?: string;
}

interface Brand {
  id: number;
  business_name: string;
  business_type: string;
  description: string;
  image: string;
  location: BrandLocation;
  radius_km: number;
  address: string;
  website: string;
  phone: string;
  email: string;
  shop_id: string;
}

export default function BrandPage() {
  const [view, setView] = useState<"list" | "form">("list");
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);

  // Mock Data for initial design presentation
  const [brands, setBrands] = useState<Brand[]>([
    {
      id: 1,
      business_name: "Modern Dental Clinic",
      business_type: "doctor",
      description: "P-first approach.",
      location: { type: "Point", coordinates: [74.3587, 31.5204], text: "Lahore, Pakistan" },
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=400&fit=crop",
      radius_km: 15,
      address: "452 Healthcare Ave, Medical District, Los Angeles, CA",
      website: "https://moderndental.com",
      phone: "+1 (555) 123-4567",
      email: "info@moderndental.com",
      shop_id: "DENT-001"
    },
    {
      id: 2,
      business_name: "The Artisan Bakery",
      business_type: "restaurant",
      description: "Fdaily since 2010.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
      location: { type: "Point", coordinates: [74.3587, 31.5204], text: "Lahore, Pakistan" },
      radius_km: 10,
      address: "12 Bakery Lane, Old Town Square, Los Angeles, CA",
      website: "https://artisanbakery.com",
      phone: "+1 (555) 987-6543",
      email: "hello@artisanbakery.com",
      shop_id: "BAKE-992"
    }
  ]);

  const handleCreateClick = () => {
    setEditingBrand(null);
    setView("form");
  };

  const handleEditClick = (brand: Brand) => {
    setEditingBrand(brand);
    setView("form");
  };

  const handleDeleteClick = (brand: Brand) => {
    if (confirm(`Are you sure you want to delete ${brand.business_name}?`)) {
      setBrands(brands.filter(b => b.id !== brand.id));
    }
  };

  const handleBack = () => {
    setView("list");
    setEditingBrand(null);
  };

  return (
    <div className="max-w-[1600px] mx-auto w-full">
      {view === "list" ? (
        <BrandList
          brands={brands}
          onCreateClick={handleCreateClick}
          onEditClick={handleEditClick}
          onDeleteClick={handleDeleteClick}
        />
      ) : (
        <BrandForm
          onBack={handleBack}
          editData={editingBrand as any}
        />
      )}
    </div>
  );
}
