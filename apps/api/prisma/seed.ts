import { scryptSync } from 'node:crypto';
import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

function hashPassword(password: string): string {
  const salt = 'influencer-platform-seed-salt';
  return scryptSync(password, salt, 64).toString('hex');
}

async function main() {
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {
      password_hash: hashPassword('Password123!'),
      role: Role.ADMIN
    },
    create: {
      email: 'admin@example.com',
      password_hash: hashPassword('Password123!'),
      role: Role.ADMIN
    }
  });

  console.log('Admin user ensured: admin@example.com');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
