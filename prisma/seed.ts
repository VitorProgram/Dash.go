const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'joaovitornascimentoif@gmail.com',
      password: '94003291',
      accounts: {
        create: [
          {
            name: 'Conta Aleatória 1',
            email: 'random1@example.com',
            password: 'randompassword1',
          },
          {
            name: 'Conta Aleatória 2',
            email: 'random2@example.com',
            password: 'randompassword2',
          },
        ],
      },
    },
  });

  console.log('Usuário e contas criados:', user);
}

main()
  .then(() => prisma.$disconnect())
  .catch((error) => {
    console.error('Erro ao criar usuário e contas:', error);
    prisma.$disconnect();
    process.exit(1);
  });
