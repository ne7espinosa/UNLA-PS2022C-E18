import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PedidoContext } from './contexts/pedidoContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Producto } from './modelos/Producto';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //productos del pedido
  const [productos, setProductos] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto, cantidad: number) => {
    producto.cantidad = cantidad;
    producto.precioTotal = producto.precio * cantidad;
    setProductos([...productos, producto]);
  }

  const yaSeAgregoAlPedido = (producto: Producto): boolean => {
    const buscarProducto = productos.filter(element => element.id == producto.id)[0];
    if(buscarProducto) {return true;} else {return false;}
  }

  const eliminarProducto = (idProducto: number) => {
    const listaProductoNueva = productos.filter((element) =>
    element.id !== idProducto);
    setProductos(listaProductoNueva);
  }

  const modificarProducto = (producto: Producto) => {
    const productosNuevos = productos.map(item => {
      if (item.id === producto.id) {
        return {...item, cantidad: producto.cantidad, precio: producto.precio};
      }
      return item;
    });
    setProductos(productosNuevos);
  }

  // const calcularTotal = () => {
  //   (productos.reduce((sumar, item) => sumar + item.precioTotal, 0));
  // }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PedidoContext.Provider value={{ productos, agregarProducto, yaSeAgregoAlPedido, eliminarProducto, modificarProducto }}>
        <SafeAreaProvider>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />

        </SafeAreaProvider>
      </PedidoContext.Provider>
    );
  }
}
