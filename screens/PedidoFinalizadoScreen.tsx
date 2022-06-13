import { Image, StyleSheet,Button } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootStackParamList, RootTabScreenProps } from '../types';
import React, { useContext } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { PedidoContext } from '../contexts/pedidoContext';


type FinalizadoRouteProps = RouteProp<RootStackParamList, "PedidoFinalizadoScreen">
type FinalizadoProps = { route: FinalizadoRouteProps }
export default function PedidoFinalizadoScreen(props: FinalizadoProps) {

    const pedidoContext = useContext(PedidoContext);
    const productos = pedidoContext.productos;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tu pedido fue finalizado con exito!</Text>
            <Image
                style={{ width: 350, height: 350, marginBottom: 15 }}
                source={{uri:'https://www.mcdonalds.pt/media/6768/left_pedidosmobile.png'}}
                />           
            <Text style={styles.title}>Recuerde el costo de su comida</Text>
            <Text style={styles.title}>Total: ${productos.reduce((sumar, item) => sumar + item.precioTotal, 0)} </Text>
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

});
