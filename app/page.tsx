import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import { colleges, projects, users } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.03),_transparent_45%)]">
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:py-28">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600 shadow-sm">
            <Sparkles className="h-4 w-4" /> Verified student community for building and collaborating
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl">
            Grow your college network around projects, teams, and real momentum.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600">
            GeekConnect helps verified students discover collaborators, showcase work, find hackathon teams, and learn together in a focused community that feels more useful than scattered chats.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 font-medium text-white transition hover:bg-zinc-700">
              Create your profile <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/feed" className="rounded-full border border-zinc-300 px-5 py-3 font-medium text-zinc-700 transition hover:border-zinc-900 hover:text-zinc-900">
              Explore the feed
            </Link>
          </div>
        </div>

        <div className="w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <ShieldCheck className="h-4 w-4" /> Verified by college email
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-sm text-zinc-500">Pilot colleges</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {colleges.map((college) => (
                  <span key={college.id} className="rounded-full bg-white px-3 py-1 text-sm text-zinc-700 shadow-sm">
                    {college.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-sm text-zinc-500">Active builder profiles</p>
              <p className="mt-2 text-3xl font-semibold text-zinc-950">{users.length}</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <p className="text-sm text-zinc-500">Live showcase projects</p>
              <p className="mt-2 text-3xl font-semibold text-zinc-950">{projects.length}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Build a verified profile",
              text: "Showcase skills, interests, and your college identity in one place.",
            },
            {
              title: "Find teammates fast",
              text: "Post projects or team requests and connect with builders who match your goals.",
            },
            {
              title: "Share learning momentum",
              text: "Keep the community active with updates, questions, and project wins.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-zinc-100 p-2 text-zinc-700">
                <Users className="h-4 w-4" />
              </div>
              <h2 className="text-lg font-semibold text-zinc-950">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-zinc-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
