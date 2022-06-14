import { Alert, Button, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useContext, useState } from 'react';
import { Producto, Productos } from '../modelos/Producto';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetalleOfertaRouteProps = RouteProp<RootStackParamList, "DetalleOfertaScreen">
type DetalleOfertaProps = { route: DetalleOfertaRouteProps }

import { Oferta, Ofertas } from '../modelos/Oferta';
import { CuponContext } from '../contexts/cuponesContext';

export default function DetalleOfertaScreen(props: DetalleOfertaProps) {

    const { idOferta } = props.route.params;

    const navigation = useNavigation();

    const cuponContext = useContext(CuponContext);

    const oferta = Ofertas.find(e => e.id == idOferta) as Oferta;

    const generarCupon = (oferta: Oferta) => {
        if(oferta.seActivoCupon)
        {
            setTimeout(() => {
                Alert.alert(
                    "Ya tienes un cupón activo",
                    "Ya utilizaste un cupón para esta oferta",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    {cancelable: true}
                )
                
            }, 1)
        }
        else
        {
            cuponContext.agregarCupon(oferta);
            navigation.navigate("CuponOfertaScreen", { idOferta: oferta.id })
        }

    }

    return (

        <View style={styles.container}>
            <Image source={{ uri: oferta.imagenURL }} key={oferta.id} style={styles.imagen} />
            <Text>${oferta.precio}</Text>

            <View style={styles.buttonConfirmar}>
                <Button color={'#F2A30F'} title='Obtener cupón' onPress={() => generarCupon(oferta)}></Button>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row'
    },
    imagen: {
        marginTop: 20,
        width: 200,
        height: 200
    },
    buttonsCantidad: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 50,
        borderColor: 'black'
    },
    buttonMenos: {
        marginHorizontal: 10,
        padding: 4,
        alignContent: 'space-between',
    },
    buttonMas: {
        marginLeft: 10,

        padding: 4,
        alignContent: 'space-between',

    },
    textoCantidad: {
        marginBottom: 7,
        padding: 3,
        alignContent: 'space-between',
    },
    buttonConfirmar: {
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
    }
});
