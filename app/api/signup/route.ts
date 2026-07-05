import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createVerificationToken, findCollegeByEmail } from '@/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body.email || '').trim().toLowerCase();
  const name = String(body.name || '').trim();
  const branch = String(body.branch || '').trim();

  if (!email || !name) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const college = await findCollegeByEmail(email);
  if (!college) {
    return NextResponse.json({ error: 'Your college email domain is not recognized yet.' }, { status: 400 });
  }

  let user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email,
        name,
        branch,
        collegeId: college.id,
      },
    });
  } else {
    await prisma.user.update({
      where: { id: user.id },
      data: { name, branch, collegeId: college.id },
    });
  }

  const token = await createVerificationToken(user.id);

  return NextResponse.json({
    success: true,
    message: 'Verification code created.',
    userId: user.id,
    token,
  });
}
