import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout() {

    return (

        <div className="flex bg-[#050816] text-white">

            <Sidebar />

            <div className="flex-1">

                <Navbar />

                <main className="p-8">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}