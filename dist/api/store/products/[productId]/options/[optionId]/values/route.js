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
        if (!option.values) {
            return res.status(404).json({
                message: `Option with ID ${optionId} has no values`,
            });
        }
        const values = option.values;
        // Respond with the product option details
        res.json(values);
    }
    catch (error) {
        res.status(500).json({
            message: "Error retrieving product option value",
            error: error.message,
        });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3RzL1twcm9kdWN0SWRdL29wdGlvbnMvW29wdGlvbklkXS92YWx1ZXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBU08sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUFFLEdBQWtCLEVBQUUsR0FBbUIsRUFBRSxFQUFFO0lBQ25FLE1BQU0sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUzQyxJQUFJO1FBQ0Ysb0RBQW9EO1FBQ3BELE1BQU0sY0FBYyxHQUFtQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNFLDZDQUE2QztRQUM3QyxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQ3ZELFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRyxnQkFBZ0IsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxxQ0FBcUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxrQkFBa0IsUUFBUSx5QkFBeUIsU0FBUyxFQUFFO2FBQ3hFLENBQUMsQ0FBQztTQUNKO1FBRUosSUFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDM0IsT0FBTyxFQUFFLGtCQUFrQixRQUFRLGdCQUFnQjthQUNuRCxDQUFDLENBQUM7U0FDSDtRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFMUIsMENBQTBDO1FBQzFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEI7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLE9BQU8sRUFBRSx1Q0FBdUM7WUFDaEQsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPO1NBQ3JCLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBckNXLFFBQUEsR0FBRyxPQXFDZCJ9