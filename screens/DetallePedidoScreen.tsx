import { Alert, Button, Image, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import React, { useContext, useState } from 'react';
import { Producto, Productos } from '../modelos/Producto';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, RootStackScreenProps } from '../types';
import { PedidoContext } from '../contexts/pedidoContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type DetallePedidoRouteProps = RouteProp<RootStackParamList, "DetallePedidoScreen">
type DetallePedidoProps = { route: DetallePedidoRouteProps }

export default function DetallePedidoScreen(props: DetallePedidoProps) {

    const pedidoContext = useContext(PedidoContext);
    const { idProducto } = props.route.params;
    const [cantidad, setCantidad] = useState(1);
    const navigation = useNavigation();

    //Funcion sumar cantidad
    const sumarCantidad = () => {
        if (cantidad < 5) {
            setCantidad(cantidad + 1)
        }
    }

    //Funcion restar cantidad
    const restarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const producto = Productos.find(e => e.id == idProducto) as Producto;

    const agregar = (producto: Producto) => {
        //buscarProducto es para ver si el producto ya fue agregado al pedido
        let existeProducto = pedidoContext.yaSeAgregoAlPedido(producto);
        if (existeProducto) {
            setTimeout(() => {
                Alert.alert(
                    "Este Producto ya existe en tu pedido",
                    "Ya tenes agregado este producto a tu pedido",
                    [
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    {cancelable: true}
                )
                
            }, 1)
        }
        else {
            pedidoContext.agregarProducto(producto, cantidad);
            navigation.goBack();
        }
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>{producto?.nombre}</Text>
            <Text>{producto.precio}</Text>
            <Image source={{ uri: producto?.imagenURL }} key={producto.id} style={styles.imagen} />
            <Text> {producto.detalle} </Text>
            <View style={styles.buttonsCantidad}>
                <View style={styles.buttonMenos}>
                    <Button title='-' onPress={restarCantidad} />
                </View>
                <Text style={styles.textoCantidad}>{cantidad}</Text>
                <View style={styles.buttonMas}>
                    <Button title='+' onPress={sumarCantidad} />
                </View>
            </View>
            <View style={styles.buttonConfirmar}>
                <Button color={'#F2A30F'} title='Añadir al Pedido' onPress={() => agregar(producto)}></Button>
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
        marginTop: 20,
    },
    buttonMenos: {
        right: 5
    },
    buttonMas: {
        left: 5
    },
    textoCantidad: {
        marginTop: 4
    },
    buttonConfirmar: {
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
    }
});
