import { useMemo } from 'react';
import { Product, ProductFilter } from '@/types/product.types';

export const useFilteredProducts = (
    products: Product[],
    filters: ProductFilter[],
    priceRange?: [number, number] | null
) => {
    return useMemo(() => {
        return products
            .filter((product) => {
            
                if (!priceRange) return true;

                const [min, max] = priceRange;

                if (typeof product.price !== 'number') return false;

                return product.price >= min && product.price <= max;
            })
            .filter((product) =>
                filters.every((section) => {
                    const activeOptions = section.options
                        .filter((opt) => opt.checked)
                        .map((opt) => opt.value);

                    if (activeOptions.length === 0) return true;

                    switch (section.id) {
                        case 'color':
                            return product.colors.some((c) =>
                                activeOptions.includes(c)
                            );

                        case 'sizes':
                            return product.sizes.some((s) =>
                                activeOptions.includes(s)
                            );

                        default:
                            return true;
                    }
                })
            );
    }, [products, filters, priceRange]);
};