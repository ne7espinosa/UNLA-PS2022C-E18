interface Oferta {
    id: number,
    nombre: string,
    precio: number,
    imagenURL: string,
    codigoRetiro: string
    seActivoCupon: boolean
}

const Ofertas: Oferta[] = [
    {
        id: 1,
        nombre: "2 McCombos medianos Cuarto de Libra",
        precio: 1670,
        imagenURL: "https://i.ibb.co/3FsGQFB/cupones-genericos-500-x-500-01.jpg",
        codigoRetiro: "AALJS7BXJ",
        seActivoCupon: false
    },
    {
        id: 2,
        nombre: "BigMac + Sundae Gratis",
        precio: 900,
        imagenURL: "https://i.ibb.co/SNP1n05/cupones-genericos-500-x-500-04.jpg",
        codigoRetiro: "BAPSC3PQL",
        seActivoCupon: false
    },
    {
        id: 3,
        nombre: "2 Hamburguesas con Queso",
        precio: 700,
        imagenURL: "https://i.ibb.co/D9cQXyQ/cupones-genericos-500-x-500-07.jpg",
        codigoRetiro: "ACPIX3SQV",
        seActivoCupon: false
    },
    {
        id: 4,
        nombre: "2 McFlury Oreo",
        precio: 660,
        imagenURL: "https://i.ibb.co/NmYv7mJ/cupones-genericos-500-x-500-16.jpg",
        codigoRetiro: "LDAMP5GVP",
        seActivoCupon: false
    },
    {
        id: 5,
        nombre: "Menu Ensalada Deli con Pollo Crispy + Bebida",
        precio: 630,
        imagenURL: "https://i.ibb.co/3pX1t8G/cupones-genericos-500-x-500-09.jpg",
        codigoRetiro: "FAPLG5ASD",
        seActivoCupon: false
    },
];

export {Oferta, Ofertas};