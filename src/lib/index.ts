// place files you want to import through the `$lib` alias in this folder.

import { env } from "$env/dynamic/private";
import { PrismaClient } from "@prisma/client";

const prisma = global._prisma || new PrismaClient();

if (env.NODE_ENV !== "production") {
  global._prisma = prisma;
}

export { prisma };
