import React, { useContext, useState } from 'react';
import { StyleSheet, Button,SafeAreaView} from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View,TextInput} from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { RootStackParamList } from '../types';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { FormItem } from 'react-native-form-component';

type DatosTarjetaRouteProps = RouteProp<RootStackParamList, "DatosTarjetaScreen">
type DatosTarjetaProps = { route: DatosTarjetaRouteProps }

export default function DatosTarjetaScreen(props: DatosTarjetaProps) {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');


  return (

    <View style={styles.container}>
      {
        pedidoContext.productos.length > 0 ?
          <View style={styles.container}>
            <Text style={styles.subtitulo}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
            <Text style={styles.subtitulo}>Método de pago</Text>
            <Text style={styles.pagoTarjeta}> <Ionicons name="card-outline" size={24} color="white" />Nueva tarjeta <AntDesign name="checkcircle" size={24} color={'#F2A30F'} /></Text>
            <Card>
              <SafeAreaView style={styles.containertarjeta}>
                   <FormItem 
                      asterik
                      label="Numero de la tarjeta"
                      isRequired  
                      value={cardNumber}
                      onChangeText={(cardNumber) => setCardNumber(cardNumber)}
                      
                    />
                    <FormItem 
                      asterik
                      label="MM/YY"
                      isRequired
                      value={expiration}
                      onChangeText={(expiration) => setExpiration(expiration)}
                    />
                    <FormItem 
                      asterik
                      label="CVV"
                      isRequired
                      value={cvv}
                      onChangeText={(cvv) => setCvv(cvv)}
                     />
              </SafeAreaView>
            </Card>
          </View>
          :
          <View>

            
          </View>

      }

      <View style={styles.buttonConfirmar}>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/PedidoScreen.tsx" />
        <Button color={'#F2A30F'} title='Pagar'  onPress={() =>{}}></Button>
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
  containertarjeta: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
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
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 36
  },

});