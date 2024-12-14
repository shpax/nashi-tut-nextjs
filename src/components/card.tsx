export function Card({
  children,
  className,
  onClick,
}: React.PropsWithChildren & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`bg-primary text-white shadow-lg rounded-3xl overflow-hidden m-2 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
