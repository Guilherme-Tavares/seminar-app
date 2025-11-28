import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../utils/theme';

// Screens
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../components/MainScreen';

// StepBuilder Screens
import HomeScreen from '../screens/stepbuilder/HomeScreen';
import ModulesScreen from '../screens/stepbuilder/ModulesScreen';
import ExerciseScreen from '../screens/stepbuilder/ExerciseScreen';
import ResultScreen from '../screens/stepbuilder/ResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.surface,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Tela de Boas-vindas */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />

        {/* Component Playground - Sem botão de voltar */}
        <Stack.Screen 
          name="ComponentPlayground" 
          component={MainScreen}
          options={{
            title: 'Component Playground',
            headerStyle: {
              backgroundColor: colors.playgroundPrimary,
            },
            headerTintColor: colors.surface,
            headerBackVisible: false,
          }}
        />

        {/* StepBuilder Home - Com botão de voltar para o menu */}
        <Stack.Screen 
          name="StepBuilder" 
          component={HomeScreen}
          options={{
            title: 'React Step Builder',
            headerStyle: {
              backgroundColor: colors.stepBuilderPrimary,
            },
            headerTintColor: colors.surface,
            headerBackTitle: 'Menu',
          }}
        />
        
        {/* Módulos - Botão nativo de voltar */}
        <Stack.Screen 
          name="Modules" 
          component={ModulesScreen}
          options={{
            title: 'Módulos',
            headerStyle: {
              backgroundColor: colors.stepBuilderPrimary,
            },
            headerTintColor: colors.surface,
          }}
        />
        
        {/* Exercício - Botão nativo de voltar */}
        <Stack.Screen 
          name="Exercise" 
          component={ExerciseScreen}
          options={({ route }) => ({
            title: `Exercício ${route.params?.exerciseIndex + 1 || ''}`,
            headerStyle: {
              backgroundColor: colors.stepBuilderPrimary,
            },
            headerTintColor: colors.surface,
          })}
        />
        
        {/* Resultado - Botão nativo de voltar */}
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{
            title: 'Parabéns!',
            headerStyle: {
              backgroundColor: colors.stepBuilderPrimary,
            },
            headerTintColor: colors.surface,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
