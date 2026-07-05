"use client";

import { useState } from "react";

export default function NewProjectPage() {
  const [form, setForm] = useState({ title: "", description: "", techStack: "", lookingFor: "", ownerId: "" });
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(res.ok ? `Created project ${data.title}` : data.error || "Failed");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-semibold text-zinc-950">Create a project</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Owner ID" value={form.ownerId} onChange={(e) => setForm({ ...form, ownerId: e.target.value })} />
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Project title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea className="w-full rounded-xl border px-4 py-3" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Tech stack" value={form.techStack} onChange={(e) => setForm({ ...form, techStack: e.target.value })} />
        <input className="w-full rounded-xl border px-4 py-3" placeholder="Looking for" value={form.lookingFor} onChange={(e) => setForm({ ...form, lookingFor: e.target.value })} />
        <button className="rounded-full bg-zinc-900 px-5 py-3 font-medium text-white" type="submit">Save project</button>
      </form>
      {message ? <p className="mt-4 text-sm text-zinc-700">{message}</p> : null}
    </main>
  );
}
