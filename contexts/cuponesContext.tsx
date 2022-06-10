import { createContext } from 'react';
import { Cupon } from '../modelos/Cupon';

export const CuponContext = createContext({
    cupones: Array<Cupon>(),
    cuponUtilizado: (_cupon: Cupon) => {},
});