import React, { useContext, useState } from 'react';
import { StyleSheet, Button, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { RouteProp, useNavigation } from '@react-navigation/native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, TextInput } from '../components/Themed';
import { PedidoContext } from '../contexts/pedidoContext';
import { RootStackParamList } from '../types';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { Form, FormItem } from 'react-native-form-component';
import { TextField } from 'react-native-material-textfield';
import { DatosPersonalesContext } from '../contexts/datosPersonales';


type DatosTarjetaRouteProps = RouteProp<RootStackParamList, "DatosTarjetaScreen">
type DatosTarjetaProps = { route: DatosTarjetaRouteProps }


export default function DatosTarjetaScreen(props: DatosTarjetaProps) {
  const pedidoContext = useContext(PedidoContext);
  const productos = pedidoContext.productos;
  const navigation = useNavigation();
  const datosPersonalesContext = useContext(DatosPersonalesContext);
  const datosPersonales = datosPersonalesContext.datosUsuario;

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [customValidacionNumero, setValidacionNumero] = useState({ status: false, message: "Campo obligatorio" });
  const [customValidacionExpiracion, setValidacionExpiracion] = useState({ status: false, message: "Campo obligatorio" });
  const [customValidacionCVV, setValidacionCVV] = useState({ status: false, message: "Campo obligatorio" });

  const setearNumero = (cardNumber: string) => {
    if (cardNumber && cardNumber != '') {
      customValidacionNumero.status = true;
      setValidacionNumero(customValidacionNumero);
      setCardNumber(cardNumber);
    }
    else {
      customValidacionNumero.status = false;
      setValidacionNumero(customValidacionNumero);
      setCardNumber(cardNumber);
    }
  }

  const setearExpiracion = (expiration: string) => {
    if (expiration && expiration != '') {
      customValidacionExpiracion.status = true;
      setValidacionExpiracion(customValidacionExpiracion);
      setExpiration(expiration);
    }
    else {
      customValidacionExpiracion.status = false;
      setValidacionExpiracion(customValidacionExpiracion);
      setExpiration(expiration);
    }
  }

  const setearCVV = (cvv: string) => {
    if (cvv && cvv != '') {
      customValidacionCVV.status = true;
      setValidacionCVV(customValidacionCVV);
      setCvv(cvv);
    }
    else {
      customValidacionCVV.status = false;
      setValidacionCVV(customValidacionCVV);
      setCvv(cvv);
    }
  }

  const submit = () => {
    if(customValidacionNumero.status == true && customValidacionExpiracion.status == true && customValidacionCVV.status == true)
    {
      navigation.navigate("DireccionScreen");
    }
    else
    {
      setTimeout(() => {
        Alert.alert(
            "Debes llenar todos los campos",
            "Por favor rellena todos los campos",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            {cancelable: true}
        )
        
    }, 1)
    }
  }

  return (

    <View style={styles.container}>
      {
        pedidoContext.productos.length > 0 ?
          <View style={styles.container}>
            <Text style={styles.subtitulo}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
            <Text style={styles.subtitulo}>Método de pago</Text>
            <Text style={styles.pagoTarjeta}> <Ionicons name="card-outline" size={24} color="white" />Nueva tarjeta <AntDesign name="checkcircle" size={24} color={'#F2A30F'} /></Text>
            <View style={styles.containertarjeta}>
            <SafeAreaView>
                <FormItem
                  asterik
                  placeholder="Numero de la tarjeta"
                  isRequired
                  value={cardNumber}
                  maxLength={16}
                  onChangeText={(cardNumber) => setearNumero(cardNumber)}
                  customValidation={() => customValidacionNumero}
                />

                <FormItem
                  asterik
                  placeholder="MM/YY"
                  isRequired
                  value={expiration}
                  maxLength={4}
                  onChangeText={(expiration) => setearExpiracion(expiration)}
                  customValidation={() => customValidacionExpiracion}
                />

                <FormItem
                  asterik
                  placeholder="CVV"
                  isRequired
                  value={cvv}
                  maxLength={3}
                  onChangeText={(cvv) => setearCVV(cvv)}
                  customValidation={() => customValidacionCVV}
                />

              </SafeAreaView>
            </View>
            <Text>{datosPersonales.apellido} {datosPersonales.nombre}</Text>
            <Text>{datosPersonales.dni}</Text>

          </View>

          :
          <View>


          </View>

      }
      
      <View style={styles.buttonConfirmar}>
        <Button color={'#F2A30F'} title='Pagar' onPress={() => submit()} ></Button>
      </View>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  formItem: {
    borderBottomColor: 'black'
  },
  containertarjeta: {
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: '#ecf0f1',

  },
  textField: {
    flex: 1,
    marginTop: 10,
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
    textAlign: 'center',
  },

  buttonConfirmar: {
    backgroundColor: '#F2A30F'
  },

});