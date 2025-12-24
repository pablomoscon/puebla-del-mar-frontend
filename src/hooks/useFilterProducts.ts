import { useMemo } from 'react';
import { Product, ProductFilter } from '@/types/product.types';

export const useFilteredProducts = (products: Product[], filters: ProductFilter[]) => {
    return useMemo(() => {
        return products.filter((product) =>
            filters.every((section) => {
                const activeOptions = section.options
                    .filter((opt) => opt.checked)
                    .map((opt) => opt.value);

                if (activeOptions.length === 0) return true;

                switch (section.id) {
                    case 'color':
                        return product.colors?.some((color) => activeOptions.includes(color));
                    case 'sizes':
                        return product.sizes?.some((size) => activeOptions.includes(size));
                    default: {
                        const value = (product as any)[section.id];
                        if (Array.isArray(value)) return value.some((v) => activeOptions.includes(v));
                        if (value != null) return activeOptions.includes(String(value));
                        return true;
                            return false;
                }
            })
        );
    }, [products, filters]);
};
