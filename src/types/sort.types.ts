export type SortOption = {
    label: string
    value: string
}

export interface SortMenuProps {
    options: SortOption[];
    value: string;
    onChange: (value: string) => void;
}
