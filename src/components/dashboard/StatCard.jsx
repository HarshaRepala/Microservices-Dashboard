import Card from "../ui/Card";

export default function StatCard({
                                     title,
                                     value,
                                     icon,
                                 }) {
    return (
        <Card className="flex items-center justify-between gap-3">
            <div>
                <p className="text-sm text-slate-400">
                    {title}
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                    {value}
                </h2>
            </div>

            <div className="text-4xl sm:text-5xl">
                {icon}
            </div>
        </Card>
    );
}