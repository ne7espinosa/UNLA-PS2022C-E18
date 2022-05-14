interface Producto {
    id: number,
    nombre: string,
    precio: string,
    imagenURL: string
}

const Productos: Producto[] = [
    {
        id: 1,
        nombre: "Combo 1",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/xjXBn58/h-mcdonalds-Big-Mac-Extra-Value-Meals-1-4-product-tile-desktop.jpg"
    },
    {
        id: 2,
        nombre: "Combo 2",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/3ksKwDr/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals-1-4-product-tile-desktop.jpg"
    },
    {
        id: 3,
        nombre: "Combo 3",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/SyHFpf5/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals-1-4-product-tile-desktop.jpg"
    },
    {
        id: 4,
        nombre: "Combo 4",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/z7NcJM4/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-combo-1-4-product-tile-desktop.jpg"
    },
    {
        id: 5,
        nombre: "Combo 5",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/HKRnn1P/h-crispy-chicken-sandwich-meal-1-4-product-tile-desktop.jpg"
    },
    {
        id: 6,
        nombre: "Combo 6",
        precio: "$1000",
        imagenURL: "https://i.ibb.co/bdLHKrs/h-spicy-crispy-chicken-sandwich-meal-combo-1-4-product-tile-desktop.jpg"
    }
];

export {Producto, Productos};