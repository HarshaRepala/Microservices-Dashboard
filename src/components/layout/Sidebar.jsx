import {NavLink} from "react-router-dom";
import {LayoutDashboard, Package, ShoppingCart, User} from "lucide-react";

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

export default function Sidebar() {
    return (
        <aside className="w-64 bg-slate-950 border-r border-slate-800 min-h-screen">

            <div className="text-2xl font-bold p-8">
                🚀 Dashboard
            </div>

            <nav className="flex flex-col gap-2 px-4">

                {menu.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({isActive}) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition
                                ${
                                    isActive
                                        ? "bg-indigo-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >

                            <Icon size={20}/>

                            {item.name}

                        </NavLink>

                    );
                })}
            </nav>

        </aside>
    );
}