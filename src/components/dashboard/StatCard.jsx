import Card from "../ui/Card";

export default function StatCard({
  title,
  value,
  icon,
}) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {value}
        </h2>
      </div>

      <div className="text-5xl">
        {icon}
      </div>
    </Card>
  );
}