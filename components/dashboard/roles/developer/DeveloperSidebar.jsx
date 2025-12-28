"use client";
import React from "react";
const DeveloperSidebar = ({ isOpen, setIsOpen }) => <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-emerald-950 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}><div className="p-8"><h2 className="text-xl font-black uppercase">Developer</h2></div></aside>;
export default DeveloperSidebar;
