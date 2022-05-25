import { createContext } from 'react';
import { Producto } from '../modelos/Producto';

export const PedidoContext = createContext({

    
    productos: Array<Producto>(),
    agregarProducto: (_producto: Producto, _cantidad: number) => {},
    yaSeAgregoAlPedido: (_producto: Producto): boolean => {
        return false;
    }
});