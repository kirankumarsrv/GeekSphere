import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { verifyToken } from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const userId = String(body.userId || '').trim();
  const token = String(body.token || '').trim();

  if (!userId || !token) {
    return NextResponse.json({ error: 'Verification details are required.' }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return NextResponse.json({ error: 'User not found.' }, { status: 404 });
  }

  const ok = await verifyToken(user.id, token);
  if (!ok) {
    return NextResponse.json({ error: 'Invalid or expired verification code.' }, { status: 400 });
  }

  return NextResponse.json({ success: true, message: 'Email verified.' });
}
