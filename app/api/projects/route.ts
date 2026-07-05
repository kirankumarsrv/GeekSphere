import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    include: { owner: true },
  });

  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const body = await request.json();
  const ownerId = String(body.ownerId || '').trim();
  const title = String(body.title || '').trim();
  const description = String(body.description || '').trim();
  const techStack = String(body.techStack || '').trim();
  const lookingFor = String(body.lookingFor || '').trim();

  if (!ownerId || !title || !description) {
    return NextResponse.json({ error: 'Owner, title, and description are required.' }, { status: 400 });
  }

  const project = await prisma.project.create({
    data: {
      ownerId,
      title,
      description,
      techStack,
      lookingFor,
      status: 'Seeking collaborators',
    },
  });

  return NextResponse.json(project);
}
