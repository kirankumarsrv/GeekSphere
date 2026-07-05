"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type PostItem = {
  id: string;
  type: string;
  body: string;
  author: { name: string };
};

type ProjectItem = {
  id: string;
  title: string;
  status: string;
};

export default function FeedClient() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Build feed</p>
          <h1 className="text-3xl font-semibold text-zinc-950">Technical updates and discovery</h1>
        </div>
        <Link href="/projects/new" className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
          New project
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_0.8fr]">
        <section className="space-y-4">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-zinc-900">{post.author?.name ?? "Unknown user"}</p>
                  <p className="text-sm text-zinc-500">{post.type}</p>
                </div>
              </div>
              <p className="mt-4 leading-7 text-zinc-700">{post.body}</p>
            </article>
          ))}
        </section>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="font-semibold text-zinc-900">Showcase projects</h2>
            <div className="mt-4 space-y-3">
              {projects.map((project) => (
                <div key={project.id} className="rounded-xl bg-zinc-50 p-3">
                  <p className="font-medium text-zinc-900">{project.title}</p>
                  <p className="mt-1 text-sm text-zinc-600">{project.status}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
