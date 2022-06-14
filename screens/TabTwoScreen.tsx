import React, { useContext, useState } from 'react';
import { Image, FlatList, StyleSheet, Button, TouchableOpacity, } from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { Producto,Productos } from '../modelos/Producto';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { RootTabScreenProps } from '../types';


export default function TabTwoScreen() {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;
  // const precioTotal = [precioTotal, setPrecioTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState<number>(0);

  const eliminar = (idProducto: number) => {
    pedidoContext.eliminarProducto(idProducto);
  }
  //Funcion sumar cantidad
  const sumarCantidad = (producto: Producto) => {
    if (producto.cantidad < 5) {
      producto.cantidad = producto.cantidad + 1;
      producto.precioTotal = producto.cantidad * producto.precio;
      pedidoContext.modificarProducto(producto);
    }
  }

  const restarCantidad = (producto: Producto ) => {
    if(producto.cantidad > 1){
    producto.cantidad = producto.cantidad - 1;
    producto.precioTotal = producto.cantidad * producto.precio;
    pedidoContext.modificarProducto(producto);
    } else {
      eliminar(producto.id)
    }
  }
  const navigation = useNavigation();


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
              <Text style={styles.nombre}>${item.precio}</Text>
              <View style={styles.botones}>

              <AntDesign name="minus" size={20} color="grey" onPress={() => restarCantidad(item)} />
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

      {
        pedidoContext.productos.length > 0 ?
          <View>
            <Text style={styles.precioTotal}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
            <View style={styles.botonesFinal}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonContenedorSP}>
                <View style={styles.buttonSeguirPidiendo}>
                  <Text style={styles.buttonSeguirPidiendoText}>Seguir Pidiendo</Text>
                </View>
              </TouchableOpacity>

              <Button color={'#F2A30F'} title='Pagar con la App' onPress={() => navigation.navigate('PedidoScreen')}></Button>
                       </View>
       
          </View>
     
          :

          <View></View>

        }
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
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 40
  },
  cantidad: {
    fontSize: 12,
    right: 20,
    left: 1
  },
  botonesFinal: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContenedorSP: {
    width: 135,
    height: 35
  },
  buttonSeguirPidiendo: {
    backgroundColor: '#ffffff',
    width: 135,
    height: 35
  },
  buttonSeguirPidiendoText:
  {
    marginTop: 7,
    textAlign: 'center',
    color: 'black',
  },
  precioTotal:
  {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  }

});
function item(item: any): void {
  throw new Error('Function not implemented.');
}

