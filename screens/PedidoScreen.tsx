import React, { useContext, useState } from 'react';
import { Image, FlatList, StyleSheet, Button, TouchableOpacity, } from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { RootStackParamList, RootStackScreenProps } from '../types';
import { AntDesign,MaterialIcons,Ionicons } from '@expo/vector-icons';



type PedidoRouteProps = RouteProp<RootStackParamList, "PedidoScreen">
type PedidoProps = { route: PedidoRouteProps }

export default function PedidoScreen(props: PedidoProps) {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;
  // const precioTotal = [precioTotal, setPrecioTotal] = useState(0);
  const [precioTotal, setPrecioTotal] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle del pedido</Text>
      {
      pedidoContext.productos.length > 0 ?
          <View>
            <Text style={styles.precioTotal}>Resumen</Text>

            <Text style={styles.buttonSubtotal}>Subtotal: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>      
               <Text style={styles.pagoTarjeta}> <Ionicons name="card-outline" size={24} color="black" />Pago con tarjeta</Text>                  
              </View>     
          :

          <View></View>

        }
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/PedidoScreen.tsx" />

      <Text style={styles.precioTotal}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>


      <View style={styles.buttonConfirmar}>
                <Button color={'#F2A30F'} title='Pagar' onPress={() =>{}}></Button>
                </View>

      
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
  },

    pagoTarjeta:
  {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'right',
    fontWeight: 'bold',
  },

  
  buttonConfirmar: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
},

buttonSubtotal:
{
    marginTop: 7,
    textAlign: 'center',
    color: 'black',
  },

});