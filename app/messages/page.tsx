import { conversations, users } from "@/lib/mock-data";

export default function MessagesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Direct messaging</p>
        <h1 className="text-3xl font-semibold text-zinc-950">Message verified builders securely</h1>
      </div>

      <div className="space-y-4">
        {conversations.map((conversation) => {
          const [first, second] = conversation.userIds.map((id) => users.find((user) => user.id === id));
          return (
            <article key={conversation.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900">{first?.name} ↔ {second?.name}</p>
                  <p className="mt-1 text-sm text-zinc-600">{conversation.lastMessage}</p>
                </div>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600">Verified only</span>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
