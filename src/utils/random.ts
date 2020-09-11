export const random = (arr: string[]): string => {
    return arr[randomInt(arr.length)]
}

const randomInt = max => {
    return Math.floor(Math.random() * Math.floor(max))
}
