export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-xl
        bg-indigo-600
        hover:bg-indigo-500
        transition-all
        duration-300
        px-5
        py-3
        font-semibold
        shadow-lg
        hover:shadow-indigo-500/30
        ${className}
      `}
    >
      {children}
    </button>
  );
}