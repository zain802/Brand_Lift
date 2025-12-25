"use client";
import React, { useState } from 'react';
import ShopList from '@/components/dashboard/ShopList';
import ShopForm from '@/components/dashboard/ShopForm';

export default function ShopsPage() {
    const [view, setView] = useState<"list" | "form">("list");
    const [editingShop, setEditingShop] = useState<any | null>(null);

    // Mock Data for Shops
    const [shops, setShops] = useState([
        {
            id: 1,
            shop_name: "Tech Haven Faisalabad",
            logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
            color_scheme: "#7c3aed",
            theme: "dark",
            shop_card: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
        },
        {
            id: 2,
            shop_name: "Organic Delights",
            logo: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=400&fit=crop",
            color_scheme: "#10b981",
            theme: "light",
            shop_card: "https://images.unsplash.com/photo-1506484334402-40f21503fd0b?w=800&h=400&fit=crop"
        }
    ]);

    const handleCreateClick = () => {
        setEditingShop(null);
        setView("form");
    };

    const handleEditClick = (shop: any) => {
        setEditingShop(shop);
        setView("form");
    };

    const handleDeleteClick = (shop: any) => {
        if (confirm(`Archive ${shop.shop_name} from list?`)) {
            setShops(shops.filter(s => s.id !== shop.id));
        }
    };

    const handleBack = () => {
        setView("list");
        setEditingShop(null);
    };

    return (
        <div className="max-w-[1600px] mx-auto w-full">
            {view === "list" ? (
                <ShopList
                    shops={shops}
                    onCreateClick={handleCreateClick}
                    onEditClick={handleEditClick}
                    onDeleteClick={handleDeleteClick}
                />
            ) : (
                <ShopForm
                    onBack={handleBack}
                    editData={editingShop}
                />
            )}
        </div>
    );
}
