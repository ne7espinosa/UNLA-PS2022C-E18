import React, { useContext, useState } from 'react'
import { Alert, Button, ScrollView, StyleSheet } from 'react-native'
import { RootStackParamList, RootStackScreenProps } from '../types';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { Text, View, TextInput } from '../components/Themed';
import { Form, FormItem } from 'react-native-form-component';
import { DatosPersonalesContext } from '../contexts/datosPersonales';
import { DatosPersonales } from '../modelos/DatosPersonales';

type DatosPersonalesRouteProps = RouteProp<RootStackParamList, "DatosPersonalesScreen">
type DatosPersonalesProps = { route: DatosPersonalesRouteProps }

export default function DatosPersonalescreen(props: DatosPersonalesProps) {

  const [datosPersonales, setDatosPersonales] = useState<DatosPersonales>();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [dni, setDNI] = useState('');

  const [customValidationNombre, setValidacionNombre] = useState({ status: false, message: "Campo obligatorio" });
  const [customValidacionApellido, setValidacionApellido] = useState({ status: false, message: "Campo obligatorio" });
  const [customValidacionTelefono, setValidacionTelefono] = useState({ status: false, message: "Campo obligatorio" });
  const [customValidacionDNI, setValidacionDNI] = useState({ status: false, message: "Campo obligatorio" });
  
  const datosPersonalesContext = useContext(DatosPersonalesContext);

  const agregarDatosPersonales = (datosPersonales: DatosPersonales) => {
    datosPersonalesContext.agregarDatosPersonales(datosPersonales);
  }

  const setearNombre = (name: string) => {
    if (name && name != '') {
      customValidationNombre.status = true;
      setValidacionNombre(customValidationNombre);
      setNombre(name);
    }
    else{
      customValidationNombre.status = false;
      setValidacionNombre(customValidationNombre);
      setNombre(name);
    }
  }

  const setearApellido = (surname: string) => {
    if (surname && surname != "") {
      customValidacionApellido.status = true;
      setValidacionApellido(customValidacionApellido);
      setApellido(surname);
    }
    else{
      customValidacionApellido.status = false;
      setValidacionApellido(customValidacionApellido);
      setApellido(surname);
    }
  }

  const setearTelefono = (phone: string) => {
    if (phone && phone != "") {
      customValidacionTelefono.status = true;
      setValidacionTelefono(customValidacionTelefono);
      setTelefono(phone);
    }
    else{
      customValidacionTelefono.status = false;
      setValidacionTelefono(customValidacionTelefono);
      setTelefono(phone);
    }
  }

  const setearDNI = (documento: string) => {
    if (documento && documento != "") {
      customValidacionDNI.status = true;
      setValidacionDNI(customValidacionDNI);
      setDNI(documento);
    }
    else {
      setDNI(documento);
    }
  }

  const navigation = useNavigation();

  const submit = () => {
    if(customValidationNombre.status == true && customValidacionApellido.status == true && customValidacionTelefono.status == true && customValidacionDNI.status == true)
    {
      const datosPerso = new DatosPersonales();
      datosPerso.apellido = apellido;
      datosPerso.dni = dni;
      datosPerso.nombre = nombre;
      agregarDatosPersonales(datosPerso);
      navigation.navigate("DatosTarjetaScreen");
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
      <Text style={styles.title}>Completa tus datos</Text>
      <Text style={styles.subtitulo}>
        Para proceder con la compra es necesario que completes esta informacion.
      </Text>
      <Form onButtonPress={() => submit()} buttonText="Continuar" buttonStyle={styles.buttonConfirmar}>
        <Text>Nombres</Text>
        <FormItem
          isRequired
          value={nombre}
          onChangeText={(nombre) => setearNombre(nombre)}
          customValidation={() => customValidationNombre}
          textInputStyle={styles.formItem}
          placeholder="Nombres"
          maxLength={40}
          keyboardType="ascii-capable">
        </FormItem>
        <Text>Apellidos</Text>
        <FormItem
          isRequired
          value={apellido}
          onChangeText={(apellido) => setearApellido(apellido)}
          customValidation={() => customValidacionApellido}
          placeholder="Apellidos"
          maxLength={40}
          keyboardType="ascii-capable">
        </FormItem>
        <Text>Telefono</Text>
        <FormItem
          isRequired
          value={telefono}
          onChangeText={(telefono) => setearTelefono(telefono)}
          customValidation={() => customValidacionApellido}
          placeholder="Telefono"
          maxLength={12}
          keyboardType="numeric">
        </FormItem>
        <Text>Documento</Text>
        <FormItem
          isRequired
          value={dni}
          onChangeText={(dni) => setearDNI(dni)}
          customValidation={() => customValidacionDNI}
          placeholder="Documento"
          maxLength={10}
          keyboardType="numeric">
        </FormItem>
      </Form>
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
    backgroundColor: '#F2A30F'
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    alignContent: 'space-between'
  },
  formItem:{
    borderColor: 'black'
  }
});
