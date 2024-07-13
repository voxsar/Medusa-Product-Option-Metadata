import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import { ProductService } from "@medusajs/medusa";
//import ProductOptionService from service folder using ../
import { EntityManager } from "typeorm";
import { ProductOptionRepository } from "@medusajs/medusa/dist/repositories/product-option";
import { ProductOption } from "@medusajs/medusa/dist/models/product-option";
import { MedusaError } from "medusa-core-utils";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const { productId, optionId } = req.params;

  try {
    // Resolve the productService from the request scope
    const productService: ProductService = req.scope.resolve("productService");

    // Retrieve the product using the provided ID
    const product = await productService.retrieve(productId, {
		relations: ["options" , "options.values"],
    });

    // Find the specific option by its ID
    const option = product.options.find((opt) => opt.id === optionId);

    if (!option) {
      return res.status(404).json({
        message: `Option with ID ${optionId} not found in product ${productId}`,
      });
    }

    // Respond with the product option details
    res.json(option);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving product option",
      error: error.message,
    });
  }
};