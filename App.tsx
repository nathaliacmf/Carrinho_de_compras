import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './src/routes/stack.routes';
import CartProvider from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content"/>
        <StackRoutes/>
      </CartProvider>
    </NavigationContainer>
  );
}

