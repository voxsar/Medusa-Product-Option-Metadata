"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    const { productId, optionId, valueId } = req.params;
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
        if (!option.values) {
            return res.status(404).json({
                message: `Option with ID ${optionId} has no values`,
            });
        }
        // Find the specific value by its ID
        const value = option.values.find((val) => val.id === valueId);
        if (!value) {
            return res.status(404).json({
                message: `Value with ID ${valueId} not found in option ${optionId}`,
            });
        }
        // Respond with the product option details
        res.json(value);
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving product option value",
            error: error.message,
        });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RzL1twcm9kdWN0SWRdL29wdGlvbnMvW29wdGlvbklkXS92YWx1ZXMvW3ZhbHVlSWRdL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQVNPLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0lBRXBELElBQUk7UUFDRixvREFBb0Q7UUFDcEQsTUFBTSxjQUFjLEdBQW1CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFM0UsNkNBQTZDO1FBQzdDLE1BQU0sT0FBTyxHQUFHLE1BQU0sY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDdkQsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFHLGdCQUFnQixDQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLGtCQUFrQixRQUFRLHlCQUF5QixTQUFTLEVBQUU7YUFDeEUsQ0FBQyxDQUFDO1NBQ0o7UUFFSixJQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsa0JBQWtCLFFBQVEsZ0JBQWdCO2FBQ25ELENBQUMsQ0FBQztTQUNIO1FBRUQsb0NBQW9DO1FBQ3BDLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsaUJBQWlCLE9BQU8sd0JBQXdCLFFBQVEsRUFBRTthQUNuRSxDQUFDLENBQUM7U0FDSDtRQUVFLDBDQUEwQztRQUMxQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsdUNBQXVDO1lBQ2hELEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztTQUNyQixDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQTVDVyxRQUFBLEdBQUcsT0E0Q2QifQ==