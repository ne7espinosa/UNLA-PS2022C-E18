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

  const modificarCantidad = (idProducto: number, cantidad: number) => {
    const productosNuevos = productos.map(item => {
      if (item.id === idProducto) {
        return {...item, cantidad: cantidad};
      }
      return item;
    });
    setProductos(productosNuevos);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PedidoContext.Provider value={{ productos, agregarProducto, yaSeAgregoAlPedido, eliminarProducto, modificarCantidad }}>
        <SafeAreaProvider>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />

        </SafeAreaProvider>
      </PedidoContext.Provider>
    );
  }
}
