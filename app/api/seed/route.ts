import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST() {
  await prisma.allowedDomain.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.report.deleteMany();
  await prisma.message.deleteMany();
  await prisma.conversation.deleteMany();
  await prisma.teamRequest.deleteMany();
  await prisma.post.deleteMany();
  await prisma.project.deleteMany();
  await prisma.userSkill.deleteMany();
  await prisma.userInterest.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.interest.deleteMany();
  await prisma.user.deleteMany();
  await prisma.college.deleteMany();

  const rvce = await prisma.college.create({
    data: {
      name: 'RV College of Engineering',
      primaryDomain: 'rvce.edu.in',
      additionalDomains: 'rvce.in',
      isActive: true,
      createdByAdmin: true,
    },
  });

  const pes = await prisma.college.create({
    data: {
      name: 'PES University',
      primaryDomain: 'pes.edu',
      additionalDomains: 'pesu.pes.edu',
      isActive: true,
      createdByAdmin: true,
    },
  });

  await prisma.allowedDomain.createMany({
    data: [
      { collegeId: rvce.id, domain: 'rvce.edu.in' },
      { collegeId: rvce.id, domain: 'rvce.in' },
      { collegeId: pes.id, domain: 'pes.edu' },
      { collegeId: pes.id, domain: 'pesu.pes.edu' },
    ],
  });

  const users = await prisma.user.createMany({
    data: [
      {
        email: 'aarav@rvce.edu.in',
        name: 'Aarav Menon',
        branch: 'Computer Science',
        year: '3rd Year',
        bio: 'Building AI products and mentoring student builders.',
        collegeId: rvce.id,
        isVerified: true,
      },
      {
        email: 'sana@pes.edu',
        name: 'Sana Rao',
        branch: 'Information Science',
        year: '2nd Year',
        bio: 'Loves turning ideas into polished student-first products.',
        collegeId: pes.id,
        isVerified: true,
      },
      {
        email: 'rohan@rvce.edu.in',
        name: 'Rohan Patel',
        branch: 'Electronics',
        year: '4th Year',
        bio: 'Interested in embedded systems and distributed builds.',
        collegeId: rvce.id,
        isVerified: false,
      },
    ],
  });

  return NextResponse.json({ success: true, users });
}
