import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    try {
      const emailLowerCase = email.toLowerCase();
      const user = await prismaClient.user.findFirst({
        where: {
          email: emailLowerCase,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const passwordMatch = await compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Password incorrect");
      }

      // Generate a token for the user's session
      const token = sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.JWT_SECRET as string, 
        {
          subject: user.id.toString(), 
          expiresIn: "30d",
        }
      );

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        token: token,
      };
    } catch (error) {
      // Handle errors appropriately (e.g., log them or rethrow)
      console.error("Authentication failed:", error.message);
      throw new Error("Authentication failed");
    }
  }
}

export { AuthUserService };
