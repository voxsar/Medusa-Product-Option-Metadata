"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RzL1twcm9kdWN0SWRdL29wdGlvbnMvW29wdGlvbklkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRTyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRTNDLElBQUk7UUFDRixvREFBb0Q7UUFDcEQsTUFBTSxjQUFjLEdBQW1CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0UsNkNBQTZDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDM0QsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFHLGdCQUFnQixDQUFDO1NBQ3RDLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGtCQUFrQixRQUFRLHlCQUF5QixTQUFTLEVBQUU7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7UUFFRCwwQ0FBMEM7UUFDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsT0FBTyxFQUFFLGlDQUFpQztZQUMxQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7QUFDSCxDQUFDLENBQUM7QUE3QlcsUUFBQSxHQUFHLE9BNkJkIn0=