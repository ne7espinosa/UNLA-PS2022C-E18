import React, { useContext } from 'react';
import { Image, FlatList, StyleSheet, Button } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { Producto } from '../modelos/Producto';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;

  const eliminar = (idProducto: number) => {
    pedidoContext.eliminarProducto(idProducto);
  }

  const modificarCantidad = (producto: Producto) => {
    if (producto.cantidad < 5) {
      let cantidadNueva = producto.cantidad + 1;
      pedidoContext.modificarCantidad(producto.id, cantidadNueva);
    }
  }

  //Funcion sumar cantidad
  const sumarCantidad = (producto: Producto) => {
    modificarCantidad(producto);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Pedidos</Text>
      {
        pedidoContext.productos.length > 0
          ?
          <FlatList data={productos} renderItem={({ item }) =>
            <View style={styles.boxPrincipal}>
              <Image source={{ uri: item.imagenURL }} key={item.id} style={styles.muestra} />
              <Text style={[styles.nombre, { width: 150 }]}>{item.nombre}</Text>
              <Text style={styles.nombre}>{item.precio}</Text>
              <View style={styles.botones}>
                <MaterialIcons name="delete" size={24} color='grey' onPress={() => eliminar(item.id)} />
                <Text style={styles.cantidad}>{item.cantidad}</Text>
                <AntDesign name="plus" size={20} color="grey" onPress={() => sumarCantidad(item)} />
              </View>
            </View>

          }>
          </FlatList>
          :
          <View>
            <Text style={styles.advertencia}>Aún no has hecho ningún pedido</Text>
            <Text style={styles.advertencia}>Desde aquí podrás seguir el estado de tu pedido.</Text>
          </View>
      }

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxPrincipal: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  advertencia: {
    fontSize: 15,
    textAlign: 'center'
  },
  nombre: {
    fontSize: 10,
    marginVertical: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  muestra: {
    marginTop: 20,
    width: 50,
    height: 50,
    alignContent: 'flex-start',
    borderRadius: 25,
  },
  botones:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40
  },
  cantidad: {
    fontSize: 12,
    right: 20,
    left: 20
  }

});
