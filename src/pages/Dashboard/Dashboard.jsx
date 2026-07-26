import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";

export default function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        subtitle="Overview of your shopping platform."
      />

      <div className="grid md:grid-cols-3 gap-6">

        <Card>

          <h2 className="text-slate-400">

            Products

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            0

          </h1>

        </Card>

        <Card>

          <h2 className="text-slate-400">

            Orders

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            0

          </h1>

        </Card>

        <Card>

          <h2 className="text-slate-400">

            Users

          </h2>

          <h1 className="text-4xl font-bold mt-3">

            1

          </h1>

        </Card>

      </div>
    </>
  );
}