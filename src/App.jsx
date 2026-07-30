import AppRoutes from "./routes/AppRoutes";
import Maintenance from "./pages/Maintenance/Maintenance";
import { useHealth } from "./context/HealthContext";

export default function App() {

    const { loading, backendAvailable, progress } = useHealth();

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
                <div className="w-full max-w-md text-center">

                    <h2 className="mb-6 text-2xl font-bold text-gray-900">
                        Checking application availability...
                    </h2>

                    <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-100"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    <p className="mt-6 text-gray-600">
                        Please wait while we connect to the application.
                    </p>

                </div>
            </div>
        );
    }

    if (!backendAvailable) {
        return <Maintenance />;
    }

    return <AppRoutes />;
}