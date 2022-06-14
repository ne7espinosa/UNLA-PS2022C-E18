import { Image, StyleSheet, FlatList, Button, Dimensions, StatusBar, ScrollView } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import React from 'react';
import { Restaurantes } from '../modelos/Restaurante';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');


export default function DireccionScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seleccione un local:</Text>
            <View style={styles.container2}>
                <SelectDropdown
                    data={Restaurantes}
                    defaultButtonText={'Buscar locales'}
                    // searchInputStyle={styles.buscador}
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
                    renderSearchInputRightIcon={() => {
                        return <FontAwesome name={'search'} color={'#F2A30F'} size={18} />;
                    }}
                    buttonStyle={styles.dropdown1BtnStyle}
                    buttonTextStyle={styles.dropdown1BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                        return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown1DropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.dropdown1RowTxtStyle}

                />
            </View>

            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <View style={styles.buttonConfirmar}>
                <Button color={'#F2A30F'} title='Continuar' onPress={() => navigation.navigate('PedidoFinalizadoScreen')} ></Button>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 400,
        fontWeight: 'bold',
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
    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
    },
    dropdown1DropdownStyle: { backgroundColor: '#EFEFEF' },

    dropdown1RowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },

    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },


    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },

    buttonConfirmar: {
        right: 10,
        left: 10,
        position: 'absolute',
        bottom: 10,
    },
    buscador: {
        width: 40,

    }

});
