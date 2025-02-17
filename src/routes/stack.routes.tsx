import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

// Defina os parâmetros para cada rota (use undefined se não houver parâmetros)
export type StackParamList = {
    Home: undefined;
    Cart: undefined;
};
const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: 'Meu carrinho'
                }}
            />
        </Stack.Navigator>
    )
}