"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/Redux/Slices/AuthSlice";
import { decryptData } from "@/utils/encrypt";

// Role Specific Dashboards - Added .jsx to resolve IDE/Build path issues
import MerchantDashboard from "@/components/dashboard/roles/merchant/MerchantDashboard.jsx";
import CreatorDashboard from "@/components/dashboard/roles/creator/CreatorDashboard.jsx";
import MemberDashboard from "@/components/dashboard/roles/member/MemberDashboard.jsx";
import ElitePartnerDashboard from "@/components/dashboard/roles/elite_partner/ElitePartnerDashboard.jsx";
import DesignerDashboard from "@/components/dashboard/roles/designer/DesignerDashboard.jsx";
import DeveloperDashboard from "@/components/dashboard/roles/developer/DeveloperDashboard.jsx";

export default function DashboardPage() {
    const encryptedUser = useSelector(selectUser);
    const userData = encryptedUser ? decryptData(encryptedUser) : null;
    const userRole = userData?.user_type || userData?.data?.user?.user_type || "merchant";

    const renderDashboard = () => {
        switch (userRole) {
            case "merchant": return <MerchantDashboard />;
            case "creator": return <CreatorDashboard />;
            case "member": return <MemberDashboard />;
            case "elite_partner": return <ElitePartnerDashboard />;
            case "designer": return <DesignerDashboard />;
            case "developer": return <DeveloperDashboard />;
            default: return <MerchantDashboard />;
        }
    };

    return (
        <div className="max-w-[1600px] mx-auto w-full">
            {renderDashboard()}
        </div>
    );
}
