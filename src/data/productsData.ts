import { Product } from '../types/product.types';

export const productsData: Product[] = [
    {
        id: 'short-naxos-1',
        title: 'Short Naxos',
        price: 87975,
        installments: [
            { quantity: 3, interestFree: true },
            { quantity: 6 },
            { quantity: 12 },
        ],
        images: ['/short-naxos.webp'],
        colors: ['purple', 'pink', 'navy'],
        sizes: ['1', '2', '3'],
        badges: ['LLEVÁ 3 PAGÁ 2'],
        isFavorite: false,
        description: 'Short Naxos de tiro alto, confeccionado en tejido elástico de alta sujeción que acompaña el movimiento y realza la silueta. Su calce cómodo y cintura ancha brindan soporte y ajuste seguro, ideal para entrenar, practicar yoga o usar en el día a día. Diseño estampado que suma estilo sin resignar funcionalidad.',
    },
    {
        id: 'ciclista-rho-1',
        title: 'Ciclista RHO',
        price: 14000,
        installments: [
            { quantity: 3, interestFree: true },
            { quantity: 6 },
        ],
        images: ['/ciclista-rho.jpg'],
        colors: ['black', 'brown', 'lightblue'],
        sizes: ['1', '2', '3', '4'],
        badges: ['¡Llevá 3 y pagá 2!'],
        description:
            'Ciclista de largo medio que llega justo sobre la rodilla. Cintura ancha con elástico trasero para mayor comodidad y ajuste seguro. Ideal para entrenamientos, actividades al aire libre o uso diario, combinando estilo y funcionalidad en cada movimiento.',
        isFavorite: true,
    },
    {
        id: 'calza-balos-1',
        title: 'Calza BALOS',
        price: 19200,
        installments: [
            { quantity: 3, interestFree: true },
            { quantity: 6 },
            { quantity: 12 },
        ],
        images: ['/calza-balos.webp'],
        colors: ['navy', 'burgundy'],
        sizes: ['1', '2', '3', '4'],
        badges: ['últimos disponibles'],
        description:
            'Calza larga de cintura alta, confeccionada en material elástico y uniforme que permite libertad de movimiento y comodidad. El elástico trasero asegura un calce perfecto, ideal para actividades de alto impacto, yoga o uso diario con estilo y confort.',
        isFavorite: false,
    },
    {
        id: 'top-creta-1',
        title: 'Top CRETA',
        price: 11400,
        oldPrice: 19000,
        installments: [
            { quantity: 3, interestFree: true },
            { quantity: 6 },
        ],
        images: ['/top-creta.webp'],
        colors: ['pink', 'purple'],
        sizes: ['1', '2', '3', '4', '5', '6', '7'],
        badges: ['¡Llevá 3 y pagá 2!'],
        description:
            'Top de soporte alto, ideal para actividades de impacto y movimiento intenso. Confeccionado en microfibra de poliéster con elastano de secado rápido, combina comodidad, sujeción y estilo. Modelo 1 usa talle 6, modelo 2 usa talle 1. Perfecto para entrenar o usar en el día a día.',
        isFavorite: false,
    },
];
