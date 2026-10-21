export default function Checkbox({ children, className = "", ...props }) {
  return (
    <label className={`flex cursor-pointer items-center gap-2 text-xs text-suave ${className}`}>
      <input type="checkbox" className="size-4 rounded border-borda accent-acao" {...props} />
      {children}
    </label>
  );
}
