export const addId = (array: any[]) => {
    return array.map((i, index) => ({ ...i, id: index }));
}