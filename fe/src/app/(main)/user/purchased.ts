export const histories: Histories[] = [
    {
        src: "/chunky.png",
        text: "smallChunky Glyph Tee",
        piece: 1,
        price: 120000,
    },
    {
        src: "/inkblot.png",
        text: "inkblot",
        piece: 1,
        price: 50000,
    },
    {
        src: "/getsure.png",
        text: "gesture",
        piece: 2,
        price: 100000,
    },
    {
        src: "/shirt.png",
        text: "tee shirt",
        piece: 1,
        price: 60000,
    },
];
export interface Histories {
    src: string;
    text: string;
    piece: number;
    price: number;
}
