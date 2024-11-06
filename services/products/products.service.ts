import { RealtimeDataBaseClient } from "@/core/real-time-database-client/real-time-database-client";
import { Product } from "@/core/types/product";

const PATH_PRODUCTS = 'products';

export class ProductsService {
    private database: RealtimeDataBaseClient;

    constructor() {
        this.database = new RealtimeDataBaseClient();
    }

    async fetchProducts(): Promise<Product[] | null> {
        return await this.database.get(PATH_PRODUCTS, {});
    }
}