import { createContext } from 'react';
import { Oferta } from '../modelos/Oferta';

export const CuponContext = createContext({
    ofertas: Array<Oferta>(),
    agregarCupon: (_oferta: Oferta) => {},
});