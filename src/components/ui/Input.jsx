export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-slate-300">{label}</label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900/60
          px-4
          py-3
          outline-none
          transition
          focus:border-indigo-500
          focus:ring-2
          focus:ring-indigo-500/30
        "
      />
    </div>
  );
}