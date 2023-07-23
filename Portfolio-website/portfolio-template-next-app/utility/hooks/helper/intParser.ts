export const intParser = (number: string): number => {
    let result = parseInt(number)
    if (!isNaN(result))
        return result
    else return 0;
}