// 1° preciso importar as screens que vão ficar dentro das minhas rotas
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Perfil from "./src/screens/Perfil";
import Produto from "./src/screens/Produtos";
import Pesquisa from "./src/screens/Search";
import Comunidade from "./src/screens/Comunidade";

// 2° criar a navegação em si
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import { FontAwesome } from '@expo/vector-icons';

// 3° Criar a navegação stack
export const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Home"
                component={TabNavigate}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export const TabNavigate = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ focused }) => ({
            tabBarIcon: () => (
              <FontAwesome
                name="home"
                size={24}
                color={focused? 'tomato' : 'black'} // mudar cor do ícone aqui
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
  
        <Tab.Screen
          name="Pesquisa"
          component={Pesquisa}
          options={({ focused }) => ({
            tabBarIcon: () => (
              <FontAwesome
                name="search"
                size={24}
                color={focused? 'tomato' : 'black'} // mudar cor do ícone aqui
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
  
        <Tab.Screen
          name="Produto"
          component={Produto}
          options={({ focused }) => ({
            tabBarIcon: () => (
              <FontAwesome
                name="shopping-cart"
                size={24}
                color={focused? 'tomato' : 'black'} // mudar cor do ícone aqui
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
  
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={({ focused }) => ({
            tabBarIcon: () => (
              <FontAwesome
                name="user"
                size={24}
                color={focused? 'tomato' : 'black'} // mudar cor do ícone aqui
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
  
        <Tab.Screen
          name="Comunidade"
          component={Comunidade}
          options={({ focused }) => ({
            tabBarIcon: () => (
              <FontAwesome
                name="users"
                size={24}
                color={focused? 'tomato' : 'black'} // mudar cor do ícone aqui
              />
            ),
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        />
      </Tab.Navigator>
    )
}