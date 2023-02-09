export enum BannerCardSize {
    medium = 'medium',
    large = 'large'
}
export type BannerCardProps = {
    src: any
    title?: string;
    price: number
    bookmark?: boolean;
    size?: BannerCardSize;
    discount?: number;
    className?: string;
}