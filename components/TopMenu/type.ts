export type MenuItemType = {
    id: number;
    text: string;
    path: string;
    icon: string;
    children?: MenuItemType[]
}