import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: true, project: true },
  });

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const authorId = String(body.authorId || '').trim();
  const type = String(body.type || '').trim();
  const bodyText = String(body.body || '').trim();

  if (!authorId || !type || !bodyText) {
    return NextResponse.json({ error: 'Author, type, and body are required.' }, { status: 400 });
  }

  const post = await prisma.post.create({
    data: {
      authorId,
      type,
      body: bodyText,
    },
  });

  return NextResponse.json(post);
}
