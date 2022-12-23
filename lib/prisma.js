import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(
    {log: ["info", "warn", "error"]
})

// if (process.env.NODE_ENV === 'development') global.prisma = prisma

const start = Date.now();
prisma.$connect().then(() => {
  const end = Date.now();
  console.log(`🔌 connecting to database took ${end - start}ms`);
});

export default prisma
