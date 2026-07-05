import { colleges, users } from "@/lib/mock-data";

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Search</p>
        <h1 className="text-3xl font-semibold text-zinc-950">Discover by college, skill, and interest</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Colleges</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {colleges.map((college) => (
              <span key={college.id} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
                {college.name}
              </span>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Builders</h2>
          <div className="mt-4 space-y-3">
            {users.map((user) => (
              <div key={user.id} className="rounded-xl bg-zinc-50 p-3">
                <p className="font-medium text-zinc-900">{user.name}</p>
                <p className="mt-1 text-sm text-zinc-600">Skills: {user.skills.join(", ")}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
