import { Image, StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Productos } from '../modelos/Producto';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pedidos</Text>
      <FlatList data={Productos} renderItem={({ item }) =>
        <View>
          <Image source={{ uri: item.imagenURL }} key={item.id} style={styles.logo} />
          <Text>{item.nombre}</Text>
          <Text>{item.precio}</Text>
        </View>
      }>
      </FlatList>
      {/* <Image source={require('../assets/images/mcdonaldsicon.png')} style={styles.logo}/> */}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
