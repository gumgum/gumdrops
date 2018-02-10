Assign padding to any element with shorthand utility classes. Includes support for individual properties, all properties, and vertical and horizontal properties.

The classes are named using the format: `p-{sides}-{size}`.

`{sides}` can be:

* `-t` (top)
* `-r` (right)
* `-b` (bottom)
* `-l` (left)
* `-v`(vertical, top & bottom sides)
* `-h` (horizontal, left & right sides)
* `-a` (all sides)

`{size}` can be:
`0`, `1`, `2`, `3`, `4`, `5` or `6` indicating multiples of the global default value, the $unit variable.

For the spacing to take effect at a certain breakpoint only, use the format `p-{sides}-{size}-{breakpoint}`, where `{breakpoint}` can be `xs`, `sm`, `md`, `lg` or `xl`
