const productList = [
    {
        id: 1,
        name: 'Burger',
        price: '220 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 2,
        name: 'Pizza',
        price: '920 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 3,
        name: 'Sandwich',
        price: '320 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
];

const orderList = [
    {
        id: 1,
        name: 'Burger',
        price: '220 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 2,
        name: 'Pizza',
        price: '920 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 3,
        name: 'Sandwich',
        price: '320 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 4,
        name: 'Chicken Fry',
        price: '120 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
    {
        id: 5,
        name: 'French Fry',
        price: '80 tk',
        description:
            'A popular sandwich made from ground meats that are formed into a patty, cooked, and placed between two halves of a bun',
    },
];

export const DATA_KEY = {
    PRODUCT: 'product',
    ORDER: 'order',
};

export const DATA = {
    [DATA_KEY.PRODUCT]: productList,
    [DATA_KEY.ORDER]: orderList,
};
