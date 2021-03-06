/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import DetallePedidoScreen from '../screens/DetallePedidoScreen';
import PedidoScreen from '../screens/PedidoScreen';
import DatosPersonalesScreen from '../screens/DatosPersonalesScreen';
import DatosTarjetaScreen from '../screens/DatosTarjetaScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import OfertasScreen from '../screens/OfertasScreen';
import DetalleOfertaScreen from '../screens/DetalleOfertaScreen';
import RestaurantesScreen from '../screens/RestaurantesScreen';
import CuponOfertaScreen from '../screens/CuponOfertaScreen';
import CuponesActivosScreen from '../screens/CuponesActivosScreen';
import DireccionScreen from '../screens/DireccionScreen';
import PedidoFinalizadoScreen from '../screens/PedidoFinalizadoScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="DetallePedidoScreen" component={DetallePedidoScreen} options={{ title: '' }} />
      <Stack.Screen name="PedidoScreen" component={PedidoScreen} options={{ title: '' }} />
      <Stack.Screen name="DatosPersonalesScreen" component={DatosPersonalesScreen} options={{ title: '' }} />
      <Stack.Screen name="DatosTarjetaScreen" component={DatosTarjetaScreen} options={{ title: '' }} />
      <Stack.Screen name="DetalleOfertaScreen" component={DetalleOfertaScreen} options={{ title: '' }} />
      <Stack.Screen name="CuponOfertaScreen" component={CuponOfertaScreen} options={{ title: '' }} />
      <Stack.Screen name="DireccionScreen" component={DireccionScreen} options={{ title: '' }} />
      <Stack.Screen name="PedidoFinalizadoScreen" component={PedidoFinalizadoScreen} options={{ title: '' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {



  const colorScheme = useColorScheme();

  return (

    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          headerTitle: '',
          title: 'Pedidos',
          tabBarLabel: 'Pedidos',
          tabBarActiveTintColor: '#F4D03F',
          tabBarInactiveTintColor: '#A6ACAF',
          tabBarIcon: ({ color }) => <Ionicons name="ios-fast-food-outline" color={color} size={25} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          headerTitle: '',
          title: 'Mi pedido',
          tabBarActiveTintColor: '#F4D03F',
          tabBarInactiveTintColor: '#A6ACAF',
          tabBarIcon: ({ color }) => <Ionicons name="cart-outline" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Ofertas"
        component={OfertasScreen}
        options={{
          headerTitle: '',
          title: 'Ofertas',
          tabBarActiveTintColor: '#F4D03F',
          tabBarInactiveTintColor: '#A6ACAF',
          tabBarIcon: ({ color }) => <Ionicons name="pricetag-outline" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Restaurantes"
        component={RestaurantesScreen}
        options={{
          headerTitle: '',
          title: 'Restaurantes',
          tabBarActiveTintColor: '#F4D03F',
          tabBarInactiveTintColor: '#A6ACAF',
          tabBarIcon: ({ color }) => <Ionicons name="location-outline" size={25} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CuponesActivos"
        component={CuponesActivosScreen}
        options={{
          headerTitle: '',
          title: 'Mis Cupones',
          tabBarActiveTintColor: '#F4D03F',
          tabBarInactiveTintColor: '#A6ACAF',
          tabBarIcon: ({ color }) => <Ionicons name="md-list-outline" size={25} color={color} />,
        }}
      />
    </BottomTab.Navigator>

  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
