import { createContext } from 'react';
import { Producto } from '../modelos/Producto';

export const PedidoContext = createContext({

    
    productos: Array<Producto>(),
    agregarProducto: (producto: Producto) => {}
});