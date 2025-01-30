// 'use server'
// import { hashSync } from 'bcrypt-ts';
// import { prisma } from '../../../../lib/prisma';
// interface registerAccountProps {
//     name: string,
//     email: string,
//     password: string,
// }

// const registerAccount = async ({ name, email, password }: registerAccountProps ) => {
//     const existingAccount = await prisma.account.findMany({
//         where: { email }
//     })
//     if (existingAccount) return console.log('Conta existente.')

//     const hashedPassword = hashSync(password);

//     await prisma.account.create({
//         data: {
//             name, 
//             email, 
//             password: hashedPassword,
//             user: { connect: {email: 'joaovitornascimentoif@gmail.com'} }
//         }
//     })

//     return { success: true }
// }
 
// export default registerAccount;