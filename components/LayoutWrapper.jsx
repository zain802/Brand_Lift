"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    // Hide Header and Footer on login and signup pages
    const hideHeaderFooter = pathname === "/login" || pathname === "/signup";

    return (
        <>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
        </>
    );
}
