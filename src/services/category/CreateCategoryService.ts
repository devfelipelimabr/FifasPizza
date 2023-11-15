import prismaClient from "../../prisma";

interface CategoryRequest {
  name: string;
}

class CreateCategoryService {
  async execute({ name }: CategoryRequest) {
    if (name === "" || !name) {
      throw new Error("Invalid name");
    }

    const categoryAlreadyExists = await prismaClient.category.findFirst({
        where: {
          name: name.toLowerCase(),
        },
      });
  
      if (categoryAlreadyExists) {
        throw new Error("Category already exists");
      }

    const category = await prismaClient.category.create({
      data: {
        name: name.toLowerCase(),
      },
      select: {
        id: true,
        name: true,
      },
    });

    return category
  }
}

export { CreateCategoryService };
