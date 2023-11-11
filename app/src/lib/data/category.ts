export interface Category {
    id: number;
    text: string;
}


export const CATEGORY_FLORA = 1;
export const CATEGORY_FAUNA = 2;

export const CATEGORIES: Category[] = [
    {
        id: CATEGORY_FLORA, text: 'Flora',
    },
    {
        id: CATEGORY_FAUNA, text: 'Fauna',
    },
]

