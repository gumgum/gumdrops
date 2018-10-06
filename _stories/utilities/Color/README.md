Manually override the color, border-color, or background-color of any element.

The basic formula is `-color-{p}-{c}` where {p} is the property being overridden and {c} is the color.

Values for {p} are:

* `bg` (background)
* `bd` (border)
* `tx` (text color)

Values for {c} are:

* `pri` (current theme's primary color)
* `sec` (current theme's secondary color)
* `ter` (current theme's tertiary color)
* `suc` (success color)
* `war` (warning color)
* `dan` (danger color)
* `inf` (info color)
* `lt` (light shades of gray)
* `dk` (dark shades of gray)

For each color, there are 4 light variations and 4 dark variations:

* `-lt-1`
* `-lt-2`
* `-lt-3`
* `-lt-4`
* `-dk-1`
* `-dk-2`
* `-dk-3`
* `-dk-4`
