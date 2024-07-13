import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { ProductService } from "@medusajs/medusa";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const { productId } = req.params;

  try {
    // Resolve the productService from the request scope
    const productService: ProductService = req.scope.resolve("productService");
    
    // Retrieve the product using the provided ID
    // Retrieve the product with options using the provided ID
    const product = await productService.retrieve(productId, {
		relations: ["options"],
	});
  

    // Respond with the product details
    res.json(
		product.options,
    );
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product",
      error: error.message,
    });
  }
};
