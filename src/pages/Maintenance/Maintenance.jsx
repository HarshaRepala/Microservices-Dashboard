import { ServerCrash } from "lucide-react";

export default function Maintenance() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
            <div className="max-w-lg w-full rounded-2xl bg-white shadow-lg p-10 text-center">

                <div className="flex justify-center mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
                        <ServerCrash
                            size={42}
                            className="text-blue-600"
                        />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900">
                    We'll be back soon!
                </h1>

                <p className="mt-6 text-gray-600 leading-7">
                    This application is currently unavailable.
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                    It has been temporarily taken offline and will be available
                    again when the developer brings it back online.
                </p>

                <p className="mt-6 text-gray-500">
                    Thank you for your patience.
                </p>

            </div>
        </div>
    );
}