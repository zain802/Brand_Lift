"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/Redux/Slices/AuthSlice";
import { decryptData } from "@/utils/encrypt";

// Merchant - Added .jsx to resolve IDE/Build path issues
import MerchantSidebar from "@/components/dashboard/roles/merchant/MerchantSidebar.jsx";
import MerchantTopbar from "@/components/dashboard/roles/merchant/MerchantTopbar.jsx";

// Creator
import CreatorSidebar from "@/components/dashboard/roles/creator/CreatorSidebar.jsx";
import CreatorTopbar from "@/components/dashboard/roles/creator/CreatorTopbar.jsx";

// Member
import MemberSidebar from "@/components/dashboard/roles/member/MemberSidebar.jsx";
import MemberTopbar from "@/components/dashboard/roles/member/MemberTopbar.jsx";

// Elite
import ElitePartnerSidebar from "@/components/dashboard/roles/elite_partner/ElitePartnerSidebar.jsx";
import ElitePartnerTopbar from "@/components/dashboard/roles/elite_partner/ElitePartnerTopbar.jsx";

// Designer
import DesignerSidebar from "@/components/dashboard/roles/designer/DesignerSidebar.jsx";
import DesignerTopbar from "@/components/dashboard/roles/designer/DesignerTopbar.jsx";

// Developer
import DeveloperSidebar from "@/components/dashboard/roles/developer/DeveloperSidebar.jsx";
import DeveloperTopbar from "@/components/dashboard/roles/developer/DeveloperTopbar.jsx";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const encryptedUser = useSelector(selectUser);
    const userData = encryptedUser ? decryptData(encryptedUser) : null;
    const userRole = userData?.user_type || userData?.data?.user?.user_type || "merchant";

    // Component Factory
    const renderSidebar = () => {
        const props = { isOpen: sidebarOpen, setIsOpen: setSidebarOpen };
        switch (userRole) {
            case "merchant": return <MerchantSidebar {...props} />;
            case "creator": return <CreatorSidebar {...props} />;
            case "member": return <MemberSidebar {...props} />;
            case "elite_partner": return <ElitePartnerSidebar {...props} />;
            case "designer": return <DesignerSidebar {...props} />;
            case "developer": return <DeveloperSidebar {...props} />;
            default: return <MerchantSidebar {...props} />;
        }
    };

    const renderTopbar = () => {
        const props = { onMenuClick: () => setSidebarOpen(true) };
        switch (userRole) {
            case "merchant": return <MerchantTopbar {...props} />;
            case "creator": return <CreatorTopbar {...props} />;
            case "member": return <MemberTopbar {...props} />;
            case "elite_partner": return <ElitePartnerTopbar {...props} />;
            case "designer": return <DesignerTopbar {...props} />;
            case "developer": return <DeveloperTopbar {...props} />;
            default: return <MerchantTopbar {...props} />;
        }
    }

    return (
        <div className="flex h-screen bg-[#F8FAFF] overflow-hidden font-sans relative">
            {renderSidebar()}

            <div className="flex-1 flex flex-col overflow-hidden">
                {renderTopbar()}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F8FAFF] p-4 sm:p-6 lg:p-10">
                    {children}
                </main>
            </div>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
