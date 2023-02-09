import { BannerCardSize } from "../BannerCard";

export type PriceProps = {
    price: number;
    direction?: 'left' | 'right'
    className?: string;
    size?: BannerCardSize
};

export type PriceDiscountProps = {
    discount: number;
    price: number;
    size?: BannerCardSize
}
