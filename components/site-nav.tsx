import Link from "next/link";

const links = [
  { href: "/feed", label: "Feed" },
  { href: "/projects", label: "Projects" },
  { href: "/teams", label: "Teams" },
  { href: "/search", label: "Search" },
  { href: "/messages", label: "Messages" },
  { href: "/admin/colleges", label: "Admin" },
];

export function SiteNav() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          GeekConnect
        </Link>
        <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-zinc-900">
              {link.label}
            </Link>
          ))}
          <Link href="/signup" className="rounded-full bg-zinc-900 px-4 py-2 font-medium text-white">
            Join now
          </Link>
        </nav>
      </div>
    </header>
  );
}
