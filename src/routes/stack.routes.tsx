import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen
                name='home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='cart'
                component={Cart}
                options={{
                    headerTitle: 'Meu carrinho'
                }}
            />
        </Stack.Navigator>
    )
}