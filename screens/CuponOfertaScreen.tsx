import { Alert, Button, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useContext, useState } from 'react';
import { Producto, Productos } from '../modelos/Producto';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import QRCode from 'react-native-qrcode-svg';

type CuponOfertaRouteProps = RouteProp<RootStackParamList, "CuponOfertaScreen">
type CuponOfertaProps = { route: CuponOfertaRouteProps }

import { Ofertas } from '../modelos/Oferta';

export default function CuponOfertaScreen(props: CuponOfertaProps) {

    const { idOferta } = props.route.params;

    const navigation = useNavigation();

    const oferta = Ofertas.find(e => e.id == idOferta) as Producto;

    function Simple() {
        return <QRCode value="http://mcdonalds.com.ar" size={200}/>;
    }

    return (

        <View style={styles.container}>
            {/* <Image source={{ uri: oferta.imagenURL }} key={oferta.id} style={styles.imagen} /> */}
            <Text>{oferta.nombre}</Text>
            <View>
                <Simple />
            </View>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10
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
    },
    // qrCode: {
    //     height: 500,
    //     width: 500,
    //     alignItems: 'center',
    // }
});
