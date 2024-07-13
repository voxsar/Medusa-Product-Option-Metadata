"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const GET = async (req, res) => {
    const { productId, optionId } = req.params;
    try {
        // Resolve the productService from the request scope
        const productService = req.scope.resolve("productService");
        // Retrieve the product using the provided ID
        const product = await productService.retrieve(productId, {
            relations: ["options", "options.values"],
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
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving product option",
            error: error.message,
        });
    }
};
exports.GET = GET;
const POST = async (req, res) => {
    const { productId, optionId } = req.params;
    const metadata = req.body.metadata;
    const productOptionRepository = req.scope.resolve("productOptionRepository");
    try {
        // Resolve the productService and productOptionService from the request scope
        const productService = req.scope.resolve("productService");
        // Retrieve the product using the provided ID
        const product = await productService.retrieve(productId, {
            relations: ["options"],
        });
        console.log(product);
        // Find the specific option by its ID
        const option = product.options.find((opt) => opt.id === optionId);
        console.log(option);
        if (!option) {
            return res.status(404).json({
                message: `Option with ID ${optionId} not found in product ${productId}`,
            });
        }
        if (metadata) {
            option.metadata = {
                ...option.metadata,
                ...metadata,
            };
        }
        const updatedOption = await productOptionRepository.save(option);
        // Update the option's metadata
        console.log(updatedOption);
        res.json(updatedOption);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error updating product option",
            error: error.message,
        });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3RzL1twcm9kdWN0SWRdL29wdGlvbnMvW29wdGlvbklkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRTyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTNDLElBQUk7UUFDRixvREFBb0Q7UUFDcEQsTUFBTSxjQUFjLEdBQW1CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0UsNkNBQTZDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0QsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFHLGdCQUFnQixDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGtCQUFrQixRQUFRLHlCQUF5QixTQUFTLEVBQUU7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7UUFFRCwwQ0FBMEM7UUFDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLGlDQUFpQztZQUMxQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE3QlcsUUFBQSxHQUFHLE9BNkJkO0FBRUssTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ3JFLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUMzQyxNQUFNLFFBQVEsR0FBSSxHQUFHLENBQUMsSUFBMEIsQ0FBQyxRQUFRLENBQUM7SUFDMUQsTUFBTSx1QkFBdUIsR0FBbUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUU3RyxJQUFJO1FBQ0gsNkVBQTZFO1FBQzdFLE1BQU0sY0FBYyxHQUFtQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNFLDZDQUE2QztRQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3hELFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLHFDQUFxQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVsRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsa0JBQWtCLFFBQVEseUJBQXlCLFNBQVMsRUFBRTthQUN2RSxDQUFDLENBQUM7U0FDSDtRQUVELElBQUksUUFBUSxFQUFFO1lBQ2IsTUFBTSxDQUFDLFFBQVEsR0FBRztnQkFDaEIsR0FBRyxNQUFNLENBQUMsUUFBUTtnQkFDbEIsR0FBRyxRQUFRO2FBQ1osQ0FBQztTQUNBO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkUsK0JBQStCO1FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUN4QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsK0JBQStCO1lBQ3hDLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztTQUNwQixDQUFDLENBQUM7S0FDSDtBQUNELENBQUMsQ0FBQztBQWhEVyxRQUFBLElBQUksUUFnRGYifQ==