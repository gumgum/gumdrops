export type Colors =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'info'
    | 'link'
    | 'warning'
    | 'danger'
    | 'blue'
    | 'gold'
    | 'green'
    | 'orange'
    | 'purple'
    | 'red'
    | 'darkBlue'
    | 'darkGold'
    | 'darkGreen'
    | 'darkRed';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SelectOptions = Array<{ key: string; value: string | number } | unknown>;
