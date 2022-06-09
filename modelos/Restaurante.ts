interface Restaurante {
    id: number;
    nombre: string;
    direccion: string;
    horarioAtencionDesde: string;
    horarioAtencionHasta: string;
}

const Restaurantes: Restaurante[] = [
    {
        id: 1,
        nombre: "McDonald's Boulevard Adrogue",
        direccion: 'H. Yrigoyen 13200 Adrogué',
        horarioAtencionDesde: "08:00",
        horarioAtencionHasta: "23:00"
    },
    {
        id: 2,
        nombre: "McDonald's Constitución",
        direccion: 'Av Brasil 1174',
        horarioAtencionDesde: "08:00",
        horarioAtencionHasta: "22:00"
    },
    {
        id: 3,
        nombre: "McDonald's Caballito Shopping",
        direccion: 'Avenida Rivadavia 5108',
        horarioAtencionDesde: "08:00",
        horarioAtencionHasta: "23:00"
    },
    {
        id: 4,
        nombre: "McDonald's Puerto Madero",
        direccion: 'Alicia M. De Justo 1190',
        horarioAtencionDesde: "09:00",
        horarioAtencionHasta: "00:00"
    },
    {
        id: 5,
        nombre: "McDonald's Paseo La Plaza",
        direccion: 'Av. Corrientes 1650',
        horarioAtencionDesde: "17:00",
        horarioAtencionHasta: "23:00"
    },
    
];

export {Restaurante, Restaurantes};