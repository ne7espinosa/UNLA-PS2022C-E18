interface Producto {
    id: number,
    nombre: string,
    precio: string,
    imagenURL: string,
    detalle: string
}

const Productos: Producto[] = [
    {
        id: 1,
        nombre: "McCombo Hamburguesa Doble",
        precio: "$1050",
        imagenURL: "https://i.ibb.co/xjXBn58/h-mcdonalds-Big-Mac-Extra-Value-Meals-1-4-product-tile-desktop.jpg",
        detalle: "McCombo Hamburguesa + Papas + Bebida"
    },
    {
        id: 2,
        nombre: "McCombo Dos Hamburguesas",
        precio: "$900",
        imagenURL: "https://i.ibb.co/3ksKwDr/h-mcdonalds-2-Cheeseburger-Extra-Value-Meals-1-4-product-tile-desktop.jpg",
        detalle: "Dos hamburguesas simples + Papas + Bebida"
    },
    {
        id: 3,
        nombre: "McCombo Cuarto de Libra",
        precio: "$1100",
        imagenURL: "https://i.ibb.co/SyHFpf5/h-mcdonalds-Quarter-Pounder-with-Cheese-Extra-Value-Meals-1-4-product-tile-desktop.jpg",
        detalle: "Hamburguesa cuarto de libra + Papas + Bebida"
    },
    {
        id: 4,
        nombre: "McCombo Doble Cuarto de Libra",
        precio: "$1500",
        imagenURL: "https://i.ibb.co/z7NcJM4/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals-combo-1-4-product-tile-desktop.jpg",
        detalle: "Hamburguesa doble cuarto de libra + Papas + Bebida"
    },
    {
        id: 5,
        nombre: "McCombo Pollo",
        precio: "$900",
        imagenURL: "https://i.ibb.co/HKRnn1P/h-crispy-chicken-sandwich-meal-1-4-product-tile-desktop.jpg",
        detalle: "Hamburguesa de Pollo + Papas + Bebida"
    },
    {
        id: 6,
        nombre: "McCombo Pollo Cheddar",
        precio: "$950",
        imagenURL: "https://i.ibb.co/bdLHKrs/h-spicy-crispy-chicken-sandwich-meal-combo-1-4-product-tile-desktop.jpg",
        detalle: "Hamburguesa de Pollo con Cheddar + Papas + Bebidas"
    }
];

export {Producto, Productos};