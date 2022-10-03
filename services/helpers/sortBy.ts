export const sanetizeSortByLabel = (sortByValue: string) => {
    if (sortByValue == 'updated_at.asc') {
        return ' Updated at asc '
    }
    if (sortByValue == 'updated_at.desc') {
        return ' Updated at desc '
    }
    if (sortByValue == 'created_at.asc') {
        return ' Created at asc '
    }
    if (sortByValue == 'created_at.desc') {
        return ' Created at desc '
    }
    if (sortByValue == 'name.asc') {
        return ' Website Name asc '
    }
    if (sortByValue == 'name.desc') {
        return ' Website Name desc '
    }

    return ''
}