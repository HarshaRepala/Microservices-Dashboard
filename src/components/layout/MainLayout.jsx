import {useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen bg-[#050816] text-white">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <div className="flex min-h-screen flex-1 flex-col">
                <Navbar onMenuToggle={() => setSidebarOpen((prev) => !prev)} />

                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>

            {sidebarOpen && (
                <button
                    type="button"
                    aria-label="Close sidebar"
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 z-30 bg-slate-950/70 lg:hidden"
                />
            )}
        </div>
    );
}