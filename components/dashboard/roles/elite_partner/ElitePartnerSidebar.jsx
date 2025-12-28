"use client";
import React from "react";
const EliteSidebar = ({ isOpen, setIsOpen }) => <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-amber-950 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col`}><div className="p-8"><h2 className="text-xl font-black uppercase">Elite Partner</h2></div><div className="flex-1 p-8 text-amber-500 font-bold uppercase text-[10px]">Partner Menu</div></aside>;
export default EliteSidebar;
