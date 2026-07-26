import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-950 flex items-center justify-between px-8">

      <h2 className="font-semibold text-xl">

        Welcome Back 👋

      </h2>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer"/>

        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">

          U

        </div>

      </div>

    </header>
  );
}