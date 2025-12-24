import { SortOption } from '@/src/types/sort.types';

export const sortOptions: SortOption[] = [
    { value: 'popular', label: 'Más popular' },
    { value: 'rating', label: 'Mejor ranking' },
    { value: 'newest', label: 'Más nuevo' },
    { value: 'price-asc', label: 'Precio: Menor a mayor' },
    { value: 'price-desc', label: 'Precio: Mayor a menor' },
];