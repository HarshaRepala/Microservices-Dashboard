import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-[#050816]">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="p-10">

          <Outlet />

        </main>

      </div>

    </div>
  );
}