import { Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Productos } from '../modelos/Producto';
import React, { useContext } from 'react';
import { CuponContext } from '../contexts/cuponesContext';

export default function CuponesActivosScreen({ navigation }: RootTabScreenProps<'CuponesActivos'>) {
    const cuponContext = useContext(CuponContext);
    const ofertas = cuponContext.ofertas;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mis Cupones</Text>

            {
                cuponContext.ofertas.length > 0 ?
                    <FlatList data={ofertas} renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => []}>
                            <View>
                                <Image source={{ uri: item.imagenURL }} key={item.id} style={styles.logo} />
                                {/* <Text>{item.nombre}</Text> */}
                                <Text>${item.precio}</Text>
                                <Text>{item.codigoRetiro}</Text>
                            </View>
                        </TouchableOpacity>
                    }>
                    </FlatList>
                    :
                    <View></View>
            }

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
    }
});
