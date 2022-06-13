import { Image, StyleSheet, FlatList,Button, Dimensions,StatusBar, ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { Restaurantes } from '../modelos/Restaurante';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get('window');


export default function DireccionScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seleccione un local:</Text>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                    contentContainerStyle={styles.scrollViewContainer}>
                    <SelectDropdown
                        data={Restaurantes}
                        defaultButtonText={'Search'}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem.nombre
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item.nombre
                        }}
                        search
                        searchInputStyle={styles.dropdown3searchInputStyleStyle}
                        searchPlaceHolder={'Search'}
                        searchPlaceHolderColor={'#F8F8F8'}
                        renderSearchInputLeftIcon={() => {
                        return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                }}
                    />
                    
                            </ScrollView>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                <Button color={'#F2A30F'} title='Continuar'  onPress={() => navigation.navigate('PedidoFinalizadoScreen')} ></Button>
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
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
        paddingBottom: '20%',
      },
      dropdown3searchInputStyleStyle: {
        backgroundColor: 'slategray',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',
      }
});
