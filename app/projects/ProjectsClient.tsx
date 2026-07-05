"use client";

import { useEffect, useState } from "react";

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  techStack: string;
  lookingFor: string;
  status: string;
  owner?: { name: string };
};

export default function ProjectsClient() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-zinc-500">Project showcase</p>
        <h1 className="text-3xl font-semibold text-zinc-950">Student projects and collaborators</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-950">{project.title}</h2>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-600">{project.status}</span>
            </div>
            <p className="mt-4 leading-7 text-zinc-700">{project.description}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-900">Tech stack</p>
              <p className="mt-2 text-sm text-zinc-600">{project.techStack}</p>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-900">Looking for</p>
              <p className="mt-2 text-sm text-zinc-600">{project.lookingFor}</p>
            </div>
            <p className="mt-4 text-sm text-zinc-500">Owner: {project.owner?.name ?? "Unknown"}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
