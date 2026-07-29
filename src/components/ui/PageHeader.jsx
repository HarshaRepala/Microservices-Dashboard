export default function PageHeader({title, subtitle}) {
    return (
        <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h1>
            {subtitle && (
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                    {subtitle}
                </p>
            )}
        </div>
    );
}