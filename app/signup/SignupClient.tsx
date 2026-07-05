"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignupClient() {
  const [form, setForm] = useState({ name: "", email: "", branch: "" });
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [code, setCode] = useState("");

  async function submitSignup(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setMessage(data.message || data.error || "Done");
    if (data.userId) setUserId(data.userId);
  }

  async function submitVerify(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, token: code }),
    });
    const data = await response.json();
    setMessage(data.message || data.error || "Done");
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col px-6 py-16">
      <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Signup</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-950">Verify your college identity</h1>
        <p className="mt-4 text-zinc-600">Use a recognized college email domain and complete the verification step.</p>

        <form onSubmit={submitSignup} className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">Full name</label>
            <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3" placeholder="Asha R" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">College email</label>
            <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3" placeholder="name@college.edu" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-zinc-700">Branch</label>
            <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3" placeholder="Computer Science" value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} />
          </div>
          <button type="submit" className="rounded-full bg-zinc-900 px-5 py-3 font-medium text-white">Continue to verification</button>
        </form>

        {userId ? (
          <form onSubmit={submitVerify} className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
            <label className="mb-2 block text-sm font-medium text-zinc-700">Verification code</label>
            <input className="w-full rounded-2xl border border-zinc-300 px-4 py-3" placeholder="6-digit code" value={code} onChange={(e) => setCode(e.target.value)} />
            <button type="submit" className="rounded-full bg-emerald-600 px-5 py-3 font-medium text-white">Verify email</button>
          </form>
        ) : null}

        <p className="mt-6 text-sm text-zinc-500">
          Need a college added? <Link href="/admin/colleges" className="font-medium text-zinc-900">Request it here</Link>.
        </p>
        {message ? <p className="mt-4 text-sm text-zinc-700">{message}</p> : null}
      </div>
    </main>
  );
}
