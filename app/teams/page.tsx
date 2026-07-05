import { teamRequests } from "@/lib/mock-data";

export default function TeamsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Team finder</p>
        <h1 className="text-3xl font-semibold text-zinc-950">Find the right people for your next build</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {teamRequests.map((request) => (
          <article key={request.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-950">{request.hackathonName ?? "Project-based team"}</h2>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">{request.status}</span>
            </div>
            <p className="mt-4 text-zinc-700">Role needed: {request.roleNeeded}</p>
            <p className="mt-2 text-zinc-700">Duration: {request.duration}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {request.skillsNeeded.map((skill) => (
                <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
