import { useState } from "react";
import { Product } from "@/core/types/product";
import { ProductsService } from "@/services/products/products.service"

const service = new ProductsService();

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [groupedProducts, setGroupedProducts] = useState<{ [key: string]: Product[] }>({})
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const fetchProducts = async () => {
        setLoading(true)
        try {
            const products = await service.fetchProducts()

            if (products) {
                setProducts(products)
                setLoading(false)
                const categories = [...new Set(products.map(product => product.category))];
                const groupedProducts: { [key: string]: Product[] } = {};

                categories.forEach(category => {
                    groupedProducts[category] = products.filter(p => p.category === category);
                });

                setCategories(categories)
                setGroupedProducts(groupedProducts)
            } else {
                setLoading(false)
                setError(true)
            }
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    };

    return { products, categories, groupedProducts, loading, error, fetchProducts };
};
