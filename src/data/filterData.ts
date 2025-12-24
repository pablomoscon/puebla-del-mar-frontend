export const sortOptions = [
    { value: 'popular', label: 'Más popular' },
    { value: 'rating', label: 'Mejor ranking' },
    { value: 'newest', label: 'Más nuevo' },
    { value: 'price-asc', label: 'Precio: menor a mayor' },
    { value: 'price-desc', label: 'Precio: mayor a menor' },
];

export const subCategories = [
    'Totes',
    'Backpacks',
    'Travel Bags',
    'Hip Bags',
    'Laptop Sleeves',
]

export const filtersData = [
    {
        id: 'serie',
        name: 'Serie (Colección)',
        options: [
            { value: 'power_move', label: 'Power Move', checked: false },
            { value: 'aero_fit', label: 'Aero Fit', checked: false },
            { value: 'urban_flow', label: 'Urban Flow', checked: false },
            { value: 'energy_boost', label: 'Energy Boost', checked: false },
            { value: 'sunrise_active', label: 'Sunrise Active', checked: false },
            { value: 'night_run', label: 'Night Run', checked: false },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'Blanco', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Azul', checked: false },
            { value: 'brown', label: 'Marrón', checked: false },
            { value: 'green', label: 'Verde', checked: false },
            { value: 'purple', label: 'Morado', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Categoría',
        options: [
            { value: 'top', label: 'Top', checked: false },
            { value: 'legging', label: 'Calza', checked: false },
            { value: 'socks', label: 'Medias', checked: false },
            { value: 'sweatshirt', label: 'Buzo', checked: false },
            { value: 'short', label: 'Short', checked: false },
            { value: 'accessories', label: 'Accesorios', checked: false },
        ],
    },
    {
        id: 'sizes',
        name: 'Talle',
        options: [
            { value: '1', label: '1', checked: false },
            { value: '2', label: '2', checked: false },
            { value: '3', label: '3', checked: false },
            { value: '4', label: '4', checked: false },
            { value: '5', label: '5', checked: false },
        ],
    },
]
