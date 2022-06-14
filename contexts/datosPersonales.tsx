import { createContext } from 'react';
import { DatosPersonales } from '../modelos/DatosPersonales';


export const DatosPersonalesContext = createContext({
    datosUsuario: new DatosPersonales(),
    agregarDatosPersonales: (_datosPersonales: DatosPersonales) => {}
});