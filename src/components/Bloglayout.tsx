export default function BlogLayout({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <div className="h-screen grid grid-cols-[320px_1fr]">
      {/* Left */}
      <aside className="border-r overflow-y-auto">{left}</aside>

      {/* Right */}
      <main className="overflow-y-auto">{right}</main>
    </div>
  );
}
