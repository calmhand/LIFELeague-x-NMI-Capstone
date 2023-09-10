const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const allAdmins = await prisma.admin.findMany()
    console.log(allAdmins)
  }
  
main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})