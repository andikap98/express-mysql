const { Prisma, PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient

const getAllUsers = async () =>{
    const users = await prisma.users.findMany();
    return users
}

const createUser = async () => {
    const user =  await prisma.users.create();
    return user
}

module.exports = {
    getAllUsers, createUser }