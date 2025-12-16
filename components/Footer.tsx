export default function Footer() {
  return (
    <footer className="border-t mt-16 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-zinc-600">
        <p className="font-semibold text-zinc-800">LA Family Landscaping</p>
        <p>Family-owned & operated in Los Angeles for over 30 years.</p>
        <p className="mt-2">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
