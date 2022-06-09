interface Oferta {
    id: number,
    nombre: string,
    precio: number,
    imagenURL: string,
}

const Ofertas: Oferta[] = [
    {
        id: 1,
        nombre: "",
        precio: 1670,
        imagenURL: "https://i.ibb.co/3FsGQFB/cupones-genericos-500-x-500-01.jpg",
    },
    {
        id: 2,
        nombre: "",
        precio: 900,
        imagenURL: "https://i.ibb.co/SNP1n05/cupones-genericos-500-x-500-04.jpg",
    },
    {
        id: 3,
        nombre: "",
        precio: 700,
        imagenURL: "https://i.ibb.co/D9cQXyQ/cupones-genericos-500-x-500-07.jpg",
    },
    {
        id: 4,
        nombre: "",
        precio: 660,
        imagenURL: "https://i.ibb.co/NmYv7mJ/cupones-genericos-500-x-500-16.jpg",
    },
    {
        id: 5,
        nombre: "",
        precio: 630,
        imagenURL: "https://i.ibb.co/3pX1t8G/cupones-genericos-500-x-500-09.jpg",
    },
];

export {Oferta, Ofertas};