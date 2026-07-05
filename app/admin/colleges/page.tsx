import { colleges, reports } from "@/lib/mock-data";

export default function AdminCollegesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Admin</p>
        <h1 className="text-3xl font-semibold text-zinc-950">College and moderation queue</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Colleges</h2>
          <div className="mt-4 space-y-3">
            {colleges.map((college) => (
              <div key={college.id} className="rounded-xl bg-zinc-50 p-3">
                <p className="font-medium text-zinc-900">{college.name}</p>
                <p className="mt-1 text-sm text-zinc-600">Domain: {college.primaryDomain}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">Reports</h2>
          <div className="mt-4 space-y-3">
            {reports.map((report) => (
              <div key={report.id} className="rounded-xl bg-zinc-50 p-3">
                <p className="font-medium text-zinc-900">{report.reason}</p>
                <p className="mt-1 text-sm text-zinc-600">Status: {report.status}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
