import { Producto } from "./Producto";

interface Pedido {
    id: number,
    productos: Array<Producto>
    precioTotal: string,
    cantidad: number
}

export { Pedido };