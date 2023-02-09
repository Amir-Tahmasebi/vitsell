import { ComponentProps } from 'react'

export enum ButtonComponentSize {
    large = 'large',
    medium = 'medium',
}

export enum ButtonComponentColor {
    danger = 'danger',
    info = 'info',
    warning = 'warning'
}

export type ButtonProps = {
    onClick: () => void;
    size: ButtonComponentSize;
    color: ButtonComponentColor;
} & ComponentProps<'button'>