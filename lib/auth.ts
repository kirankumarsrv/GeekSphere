import crypto from 'crypto';
import { prisma } from '@/lib/db';

export async function findCollegeByEmail(email: string) {
  const domain = email.trim().split('@')[1]?.toLowerCase();
  if (!domain) return null;

  const allowed = await prisma.allowedDomain.findFirst({
    where: { domain },
    include: { college: true },
  });

  return allowed?.college ?? null;
}

export function hashToken(token: string) {
  return crypto.createHash('sha256').update(token).digest('hex');
}

export async function createVerificationToken(userId: string) {
  const token = Math.floor(100000 + Math.random() * 900000).toString();
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

  await prisma.verificationToken.upsert({
    where: { userId },
    update: {
      tokenHash: hashToken(token),
      expiresAt,
      attempts: 0,
    },
    create: {
      userId,
      tokenHash: hashToken(token),
      expiresAt,
    },
  });

  return token;
}

export async function verifyToken(userId: string, token: string) {
  const record = await prisma.verificationToken.findUnique({ where: { userId } });
  if (!record) return false;
  if (record.expiresAt < new Date()) return false;
  if (record.attempts >= 5) return false;

  const isMatch = record.tokenHash === hashToken(token);
  if (!isMatch) {
    await prisma.verificationToken.update({
      where: { userId },
      data: { attempts: record.attempts + 1 },
    });
    return false;
  }

  await prisma.user.update({
    where: { id: userId },
    data: { isVerified: true },
  });

  await prisma.verificationToken.delete({ where: { userId } });
  return true;
}
