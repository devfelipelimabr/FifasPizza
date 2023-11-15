import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: number;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: ProductRequest) {

    if (name === "" || !name || !price || description === "" || !description || category_id === "" || !category_id) {
        throw new Error("Input all fields");
      }
  
      const productAlreadyExists = await prismaClient.product.findFirst({
          where: {
            name: name.toLowerCase(),
          },
        });
    
        if (productAlreadyExists) {
          throw new Error("Product already exists");
        }

        const category_idAlreadyExists = await prismaClient.category.findFirst({
            where:{
                id: category_id
            }
        })

        if(!category_idAlreadyExists){
            throw new Error ("This Category_ID don't exists")
        }

    const product = await prismaClient.product.create({
      data: {
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id,
      },
    });

    return product;
  }
}

export { CreateProductService };
