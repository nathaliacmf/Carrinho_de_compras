import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/stack.routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content"/>
      <StackRoutes/>
    </NavigationContainer>
  );
}

