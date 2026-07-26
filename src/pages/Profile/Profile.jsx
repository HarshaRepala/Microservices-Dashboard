import { useMemo } from "react";
import {
  User,
  Mail,
  Shield,
  KeyRound,
} from "lucide-react";

import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { getUserInfo } from "../../utils/jwt";

export default function Profile() {
  const user = useMemo(() => getUserInfo(), []);

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
            <p>{user.sub}</p>
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
          <p className="text-slate-400">Token Expires</p>
          <p>{new Date(user.exp * 1000).toLocaleString()}</p>
        </div>

      </Card>
    </>
  );
}