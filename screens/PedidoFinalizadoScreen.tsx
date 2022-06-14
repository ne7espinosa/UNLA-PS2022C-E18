import { Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackParamList, RootTabScreenProps } from '../types';
import React, { useContext } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { PedidoContext } from '../contexts/pedidoContext';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


type FinalizadoRouteProps = RouteProp<RootStackParamList, "PedidoFinalizadoScreen">
type FinalizadoProps = { route: FinalizadoRouteProps }
export default function PedidoFinalizadoScreen(props: FinalizadoProps) {

    const pedidoContext = useContext(PedidoContext);
    const productos = pedidoContext.productos;
    const navigation = useNavigation();

    const makeid = (length: number) => {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu pedido fue finalizado con exito!</Text>
            <Image
                style={{ width: 350, height: 350}}
                source={{ uri: 'https://www.mcdonalds.pt/media/6768/left_pedidosmobile.png' }}
            />
            <Text style={styles.title}>Recuerde el costo de su comida</Text>
            <Text style={styles.title}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
            <Text>Código de retiro: {makeid(8)}. No olvides de anotarlo!</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Root")} style={styles.buttonContenedorSP}>
              <View style={styles.buttonSeguirPidiendo}>
                <Text style={styles.buttonSeguirPidiendoText}>Seguir Pidiendo</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

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
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        flexDirection: 'row'
    },
    subtitulo: {
        fontSize: 20,
        marginBottom: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    buttonContenedorSP: {
        marginTop: 10,
        width: 135,
        height: 35,

    },
    buttonSeguirPidiendo: {
        backgroundColor: '#ffffff',
        width: 135,
        height: 35,
    },
    buttonSeguirPidiendoText:
    {
        marginTop: 7,
        textAlign: 'center',
        color: 'black',
    },

});
