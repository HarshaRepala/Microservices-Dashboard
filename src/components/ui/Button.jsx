export default function Button({
                                   children,
                                   type = "button",
                                   onClick,
                                   disabled = false,
                                   className = "",
                               }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        w-full
        rounded-xl
        bg-indigo-600
        py-3
        font-semibold
        transition-all
        duration-300
        hover:bg-indigo-500
        hover:scale-[1.02]
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${className}
      `}
        >
            {children}
        </button>
    );
}