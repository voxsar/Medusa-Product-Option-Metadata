import { EntityManager } from "typeorm";
import { TransactionBaseService } from "@medusajs/medusa";
import { ProductOptionRepository } from "@medusajs/medusa/dist/repositories/product-option";
import { ProductOption } from "@medusajs/medusa/dist/models/product-option";
import { MedusaError } from "medusa-core-utils";

interface ProductOptionServiceProps {
  manager: EntityManager;
  productOptionRepository: typeof ProductOptionRepository;
}

class ProductOptionService extends TransactionBaseService {
  private readonly manager: EntityManager;
  private readonly productOptionRepository: typeof ProductOptionRepository;

  constructor({ manager, productOptionRepository }: ProductOptionServiceProps) {
    super({ manager, productOptionRepository });
    this.manager = manager;
    this.productOptionRepository = productOptionRepository;
  }

  async retrieve(optionId: string): Promise<ProductOption> {
    const option = await this.productOptionRepository.findOne({ where: { id: optionId } });

    if (!option) {
      throw new MedusaError(
        MedusaError.Types.NOT_FOUND,
        `Product option with id: ${optionId} was not found`
      );
    }

    return option;
  }

  async update(optionId: string, update: Partial<ProductOption>): Promise<ProductOption> {
    return await this.atomicPhase_(async (manager) => {
      const option = await this.retrieve(optionId);
      const { metadata } = update;

      if (metadata) {
        option.metadata = {
          ...option.metadata,
          ...metadata,
        };
      }

      const updatedOption = await this.productOptionRepository.save(option);

      return updatedOption;
    });
  }
}

export default ProductOptionService;
