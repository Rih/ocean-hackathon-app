// place files you want to import through the `$lib` alias in this folder.
type ReverseMap<T extends Record<keyof T, keyof any>> = {
    [P in T[keyof T]]: {
        [K in keyof T]: T[K] extends P ? K : never
    }[keyof T]
}

type Reverse<T> = {[V in T[keyof T] & keyof T]: keyof T}
export const COLORS: Record<string, string> = {
    WHITE: 'white',
    GRAY: 'gray',
    GREEN: 'green',
    YELLOW: 'yellow',
    RED: 'red',
    LIGHTYELLOW: 'lightyellow',
    ORANGE: 'orange',
    LIGHTRED: 'lightred',
    VIOLET: 'violet',
    BLACK: 'black',
}

export type Color = Reverse<typeof COLORS>;