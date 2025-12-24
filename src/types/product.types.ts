export type ProductColor =
    | 'black'
    | 'white'
    | 'green'
    | 'navy'
    | 'beige'
    | 'blue'
    | 'lightblue'
    | 'burgundy'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'pink'
    | 'purple'
    | 'gray'
    | 'brown';


export interface Product {
    id: string;
    title: string;
    price: number;
    oldPrice?: number;
    images: string[];
    colors: ProductColor[];
    sizes: string[];
    description: string;
    badges?: string[];
    isFavorite?: boolean;
    installments?: InstallmentOption[];
}

export interface ProductColorsProps {
    colors: ProductColor[];
}

export interface ProductImageProps {
    src: string;
    alt: string;
    priority?: boolean;
}

export interface ProductsProps {
    products: Product[];
}

export interface ProductFilterOption {
    value: string;
    label: string;
    checked: boolean;
}

export interface ProductFilterSection {
    id: string;
    name: string;
    options: ProductFilterOption[];
}

export interface ProductFiltersProps {
    filters: {
        id: string;
        name: string;
        options: { value: string; label: string; checked: boolean }[];
    }[];
    onToggleOption: (sectionId: string, optionValue: string) => void;
    onPriceChange?: (min: number, max: number) => void;
}


export interface ProductPriceFilterProps {
    min: number;
    max: number;
    onChange: (min: number, max: number) => void;
}

export interface ProductDetailsContentProps {
    product: Product;
    relatedProducts?: Product[];
}

export type ProductDetailsPageProps = {
    params: { id: string };
};

export interface ProductGridItemProps {
    product: Product;
}

export type InstallmentOption = {
    quantity: number;
    interestFree?: boolean;
};

export type ProductTitleProps = {
    children: string;
    as?: 'h1' | 'h2' | 'h3';
    className?: string;
    showShare?: boolean;
    showFavorite?: boolean;
};

export type ProductPriceSize = 'sm' | 'md' | 'lg';


export type ProductCardProps = {
    product: Product;
    size: 'normal' | 'small';
};


export interface ProductPriceProps {
    price: number;
    installments?: InstallmentOption[];
    className?: string;
    priceClassName?: string;
    installmentsClassName?: string;
}

export interface RelatedProductsProps {
    products: Product[];
    sortOptions: { label: string; value: string }[];
    sort: string;
    setSort: (value: string) => void;
}
