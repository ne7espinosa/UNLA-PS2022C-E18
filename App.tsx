import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PedidoContext } from './contexts/pedidoContext';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { Oferta } from './modelos/Oferta';
import { Producto } from './modelos/Producto';
import Navigation from './navigation';
import { CuponContext } from './contexts/cuponesContext';
import { DatosPersonales } from './modelos/DatosPersonales';
import { DatosPersonalesContext } from './contexts/datosPersonales';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  //productos del pedido
  const [productos, setProductos] = useState<Producto[]>([]);
  //cupones/ofertas del pedido
  const [ofertas, setOfertas] = useState<Oferta[]>([]);
  //datos personales
  const [datosUsuario, setDatosUsuario] = useState<DatosPersonales>(new DatosPersonales);

  const agregarProducto = (producto: Producto, cantidad: number) => {
    producto.cantidad = cantidad;
    producto.precioTotal = producto.precio * cantidad;
    setProductos([...productos, producto]);
  }

  const yaSeAgregoAlPedido = (producto: Producto): boolean => {
    const buscarProducto = productos.filter(element => element.id == producto.id)[0];
    if (buscarProducto) { return true; } else { return false; }
  }

  const eliminarProducto = (idProducto: number) => {
    const listaProductoNueva = productos.filter((element) =>
      element.id !== idProducto);
    setProductos(listaProductoNueva);
  }

  const modificarProducto = (producto: Producto) => {
    const productosNuevos = productos.map(item => {
      if (item.id === producto.id) {
        return { ...item, cantidad: producto.cantidad, precio: producto.precio };
      }
      return item;
    });
    setProductos(productosNuevos);
  }

  const agregarCupon = (oferta: Oferta) => {
    oferta.seActivoCupon = true;
    setOfertas([...ofertas, oferta]);
  }

  const agregarDatosPersonales = (datosPersonales: DatosPersonales) => {
    setDatosUsuario(datosPersonales)
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PedidoContext.Provider value={{ productos, agregarProducto, yaSeAgregoAlPedido, eliminarProducto, modificarProducto }}>
        <CuponContext.Provider value={{ ofertas, agregarCupon }}>
          <DatosPersonalesContext.Provider value={{ datosUsuario, agregarDatosPersonales }}>
            <SafeAreaProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </SafeAreaProvider>
          </DatosPersonalesContext.Provider>
        </CuponContext.Provider>
      </PedidoContext.Provider>
    );
  }
}
