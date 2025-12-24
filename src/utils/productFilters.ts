import { ProductFilterSection } from "../types/product.types";


export const toggleFilterOption = (filters: ProductFilterSection[], sectionId: string, value: string) => {
    return filters.map((section) =>
        section.id === sectionId
            ? {
                ...section,
                options: section.options.map((opt) =>
                    opt.value === value ? { ...opt, checked: !opt.checked } : opt
                ),
            }
            : section
    );
};