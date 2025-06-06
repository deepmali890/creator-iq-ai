import { PrismaClient } from "@prisma/client";


export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = db;



// golbilThis.prisma: This Globel Vareiable is used to store the instance of the PrismaClient.