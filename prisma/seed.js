const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { Products } = require("./data.js");

const load = async () => {
  try {
    Products.forEach(async (product) => {
      await prisma.product.create({
        data: {
          title: product.title,
          desc: product.desc,
          price: product.price,
          image: product.image,
          category: {
            create: {
              name: product.category,
            },
          },
        },
      });
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
load();
