export type College = {
  id: string;
  name: string;
  primaryDomain: string;
  additionalDomains: string[];
  logoUrl: string;
  isActive: boolean;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  collegeId: string;
  branch: string;
  year: string;
  bio: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  isVerified: boolean;
  skills: string[];
  interests: string[];
};

export type Project = {
  id: string;
  ownerId: string;
  title: string;
  description: string;
  techStack: string[];
  repoUrl?: string;
  lookingFor: string[];
  status: string;
};

export type Post = {
  id: string;
  authorId: string;
  type: "project_update" | "learning" | "question" | "achievement" | "hackathon";
  body: string;
  projectId?: string;
};

export type TeamRequest = {
  id: string;
  projectId?: string;
  hackathonName?: string;
  roleNeeded: string;
  skillsNeeded: string[];
  duration: string;
  status: string;
};

export type Conversation = {
  id: string;
  userIds: string[];
  lastMessage: string;
};

export type Report = {
  id: string;
  reporterId: string;
  targetType: string;
  targetId: string;
  reason: string;
  status: string;
};

export const colleges: College[] = [
  {
    id: "rvce",
    name: "RV College of Engineering",
    primaryDomain: "rvce.edu.in",
    additionalDomains: ["rvce.in"],
    logoUrl: "/logos/rvce.svg",
    isActive: true,
  },
  {
    id: "pes",
    name: "PES University",
    primaryDomain: "pes.edu",
    additionalDomains: ["pesu.pes.edu"],
    logoUrl: "/logos/pes.svg",
    isActive: true,
  },
];

export const users: UserProfile[] = [
  {
    id: "u1",
    name: "Aarav Menon",
    email: "aarav@rvce.edu.in",
    collegeId: "rvce",
    branch: "Computer Science",
    year: "3rd Year",
    bio: "Building AI products and mentoring first-year builders.",
    githubUrl: "https://github.com/aarav",
    linkedinUrl: "https://linkedin.com/in/aarav",
    portfolioUrl: "https://aarav.dev",
    isVerified: true,
    skills: ["Next.js", "TypeScript", "Prisma"],
    interests: ["Hackathons", "Open Source", "AI"],
  },
  {
    id: "u2",
    name: "Sana Rao",
    email: "sana@pes.edu",
    collegeId: "pes",
    branch: "Information Science",
    year: "2nd Year",
    bio: "Loves turning ideas into polished student-first products.",
    githubUrl: "https://github.com/sana",
    linkedinUrl: "https://linkedin.com/in/sana",
    isVerified: true,
    skills: ["React", "UI Design", "PostgreSQL"],
    interests: ["Product Design", "Startups", "Community"],
  },
  {
    id: "u3",
    name: "Rohan Patel",
    email: "rohan@rvce.edu.in",
    collegeId: "rvce",
    branch: "Electronics",
    year: "4th Year",
    bio: "Interested in embedded systems and distributed builds.",
    isVerified: false,
    skills: ["C++", "Embedded", "IoT"],
    interests: ["Robotics", "Hardware"],
  },
];

export const projects: Project[] = [
  {
    id: "p1",
    ownerId: "u1",
    title: "Campus Study Circle",
    description: "A lightweight platform for peer-led study groups and technical sessions.",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    repoUrl: "https://github.com/geekconnect/campus-study-circle",
    lookingFor: ["UI engineer", "Backend contributor"],
    status: "Seeking collaborators",
  },
  {
    id: "p2",
    ownerId: "u2",
    title: "Hackathon Matchmaker",
    description: "Finds teammates, mentors, and shared interests for college hackathons.",
    techStack: ["React", "Supabase", "Tailwind"],
    lookingFor: ["Product designer", "Full-stack dev"],
    status: "In progress",
  },
];

export const posts: Post[] = [
  {
    id: "po1",
    authorId: "u1",
    type: "project_update",
    body: "We just shipped the onboarding flow and verified the first college email domain workflow.",
    projectId: "p1",
  },
  {
    id: "po2",
    authorId: "u2",
    type: "learning",
    body: "Sharing a quick guide on building a strong hackathon team profile before registration week.",
  },
  {
    id: "po3",
    authorId: "u3",
    type: "question",
    body: "Who has experience with low-latency messaging for student communities?",
  },
];

export const teamRequests: TeamRequest[] = [
  {
    id: "tr1",
    hackathonName: "Hack the Campus",
    roleNeeded: "Frontend Developer",
    skillsNeeded: ["React", "Tailwind"],
    duration: "2 weeks",
    status: "Open",
  },
  {
    id: "tr2",
    projectId: "p2",
    roleNeeded: "Product Designer",
    skillsNeeded: ["Figma", "Design systems"],
    duration: "3 weeks",
    status: "Open",
  },
];

export const conversations: Conversation[] = [
  {
    id: "c1",
    userIds: ["u1", "u2"],
    lastMessage: "Would you like to review the launch checklist?",
  },
  {
    id: "c2",
    userIds: ["u1", "u3"],
    lastMessage: "I can help with the verification flow.",
  },
];

export const reports: Report[] = [
  {
    id: "r1",
    reporterId: "u1",
    targetType: "user",
    targetId: "u3",
    reason: "Spammy direct messages",
    status: "Pending",
  },
];

export function getUserById(id: string) {
  return users.find((user) => user.id === id);
}

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function getCollegeById(id: string) {
  return colleges.find((college) => college.id === id);
}
