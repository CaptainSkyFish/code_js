import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function insertUser(email: string, username: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.user.create({
        data: { email, username, firstName, lastName, password },
        select: { email: true, username: true }
    })
    console.log(res);
}

interface updateParams {
    firstName?: string;
    lastName?: string;
    password?: string;
}

async function updateUser(email: string, username: string, { firstName, lastName, password }: updateParams) {
    return await prisma.user.update({
        where: {
            OR: [
                { email },
                { username }
            ]
        } as any,
        data: { firstName, lastName, password }
    })
}


insertUser("email4@mail.com", "user4", "first4", "last", "secretPass");
insertUser("email5@mail.com", "user5", "first5", "last5", "secretPass");
insertUser("email6@mail.com", "user6", "first6", "last6", "secretPass");