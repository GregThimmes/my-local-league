import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "coach@example.com";
  const passwordHash = await bcrypt.hash("password123", 10);

  await prisma.user.upsert({
    where: { email },
    update: {
      name: "Coach Demo",
      password: passwordHash,
    },
    create: {
      email,
      name: "Coach Demo",
      password: passwordHash,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
