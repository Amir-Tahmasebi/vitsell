import { ComponentProps, ReactElement } from "react";

export type InputProps = {
    onChange?: () => void;
    Icon?: any;
    placeholder: string;
} & ComponentProps<"input"> 
