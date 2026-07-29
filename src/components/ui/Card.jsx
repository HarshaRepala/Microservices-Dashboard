export default function Card({children, className = ""}) {
    return (
        <div
            className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-4
        shadow-xl
        backdrop-blur-lg
        sm:p-6
        ${className}
      `}
        >
            {children}
        </div>
    );
}