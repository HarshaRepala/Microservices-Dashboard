import AppRoutes from "./routes/AppRoutes";
import Maintenance from "./pages/Maintenance/Maintenance";
import { useHealth } from "./context/HealthContext";

export default function App() {

    const { loading, backendAvailable } = useHealth();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <div className="h-12 w-12 mx-auto animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

                    <p className="mt-5 text-gray-600">
                        Checking application status...
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