import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import telaScreen1 from './sources/screens/tela1';
import telaScreen2 from './sources/screens/tela2';
import telaScreen3 from './sources/screens/tela3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="tela1"
          component={telaScreen1}
          options={{ title: 'Categoria de cursos' }} />
        <Stack.Screen
          name="tela2"
          component={telaScreen2}
          options={{ title: 'Cursos em categoria' }} />
        <Stack.Screen
          name="tela3"
          component={telaScreen3}
          options={{ title: 'Detalhes do curso' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

