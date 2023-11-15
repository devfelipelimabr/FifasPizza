import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const emailLowerCase = email.toLowerCase()
    const user = await prismaClient.user.findFirst({
      where: {
        email: emailLowerCase,
      },
    });

     const passwordMatch = await compare(password, user.password);

    if (!user || !passwordMatch) {
      throw new Error("User or Password incorrect");
    }   

    return user;
  }
}

export { AuthUserService };
