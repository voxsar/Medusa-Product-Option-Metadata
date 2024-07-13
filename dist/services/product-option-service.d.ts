import { EntityManager } from "typeorm";
import { TransactionBaseService } from "@medusajs/medusa";
import { ProductOptionRepository } from "@medusajs/medusa/dist/repositories/product-option";
import { ProductOption } from "@medusajs/medusa/dist/models/product-option";
interface ProductOptionServiceProps {
    manager: EntityManager;
    productOptionRepository: typeof ProductOptionRepository;
}
declare class ProductOptionService extends TransactionBaseService {
    private readonly manager;
    private readonly productOptionRepository;
    constructor({ manager, productOptionRepository }: ProductOptionServiceProps);
    retrieve(optionId: string): Promise<ProductOption>;
    update(optionId: string, update: Partial<ProductOption>): Promise<ProductOption>;
}
export default ProductOptionService;
