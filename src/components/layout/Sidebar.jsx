import {NavLink} from "react-router-dom";
import {LayoutDashboard, Package, ShoppingCart, User, X} from "lucide-react";

const menu = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
        name: "Products",
        path: "/products",
        icon: Package
    },
    {
        name: "Orders",
        path: "/orders",
        icon: ShoppingCart
    },
    {
        name: "Profile",
        path: "/profile",
        icon: User
    }
];

export default function Sidebar({isOpen, onClose}) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-800 bg-slate-950 transition-transform duration-300 lg:static lg:translate-x-0 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="flex items-center justify-between p-6">
                <div className="text-2xl font-bold">
                    🚀 Dashboard
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg p-2 hover:bg-slate-800 lg:hidden"
                    aria-label="Close sidebar"
                >
                    <X size={20} />
                </button>
            </div>

            <nav className="flex flex-col gap-2 px-4">
                {menu.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            onClick={onClose}
                            className={({isActive}) =>
                                `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                                    isActive
                                        ? "bg-indigo-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >
                            <Icon size={20} />
                            {item.name}
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
}