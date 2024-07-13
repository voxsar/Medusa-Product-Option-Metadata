"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const medusa_core_utils_1 = require("medusa-core-utils");
class ProductOptionService extends medusa_1.TransactionBaseService {
    constructor({ manager, productOptionRepository }) {
        super({ manager, productOptionRepository });
        this.manager = manager;
        this.productOptionRepository = productOptionRepository;
    }
    async retrieve(optionId) {
        const option = await this.productOptionRepository.findOne({ where: { id: optionId } });
        if (!option) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, `Product option with id: ${optionId} was not found`);
        }
        return option;
    }
    async update(optionId, update) {
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
exports.default = ProductOptionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vcHRpb24tc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9wcm9kdWN0LW9wdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkNBQTBEO0FBRzFELHlEQUFnRDtBQU9oRCxNQUFNLG9CQUFxQixTQUFRLCtCQUFzQjtJQUl2RCxZQUFZLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUE2QjtRQUN6RSxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyx1QkFBdUIsQ0FBQztJQUN6RCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFnQjtRQUM3QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXZGLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxNQUFNLElBQUksK0JBQVcsQ0FDbkIsK0JBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQiwyQkFBMkIsUUFBUSxnQkFBZ0IsQ0FDcEQsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBZ0IsRUFBRSxNQUE4QjtRQUMzRCxPQUFPLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7WUFDL0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFFNUIsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLFFBQVEsR0FBRztvQkFDaEIsR0FBRyxNQUFNLENBQUMsUUFBUTtvQkFDbEIsR0FBRyxRQUFRO2lCQUNaLENBQUM7YUFDSDtZQUVELE1BQU0sYUFBYSxHQUFHLE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV0RSxPQUFPLGFBQWEsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELGtCQUFlLG9CQUFvQixDQUFDIn0=