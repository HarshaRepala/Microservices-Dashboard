import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-[#050816]">
            <div className="flex min-h-screen flex-col lg:flex-row">
                <Sidebar />

                <div className="flex flex-1 flex-col">
                    <Navbar />

                    <main className="flex-1 p-4 sm:p-6 lg:p-8">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
}