import React, { useState } from 'react'
import { Button, ScrollView, StyleSheet } from 'react-native'
import { RootStackParamList, RootStackScreenProps } from '../types';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { Text, View, TextInput } from '../components/Themed';

type DatosPersonalesRouteProps = RouteProp<RootStackParamList, "DatosPersonalesScreen">
type DatosPersonalesProps = { route: DatosPersonalesRouteProps }

export default function DatosPersonalescreen(props: DatosPersonalesProps) {

  const [state, setState] = useState({
    name: '',
    surname: '',
    phone: '',
    dni: '',
  });

  const handleChangeText = (name: string, value: string) => {
    setState({ ...state, [name]: value })
  }


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Completa tus datos</Text>
      <Text style={styles.subtitulo}>
        Para proceder con la compra es necesario que completes esta informacion. Los datos seran guardados para no tener que rellenar el formulario en cada pedido
      </Text>

      <View style={styles.inputGroup}>
        <Text>Nombre</Text>
        <TextInput placeholder='Nombre'
          onChangeText={(value) => handleChangeText('name', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Apellido</Text>
        <TextInput placeholder='Apellido'
          onChangeText={(value) => handleChangeText('surname', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Telefono</Text>
        <TextInput placeholder='Telefono'
          onChangeText={(value) => handleChangeText('phone', value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Documento</Text>
        <TextInput placeholder='Documento'
          onChangeText={(value) => handleChangeText('dni', value)}
        />
      </View>
      <View style={styles.buttonConfirmar}>
        <Button color={'#F2A30F'} title='Continuar' onPress={() => { }} />
      </View>
    </View>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    flexDirection: 'row'
  },
  subtitulo: {
    fontSize: 15,
    marginBottom: 5,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  buttonConfirmar: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignContent: 'space-between'
  }
});
