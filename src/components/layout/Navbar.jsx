import {Menu} from "lucide-react";

export default function Navbar({onMenuToggle}) {
    return (
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/95 px-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={onMenuToggle}
                    className="rounded-lg border border-slate-700 p-2 lg:hidden"
                    aria-label="Open sidebar"
                >
                    <Menu size={18} />
                </button>

                <h2 className="text-lg font-semibold sm:text-xl">
                    Microservices Dashboard
                </h2>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                    U
                </div>
            </div>
        </header>
    );
}