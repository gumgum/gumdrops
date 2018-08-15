const updateAllOptions = (options, selected) =>
    options.map(item => ({
        ...item,
        selected
    }));

const updateNestedOptions = (options, item) =>
    options.map((option, i) => {
        if (!option.options) {
            return {
                ...option,
                selected: i === item.index ? item.selected : option.selected
            };
        }

        return {
            ...option,
            selected: i === item.index ? item.selected : option.selected,
            options:
                i === item.index ? updateAllOptions(item.options, item.selected) : option.options
        };
    });

export default function updateOptions(options, item) {
    const hasSubOptions = item.options;

    if (hasSubOptions) {
        return updateNestedOptions(options, item);
    }

    return options.map((option, i) => ({
        ...option,
        selected: i === item.index ? item.selected : option.selected
    }));
}
