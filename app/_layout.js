import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DatabaseContext } from './database/DatabaseContext';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Import your screen components
import HomeScreen from './index';
import ProfileScreen from './perfil';  // Certifique-se de que o nome do arquivo seja 'perfil.js'
import ExploreScreen from './Explore';
import Consultation from './consultas';  // Certifique-se de que o arquivo seja 'consultas.js'
import LoginScreen from './Login';

const Tab = createBottomTabNavigator();

/**
 * TabLayout sets up the tab navigation and wraps it with DatabaseContext.
 */
export default function TabLayout() {
  return (
    <DatabaseContext>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: 'blue',
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'index') {
              iconName = 'home';
            } else if (route.name === 'perfil') {
              iconName = 'user';
            } else if (route.name === 'Explore') {
              iconName = 'search';
            } else if (route.name === 'consultas') {  // Altere 'Consultation' para 'consultas'
              iconName = 'calendar';
            } else if (route.name === 'Login') {
              iconName = 'sign-in';
            }

            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="index"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Tab.Screen
          name="perfil"
          component={ProfileScreen}
          options={{ title: 'Perfil' }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ title: 'Explorar' }}
        />
        <Tab.Screen
          name="consultas"  // Altere 'Consultation' para 'consultas'
          component={Consultation}
          options={{ title: 'Consultas' }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
      </Tab.Navigator>
    </DatabaseContext>
  );
}
