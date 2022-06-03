import React, { useContext, useState } from 'react';
import { StyleSheet, Button } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { RootStackParamList } from '../types';
import { AntDesign, Ionicons } from '@expo/vector-icons';

type PedidoRouteProps = RouteProp<RootStackParamList, "PedidoScreen">
type PedidoProps = { route: PedidoRouteProps }

export default function PedidoScreen(props: PedidoProps) {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Detalle del pedido</Text>

      {
        pedidoContext.productos.length > 0 ?
          <View style={styles.container}>
            <Text style={styles.subtitulo}>Resumen</Text>
            <Text style={styles.subtotal}>Subtotal: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
            <Text style={styles.subtitulo}>Método de pago</Text>
            <Text style={styles.pagoTarjeta}> <Ionicons name="card-outline" size={24} color="white" />Pago con tarjeta <AntDesign name="checkcircle" size={24} color={'#F2A30F'} /></Text>
          </View>
          :
          <View>
          </View>
      }

      <View style={styles.buttonConfirmar}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/PedidoScreen.tsx" />
        <Text style={styles.subtitulo}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
        <Button color={'#F2A30F'} title='Pagar' onPress={() => navigation.navigate('DatosPersonalesScreen')}></Button>
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',

  },
  separator2: {
    marginVertical: 20,
    height: 1,
    width: '30%',

  },
  subtotal: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 50,
  },

  subtitulo: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  pagoTarjeta: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 50,
  },


  buttonConfirmar: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  },
});