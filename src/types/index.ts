export enum Colors {
    default = 'default',
    primary = 'primary',
    secondary = 'secondary',
    tertiary = 'tertiary',
    success = 'success',
    info = 'info',
    link = 'link',
    warning = 'warning',
    danger = 'danger',
    blue = 'blue',
    gold = 'gold',
    green = 'green',
    orange = 'orange',
    purple = 'purple',
    red = 'red',
    darkBlue = 'darkBlue',
    darkGold = 'darkGold',
    darkGreen = 'darkGreen',
    darkRed = 'darkRed'
}

export enum Sizes {
    xs = 'xs',
    sm = 'sm',
    md = 'md',
    lg = 'lg'
}

export type SelectOption = { key: string; value: string | number } | unknown;
export type SelectOptions = SelectOption[];
