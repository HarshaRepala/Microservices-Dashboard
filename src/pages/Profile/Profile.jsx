import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Shield,
  KeyRound,
  LogOut,
} from "lucide-react";

import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import PageHeader from "../../components/ui/PageHeader";

import { getUserInfo } from "../../utils/jwt";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const user = useMemo(() => getUserInfo(), []);

  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  if (!user) {
    return (
      <>
        <PageHeader
          title="Profile"
          subtitle="Your account information"
        />

        <Card>
          <p>Unable to load profile.</p>
        </Card>
      </>
    );
  }

  return (
    <>
      <PageHeader
        title="Profile"
        subtitle="Your account information"
      />

      <Card className="space-y-6">
        <div className="flex items-center gap-3">
          <Mail className="text-indigo-400" />

          <div>
            <p className="text-slate-400">Email</p>

            <h2 className="text-xl font-semibold">
              {user.email}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <User className="text-indigo-400" />

          <div>
            <p className="text-slate-400">User ID</p>

            <p className="break-all">
              {user.sub}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Shield className="text-indigo-400" />

          <div>
            <p className="text-slate-400">Role</p>

            <p>{user.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <KeyRound className="text-indigo-400" />

          <div>
            <p className="text-slate-400">Issued By</p>

            <p>{user.iss}</p>
          </div>
        </div>

        <div>
          <p className="text-slate-400">
            Token Expires
          </p>

          <p>
            {new Date(user.exp * 1000).toLocaleString()}
          </p>
        </div>

        <div className="border-t border-slate-700 pt-6">
          <Button
            onClick={handleLogout}
            className="mt-6 w-fit flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>
      </Card>
    </>
  );
}