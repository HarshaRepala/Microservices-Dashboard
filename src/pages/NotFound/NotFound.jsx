import { Link } from "react-router-dom";
import { TriangleAlert } from "lucide-react";

import Button from "../../components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-6">

      <TriangleAlert
        size={70}
        className="text-indigo-500"
      />

      <h1 className="mt-6 text-6xl font-bold">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/dashboard">
        <Button className="mt-8">
          Back to Dashboard
        </Button>
      </Link>

    </div>
  );
}