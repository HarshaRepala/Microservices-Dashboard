import {NavLink} from "react-router-dom";
import {FaBoxOpen, FaHome, FaShoppingCart, FaUser} from "react-icons/fa";

const menus = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: FaHome
    },
    {
        name: "Products",
        path: "/products",
        icon: FaBoxOpen
    },
    {
        name: "Orders",
        path: "/orders",
        icon: FaShoppingCart
    },
    {
        name: "Profile",
        path: "/profile",
        icon: FaUser
    }
];

export default function Sidebar() {
    return (
        <aside className="w-72 bg-slate-950 border-r border-slate-800 flex flex-col">
            <div className="p-8">

                <h1 className="text-2xl font-bold">

                    🚀 Microservices

                </h1>

                <p className="text-slate-500 text-sm mt-2">

                    Dashboard

                </p>

            </div>

            <nav className="px-4 flex flex-col gap-2">

                {menus.map((menu) => {

                    const Icon = menu.icon;

                    return (
                        <NavLink
                            key={menu.path}
                            to={menu.path}
                            className={({isActive}) =>
                                `flex items-center gap-4 rounded-xl p-4 transition

                ${
                                    isActive
                                        ? "bg-indigo-600"
                                        : "hover:bg-slate-800"
                                }`
                            }
                        >

                            <Icon/>

                            {menu.name}

                        </NavLink>
                    );

                })}

            </nav>
        </aside>
    );
}