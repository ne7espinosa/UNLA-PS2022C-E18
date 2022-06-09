import { Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { Restaurantes } from '../modelos/Restaurante';

export default function RestaurantesScreen({ navigation }: RootTabScreenProps<'Restaurantes'>) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Restaurantes</Text>
            <FlatList data={Restaurantes} renderItem={({ item }) =>
                <View style={styles.restaurante}>
                    <Text>{item.nombre}</Text>
                    <Text>{item.direccion}</Text>
                    <Text>Horario de atención: {item.horarioAtencionDesde} a {item.horarioAtencionHasta}</Text>
                    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                </View>
                
            }>
            </FlatList>
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    logo: {
        marginTop: 20,
        width: 200,
        height: 200
    },
    restaurante: {
        fontSize: 10,
        marginTop: 10,
    }
});
