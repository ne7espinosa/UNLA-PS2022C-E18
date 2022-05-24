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

  const [productos, setProductos] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setProductos([...productos, producto]);
  }


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PedidoContext.Provider value={{ productos, agregarProducto }}>
        <SafeAreaProvider>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />

        </SafeAreaProvider>
      </PedidoContext.Provider>
    );
  }
}
